import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('foo', './routes/foo.tsx', [
    route('bar', './routes/bar.tsx', [
      route('baz', './routes/baz.tsx'),
    ]),
  ]),
] satisfies RouteConfig;