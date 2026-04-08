import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Demartofree | Premium Digital Solutions',
  description: 'A trio of innovators bringing Leone Delivery, digital menus, and custom web solutions to life. We specialize in static and dynamic websites for all industries.',
  keywords: 'Demartofree, Leone Delivery, Food Delivery App, Digital Menu, Web Development, Portfolio, E-commerce Bags Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
