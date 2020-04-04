import standardOfLiving from '../matcher';

test('standard of living', () => {
  expect(standardOfLiving([
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ])).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
