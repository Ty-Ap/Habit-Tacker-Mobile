import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from '../src/components/Calendar';
import Habit from '../src/components/Habit';
import Streak from '../src/components/Streak';

const HomeScreen = ({ habits, onToggleHabit, onDateChange }) => {
  return (
    <View style={styles.container}>
      <Calendar onDateChange={onDateChange} />
      {habits.map((habit) => (
        <View key={habit.id}> 
          <Habit habit={habit} onToggle={() => onToggleHabit(habit.id)} />
          <Streak habit={habit} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
