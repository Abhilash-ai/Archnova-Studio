import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Project {
  id: string
  name: string
  client: string
  type: string
  status: string
  budget: string
  location: string
  plotSize: string
  startDate: string
  date: string // updated date
}

export type MessageWidget = 'cost' | 'materials' | 'sustainability' | null

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  widget?: MessageWidget
}

interface AppState {
  projects: Project[]
  addProject: (project: Omit<Project, 'id' | 'date' | 'status'>) => string
  deleteProject: (id: string) => void
  messages: Message[]
  addMessage: (message: Omit<Message, 'id'>) => void
}

const defaultProjects: Project[] = [
  { id: '1', name: 'Lake House Renovation', client: 'Sarah Jenkins', type: 'Residential', status: 'Concept', budget: '$1,500,000', location: '123 Lake View Dr', plotSize: '12,000 sqft', startDate: '2026-11-01', date: 'Oct 24, 2026' },
  { id: '2', name: 'Downtown Commercial', client: 'Urban Corp', type: 'Commercial', status: 'Schematic', budget: '$15,000,000', location: '450 City Center', plotSize: '45,000 sqft', startDate: '2027-02-15', date: 'Oct 22, 2026' },
  { id: '3', name: 'Museum Pavilion', client: 'City Arts Trust', type: 'Institutional', status: 'Development', budget: '$8,000,000', location: 'Arts District', plotSize: '22,000 sqft', startDate: '2026-12-10', date: 'Oct 18, 2026' },
]

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      projects: defaultProjects,
      messages: [
        {
          id: "1",
          role: "assistant",
          content: "Hello. I am Archnova AI. I can assist you with space planning, material recommendations, cost optimization, and sustainability analysis. Try asking me for a 'cost breakdown' or 'material board'.",
        }
      ],
      addProject: (projectData) => {
        const id = Math.random().toString(36).substring(2, 9)
        const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        const newProject: Project = { 
          ...projectData, 
          id, 
          date, 
          status: 'Concept' 
        }
        set((state) => ({ projects: [newProject, ...state.projects] }))
        return id
      },
      deleteProject: (id) => set((state) => ({ projects: state.projects.filter(p => p.id !== id) })),
      addMessage: (messageData) => {
        const id = Math.random().toString(36).substring(2, 9)
        set((state) => ({ messages: [...state.messages, { ...messageData, id }] }))
      }
    }),
    {
      name: 'archnova-storage',
    }
  )
)
