import { Nunito } from 'next/font/google'
import '.././globals.css'
import Navbar from '../components/navbar/Navbar';

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyage Stay",
  description: "Your Gateway to Exceptional Home stays and Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
