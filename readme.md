# hk-fake-names

Generate realistic Hong Kong names in both traditional Chinese and romanized forms.

## Installation

npm install hk-fake-names

## Usage

```typescript
import {
  getFirstNameTraditional,
  getFirstNameRomanized,
  getFirstNameBoth,
  getLastNameTraditional,
  getLastNameRomanized,
  getLastNameBoth,
  getFullNameTraditional,
  getFullNameRomanized,
  getFullNameBoth,
} from 'hk-fake-names';

// First Names
// Single
const firstName = getFirstNameTraditional(); // ['英秀']
const firstNameRoman = getFirstNameRomanized(); // ['Ying Sau']
const firstNameBoth = getFirstNameBoth(); // [{ traditional: '英秀', romanized: 'Ying Sau' }]

// Multiple
const firstNames = getFirstNameTraditional(3); // ['英秀', '一心', '幼羚']
const firstNamesRoman = getFirstNameRomanized(3); // ['Ying Sau', 'Yat Sum', 'Yau Ling']
const firstNamesBoth = getFirstNameBoth(3); // [{ traditional: '英秀', romanized: 'Ying Sau' }, ...]

// Last Names
// Single
const lastName = getLastNameTraditional(); // ['陳']
const lastNameRoman = getLastNameRomanized(); // ['Chan']
const lastNameBoth = getLastNameBoth(); // [{ traditional: '陳', romanized: 'Chan' }]

// Multiple
const lastNames = getLastNameTraditional(3); // ['陳', '黃', '李']
const lastNamesRoman = getLastNameRomanized(3); // ['Chan', 'Wong', 'Lee']
const lastNamesBoth = getLastNameBoth(3); // [{ traditional: '陳', romanized: 'Chan' }, ...]

// Full Names
// Single
const fullName = getFullNameTraditional(); // ['陳英秀']
const fullNameRoman = getFullNameRomanized(); // ['Chan Ying Sau']
const fullNameBoth = getFullNameBoth(); // [{ traditional: '陳英秀', romanized: 'Chan Ying Sau' }]

// Multiple
const fullNames = getFullNameTraditional(3); // Returns array of traditional Chinese full names
const fullNamesRoman = getFullNameRomanized(3); // Returns array of romanized full names
const fullNamesBoth = getFullNameBoth(3); // Returns array of full names in both forms
```

### API

All functions accept an optional `count` parameter (default: 1) to generate multiple names at once.

#### First Names

- `getFirstNameTraditional(count?: number)`: Returns traditional Chinese first names
- `getFirstNameRomanized(count?: number)`: Returns romanized first names
- `getFirstNameBoth(count?: number)`: Returns both traditional and romanized first names

#### Last Names

- `getLastNameTraditional(count?: number)`: Returns traditional Chinese last names
- `getLastNameRomanized(count?: number)`: Returns romanized last names
- `getLastNameBoth(count?: number)`: Returns both traditional and romanized last names

#### Full Names

- `getFullNameTraditional(count?: number)`: Returns full names in traditional Chinese
- `getFullNameRomanized(count?: number)`: Returns full names in romanized form
- `getFullNameBoth(count?: number)`: Returns full names in both traditional and romanized forms
