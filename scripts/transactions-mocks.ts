import { faker, simpleFaker } from '@faker-js/faker';
import { Transaction } from '~/types/transaction';

const categories: Transaction['category'][] = [
  'food',
  'transport',
  'leisure',
  'health',
  'gifts',
  'investments',
  'others',
];

const types: Transaction['type'][] = ['income', 'outcome', 'transfer'];

const transactions: Transaction[] = Array.from({ length: 100 }, () => ({
  id: simpleFaker.string.uuid(),
  category: categories[simpleFaker.number.int({ min: 0, max: categories.length - 1 })],
  date: simpleFaker.date.between({
    from: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
    to: new Date(),
  }),
  title: faker.word.words(3),
  type: types[simpleFaker.number.int({ min: 0, max: types.length - 1 })],
  value: simpleFaker.number.float({ min: 0, max: 1000, precision: 2 }),
}));

export const balance = transactions.reduce((acc, curr) => {
  acc += curr.type === 'income' ? curr.value : -curr.value;
  return acc;
}, 20000);

// uncomment if you want the json file
// Bun.write('transactions.json', JSON.stringify(transactions, null, 2));

export default transactions;
