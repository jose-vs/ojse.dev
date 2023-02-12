import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import '@/styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Hi 👋! I am Jose</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="My Personal Portfolio Website " />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="bg-primary-black overflow-hidden">
          <NavBar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
