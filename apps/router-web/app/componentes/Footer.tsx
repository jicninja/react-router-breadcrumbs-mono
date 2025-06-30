import { useNextPrevRoutes } from '../hooks/useNextPrevRoutes';
import { NewLabelButton } from './NewLabelsButton';
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
      <NewLabelButton></NewLabelButton>
      {next ? (
        <Link to={next}>Next</Link>
      ) : (
        <span className="text-muted-foreground ">Next</span>
      )}
    </>
  );
}
