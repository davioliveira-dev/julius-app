import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { balance } from 'scripts/transactions-mocks';

import WalletLedger from '~/components/wallet/ledger';
import { i18n } from '~/utils/i18n';
import { horizontalScale, moderateScale, verticalScale } from '~/utils/scale';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.balanceContainer}>
        <Text style={styles.title}>{i18n.walletSubtitle}: </Text>
        <Text style={styles.title}>{i18n.valueToCurrency(balance)}</Text>
      </View>
      <View style={styles.separator} />
      <WalletLedger />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(20),
  },
  balanceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    backgroundColor: 'gray',
    height: verticalScale(1),
    marginVertical: verticalScale(15),
    opacity: 0.25,
    width: '100%',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
