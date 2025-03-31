
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  currentAmount: number;
  totalAmount: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentAmount, 
  totalAmount,
  className = ""
}) => {
  const percentage = Math.min((currentAmount / totalAmount) * 100, 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{currentAmount.toFixed(0)} of {totalAmount.toFixed(0)} units claimed</span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <Progress value={percentage} className="h-2 bg-gray-200" />
    </div>
  );
};

export default ProgressBar;
