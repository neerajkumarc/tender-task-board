import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchBoardData = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        todo: [
          {
            id: "todo-1",
            title: "Hospital Wing Extension Tender",
            description: "New 3-story extension for City General Hospital's emergency department",
            status: "Not Started",
            assignee: "/api/placeholder/32/32",
            dueDate: "15 Mar 24",
            priority: "High",
            comments: 8,
            attachments: 5,
          },
          {
            id: "todo-2",
            title: "Metro Station Renovation",
            description: "Comprehensive renovation of Central Station including platform upgrades",
            status: "In Progress",
            assignee: "/api/placeholder/32/32",
            dueDate: "28 Mar 24",
            priority: "Medium",
            comments: 4,
            attachments: 7,
          },
          {
            id: "todo-3",
            title: "Solar Farm Development",
            description: "50MW solar farm development in Western District",
            status: "Not Started",
            assignee: "/api/placeholder/32/32",
            dueDate: "10 Apr 24",
            priority: "High",
            comments: 6,
            attachments: 4,
          }
        ],
        inProgress: [
          {
            id: "progress-1",
            title: "School Complex Construction",
            description: "New K-12 educational complex with sports facilities",
            status: "In Progress",
            assignee: "/api/placeholder/32/32",
            dueDate: "05 Mar 24",
            priority: "High",
            comments: 15,
            attachments: 9,
          },
          {
            id: "progress-2",
            title: "Bridge Maintenance Contract",
            description: "5-year maintenance contract for Harbor Bridge",
            status: "In Progress",
            assignee: "/api/placeholder/32/32",
            dueDate: "22 Mar 24",
            priority: "Medium",
            comments: 7,
            attachments: 6,
          },
          {
            id: "progress-3",
            title: "Commercial Tower Design",
            description: "40-story commercial tower in Business District",
            status: "In Progress",
            assignee: "/api/placeholder/32/32",
            dueDate: "18 Apr 24",
            priority: "Low",
            comments: 11,
            attachments: 8,
          }
        ],
        notStarted: [
          {
            id: "not-started-1",
            title: "Airport Terminal Expansion",
            description: "International terminal expansion with 12 new gates",
            status: "Not Started",
            assignee: "/api/placeholder/32/32",
            dueDate: "30 Mar 24",
            priority: "Critical",
            comments: 3,
            attachments: 2,
          },
          {
            id: "not-started-2",
            title: "Waste Treatment Facility",
            description: "Modern waste treatment plant with recycling capabilities",
            status: "Not Started",
            assignee: "/api/placeholder/32/32",
            dueDate: "12 Apr 24",
            priority: "High",
            comments: 5,
            attachments: 4,
          },
          {
            id: "not-started-3",
            title: "Public Park Redevelopment",
            description: "Central Park renovation including new amenities",
            status: "Not Started",
            assignee: "/api/placeholder/32/32",
            dueDate: "25 Apr 24",
            priority: "Medium",
            comments: 9,
            attachments: 5,
          }
        ],
        completed: [
          {
            id: "completed-1",
            title: "Highway Junction Upgrade",
            description: "Major intersection upgrade with smart traffic systems",
            status: "Completed",
            assignee: "/api/placeholder/32/32",
            dueDate: "01 Mar 24",
            priority: "High",
            comments: 23,
            attachments: 12,
          },
          {
            id: "completed-2",
            title: "Shopping Mall Renovation",
            description: "Interior and exterior renovation of City Center Mall",
            status: "Completed",
            assignee: "/api/placeholder/32/32",
            dueDate: "28 Feb 24",
            priority: "Medium",
            comments: 18,
            attachments: 10,
          },
          {
            id: "completed-3",
            title: "Residential Complex",
            description: "200-unit residential development with amenities",
            status: "Completed",
            assignee: "/api/placeholder/32/32",
            dueDate: "15 Feb 24",
            priority: "High",
            comments: 16,
            attachments: 8,
          }
        ]
      });
    }, 1500);
  });
};