import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import * as Haptics from 'expo-haptics';

const Habit = ({ habit, onToggle }) => {
  const [checked, setChecked] = useState(habit.completed);

  const handleToggle = async () => {
    await Haptics.selectionAsync();

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
      <TouchableOpacity style={styles.checkboxWrapper} onPress={handleToggle}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color='#ff1493'
        />
      </TouchableOpacity>
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
  checkboxWrapper: {
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },

});

export default Habit;
