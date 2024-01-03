import { run as main } from './main';
import { run as post } from './post';

export async function runScript(scriptName: string) {
  switch (scriptName) {
    case 'main':
      await main();
      break;
    case 'post':
      await post();
      break;
    default:
      throw new Error(`Unknown script argument: '${scriptName}'`);
  }
}
