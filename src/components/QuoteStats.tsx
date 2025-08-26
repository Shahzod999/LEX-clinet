import React from "react";
import type { QuoteRequest } from "../types/quote";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

interface QuoteStatsProps {
  quotes: QuoteRequest[];
}

const QuoteStats: React.FC<QuoteStatsProps> = ({ quotes }) => {
  const totalQuotes = quotes.length;
  const longQuotes = quotes.filter(q => q.text.length > 100).length;
  const shortQuotes = quotes.filter(q => q.text.length <= 50).length;
  const averageLength = Math.round(quotes.reduce((acc, q) => acc + q.text.length, 0) / totalQuotes) || 0;
  const uniqueAuthors = new Set(quotes.map(q => q.author)).size;

  const stats = [
    {
      title: "Total Quotes",
      value: totalQuotes,
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-100"
    },
    {
      title: "Unique Authors",
      value: uniqueAuthors,
      icon: Users,
      color: "from-green-500 to-green-600",
      textColor: "text-green-100"
    },
    {
      title: "Long Quotes",
      value: longQuotes,
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-100"
    },
    {
      title: "Short Quotes",
      value: shortQuotes,
      icon: Star,
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className={`${stat.textColor} text-sm font-medium`}>{stat.title}</p>
            </div>
            <stat.icon className="w-8 h-8 opacity-80" />
          </div>
          {stat.title === "Total Quotes" && totalQuotes > 0 && (
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className={`${stat.textColor} text-xs`}>
                Avg length: {averageLength} chars
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuoteStats;
