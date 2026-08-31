import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function ExpenseForm({ onAddExpense, categories }) {
  const [amount, setAmount] = useState("0");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [note, setNote] = useState("");

  const handlePress = (value) => {
    if (value === "AC") {
      setAmount("0");
    } else if (value === "DEL") {
      setAmount(amount.length > 1 ? amount.slice(0, -1) : "0");
    } else {
      setAmount(amount === "0" ? value : amount + value);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.amountBox}>
        <Text style={styles.amountText}>Rs {amount}</Text>
      </View>

      <View style={styles.keypad}>
        {[
          "AC",
          "DEL",
          "%",
          "÷",
          "7",
          "8",
          "9",
          "×",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.key,
              (item === "=" || item === "AC") && styles.specialKey,
            ]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.keyText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>CATEGORY</Text>
      <View style={styles.categoryRow}>
        {categories &&
          categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.chip,
                selectedCategory === cat.name && styles.selectedChip,
              ]}
              onPress={() => setSelectedCategory(cat.name)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === cat.name && styles.selectedChipText,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
      </View>

      <Text style={styles.label}>NOTE (OPTIONAL)</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a note..."
        value={note}
        onChangeText={setNote}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => {
          onAddExpense(amount, note, selectedCategory);
          setAmount("0");
          setNote("");
        }}
      >
        <Text style={styles.saveBtnText}>Save Expense</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f8fafc", flexGrow: 1 },
  amountBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  amountText: { fontSize: 28, fontWeight: "bold", color: "#1e293b" },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  key: {
    width: "23%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  specialKey: { backgroundColor: "#f1f5f9" },
  keyText: { fontSize: 18, fontWeight: "600", color: "#334155" },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#64748b",
    marginBottom: 6,
    marginTop: 10,
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
  },
  selectedChip: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  chipText: { fontSize: 13, color: "#334155", fontWeight: "600" },
  selectedChipText: { color: "#fff" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    color: "#1e293b",
  },
  saveBtn: {
    backgroundColor: "#10b981",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
