'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const DATA = [
  { usn: 'CG001', marks: 40 },
  { usn: 'CG002', marks: 15 },
  { usn: 'CG003', marks: 85 }, // Highlighted in your screenshot
  { usn: 'CG004', marks: 95 },
  { usn: 'CG005', marks: 55 },
  { usn: 'CG006', marks: 30 },
  { usn: 'CG007', marks: 10 },
  { usn: 'CG008', marks: 60 },
  { usn: 'CG009', marks: 25 },
  { usn: 'CG010', marks: 45 },
  { usn: 'CG011', marks: 20 },
];

export default function MarksChart() {
  return (
    <div 
      style={{ backgroundColor: 'rgba(23, 24, 33)' }} 
      className="h-100 w-full rounded-2xl p-12  "
    >
      

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DATA} margin={{ top: 0, right: 0, left: -35, bottom: 0 }} barCategoryGap="20%">
          {/* 1. Define the Gradient */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(117, 151, 151)" />
              <stop offset="100%" stopColor="rgba(63, 76, 83)" />
            </linearGradient>
          </defs>

          
          <XAxis 
            dataKey="usn" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4b5563', fontSize: 11 }} 
            dy={15}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4b5563', fontSize: 11 }}
            ticks={[0, 10, 50, 100]} // Matching the scale in your screenshot
          />
          
          <Tooltip 
            cursor={{ stroke: '#ffffff', strokeWidth: 1, strokeDasharray: '0' }}
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '4px',
              border: 'none',
              color: '#000'
            }}
            labelStyle={{ display: 'none' }} 
            itemStyle={{ color: '#000', fontWeight: 'bold', fontSize: '12px' }}
          />
          
          <Bar 
            dataKey="marks" 
            fill="url(#barGradient)" // Apply the gradient here
            radius={[2, 2, 0, 0]} 
            barSize={40}
            /* 2. This adds the faint bar behind the actual data */
            background={{ fill: 'rgba(255, 255, 255, 0.05)', radius: 2 }}
          >
            {DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}