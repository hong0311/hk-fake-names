import {
  getFirstNameTraditional,
  getFirstNameRomanized,
  getFirstNameBoth,
  getLastNameTraditional,
  getLastNameRomanized,
  getLastNameBoth,
} from '../index';
import { Name } from '../types';
import { FIRST_NAMES, LAST_NAMES } from '../data/names';

describe('First Name Generation', () => {
  test('getFirstNameTraditional returns correct number of names', () => {
    expect(getFirstNameTraditional()).toHaveLength(1);
    expect(getFirstNameTraditional(3)).toHaveLength(3);
  });

  test('getFirstNameTraditional returns Chinese characters', () => {
    const names = getFirstNameTraditional(5);
    names.forEach((name) => {
      expect(name).toMatch(/[\u4e00-\u9fff]+/);
    });
  });

  test('getFirstNameRomanized returns correct number of names', () => {
    expect(getFirstNameRomanized()).toHaveLength(1);
    expect(getFirstNameRomanized(3)).toHaveLength(3);
  });

  test('getFirstNameRomanized returns romanized names', () => {
    const names = getFirstNameRomanized(5);
    names.forEach((name) => {
      expect(name).toMatch(/^[A-Za-z\s-]+$/);
    });
  });

  test('getFirstNameBoth returns correct structure', () => {
    const names = getFirstNameBoth(2);
    expect(names).toHaveLength(2);
    names.forEach((name) => {
      expect(name).toHaveProperty('traditional');
      expect(name).toHaveProperty('romanized');
      expect(name.traditional).toMatch(/[\u4e00-\u9fff]+/);
      expect(name.romanized).toMatch(/^[A-Za-z\s-]+$/);
    });
  });
});

describe('Last Name Generation', () => {
  test('getLastNameTraditional returns correct number of names', () => {
    expect(getLastNameTraditional()).toHaveLength(1);
    expect(getLastNameTraditional(3)).toHaveLength(3);
  });

  test('getLastNameTraditional returns Chinese characters', () => {
    const names = getLastNameTraditional(5);
    names.forEach((name) => {
      expect(name).toMatch(/[\u4e00-\u9fff]+/);
    });
  });

  test('getLastNameRomanized returns correct number of names', () => {
    expect(getLastNameRomanized()).toHaveLength(1);
    expect(getLastNameRomanized(3)).toHaveLength(3);
  });

  test('getLastNameRomanized returns romanized names', () => {
    const names = getLastNameRomanized(5);
    names.forEach((name) => {
      expect(name).toMatch(/^[A-Za-z]+$/);
    });
  });

  test('getLastNameBoth returns correct structure', () => {
    const names = getLastNameBoth(2);
    expect(names).toHaveLength(2);
    names.forEach((name) => {
      expect(name).toHaveProperty('traditional');
      expect(name).toHaveProperty('romanized');
      expect(name.traditional).toMatch(/[\u4e00-\u9fff]+/);
      expect(name.romanized).toMatch(/^[A-Za-z]+$/);
    });
  });
});

describe('Name Data Validation', () => {
  test('First Names have no duplicates', () => {
    function findDuplicateNames(names: typeof FIRST_NAMES) {
      const duplicates: {
        name: (typeof FIRST_NAMES)[0];
        indices: number[];
      }[] = [];

      const traditionalMap = new Map<string, number[]>();

      names.forEach((name: Name, index: number) => {
        const traditionalIndices = traditionalMap.get(name.traditional) || [];
        traditionalIndices.push(index);
        traditionalMap.set(name.traditional, traditionalIndices);
      });

      traditionalMap.forEach((indices) => {
        if (indices.length > 1) {
          duplicates.push({
            name: names[indices[0]],
            indices,
          });
        }
      });

      return duplicates;
    }

    const duplicates = findDuplicateNames(FIRST_NAMES);
    expect(duplicates.map((d) => d.name.traditional)).toHaveLength(0);
  });

  test('Last Names have no duplicates', () => {
    const nameUniqueKeys = LAST_NAMES.map((name: Name) => `${name.traditional}-${name.romanized}`);
    const uniqueNameKeys = new Set(nameUniqueKeys);
    expect(uniqueNameKeys.size).toBe(nameUniqueKeys.length);
  });
});
