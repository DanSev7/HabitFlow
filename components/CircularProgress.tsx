import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({ percentage, size = 60, strokeWidth = 5, color = "#ff0000", trackColor = "rgba(255,255,255,0.2)" }: {percentage: number, size?: number, strokeWidth?: number, color?: string, trackColor?: string}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={{ width: size, height: size }} className="items-center justify-center">
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Track Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      {/* Percentage Text */}
      <View className="absolute inset-0 items-center justify-center">
        <Text className="text-xs font-bold text-white">
          {Math.round(percentage)}%
        </Text>
      </View>
    </View>
  );
};

export default CircularProgress;
