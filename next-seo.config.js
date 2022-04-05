
export default {
  title: undefined,
  titleTemplate: '%s | Next Boilerplate Essentials', // Template for the title tag 
  defaultTitle: 'Next Boilerplate Essentials',
  canonical: process.env.NEXT_PUBLIC_SITE_URL, 
  description: "Next Boilerplate Essentials is a collection of essential components and libraries for building a Next.js application.",
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL, 
    title: 'Next Boilerplate Essentials',
    description: "Next Boilerplate Essentials is a collection of essential components and libraries for building a Next.js application.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'Next Boilerplate Essentials Thumbnail',
      },
    ],
    site_name: 'Next Boilerplate Essentials',
  },
}