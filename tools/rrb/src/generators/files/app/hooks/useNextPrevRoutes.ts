import type { RouteConfigEntry } from '@react-router/dev/routes';
import routes from '../routes';
import { useLocation } from 'react-router';

type FlatRoute = {
  path: string;
  fullPath: string;
  children?: FlatRoute[];
};

function flattenRoutes(
  routes: RouteConfigEntry[],
  parentPath = ''
): FlatRoute[] {
  let flat: FlatRoute[] = [];

  for (const route of routes) {
    if (typeof route === 'string') {
      const fullPath =
        parentPath === '/'
          ? `/${route}`
          : `${parentPath}/${route}`.replace(/\/+/g, '/');
      flat.push({ path: route, fullPath });
      continue;
    }

    const currentPath = route.path ?? '';
    const fullPath =
      parentPath === '/'
        ? `/${currentPath}`
        : `${parentPath}/${currentPath}`.replace(/\/+/g, '/');

    const routeObj: FlatRoute = {
      path: currentPath,
      fullPath,
    };

    if (route.children?.length) {
      routeObj.children = flattenRoutes(route.children, fullPath);
      flat.push(routeObj, ...routeObj.children);
    } else {
      flat.push(routeObj);
    }
  }

  return flat;
}

function getNextPrevRoutes(currentRoute: string): {
  next: string | null;
  prev: string | null;
} {
  const flatRoutes = flattenRoutes(routes, '');
  const currentIndex = flatRoutes.findIndex(
    (r) => r.fullPath === currentRoute || r.fullPath === `${currentRoute}/`
  );

  if (currentIndex === -1) return { next: null, prev: null };

  const next =
    currentIndex < flatRoutes.length - 1
      ? flatRoutes[currentIndex + 1].fullPath
      : null;
  const prev = currentIndex > 0 ? flatRoutes[currentIndex - 1].fullPath : null;

  return { next, prev };
}

export function useNextPrevRoutes() {
  const location = useLocation();
  return getNextPrevRoutes(location.pathname);
}
