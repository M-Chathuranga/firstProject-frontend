import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CategoryManager({
  categories,
  onAddCategory,
  onDeleteCategory,
}) {
  const [newCat, setNewCat] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Category Management</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New category name"
          value={newCat}
          onChangeText={setNewCat}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            onAddCategory(newCat);
            setNewCat("");
          }}
        >
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>

      {categories.map((cat) => (
        <View key={cat.id} style={styles.card}>
          <Text style={styles.catText}>{cat.name}</Text>
          <TouchableOpacity onPress={() => onDeleteCategory(cat.id)}>
            <Ionicons name="trash-outline" size={18} color="#ff6b6b" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f8fafc", flexGrow: 1 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#1e293b",
  },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 14 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#fff",
    color: "#1e293b",
  },
  addBtn: {
    backgroundColor: "#3b82f6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 4,
  },
  addBtnText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  catText: { fontSize: 15, fontWeight: "500", color: "#334155" },
});
