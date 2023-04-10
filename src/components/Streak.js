import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Streak = ({ habit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.habitName}>{habit.name}</Text>
      <Text style={styles.streak}>{habit.streak} days</Text>
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
  streak: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Streak;
