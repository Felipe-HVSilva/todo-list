import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

interface CardTaskProps {
  task: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
  onRemoveTask: (id: number) => void;
  onChangeCompletedTask: (id: number) => void;
}

export function CardTask({
  task,
  onRemoveTask,
  onChangeCompletedTask,
}: CardTaskProps) {
  return (
    <View style={styles.cardTask}>
      <BouncyCheckbox
        fillColor="#8284FA"
        onPress={() => onChangeCompletedTask(task.id)}
      />
      {task.isCompleted ? (
        <Text style={styles.cardTextCompleted}>{task.title}</Text>
      ) : (
        <Text style={styles.cardText}>{task.title}</Text>
      )}
      <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
        <Text style={styles.trashTask}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
