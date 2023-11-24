import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abel Akmal',
  description: 'Generated portofolio by abel akmal',
  openGraph: {
    title: 'Abel akmal | My portofolio',
    description: 'Generated portofolio by abel akmal',
    images: 'https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-character-science-technology-isolated_138676-3155.jpg?w=740',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
