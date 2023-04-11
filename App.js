import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Calendar from './src/components/Calendar';
import Habit from './src/components/Habit';
import Streak from './src/components/Streak';
import AddHabitScreen from './src/AddHabitScreen';
import HomeScreen from './src/HomeScreen';
import * as Haptics from 'expo-haptics';


export default function App() {
  const dummyHabits = [
    {
      id: 1,
      name: 'Drink water',
      streak: 5,
      completed: false,
    },
    {
      id: 2,
      name: 'Exercise',
      streak: 3,
      completed: false,
    },
  ];

  const [habits, setHabits] = useState(dummyHabits);
  const [showAddHabitScreen, setShowAddHabitScreen] = useState(false);

  const toggleAddHabitScreen = async() => {
    Haptics.impactAsync();
    
    setShowAddHabitScreen(!showAddHabitScreen);
  };

  const handleToggleHabit = (habitId) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId
        ? {
            ...habit,
            completed: !habit.completed,
            streak: !habit.completed ? habit.streak + 1 : habit.streak,
          }
        : habit
    );
    setHabits(updatedHabits);
  };

  const handleDateChange = (selectedDate) => {
    console.log('Selected date:', selectedDate);
  };

  const handleAddHabit = (newHabit) => {
    setHabits((prevHabits) => {
      return [
        ...prevHabits,
        {
          id: Math.max(...prevHabits.map((habit) => habit.id)) + 1,
          ...newHabit,
          streak: 0,
          completed: false,
        },
      ];
    });
  };
  
  

  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={toggleAddHabitScreen}>
          {showAddHabitScreen ? <Text style={styles.buttonText}>Home</Text> :<Text style={styles.buttonText}>Add Habit</Text>} 
        </TouchableOpacity>
        </SafeAreaView>
      </View>
      {showAddHabitScreen ? (
        <AddHabitScreen onAddHabit={handleAddHabit} />
      ) : (
        <HomeScreen
          habits={habits}
          onToggleHabit={handleToggleHabit}
          onDateChange={handleDateChange}
        />
        
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff87',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5733',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
habitContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},
});