import axios from 'axios';
import type { DictionaryWord } from '@rr/shared';

type LabelsResponse = {
  labels: DictionaryWord[];
};

export async function fetchLabels(): Promise<LabelsResponse> {
  const domain = import.meta.env.API_DOMAIN || 'localhost';
  const port = import.meta.env.API_PORT || '3000';
  const response = await axios.get<LabelsResponse>(
    `http://${domain}:${port}/api/labels`
  );
  return response.data;
}
