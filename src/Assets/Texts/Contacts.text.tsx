import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Github } from '@styled-icons/bootstrap/Github'
import { EnvelopeFill } from '@styled-icons/bootstrap/EnvelopeFill'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'

export const CONTACTS_TITLE = `You can find me at:`

export const CONTACTS = [
  {
    title: `Linkedin`,
    link: `https://linkedin.com/in/sarakborges`,
    icon: <Linkedin />,
  },

  {
    title: `Github`,
    link: `https://github.com/sarakborges`,
    icon: <Github />,
  },

  {
    title: `Whatsapp`,
    link: `http://wa.me/5551991855098`,
    icon: <Whatsapp />,
  },

  {
    title: `Email`,
    link: `mailto:sarakborges@outlook.com`,
    icon: <EnvelopeFill />,
  },
]
