import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface PriceChartProps {
  data: { date: string; price: number }[];
  timeframe: number;
}

const PriceChart = ({ data, timeframe }: PriceChartProps) => {
  return (
    <div className="w-full max-w-6xl p-6 mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-100">
        {timeframe === 1
          ? "Price (last 24 hours)"
          : `Price (last ${timeframe} days)`}
      </h2>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderColor: "#4B5563",
              }}
              labelStyle={{ color: "#F9FAFB" }}
              itemStyle={{ color: "#F9FAFB" }}
            />
            <Line
              type="basis"
              dataKey="price"
              stroke="#60A5FA"
              strokeWidth={1}
              dot={{ r: 2 }}
              // activeDot={{ r: 1 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
