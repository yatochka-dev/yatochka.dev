import { Circle } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  subtitle: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-[7.5rem] before:ml-0.5 before:h-full before:w-0.5 before:bg-border md:before:left-[9.5rem]">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-start">
          <p className="absolute -mr-36 mt-0.5 left-20 whitespace-nowrap text-sm font-normal text-muted-foreground md:left-auto md:right-full ">
            {event.date}
          </p>
          <Circle className="z-10 ml-[7.4rem] mt-1.5 h-3 w-3 rounded-full border border-border bg-border md:ml-[9.4375rem]" />
          <div className="ml-10 w-full md:ml-12">
            <div className="rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{event.subtitle}</p>
              <p className="mt-2 text-muted-foreground">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

