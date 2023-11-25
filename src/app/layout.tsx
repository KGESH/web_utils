import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Base64 Encode and Decode Online Tool - Free & Easy to Use',
  description: `Use our free online Base64 Encoder/Decoder tool for quick and easy conversion of text. Automatically copy to clipboard after encoding or decoding. Efficient and user-friendly, it's perfect for developers and anyone needing Base64 encoding or decoding services. Supports a variety of formats and offers fast, reliable results.`,
  keywords: [
    'Base64',
    'Base64 encode',
    'Base64 decode',
    'online Base64 tool',
    'free Base64 converter',
    'Base64 encoding online',
    'Base64 decoding online',
    'text to Base64',
    'Base64 to text',
    'file to Base64',
    'Base64 to file',
    'developer tools',
    'encoding tools',
    'decoding tools',
  ],
  authors: [{ name: 'WildCoder' }], // Replace with your company or personal name
  // og: {
  //     type: 'website',
  //     url: 'https://main.d18pej000aqow4.amplifyapp.com', // Replace with your website's URL
  //     title: 'Online Base64 Encoder/Decoder - Quick, Free, and Easy to Use',
  //     description: 'Efficient online tool for Base64 encoding and decoding. Convert text and files instantly with our user-friendly interface. Ideal for developers and individuals needing fast and reliable Base64 conversion services.',
  //     image: 'https://www.yourwebsite.com/base64-tool-image.jpg' // Replace with a relevant image URL
  // },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6781887234476548"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
