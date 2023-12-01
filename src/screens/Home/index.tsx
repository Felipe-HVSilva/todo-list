import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { TaskListEmpty } from "../../components/taskListEmpty";
import { useState } from "react";
import { CardTask } from "../../components/cardTask";

interface TaskProps {
  id: number;
  isCompleted: boolean;
  title: string;
}

export function Home() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask(name: string) {
    const newTask = {
      title: name,
      id: Math.random(),
      isCompleted: false,
    };

    if (name.trim()) {
      setTasks((prevState) => [...prevState, newTask]);
      setInputText("");
    }
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter((task) => task.id !== id);

    setTasks(removeTask);
  }

  function handleCompleteTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  const tasksCompleted = tasks.reduce((acc, currentValue) => {
    currentValue.isCompleted === true && acc++;
    return acc;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          alt="Logo"
          style={{ width: 110, height: 32 }}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          style={styles.input}
          placeholderTextColor={"#808080"}
          onChangeText={setInputText}
          value={inputText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(inputText)}
        >
          <Text style={styles.textInput}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskList}>
        <View style={styles.taskListHeader}>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitleCreate}>Criadas</Text>
            <View style={styles.buttonInfoTask}>
              <Text style={styles.buttonText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitleCompleted}>Concluidas</Text>
            <View style={styles.buttonInfoTask}>
              <Text style={styles.buttonText}>{tasksCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={(task) => (
            <CardTask
              task={task.item}
              onRemoveTask={handleRemoveTask}
              onChangeCompletedTask={handleCompleteTask}
            />
          )}
          ListEmptyComponent={<TaskListEmpty />}
        />
      </View>
    </View>
  );
}
