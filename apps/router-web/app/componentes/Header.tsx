import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@rr/ui';

import { Fragment, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useLabelStore } from '../store/useLabelStore';

export function Header() {
  const labels = useLabelStore((state) => state.labels);
  const navigate = useNavigate();

  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment);

  const accumulatedPaths = pathSegments.map((_, index, array) => {
    return '/' + array.slice(0, index + 1).join('/');
  });

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    route: string
  ) => {
    event.preventDefault();
    navigate(route);
  };

  return (
    <div>
      <Breadcrumb className='bg-gradient-to-b from-white to-transparent py-2 px-1 shadow-md'>
        <BreadcrumbList>
          {accumulatedPaths.map((path, index) => {
            const isLast = index === accumulatedPaths.length - 1;

            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="capitalize">
                      {labels[index] ?? decodeURIComponent(path)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={path}
                      className="capitalize"
                      onClick={(event) => {
                        handleNavigation(event, path);
                      }}
                    >
                      {labels[index] ?? decodeURIComponent(path)}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
