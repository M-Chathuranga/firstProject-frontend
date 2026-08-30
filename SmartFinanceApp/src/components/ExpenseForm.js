import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  
  // Categories state (Food, Transport, Academic, and dynamically added ones)
  const [categories, setCategories] = useState(['Food', 'Transport', 'Academic']);
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [newCategory, setNewCategory] = useState('');

  // Function to add a new category
  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory.trim()]);
      setSelectedCategory(newCategory.trim());
      setNewCategory('');
    }
  };

  // Function to handle expense submission
  const handleSubmit = () => {
    console.log({
      amount,
      date,
      note,
      category: selectedCategory,
    });
    alert('Expense Added Successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Expense Entry & Categories</Text>
      
      {/* --- 1. Category Management Section --- */}
      <Text style={styles.label}>Select Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryChip,
              selectedCategory === cat && styles.selectedCategoryChip,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.selectedCategoryText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add New Category Row */}
      <View style={styles.addCategoryRow}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="New Category Name"
          placeholderTextColor="#888"
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <TouchableOpacity style={styles.addCategoryButton} onPress={handleAddCategory}>
          <Text style={styles.addCategoryButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* --- 2. Expense Adding Form Section --- */}
      <Text style={[styles.label, { marginTop: 20 }]}>Expense Details</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Amount (Rs.)"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        placeholderTextColor="#888"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Note (Optional)"
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
      />
      
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Save Expense</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  selectedCategoryChip: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addCategoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addCategoryButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCategoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});