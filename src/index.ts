import { Name } from './types';
import { FIRST_NAMES, LAST_NAMES } from './data/names';

function getRandomName(nameArray: readonly Name[]): Name {
  return nameArray[Math.floor(Math.random() * nameArray.length)];
}

function formatNameTraditional(name: Name): string {
  return name.traditional;
}

function formatNameRomanized(name: Name): string {
  return name.romanized;
}

export function getFirstNameTraditional(count: number = 1): string[] {
  return Array.from({ length: count }, () => formatNameTraditional(getRandomName(FIRST_NAMES)));
}

export function getFirstNameRomanized(count: number = 1): string[] {
  return Array.from({ length: count }, () => formatNameRomanized(getRandomName(FIRST_NAMES)));
}

export function getFirstNameBoth(count: number = 1): { traditional: string; romanized: string }[] {
  return Array.from({ length: count }, () => getRandomName(FIRST_NAMES));
}

export function getLastNameTraditional(count: number = 1): string[] {
  return Array.from({ length: count }, () => formatNameTraditional(getRandomName(LAST_NAMES)));
}

export function getLastNameRomanized(count: number = 1): string[] {
  return Array.from({ length: count }, () => formatNameRomanized(getRandomName(LAST_NAMES)));
}

export function getLastNameBoth(count: number = 1): { traditional: string; romanized: string }[] {
  return Array.from({ length: count }, () => getRandomName(LAST_NAMES));
}

export function getFullNameTraditional(count: number = 1): string[] {
  return Array.from({ length: count }, () => {
    const lastName = getRandomName(LAST_NAMES);
    const firstName = getRandomName(FIRST_NAMES);
    return `${lastName.traditional}${firstName.traditional}`;
  });
}

export function getFullNameRomanized(count: number = 1): string[] {
  return Array.from({ length: count }, () => {
    const lastName = getRandomName(LAST_NAMES);
    const firstName = getRandomName(FIRST_NAMES);
    return `${lastName.romanized} ${firstName.romanized}`;
  });
}

export function getFullNameBoth(count: number = 1): { traditional: string; romanized: string }[] {
  return Array.from({ length: count }, () => {
    const lastName = getRandomName(LAST_NAMES);
    const firstName = getRandomName(FIRST_NAMES);
    return {
      traditional: `${lastName.traditional}${firstName.traditional}`,
      romanized: `${lastName.romanized} ${firstName.romanized}`,
    };
  });
}

export const getFullName = () => getFullNameTraditional(1)[0];
export const getFirstName = () => getFirstNameTraditional(1)[0];
export const getLastName = () => getLastNameTraditional(1)[0];
