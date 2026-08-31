import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ExpenseForm from './ExpenseForm';

export default function AppTabs() {
  const [activeTab, setActiveTab] = useState('Add Expense');

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Tabs */}
      <View style={styles.tabHeader}>
        {['Add Expense', 'History / Delete', 'Categories'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {activeTab === 'Add Expense' && <ExpenseForm />}
        {activeTab === 'History / Delete' && (
          <View style={styles.centerView}>
            <Text style={styles.placeholderText}>History & Delete Screen</Text>
          </View>
        )}
        {activeTab === 'Categories' && (
          <View style={styles.centerView}>
            <Text style={styles.placeholderText}>Categories Screen</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  tabHeader: { flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#dee2e6', justifyContent: 'space-around', paddingTop: 10 },
  tabButton: { paddingVertical: 12, paddingHorizontal: 10, borderBottomWidth: 3, borderBottomColor: 'transparent' },
  activeTabButton: { borderBottomColor: '#4b49ac' },
  tabText: { fontSize: 13, color: '#6c757d', fontWeight: '500' },
  activeTabText: { color: '#4b49ac', fontWeight: 'bold' },
  contentContainer: { flex: 1 },
  centerView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 16, color: '#495057' }
});