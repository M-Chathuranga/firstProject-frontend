import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ExpenseHistory({ expenses, onDelete }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expense History</Text>
      {expenses.length === 0 ? (
        <Text style={styles.emptyText}>No expenses recorded yet.</Text>
      ) : (
        expenses.map((item) => (
          <View key={item.id} style={styles.card}>
            <View>
              <Text style={styles.note}>{item.note || item.category}</Text>
              <Text style={styles.sub}>
                {item.category} • {item.date || "2026-09-01"}
              </Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.amount}>Rs {item.amount}</Text>
              <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Ionicons name="trash-outline" size={18} color="#ff6b6b" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
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
  note: { fontSize: 15, fontWeight: "600", color: "#1e293b" },
  sub: { fontSize: 12, color: "#64748b", marginTop: 2 },
  right: { flexDirection: "row", alignItems: "center", gap: 12 },
  amount: { fontSize: 15, fontWeight: "bold", color: "#ef4444" },
  emptyText: { fontSize: 14, color: "#94a3b8", fontStyle: "italic" },
});
