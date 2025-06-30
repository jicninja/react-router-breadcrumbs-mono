import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@rr/ui';

import { Fragment } from 'react';
import { useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment);

  const accumulatedPaths = pathSegments.map((_, index, array) => {
    return '/' + array.slice(0, index + 1).join('/');
  });

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {accumulatedPaths.map((path, index) => {
            const isLast = index === accumulatedPaths.length - 1;
            const label = decodeURIComponent(pathSegments[index]);

            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
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
