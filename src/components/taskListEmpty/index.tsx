import { Text, View } from "react-native";
import { styles } from "./styles";

export function TaskListEmpty() {
  return (
    <View style={styles.taskEmpty}>
      <Text style={styles.taskEmptyTitle}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.taskEmptySubTitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
