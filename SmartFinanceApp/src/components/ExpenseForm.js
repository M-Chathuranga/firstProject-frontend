import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [categories, setCategories] = useState(['Food', 'Transport', 'Academic']);
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [newCategory, setNewCategory] = useState('');

  // අලුත් Category එකක් එකතු කිරීමට
  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleSave = () => {
    console.log({ amount, date, note, category: selectedCategory });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense & Category Management</Text>
      
      {/* Expense Adding Form */}
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 500)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Date (e.g., 2026-08-14)"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Note (e.g., Lunch)"
        value={note}
        onChangeText={setNote}
      />

      {/* Category Management Section */}
      <Text style={styles.label}>Manage Categories:</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="New Category Name"
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Select Category */}
      <Text style={[styles.label, { marginTop: 15 }]}>Select Category for Expense:</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.catButton, selectedCategory === cat && styles.selectedCat]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={selectedCategory === cat ? styles.selectedText : styles.catText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 12 },
  label: { fontSize: 15, marginBottom: 6, fontWeight: '600' },
  row: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  addButton: { backgroundColor: '#007BFF', padding: 12, borderRadius: 8, marginLeft: 8, justifyContent: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  categoryContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  catButton: { padding: 8, borderWidth: 1, borderColor: '#007BFF', borderRadius: 6, marginRight: 8, marginBottom: 8 },
  selectedCat: { backgroundColor: '#007BFF' },
  catText: { color: '#007BFF' },
  selectedText: { color: '#fff' },
  saveButton: { backgroundColor: '#28A745', padding: 15, borderRadius: 8, alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});