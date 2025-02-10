import {Linkedin, Mail} from "lucide-react";
import { SiGithub,  SiInstagram, SiDiscord} from '@icons-pack/react-simple-icons';
import React from "react";

const email = "philip.chef13@gmail.com"

type Social = {
    href: string,
    icon: React.ReactNode,
}

const iconClass = "h-[1.5rem] w-[1.5rem] text-primary hover:text-primary-foreground hover:bg-primary p-1"

const yearsSinceDate = (date: Date) => {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - date.getFullYear();
    const hasNotReachedAnniversary =
        currentDate.getMonth() < date.getMonth() ||
        (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate());

    if (hasNotReachedAnniversary) {
        years--;
    }

    return years;
};


const socials: Social[] = [
    {
        href: "https://github.com/yatochka",
        icon: <SiGithub className={iconClass}/>,
    },
    {
        href: `mailto:${email}`,
        icon: <Mail className={iconClass}/>,
    },
    {
        href: "https://www.linkedin.com/in/yatochka/",
        icon: <Linkedin className={iconClass}/>,
    },
    {
        href: "",
        icon: <SiInstagram className={iconClass}/>,
    },
    {
        href: "https://discord.com/channels/@me/686207718822117463",
        icon: <SiDiscord className={iconClass}/>,
    }
]

export {email, socials, yearsSinceDate}
