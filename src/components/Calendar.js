import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate || date);
    onDateChange(selectedDate);
  };

  return (
    <View>
      <DateTimePicker
        value={date}
        mode="date"
        display="calendar"
        onChange={handleDateChange}
      />
    </View>
  );
};

export default Calendar;
