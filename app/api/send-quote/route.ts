import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey("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")

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const emailContent = `
      New Fire Extinguisher Quote Request:
      
      Organization: ${formData.organizationName}
      Business Type: ${formData.businessType}
      Contact Person: ${formData.contactPerson}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Building Size: ${formData.buildingSize}
      Floors: ${formData.floors}
      Current Equipment: ${formData.currentEquipment}
      Timeline: ${formData.timeline}
      Requirements: ${formData.requirements}
    `

    const adminEmail = {
      to: "admin@fireguardpro.com", // Replace with your business email
      from: "noreply@fireguardpro.com", // Replace with your verified sender email
      subject: `New Quote Request from ${formData.organizationName}`,
      text: emailContent,
      html: `
        <h2>New Fire Extinguisher Quote Request</h2>
        <p><strong>Organization:</strong> ${formData.organizationName}</p>
        <p><strong>Business Type:</strong> ${formData.businessType}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Building Size:</strong> ${formData.buildingSize}</p>
        <p><strong>Floors:</strong> ${formData.floors}</p>
        <p><strong>Current Equipment:</strong> ${formData.currentEquipment}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        <p><strong>Requirements:</strong> ${formData.requirements}</p>
      `,
    }

    const customerEmail = {
      to: formData.email,
      from: "noreply@fireguardpro.com",
      subject: "Quote Request Received - FireGuard Pro",
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Dear ${formData.contactPerson},</p>
        <p>We have received your fire extinguisher installation quote request for <strong>${formData.organizationName}</strong>.</p>
        <p>Our fire safety experts will review your requirements and contact you within 24 hours with a detailed quote.</p>
        <p><strong>Your Request Details:</strong></p>
        <ul>
          <li>Business Type: ${formData.businessType}</li>
          <li>Building Size: ${formData.buildingSize}</li>
          <li>Number of Floors: ${formData.floors}</li>
          <li>Preferred Timeline: ${formData.timeline}</li>
        </ul>
        <p>If you have any urgent questions, please call us at (555) 123-4567.</p>
        <p>Best regards,<br>FireGuard Pro Team</p>
      `,
    }

    await sgMail.send(adminEmail)
    await sgMail.send(customerEmail)

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit quote request. Please try again." },
      { status: 500 },
    )
  }
}
