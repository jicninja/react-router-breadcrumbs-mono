import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('foo', './routes/foo.tsx'),
  route('foo/bar', './routes/bar.tsx'),
  route('foo/bar/baz', './routes/baz.tsx'),
] satisfies RouteConfig;