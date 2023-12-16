import Feather from '@expo/vector-icons/Feather';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import transactionsMock from 'scripts/transactions-mocks';
import { categoriesToColors, categoriesToIcons } from '~/helpers/categories';
import { Transaction } from '~/types/transaction';
import { i18n } from '~/utils/i18n';
import { horizontalScale, moderateScale, verticalScale } from '~/utils/scale';

export default function WalletLedger() {
  const isOutcome = (transaction: Transaction) => transaction.type === 'outcome';

  return (
    <ScrollView>
      {transactionsMock.map((transaction) => (
        <View key={transaction.id} style={styles.transactionContainer}>
          <View style={styles.transactionIconContainer}>
            <Feather
              name={categoriesToIcons[transaction.category]}
              size={moderateScale(25)}
              color={categoriesToColors[transaction.category]}
            />
          </View>
          <View>
            <Text>{transaction.title}</Text>
          </View>
          <View>
            <Text
              style={
                isOutcome(transaction) ? styles.transactionValueOutcome : styles.transactionValue
              }>
              {isOutcome(transaction) ? '' : '+'}
              {i18n.valueToCurrency(
                isOutcome(transaction) ? -transaction.value : transaction.value
              )}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(8),
    minHeight: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(8),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: horizontalScale(2),
  },
  transactionIconContainer: {
    minWidth: horizontalScale(30),
  },
  transactionValue: {
    fontWeight: 'bold',
    color: 'green',
  },
  transactionValueOutcome: {
    fontWeight: 'bold',
    color: 'red',
  },
});
