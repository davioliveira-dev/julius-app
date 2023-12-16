import { i18n } from '~/utils/i18n';

export type Transaction = {
  id: string;
  title: string;
  value: number;
  category: keyof typeof i18n.transaction.categories;
  type: 'income' | 'outcome' | 'transfer';
  date: Date;
};
