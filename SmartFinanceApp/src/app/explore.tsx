import { ScrollView, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import CategoryManager from '../components/CategoryManager';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <ExpenseForm onSave={(data:any) => console.log(data)} />
      <CategoryManager />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});