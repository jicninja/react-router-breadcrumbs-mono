import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@rr/ui';

import { Fragment } from 'react';

import { useMatches } from 'react-router';

export function Header() {
  const matches = useMatches();

  const rutasVisibles = matches.filter((match) => match.pathname !== '/');

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {rutasVisibles.map((match, index) => {
            const isLast = index === rutasVisibles.length - 1;

            return (
              <Fragment key={match.pathname}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>Label Here {index}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={match.pathname}>
                      Label Here {index}
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
