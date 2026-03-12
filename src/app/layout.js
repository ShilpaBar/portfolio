import './globals.css';

export const metadata = {
  title: 'Shilpa Bar — Flutter Developer & CS (AIML) Student',
  description: 'Portfolio of Shilpa Bar — Flutter Developer specializing in cross-platform mobile applications, Firebase integration, and scalable app architecture.',
  keywords: ['Flutter Developer', 'Shilpa Bar', 'Mobile App Developer', 'Dart', 'Firebase', 'Portfolio'],
  openGraph: {
    title: 'Shilpa Bar — Flutter Developer',
    description: 'Building scalable, cross-platform mobile applications with Flutter & Dart.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#050508" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
