import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';

export const preventAll = <T extends (e: any) => void>(fn: T) => preventDefault(stopPropagation(fn));
