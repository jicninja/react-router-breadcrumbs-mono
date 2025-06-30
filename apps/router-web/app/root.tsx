import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  type LinksFunction,
} from 'react-router';

import { Header } from './componentes/Header';
import {
  Toaster,
  H1,
  H2,
  H4,
  Muted,
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from '@rr/ui';

import './app.css';
import { Footer } from './componentes/Footer';

export const meta: MetaFunction = () => [
  {
    title: 'New Nx React Router App',
  },
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[url('https://thumbs.dreamstime.com/b/white-shaded-abstract-geometric-pattern-origami-paper-style-d-rendering-background-98389511.jpg')] bg-repeat bg-center h-screen">
        {children}
        <ScrollRestoration />
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="bg-white/70 backdrop-blur-xs w-200">
        <CardHeader>
          <CardTitle>
            <H1>React Router v7 Breadcrumbs</H1>
          </CardTitle>
          <Header />
        </CardHeader>
        <CardContent>
          <Card className='bg-white/10 backdrop-blur-lg'>
            <CardContent>
            <Muted>
              Not sure what to put here, so let’s just go over how to make
              polenta
            </Muted>
            <H2 className='text-lg'>Easy Polenta in 3 Steps</H2>
            <H4 className="my-3 text-md">Ingredients:</H4>
            <ul className="list-disc list-inside space-y-2">
              <li className='text-sm'>1 cup cornmeal (polenta)</li>
              <li className='text-sm'>4 cups water (or broth for more flavor)</li>
              <li className='text-sm'>Salt to taste</li>
              <li className='text-sm'>2 tbsp butter or olive oil (optional)</li>
              <li className='text-sm'>Grated cheese (optional)</li>
            </ul>
            </CardContent>
          </Card>

          <Outlet />
        </CardContent>
        <CardFooter>
          <Footer />
        </CardFooter>
      </Card>
    </div>
  );
}
