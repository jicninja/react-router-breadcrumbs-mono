import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@rr/ui';

import { useNextPrevRoutes } from '../hooks/useNextPrevRoutes';
import { NewLabelsButtons } from './NewLabelsButtons';

export function Footer() {
  const { next, prev } = useNextPrevRoutes();

  const navigate = useNavigate();

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    route: string | null
  ) => {
    event.preventDefault();
    if (route) {
      navigate(route);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={prev ? '' : 'text-muted-foreground'}
            onClick={(event) => handleNavigation(event, prev)}
            {...(prev && { href: prev })}
          />
        </PaginationItem>
        <PaginationItem>
          <NewLabelsButtons />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={next ? '' : 'text-muted-foreground'}
            onClick={(event) => handleNavigation(event, next)}
            {...(next && { href: next })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
