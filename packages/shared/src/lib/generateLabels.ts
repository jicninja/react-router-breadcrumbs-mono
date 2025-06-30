export const dictionary = [
  'babel',
  'build',
  'cache',
  'component',
  'context',
  'deploy',
  'eslint',
  'generator',
  'graph',
  'hook',
  'jest',
  'lazyload',
  'lint',
  'module',
  'monorepo',
  'node',
  'npm',
  'nx',
  'plugin',
  'pnpm',
  'props',
  'react',
  'router',
  'state',
  'storybook',
  'typescript',
  'vite',
  'webpack',
  'workspace',
  'yarn',
] as const;

export type DictionaryWord = typeof dictionary[number];

export const generateLabels = (count: number = 3): DictionaryWord[] => {
  const result: DictionaryWord[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    result.push(dictionary[randomIndex]);
  }

  return result;
};
