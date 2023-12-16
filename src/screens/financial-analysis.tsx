import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import transactions from 'scripts/transactions-mocks';
import { categoriesToColors } from '~/helpers/categories';
import { i18n } from '~/utils/i18n';
import { horizontalScale, moderateScale, verticalScale } from '~/utils/scale';

type ChartData = {
  name: string;
  value: number;
  color: string;
};

const generatedChartData: (ChartData & {
  legendFontColor: string;
  legendFontSize: number;
})[] = transactions.reduce(
  (acc, curr) => {
    const translatedCategory = i18n.transaction.categories[curr.category];
    const index = acc.findIndex((item) => item.name === translatedCategory);
    if (index !== -1) {
      acc[index].value += curr.value;
    } else {
      acc.push({
        name: translatedCategory,
        value: curr.value,
        color: categoriesToColors[curr.category],
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      });
    }
    return acc;
  },
  [] as (ChartData & { legendFontColor: string; legendFontSize: number })[]
);

export default function FinancialAnalysisScreen() {
  const { width: screenWidth } = Dimensions.get('window');
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{i18n.financialAnalysisSubtitle}</Text>
      </View>
      <View style={styles.chartContainer}>
        <PieChart
          data={generatedChartData}
          width={screenWidth}
          height={verticalScale(220)}
          chartConfig={chartConfig}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="0"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(20),
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  chartContainer: {
    minHeight: verticalScale(220),
  },
});
