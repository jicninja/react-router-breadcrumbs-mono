import { useNextPrevRoutes } from '../hooks/useNextPrevRoutes';

export function Footer() {
  const { next, prev } = useNextPrevRoutes();

  return (
    <>
      {prev ? <a href={prev}>Prev</a> : <span className="text-muted-foreground ">Prev</span>}
      {next ? <a href={next}>Next</a> : <span className="text-muted-foreground ">Next</span>}
    </>
  );
}
