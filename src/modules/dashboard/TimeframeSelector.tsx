import { Timeframe, TIMEFRAME_OPTIONS } from "../shared";

interface TimeframeSelectorProps {
  selected: Timeframe;
  onChange: (days: Timeframe) => void;
}

const TimeframeSelector = ({ selected, onChange }: TimeframeSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <label htmlFor="timeframe" className="text-lg font-semibold">
        Select Timeframe:
      </label>
      <select
        id="timeframe"
        value={selected}
        onChange={(e) => onChange(Number(e.target.value) as Timeframe)}
        className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
      >
        {TIMEFRAME_OPTIONS.map((days) => (
          <option key={days} value={days}>
            {days === Timeframe.ONE_DAY ? "Last 24 hours" : `Last ${days} days`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeframeSelector;
