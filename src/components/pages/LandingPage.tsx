"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BorderBeam } from "../ui/border-beam";
import { TextAnimate } from "../ui/text-animate";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RainbowButton } from "../ui/rainbow-button";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const LandingPage = () => {
  const { theme } = useTheme();
  return (
    <div className="lg:px-[150px] lg:pt-[100px] md:px-[50px] md:pt-[100px] pt-[50px] px-[10px] pb-[150px]">
      <div className="w-full flex relative gap-[50px] min-h-screen">
        {/* Sidebar (Sticky Profile Section) */}
        <div className="min-w-[400px] max-w-[400px] sticky top-[50px] h-full flex flex-col gap-[10px] items-center">
          <Avatar className="w-[250px] h-[250px] shadow-2xl">
            <BorderBeam borderWidth={3} size={400} />
            <AvatarImage src="https://avatars.githubusercontent.com/u/170425125?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-center">Hi, I'm Sachin 👋</h1>
          <h2 className="scroll-m-20 text-2xl font-[500] tracking-tight lg:text-2xl text-center">Frontend Developer & Tech Writer</h2>
          <TextAnimate duration={0.2} animation="blurInUp" by="character" className="leading-7 [&:not(:first-child)]:mt-6 text-center">
            I’m Sachin Maurya, a highly skilled Frontend Developer and Content Writer. I create engaging, user-friendly web experiences and craft clear, insightful content that simplifies complex ideas for better understanding and impact.
          </TextAnimate>
        </div>

        {/* Main Content Section */}
        <div className="w-full px-[20px]">
          {/* Work Experience */}
          <div className="my-[30px]">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/170425125?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">MsCorpres</h3>
                      <AnimatedGradientText>
                        <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[12px]`)}>Frontend Developer</span>
                      </AnimatedGradientText>
                    </div>
                    <p className="text-sm">Expert in Execution</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">April 2024 - Present</div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore temporibus voluptates, quaerat, unde pariatur est inventore explicabo nulla magnam sunt similique, expedita excepturi dolores fuga nihil eaque? Tempore, aspernatur!</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/170425125?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">Allahabad State University</h3>
                    </div>
                    <p className="text-sm">Bachelor of Computer Applications (BCA)</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">April 2024 - Present</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <div className="my-[20px] flex flex-wrap gap-[5px]">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Material UI</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express.js</Badge>
              <Badge>MongoDB</Badge>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Check out my latest Projects</h2>
            <div className="my-[20px] py-[20px]">
              <div className={"grid grid-cols-2 gap-[20px]"}>
                <MagicCard className="cursor-pointer flex-col items-center justify-center   p-[10px]  " gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden ">
                    <Image src={"/img.png"} alt="" width={200} height={200} className="w-full" />
                  </div>

                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Lorem, ipsum dolor.</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsam iure corrupti neque sed recusandae optio dicta maiores rerum nisi!</p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Next.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Shadcn Ui</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Magic Ui</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        Website
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <Github size={15} />
                        Github
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard className="cursor-pointer flex-col items-center justify-center   p-[10px]  " gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden ">
                    <Image src={"/img.png"} alt="" width={200} height={200} className="w-full" />
                  </div>

                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Lorem, ipsum dolor.</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsam iure corrupti neque sed recusandae optio dicta maiores rerum nisi!</p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Next.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Shadcn Ui</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Magic Ui</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        Website
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <Github size={15} />
                        Github
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard className="cursor-pointer flex-col items-center justify-center   p-[10px]  " gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden ">
                    <Image src={"/img.png"} alt="" width={200} height={200} className="w-full" />
                  </div>

                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Lorem, ipsum dolor.</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsam iure corrupti neque sed recusandae optio dicta maiores rerum nisi!</p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Next.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Shadcn Ui</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Magic Ui</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        Website
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <Github size={15} />
                        Github
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard className="cursor-pointer flex-col items-center justify-center   p-[10px]  " gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden ">
                    <Image src={"/img.png"} alt="" width={200} height={200} className="w-full" />
                  </div>

                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Lorem, ipsum dolor.</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsam iure corrupti neque sed recusandae optio dicta maiores rerum nisi!</p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Next.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Shadcn Ui</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Magic Ui</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        Website
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <Github size={15} />
                        Github
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-[10px]">
              Feel free to reach out to me with any questions via{" "}
              <a href="https://www.linkedin.com/in/sachin-maurya-826111267/" target="_blank" className="text-cyan-600 hover:underline dark:text-cyan-300">
                direct message on LinkedIn!
              </a>{" "}
              I'll get back to you as soon as I can. Please note, I don't respond to unsolicited messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
