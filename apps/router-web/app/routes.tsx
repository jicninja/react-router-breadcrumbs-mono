import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('foo', './routes/foo.tsx'),
  route('bar', './routes/bar.tsx'),
  route('baz', './routes/baz.tsx'),
] satisfies RouteConfig;
