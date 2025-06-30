import { useNextPrevRoutes } from '../hooks/useNextPrevRoutes';
import { NewLabelsButtons } from './NewLabelsButtons';
import { Link } from 'react-router';

export function Footer() {
  const { next, prev } = useNextPrevRoutes();

  return (
    <>
      {prev ? (
        <Link to={prev}>Prev</Link>
      ) : (
        <span className="text-muted-foreground ">Prev</span>
      )}
      <NewLabelsButtons />
      {next ? (
        <Link to={next}>Next</Link>
      ) : (
        <span className="text-muted-foreground ">Next</span>
      )}
    </>
  );
}
