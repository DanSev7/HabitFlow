import icons from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => {
    return (
        <View className='flex-1 mt-3 flex flex-col items-center'>
            <Image
              source={icon}
              resizeMode="contain"
              // tintColor={focused ? '#0061FF' : '#666876'}
              className='size-6'
            />
            <Text className={`text-${focused ? '#0061FF' : '#666876'} text-xs w-full text-center mt-1`}>
              {title}
            </Text>
        </View>
    )
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#E6F4FE',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.today} title="Today" />
          ),
        }}
      />
      <Tabs.Screen 
        name="Upcoming" 
        options={{
          title: "Upcoming",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.upcoming} title="Upcoming" />
          ),
        }}
      />
      <Tabs.Screen 
        name="Browse" 
        options={{
          title: "Browse",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.browse} title="Browse" />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout