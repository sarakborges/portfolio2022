import { FC } from 'react'

import { CONTACTS, CONTACTS_TITLE } from 'Assets/Texts'

import * as Styled from './Contacts.style'

export const ContactsAtom: FC = () => {
  return (
    <Styled.Contacts>
      <span>{CONTACTS_TITLE}</span>

      <Styled.ContactsList>
        {CONTACTS.map((contactItem) => (
          <a
            key={contactItem.title}
            title={contactItem.title}
            href={contactItem.link}
            target="_blank"
            rel="noreferrer"
          >
            {contactItem.icon}
          </a>
        ))}
      </Styled.ContactsList>
    </Styled.Contacts>
  )
}
