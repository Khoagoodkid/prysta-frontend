import { ReactNode } from 'react';
export type NavItem = {
    id: string;
    text: ReactNode;
    url?: string;
    icon?: ReactNode;
    children?: NavItem[];
    mobileIcon?: ReactNode;
  };

export const linkSources: { [key: string]: NavItem } = {
    about: {
      id: 'about',
      text: <span>About</span>,
      url: '/about'
    },
    features: {
      id: 'features',
      text: <span>Features</span>,
      url: '/features'
    },
    pricing: {
      id: 'pricing',
      text: <span>Pricing</span>,
      url: '/pricing'
    },
    gallery: {
      id: 'gallery',
      text: <span>Gallery</span>,
      url: '/gallery'
    },
    team: {
      id: 'team',
      text: <span>Team</span>,
      url: '/team'
    },
}