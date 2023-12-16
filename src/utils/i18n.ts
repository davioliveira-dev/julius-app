import { getLocales } from 'expo-localization';
// how expo detect system language ?
// https://docs.expo.io/versions/latest/sdk/localization/

const locale = getLocales()[0].languageCode;

// For now, the app only support English and Brazilian Portuguese

const isHu3BR = locale === 'pt' || locale === 'pt-BR';

export const i18n = {
  walletTitle: isHu3BR ? 'Sua carteira' : 'Your wallet',
  walletSubtitle: isHu3BR ? 'Seu saldo atual' : 'Your current balance',
  currencySymbol: isHu3BR ? 'R$' : '$',
  transaction: {
    categories: {
      food: isHu3BR ? 'Alimentação' : 'Food',
      transport: isHu3BR ? 'Transporte' : 'Transport',
      leisure: isHu3BR ? 'Lazer' : 'Leisure',
      health: isHu3BR ? 'Saúde' : 'Health',
      gifts: isHu3BR ? 'Presentes' : 'Gifts',
      investments: isHu3BR ? 'Investimentos' : 'Investments',
      others: isHu3BR ? 'Outros' : 'Others',
    },
    type: {
      income: isHu3BR ? 'Entrada' : 'Income',
      outcome: isHu3BR ? 'Saída' : 'Outcome',
      transfer: isHu3BR ? 'Transferência' : 'Transfer',
    },
  },
  valueToCurrency: (value: number) => {
    return Intl.NumberFormat(locale, {
      style: 'currency',
      currency: isHu3BR ? 'BRL' : 'USD',
    }).format(value);
  },
  financialAnalysisTitle: isHu3BR ? 'Análise financeira' : 'Financial analysis',
  financialAnalysisSubtitle: isHu3BR ? 'Veja como você está se saindo:' : 'See how you are doing:',
} as const;
