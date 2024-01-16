// import { socialLinks } from 'src/configs';
// import { linkToContactSupport } from 'src/utils';

export const ECOSYSTEM_LINKS = {
  title: 'Ecosystem',
  blocks: [
    {
      label: 'Developers',
      link: '/developer'
    },
    {
      label: 'Games',
      link: '/games'
    },
    {
      label: 'Nodes',
      link: '/nodes'
    },
    {
      label: 'Store',
      link: '/store',
      disabled: true,
      inactive: true
    },
    {
      label: 'Marketplace',
      link: '/marketplace'
    },
    {
      label: 'Token',
      link: '/token'
    }
  ]
};

export const DEVELOPER_LINKS = {
  title: 'Build with Us',
  blocks: [
    {
      label: 'Get Started',
      link: '/developer'
    },
    {
      label: 'Our Solutions',
    //   link: `${process.env.NEXT_PUBLIC_URL_MYRIA_DOCS}sdk-docs`,
      external: true
    },
    {
      label: 'Developer Grant Program',
      link: '/developer-grants'
    }
  ]
};

export const ABOUT_LINKS = {
  title: 'About Us',
  blocks: [
    {
      label: 'About Us',
      link: '/about-us'
    },
    {
      label: 'Whitepaper',
      link: '/token',
      disabled: true
    },
    {
      label: 'Careers',
      link: '/careers',
      badge: "We're hiring"
    },
    {
      label: 'News',
    //   link: socialLinks.medium,
      external: true
    },
    {
      label: 'Contact Us',
    //   link: linkToContactSupport,
      external: true
    }
  ]
};
