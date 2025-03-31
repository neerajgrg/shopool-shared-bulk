
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, Clock } from 'lucide-react';

// Sample data for the charts
const hourlyData = [
  { time: '9 AM', units: 10 },
  { time: '10 AM', units: 15 },
  { time: '11 AM', units: 8 },
  { time: '12 PM', units: 12 },
  { time: '1 PM', units: 20 },
  { time: '2 PM', units: 25 },
  { time: '3 PM', units: 18 },
  { time: '4 PM', units: 30 },
];

interface DealMetrics {
  totalBuyers: number;
  averageOrderSize: number;
  joinRate: number;
  timeLeft: number;
}

interface DealStatusCardProps {
  currentAmount: number;
  totalAmount: number;
  daysLeft: number;
  dealMetrics: DealMetrics;
}

const DealStatusCard: React.FC<DealStatusCardProps> = ({
  currentAmount,
  totalAmount,
  daysLeft,
  dealMetrics
}) => {
  const percentageFilled = (currentAmount / totalAmount) * 100;
  const dealStatus = percentageFilled >= 75 ? 'hot' : percentageFilled >= 50 ? 'active' : 'new';
  
  // Calculate remaining units
  const unitsRemaining = totalAmount - currentAmount;
  
  return (
    <div className="space-y-6">
      <Card className="border-2 border-shopool-100">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Deal Status</CardTitle>
            <Badge className={
              dealStatus === 'hot' 
                ? 'bg-red-500 hover:bg-red-600' 
                : dealStatus === 'active' 
                ? 'bg-amber-500 hover:bg-amber-600' 
                : 'bg-green-500 hover:bg-green-600'
            }>
              {dealStatus === 'hot' 
                ? 'Filling Fast!' 
                : dealStatus === 'active' 
                ? 'Active Deal' 
                : 'New Deal'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-shopool-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Total Buyers</p>
              <p className="text-2xl font-bold text-shopool-700">{dealMetrics.totalBuyers}</p>
            </div>
            <div className="bg-shopool-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Avg. Order</p>
              <p className="text-2xl font-bold text-shopool-700">{dealMetrics.averageOrderSize}kg</p>
            </div>
            <div className="bg-shopool-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Join Rate</p>
              <p className="text-2xl font-bold text-shopool-700">+{dealMetrics.joinRate}/hr</p>
            </div>
            <div className="bg-shopool-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Time Left</p>
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 text-shopool-600 mr-1" />
                <p className="text-2xl font-bold text-shopool-700">{daysLeft}d</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full flex items-center justify-center ${
                  dealStatus === 'hot' ? 'bg-red-500' : dealStatus === 'active' ? 'bg-amber-500' : 'bg-green-500'
                }`}
                style={{ width: `${percentageFilled}%` }}
              >
                <span className="text-xs font-medium text-white">{percentageFilled.toFixed(0)}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">
                <span className="font-medium">{currentAmount}</span> of {totalAmount} units claimed
              </span>
              <span className="text-gray-600">
                <span className="font-medium">{unitsRemaining}</span> units remaining
              </span>
            </div>
          </div>
          
          <div className="h-64">
            <CardTitle className="text-sm font-medium mb-2">Orders Over Time (Last 8 Hours)</CardTitle>
            <ChartContainer config={{
              units: { label: "Units", theme: { light: "#0891b2", dark: "#06b6d4" } }
            }}>
              <AreaChart data={hourlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0891b2" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0891b2" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="units" stroke="#0891b2" fillOpacity={1} fill="url(#colorUnits)" name="units" />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealStatusCard;
