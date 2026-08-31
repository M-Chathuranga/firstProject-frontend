import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryManager from "./CategoryManager";
import ExpenseForm from "./ExpenseForm";
import ExpenseHistory from "./ExpenseHistory";

export default function AppTabs() {
  const [tab, setTab] = useState("Add");
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([
    { id: "1", name: "Food" },
    { id: "2", name: "Transport" },
    { id: "3", name: "Academic" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Tabs Navigation */}
      <View style={styles.tabHeader}>
        <TouchableOpacity
          onPress={() => setTab("Add")}
          style={[styles.tabBtn, tab === "Add" && styles.activeTab]}
        >
          <Text style={[styles.tabText, tab === "Add" && styles.activeText]}>
            Add Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("History")}
          style={[styles.tabBtn, tab === "History" && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, tab === "History" && styles.activeText]}
          >
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("Category")}
          style={[styles.tabBtn, tab === "Category" && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, tab === "Category" && styles.activeText]}
          >
            Categories
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render Component based on Active Tab */}
      <View style={styles.content}>
        {tab === "Add" && (
          <ExpenseForm
            categories={categories}
            onAddExpense={(amount, note, category) => {
              setExpenses([
                ...expenses,
                { id: Date.now().toString(), amount, note, category },
              ]);
            }}
          />
        )}
        {tab === "History" && (
          <ExpenseHistory
            expenses={expenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        )}
        {tab === "Category" && (
          <CategoryManager
            categories={categories}
            onAddCategory={(name) => {
              if (name.trim())
                setCategories([
                  ...categories,
                  { id: Date.now().toString(), name },
                ]);
            }}
            onDeleteCategory={(id) =>
              setCategories(categories.filter((c) => c.id !== id))
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  tabHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingVertical: 10,
  },
  tabBtn: { paddingVertical: 8, paddingHorizontal: 12 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#4f46e5" },
  tabText: { fontSize: 14, fontWeight: "600", color: "#64748b" },
  activeText: { color: "#4f46e5", fontWeight: "bold" },
  content: { flex: 1 },
});
