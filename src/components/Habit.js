import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

const Habit = ({ habit, onToggle }) => {
  const [checked, setChecked] = useState(habit.completed);

  const handleToggle = () => {
    setChecked(!checked);
    const updatedHabit = {
      ...habit,
      completed: !habit.completed,
      streak: !habit.completed ? habit.streak + 1 : habit.streak,
    };
    onToggle(updatedHabit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.habitName}>{habit.name}</Text>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={handleToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitName: {
    fontSize: 16,
  },
});

export default Habit;
