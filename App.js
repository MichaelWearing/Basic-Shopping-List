import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Alert } from "react-native";
import uuid from 'uuid-random'
import AddItem from "./src/components/AddItem";
import Header from "./src/components/Header";
import ListItem from "./src/components/ListItem";

export default function App() {
  const [items, setitems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("No item =/", "Please enter an item", [{ text: "ok" }]);
    } else {
      setitems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
