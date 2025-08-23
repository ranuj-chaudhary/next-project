"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle chat message here
      console.log("Chat message:", message)
      alert("Thanks for your message! We'll get back to you soon.")
      setMessage("")
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-emerald-600 text-white p-4">
            <h3 className="font-semibold text-lg">Chat with us</h3>
            <p className="text-emerald-100 text-sm">We're here to help!</p>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">👋 Hello! How can we help you today?</p>
              <span className="text-xs text-gray-500">BusinessPro Team</span>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
