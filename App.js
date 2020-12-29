import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,  View,Button,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setTaskList(currentTasks => [
      ...currentTasks, {id: Math.random().toString(),
         value : goalTitle}
        ]);
    setIsAddMode(false);    
  };

  const removeGoalHandler = taskId => {
    setTaskList(currentTasks => {
      return currentTasks.filter((task) => taskId !== task.id );
    })
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      
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
