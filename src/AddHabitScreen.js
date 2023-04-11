import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

const AddHabitScreen = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleAddHabit = async() => {
    Haptics.impactAsync();
    
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
      <TouchableOpacity style={styles.confirm} onPress={handleAddHabit}><Text>Confirm</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
    marginTop: 10,
  },
  confirm: {
    backgroundColor: '#ffc107', 
    borderRadius: 4,
    margin: 12,
    justifyContent: 'center',
    padding: 12,
  },

});

export default AddHabitScreen;
