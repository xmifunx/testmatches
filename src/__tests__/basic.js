import calculateCondition from '../index';

test.each([
  { name: 'мечник', health: 10, expected: 'critical' },
  { name: 'маг', health: 100, expected: 'healthy' },
  { name: 'лучник', health: 45, expected: 'wounded' },
].sort((character1, character2) => (Number(character1.health) < Number(character2.health) ? 1 : -1)))('testing character %o', (character) => {
  const condition = calculateCondition(character);
  expect(condition).toEqual(character.expected);
});
