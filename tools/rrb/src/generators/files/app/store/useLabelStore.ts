import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateLabels } from '@rr/shared';

type LabelStore = {
  labels: string[];
  setLabels: (labels: string[]) => void;
};

export const useLabelStore = create<LabelStore>()(
  persist(
    (set) => ({
      labels: [],
      setLabels: (labels) =>
        set(() => ({
          labels: labels.slice(0, 3),
        })),
    }),
    {
      name: 'label-store',
      onRehydrateStorage: () => (state) => {
        if (!state?.labels?.length) {
          state?.setLabels(generateLabels(3));
        }
      },
    }
  )
);
