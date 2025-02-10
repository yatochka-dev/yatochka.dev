import React from "react";
import Image from "next/image"
import Link from "next/link"
import {Earth} from "lucide-react";
import {email, socials, yearsSinceDate} from "~/lib/data";
import {Button} from "~/components/ui/button";
import {Timeline} from "~/app/_components/timeline";

export default function Page() {
  return (
      <div className="md:min-h-screen h-full grid grid-cols-6 gap-12">

        <div className="col-span-2 p-2 space-y-7">
          <div id={'me-section'} className={""}>
              <div>
                  <Image className={'size-[90px] rounded-md'} src={"https://fastly.picsum.photos/id/378/200/300.jpg?hmac=j3b_pCH-0kwk0RstB5_LzJ2hw4H53kPLf6v5M-D3FaI"} alt={"me"} width={128} height={128}/>
              </div>

              <div className={'mt-6'}>
                  <h1 className={'text-3xl font-bold'}>
                      Philip Sagan
                  </h1>
                  <h3 className={'text-muted mt-1 text-xs'}>
                      Full Stack | Physics Enthusiast
                  </h3>
                  <p className={'text-xs flex gap-1 mt-2 items-center text-muted'}>
                      <Earth size={16}/> Tel Aviv, Israel
                  </p>
                  <p className={"text-xs my-2"}>
                      {email}
                  </p>
                  <div className={'space-x-2'}>
                      {socials.map(s => {
                          return (
                              <Link href={s.href} key={s.href}>
                                  <Button asChild size={'icon'}
                                          className={'bg-transparent hover:bg-transparent shadow-none text-accent'}>
                                      {s.icon}
                                  </Button>
                              </Link>
                          )
                      })}
                  </div>
              </div>

          </div>
            <div id={'about'} >
                <h2 className={'text-2xl'}>About</h2>
                <p className={'text-muted mt-4 text-sm !font-sans'}>{yearsSinceDate(new Date(2007, 2, 13))} y/o self-taught programmer, building since 2021. Still in high school, but working towards something bigger, trust 🔜.</p>
            </div>
        </div>
          <div className={'col-span-4'}>
              <Timeline events={[{
                  date: '2024 - present',
                  title: 'Started Coding',
                  subtitle: 'Started learning to code',
                  description: 'Started learning to code in 2021, and I\'ve been coding ever since. I started with Python, but I\'ve been learning Rust, Go, JavaScript, TypeScript, C++, and C# as well.'

              },
                  {
                      date: '2024 - present',
                      title: 'Started Coding',
                      subtitle: 'Started learning to code',
                      description: 'Started learning to code in 2021, and I\'ve been coding ever since. I started with Python, but I\'ve been learning Rust, Go, JavaScript, TypeScript, C++, and C# as well.'

                  },
                  {
                      date: '2024 - present',
                      title: 'Started Coding',
                      subtitle: 'Started learning to code',
                      description: 'Started learning to code in 2021, and I\'ve been coding ever since. I started with Python, but I\'ve been learning Rust, Go, JavaScript, TypeScript, C++, and C# as well.'

                  }]}/>
          </div>
      </div>
  )
}

