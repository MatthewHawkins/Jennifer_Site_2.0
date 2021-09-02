import React from 'react';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ComputerIcon from '@material-ui/icons/Computer';
import FaceIcon from '@material-ui/icons/Face';
import ContactsIcon from '@material-ui/icons/Contacts';



export const NavbarData = [

    {
        title: "About",
        icon: <WorkOutlineIcon />,
        link: "/#AboutMe",
        position: "AboutMe"
    },
    {
        title: "Research",
        icon: <EmojiObjectsIcon />,
        link: "/#Research",
        position: "Research"
    },
    {
        title: "Teaching",
        icon: <ComputerIcon />,
        link: "/#Teaching",
        position: "Teaching"
    },
    {
        title: "Service",
        icon: <FaceIcon />,
        link: "#Service",
        position: "Service"
    },
    {
        title: "Contact",
        icon: <ContactsIcon />,
        link: "/"
    }
]
