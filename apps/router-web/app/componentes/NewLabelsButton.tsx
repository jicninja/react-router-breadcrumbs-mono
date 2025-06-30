import { useLabelStore } from '../store/useLabelStore';
import { generateLabels } from '@rr/shared';

export function NewLabelButton() {
  const setLabels = useLabelStore((state) => state.setLabels);

  const handleNewLabels = () => {
    setLabels(generateLabels(3));
  };

  return <button onClick={handleNewLabels}>New labels</button>;
}
