import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


// -------- PLANETS --------
function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(data => setPlanets(data.results));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}


// -------- FILMS --------
function FilmsScreen() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(data => setFilms(data.results));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}


// -------- SPACESHIPS --------
function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
      .then(data => setShips(data.results));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}


// -------- NAVIGATION --------
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  );
}


// -------- MAIN APP --------
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}