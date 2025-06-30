import { useLabelStore } from '../store/useLabelStore';
import { generateLabels } from '@rr/shared';
import { useState } from 'react';
import { fetchLabels } from '../services/fetchlabels';
import { toast } from 'sonner';

export function NewLabelsButtons() {
  const setLabels = useLabelStore((state) => state.setLabels);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewLocalsLabels = () => {
    setLabels(generateLabels(3));
  };

  const handleFetchLabels = async () => {
    setIsLoading(true);
    try {
      const { labels } = await fetchLabels();
      setLabels(labels);
    } catch (error) {
      toast('Somethign went wrong, please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleNewLocalsLabels}>New Locals Labels</button>
      <button onClick={handleFetchLabels}>
        {isLoading ? 'loading' : 'Fetch Labels'}
      </button>
    </>
  );
}
