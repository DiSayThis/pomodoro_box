import { nanoid } from 'nanoid';
import { assoc } from '../js/assoc';

export const generatedRandomString = () => nanoid();

export const assignId = assoc('id', generatedRandomString());

export const generateId = <O extends object>(obj: O) => assignId(obj);
