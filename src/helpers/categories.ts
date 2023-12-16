import Feather from '@expo/vector-icons/Feather';
import { i18n } from '~/utils/i18n';

export const categoriesToIcons: Record<
  keyof typeof i18n.transaction.categories,
  React.ComponentProps<typeof Feather>['name']
> = {
  food: 'coffee',
  transport: 'navigation',
  leisure: 'film',
  health: 'heart',
  gifts: 'gift',
  investments: 'trending-up',
  others: 'shopping-bag',
};

export const categoriesToColors: Record<keyof typeof i18n.transaction.categories, string> = {
  food: '#FE001A',
  transport: '#FF5722',
  leisure: '#2196F3',
  health: '#9C27B0',
  gifts: '#FFC107',
  investments: '#4CAF50',
  others: '#607D8B',
};
