import Feather from '@expo/vector-icons/Feather';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet } from 'react-native';

import { RootStackParamList } from '~/navigation';

import { i18n } from '~/utils/i18n';
import { moderateScale } from '~/utils/scale';
import FinancialAnalysisScreen from '../screens/financial-analysis';
import WalletScreen from '../screens/wallet';

type Props = BottomTabScreenProps<RootStackParamList>;

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof Feather>['name']; color: string }) {
  return <Feather size={moderateScale(22)} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        // Adiciona estilso ao texto abaixo do ícone
        tabBarItemStyle: { marginBottom: 3 },
      }}>
      <Tab.Screen
        name={i18n.walletTitle}
        component={WalletScreen}
        options={{
          title: i18n.walletTitle,
          // Badge para adicionar um número no ícone (notificações, etc)
          // tabBarBadge: 3,
          tabBarIcon: ({ color }) => <TabBarIcon name="credit-card" color={color} />,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Modal')}>
              {({ pressed }) => (
                <Feather
                  name="info"
                  size={moderateScale(25)}
                  color="gray"
                  style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={i18n.financialAnalysisTitle}
        component={FinancialAnalysisScreen}
        options={{
          title: i18n.financialAnalysisTitle,
          tabBarIcon: ({ color }) => <TabBarIcon name="pie-chart" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
