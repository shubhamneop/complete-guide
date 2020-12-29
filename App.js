import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addGoalHandler = goalTitle => {
    setTaskList(currentTasks => [
      ...currentTasks, {id: Math.random().toString(),
         value : goalTitle}
        ]);
  };

  const removeGoalHandler = taskId => {
    setTaskList(currentTasks => {
      return currentTasks.filter((task) => taskId !== task.id );
    })
  };


  return (
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler} />
      
      <FlatList
       keyExtractor={(item, index) => item.id}
       data={taskList} renderItem={itemData => (
        <GoalItem
         id={itemData.item.id}
         onDelete={removeGoalHandler} 
         title={itemData.item.value}
        />  
      )}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  
});
