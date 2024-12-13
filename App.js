import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Bar Beer Tickets!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Button title="Login" onPress={() => alert('Login realizado!')} />
      <Button title="Ainda não tem conta? Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}

function CadastroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="CPF" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Button title="Cadastrar" onPress={() => alert('Cadastro realizado!')} />
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Perfil do Usuário</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Principal" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
