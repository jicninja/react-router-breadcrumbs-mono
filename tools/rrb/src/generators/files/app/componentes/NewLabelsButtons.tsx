import { useState } from 'react';
import { generateLabels } from '@rr/shared';
import { Button } from '@rr/ui';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { useLabelStore } from '../store/useLabelStore';
import { fetchLabels } from '../services/fetchLabels';

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
    <div className="flex gap-2">
      <Button  variant="outline" disabled={isLoading} onClick={handleNewLocalsLabels}>
        New Locals Labels
      </Button>
      <Button  disabled={isLoading} onClick={handleFetchLabels}>
        {isLoading ? <Loader2Icon className="animate-spin" /> : 'Fetch Labels'}
      </Button>
    </div>
  );
}
