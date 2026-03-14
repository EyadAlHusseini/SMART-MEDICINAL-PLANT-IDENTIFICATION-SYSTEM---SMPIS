import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useData } from "../../context/DataContext";

const COLORS = ["#062d23", "#2d7260", "#88c3a9", "#cfe4d9", "#a3b18a"];

export default function Reports() {
  const { records } = useData();

  // 1. DYNAMIC LOGIC: Calculated Metrics
  const totalClassifications = records.length;

  const avgAccuracy = useMemo(() => {
    if (records.length === 0) return "0";
    const sum = records.reduce((acc, curr) => acc + curr.confidence, 0);
    return (sum / records.length).toFixed(1);
  }, [records]);

  const dailyData = useMemo(() => {
    const last5Days = [];
    for (let i = 4; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const formatted = d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const count = records.filter((r) => r.date === formatted).length;
      last5Days.push({ name: formatted, classifications: count });
    }
    return last5Days;
  }, [records]);

  const plantStats = useMemo(() => {
    const counts = {};
    records.forEach((r) => (counts[r.name] = (counts[r.name] || 0) + 1));
    return Object.keys(counts)
      .map((name) => ({
        name,
        shortName: name.split(" ")[0],
        count: counts[name],
        value: Math.round((counts[name] / (records.length || 1)) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  }, [records]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* ROW 1: Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
            Analytics & Reports
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Performance insights and trends
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
          Export PDF
        </button>
      </header>

      {/* ROW 2: KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Classifications"
          value={totalClassifications}
          trend="+18% vs last period"
          isGreen={true}
        />
        <KPICard
          title="Avg. Confidence"
          value={`${avgAccuracy}%`}
          trend="+2.3% vs last period"
          isGreen={true}
        />
        <KPICard
          title="Active Users"
          value="24"
          trend="8 active today"
          isGreen={false}
        />
        <KPICard
          title="Processing Time"
          value="1.2s"
          trend="15% faster"
          isGreen={true}
        />
      </div>

      {/* ROW 3: Daily & Weekly Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartBox title="Daily Classifications">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
              />
              <Line
                type="monotone"
                dataKey="classifications"
                stroke="#062d23"
                strokeWidth={2.5}
                dot={{ r: 5, fill: "#062d23" }}
                activeDot={{ r: 7, stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartBox>

        <ChartBox title="Weekly Performance">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="classifications"
                name="count"
                fill="#062d23"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>

      {/* ROW 4: Distribution & Top List */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
        <ChartBox title="Plant Distribution">
          {records.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={plantStats}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {plantStats.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {plantStats.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 text-xs text-slate-500"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: COLORS[i % COLORS.length] }}
                    />
                    {item.shortName} {item.value}%
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-[250px] flex items-center justify-center text-slate-400 text-sm italic">
              No data available
            </div>
          )}
        </ChartBox>

        <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900 mb-6">
            Most Identified Species
          </h3>
          <div className="space-y-3">
            {plantStats.length > 0 ? (
              plantStats.slice(0, 5).map((plant, i) => (
                <div
                  key={plant.name}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {plant.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">
                    {plant.count} identified
                  </span>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-400 text-sm italic">
                Waiting for classification data...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ROW 5: OVERALL SYSTEM ACCURACY (FIXED TO MATCH SCREENSHOT) */}
      <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900 mb-8">
          Overall System Accuracy
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Gauge Section */}
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#f1f5f9"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#062d23"
                strokeWidth="12"
                fill="none"
                strokeDasharray="552.9"
                strokeDashoffset={552.9 * (1 - parseFloat(avgAccuracy) / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-slate-900 tracking-tight">
                {avgAccuracy}%
              </span>
              <span className="text-sm text-slate-400 font-medium mt-1">
                Accuracy Rate
              </span>
            </div>
          </div>

          {/* Info List Section */}
          <div className="space-y-6 min-w-[180px]">
            <div>
              <p className="text-sm text-slate-400 font-medium mb-1">Target</p>
              <p className="text-base font-semibold text-slate-900">95.0%</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium mb-1">
                Best This Month
              </p>
              <p className="text-base font-semibold text-slate-900">99.2%</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium mb-1">Trend</p>
              <div className="flex items-center gap-1.5 text-emerald-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span className="text-sm font-medium">Above target</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 px-6 text-sm text-slate-600 shadow-sm">
        <strong className="text-emerald-800 font-bold">Note:</strong> All charts
        and reports are print-ready. Use Export PDF for formal documentation or
        Export Excel for data analysis.
      </div>
    </div>
  );
}

/* --- HELPERS --- */
function KPICard({ title, value, trend, isGreen }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm min-h-[140px] flex flex-col justify-between">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </span>
        <div
          className={`flex items-center gap-1.5 text-sm font-medium ${isGreen ? "text-emerald-600" : "text-slate-400"}`}
        >
          {isGreen && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          )}
          {trend}
        </div>
      </div>
    </div>
  );
}

function ChartBox({ title, children }) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900 mb-6">{title}</h3>
      {children}
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 p-3 shadow-xl rounded-lg">
        <p className="text-sm font-bold text-slate-900 mb-1">
          {label || payload[0].payload.name}
        </p>
        <p className="text-xs text-slate-500">
          classifications :{" "}
          <span className="font-bold text-slate-900">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
}
