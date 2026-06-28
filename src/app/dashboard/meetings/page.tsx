"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Video, Users, Plus, MoreHorizontal } from "lucide-react"

export default function MeetingsPage() {
  const meetings = [
    {
      id: 1,
      title: "Lake House: Schematic Presentation",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
      type: "Virtual",
      attendees: ["Sarah Jenkins", "Archnova Design Team"],
      status: "Upcoming",
      project: "Lake House Renovation",
    },
    {
      id: 2,
      title: "Site Visit: Commercial Complex",
      date: "Tomorrow, Oct 25",
      time: "10:00 AM - 12:00 PM",
      type: "In-Person",
      location: "450 City Center",
      attendees: ["Urban Corp Representatives", "Site Manager"],
      status: "Upcoming",
      project: "Downtown Commercial",
    },
    {
      id: 3,
      title: "Initial Consultation: Museum Pavilion",
      date: "Mon, Oct 28",
      time: "1:00 PM - 2:00 PM",
      type: "Virtual",
      attendees: ["City Arts Trust Board", "Lead Architect"],
      status: "Upcoming",
      project: "Museum Pavilion",
    },
  ]

  return (
    <div className="flex flex-col space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Meetings</h1>
          <p className="text-muted-foreground mt-1">Manage your schedule, site visits, and client consultations.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" className="border-border">
            <div className="h-4 w-4 mr-2 bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500 rounded-sm p-[2px]">
               <div className="w-full h-full bg-background rounded-[1px] flex items-center justify-center">
                  <span className="text-[8px] font-bold text-foreground">G</span>
               </div>
            </div>
            Connect Workspace
          </Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Schedule Meeting</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Schedule Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Upcoming Agenda</h2>
            <div className="text-sm text-muted-foreground font-medium">October 2026</div>
          </div>
          
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="border-border bg-card hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Date/Time Block */}
                    <div className="bg-muted/50 p-6 sm:w-48 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-border shrink-0">
                      <p className="font-semibold text-foreground">{meeting.date}</p>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1.5" />
                        {meeting.time}
                      </p>
                    </div>
                    {/* Details Block */}
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="outline" className="mb-2 font-normal text-xs">{meeting.project}</Badge>
                          <h3 className="text-lg font-bold text-foreground leading-tight">{meeting.title}</h3>
                        </div>
                        <Button variant="ghost" size="icon" className="-mt-2 -mr-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          {meeting.type === "Virtual" ? (
                            <div className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                              <div className="h-4 w-4 bg-gradient-to-tr from-green-500 via-blue-500 to-yellow-500 rounded-sm flex items-center justify-center p-0.5">
                                <Video className="h-2.5 w-2.5 text-white" />
                              </div>
                              <span className="font-medium text-foreground text-xs">meet.google.com/xyz-arch-nva</span>
                            </div>
                          ) : (
                            <><MapPin className="h-4 w-4 mr-2" /> {meeting.location}</>
                          )}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          {meeting.attendees.length} Attendees
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        {meeting.type === "Virtual" ? (
                          <Button size="sm" onClick={() => window.open('https://meet.google.com/new', '_blank')} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm border border-primary/20">
                            Join with Google Meet
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(meeting.location || '')}`, '_blank')}>Get Directions</Button>
                        )}
                        <Button size="sm" variant="secondary">Reschedule</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar Mini-Calendar Column */}
        <div className="space-y-6">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">October 2026</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Simple Mock Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-muted-foreground text-xs py-1">{day}</div>
                ))}
                {/* Empty days */}
                {Array.from({ length: 4 }).map((_, i) => <div key={`e${i}`} className="p-2"></div>)}
                {/* Days */}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 24;
                  const hasMeeting = day === 24 || day === 25 || day === 28;
                  
                  return (
                    <div 
                      key={day} 
                      className={`p-2 rounded-md flex items-center justify-center relative
                        ${isToday ? 'bg-primary text-primary-foreground font-medium' : 'text-foreground hover:bg-muted cursor-pointer'}
                      `}
                    >
                      {day}
                      {hasMeeting && !isToday && (
                        <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full" />
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-primary/5 shadow-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-primary">Meeting Productivity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Virtual vs In-Person</span>
                    <span className="font-medium">70% Virtual</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary w-[70%]" />
                    <div className="h-full bg-accent w-[30%]" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2 border-t border-primary/10">
                  Archnova AI suggests consolidating Thursday site visits to save 2.5 hours of transit time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
