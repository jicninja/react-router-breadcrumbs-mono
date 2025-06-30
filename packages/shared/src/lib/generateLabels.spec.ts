import { generateLabels, dictionary } from './generateLabels.js';

describe('generateLabels', () => {
  it('should return an array of 3 labels by default', () => {
    const labels = generateLabels();
    expect(labels).toHaveLength(3);
    labels.forEach(label => {
      expect(dictionary).toContain(label);
    });
  });

  it('should return an empty array if count is 0', () => {
    const labels = generateLabels(0);
    expect(labels).toEqual([]);
  });

  it('should return the correct number of labels', () => {
    const labels = generateLabels(10);
    expect(labels).toHaveLength(10);
  });

  it('should return only labels from the dictionary', () => {
    const labels = generateLabels(20);
    labels.forEach(label => {
      expect(dictionary.includes(label)).toBe(true);
    });
  });

  it('should allow repeated labels', () => {
    const labels = generateLabels(100);
    labels.forEach(label => {
      expect(dictionary.includes(label)).toBe(true);
    });
  });
});
