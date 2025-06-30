import {
  addProjectConfiguration,
  formatFiles,
  installPackagesTask,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { RrbGenGeneratorSchema } from './schema';

export async function rrbGenGenerator(
  tree: Tree,
  options: RrbGenGeneratorSchema
) {
  const projectRoot = `apps/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

export default rrbGenGenerator;
