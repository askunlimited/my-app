import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {
      key: Math.random().toString(), value: enteredGoals
    }]);
  };

  return (
    <View style={styles.screen} >

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
        )}
      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 20
  }


});
