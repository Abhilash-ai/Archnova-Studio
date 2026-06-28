"use client"

import { useState, useRef, useEffect } from "react"
import { useStore, MessageWidget } from "@/store/useStore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Box, Send, User, Sparkles, Paperclip, DollarSign, Leaf, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function CostWidget() {
  return (
    <Card className="mt-3 w-full border-primary/20 bg-primary/5 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center text-primary"><DollarSign className="h-4 w-4 mr-1" /> Estimated Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-foreground">
          <div className="flex justify-between border-b border-border pb-1"><span>Structural Framing</span> <span className="font-medium">$125,000</span></div>
          <div className="flex justify-between border-b border-border pb-1"><span>Exterior Cladding</span> <span className="font-medium">$85,000</span></div>
          <div className="flex justify-between border-b border-border pb-1"><span>Interior Finishes</span> <span className="font-medium">$140,000</span></div>
          <div className="flex justify-between border-b border-border pb-1"><span>MEP Systems</span> <span className="font-medium">$95,000</span></div>
          <div className="flex justify-between pt-1 text-primary font-bold"><span>Total Estimate</span> <span>$445,000</span></div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Accuracy: ±15% based on regional indices (Q4 2026).</p>
      </CardContent>
    </Card>
  )
}

function MaterialsWidget() {
  return (
    <Card className="mt-3 w-full border-border bg-card shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center"><Layers className="h-4 w-4 mr-1" /> Suggested Material Palette</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1">
            <div className="aspect-square rounded-md overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=200&q=80" alt="Concrete" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-medium text-center">Board-Formed Concrete</p>
          </div>
          <div className="space-y-1">
            <div className="aspect-square rounded-md overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=200&q=80" alt="Wood" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-medium text-center">Charred Cedar</p>
          </div>
          <div className="space-y-1">
            <div className="aspect-square rounded-md overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1558611997-6cb5bb71c36b?w=200&q=80" alt="Steel" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-medium text-center">Corten Steel</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SustainabilityWidget() {
  return (
    <Card className="mt-3 w-full border-green-500/20 bg-green-500/5 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center text-green-600 dark:text-green-400"><Leaf className="h-4 w-4 mr-1" /> Environmental Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-lg text-green-600 dark:text-green-400 shrink-0">
            A+
          </div>
          <p className="text-sm text-muted-foreground">This design achieves LEED Platinum baseline requirements.</p>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="font-medium">Energy Efficiency</span> <span className="text-green-600 dark:text-green-400">+42%</span></div>
            <div className="h-1.5 w-full bg-muted rounded-full"><div className="h-full bg-green-500 w-[85%] rounded-full"></div></div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="font-medium">Water Conservation</span> <span className="text-green-600 dark:text-green-400">+30%</span></div>
            <div className="h-1.5 w-full bg-muted rounded-full"><div className="h-full bg-green-500 w-[60%] rounded-full"></div></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AIStudioPage() {
  const messages = useStore((state) => state.messages)
  const addMessage = useStore((state) => state.addMessage)
  
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userText = input
    addMessage({ role: "user", content: userText })
    setInput("")
    setIsTyping(true)

    // "Smart Mock" AI Engine
    setTimeout(() => {
      setIsTyping(false)
      const textLower = userText.toLowerCase()
      
      let aiContent = "I've analyzed that request. Based on current architectural models and our project database, this is achievable. Would you like me to generate a specific drawing or cost analysis?"
      let widget: MessageWidget = null

      if (textLower.includes("cost") || textLower.includes("price") || textLower.includes("budget") || textLower.includes("estimate")) {
        aiContent = "Based on the Lake House dimensions and current Q4 materials index, here is the estimated cost breakdown. Structural timber and bespoke glazing account for the majority of the variance."
        widget = "cost"
      } else if (textLower.includes("material") || textLower.includes("texture") || textLower.includes("finish") || textLower.includes("wood")) {
        aiContent = "For a contemporary, weather-resistant aesthetic that blends with the environment, I recommend a palette utilizing Board-Formed Concrete, Charred Cedar (Shou Sugi Ban), and Corten Steel accents."
        widget = "materials"
      } else if (textLower.includes("sustainab") || textLower.includes("green") || textLower.includes("leed") || textLower.includes("energy")) {
        aiContent = "The current massing and window placements provide excellent passive solar heating. By integrating an ERV system and the specified glazing, the environmental impact is outstanding."
        widget = "sustainability"
      }

      addMessage({ role: "assistant", content: aiContent, widget })
    }, 1200)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 shrink-0 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            AI Architect Assistant
          </h1>
          <p className="text-muted-foreground mt-1">
            Your intelligent design and engineering partner. Chat history is saved to your workspace.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInput("Show me a cost estimate")}>Cost</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInput("Suggest materials")}>Materials</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInput("Sustainability report")}>Sustainability</Badge>
        </div>
      </div>

      <Card className="flex-1 flex flex-col border-border bg-card min-h-0 overflow-hidden shadow-sm">
        <CardContent className="flex-1 overflow-y-auto p-4 md:p-6" ref={scrollRef}>
          <div className="space-y-6 max-w-3xl mx-auto w-full">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <Avatar className="h-8 w-8 shrink-0 mt-0.5 border border-border">
                  {message.role === "assistant" ? (
                    <div className="bg-primary text-primary-foreground h-full w-full flex items-center justify-center">
                      <Box className="h-4 w-4" />
                    </div>
                  ) : (
                    <AvatarFallback className="bg-muted">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div
                  className={`flex flex-col ${
                    message.role === "assistant" ? "items-start" : "items-end"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-5 py-3.5 max-w-full sm:max-w-[85%] text-sm shadow-sm ${
                      message.role === "assistant"
                        ? "bg-muted/50 border border-border text-foreground leading-relaxed"
                        : "bg-primary text-primary-foreground leading-relaxed"
                    }`}
                  >
                    {message.content}
                    
                    {/* Render Rich UI Widgets if present */}
                    {message.widget === "cost" && <CostWidget />}
                    {message.widget === "materials" && <MaterialsWidget />}
                    {message.widget === "sustainability" && <SustainabilityWidget />}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1.5 px-1 font-medium">
                    {message.role === "assistant" ? "Archnova AI" : "You"}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4">
                <Avatar className="h-8 w-8 shrink-0 border border-border">
                  <div className="bg-primary text-primary-foreground h-full w-full flex items-center justify-center">
                    <Box className="h-4 w-4" />
                  </div>
                </Avatar>
                <div className="bg-muted/50 border border-border rounded-2xl px-5 py-4 flex items-center gap-1 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-muted/20 border-t border-border shrink-0">
          <form
            className="flex w-full max-w-3xl mx-auto items-center space-x-2"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <Button type="button" variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              type="text"
              placeholder="Ask about materials, cost optimization, or building codes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-background border-border h-12 rounded-xl px-4 shadow-sm"
            />
            <Button type="submit" size="icon" disabled={!input.trim() || isTyping} className="shrink-0 h-12 w-12 rounded-xl shadow-sm">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
