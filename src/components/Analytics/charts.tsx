import { BarChart, Bar, XAxis, YAxis } from 'recharts';

interface ChartProps {
  data: {
    day: string;
    valueA: number;
    valueB: number;
  }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const calculateTickValues = (
    data: { valueA: number; valueB: number }[],
    minTickValue: number,
    tickGap: number
  ) => {
    const maxDataValue = Math.max(
      ...data.map((item) => Math.max(item.valueA, item.valueB))
    );

    const numTicks = Math.ceil((maxDataValue - minTickValue) / tickGap) + 1;
    return Array.from(
      { length: numTicks },
      (_, index) => minTickValue + tickGap * index
    );
  };

  const minTickValue = 20; // Specify your desired starting tick value
  const tickGap = 20; // Specify your desired tick gap

  const tickValues = calculateTickValues(data, minTickValue, tickGap);

  return (
    <BarChart
      width={270}
      height={100}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: -25,
        bottom: -8,
      }}
      barCategoryGap={8}
      barGap={12}
    >
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{ fill: '#b3b4b5', fontSize: 8 }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        domain={[20]}
        ticks={tickValues}
        tick={{ fill: '#b3b4b5', fontSize: 8 }}
        padding={{ top: 10, bottom: 10 }}
      />
      <Bar dataKey="valueA" fill="#d3cffc" radius={[6, 6, 6, 6]} />
      <Bar dataKey="valueB" fill="#6e62e5" radius={[6, 6, 6, 6]} />
    </BarChart>
  );
};

export default Chart;
