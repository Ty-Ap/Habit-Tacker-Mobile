import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const AddHabitScreen = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleAddHabit = () => {
    if (habitName.trim()) {
      onAddHabit({ name: habitName.trim(), streak: 0, completed: false });
      setHabitName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setHabitName}
        value={habitName}
        placeholder="Habit name"
      />
      <Button title="Add Habit" onPress={handleAddHabit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
    marginTop: 10,
  },
});

export default AddHabitScreen;
