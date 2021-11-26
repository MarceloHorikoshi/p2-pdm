import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoAdicionarContato from '../componentes/BotaoAdicionarContato';
import Cores from '../constantes/Cores';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import NovoContatoTela from '../telas/NovoContatoTela';

const Stack = createNativeStackNavigator();

const container = (
  <NavigationContainer>
    <Stack.Navigator
      i
      initialRouteName="ListaDeContatos"
      screenOptions={{
        headerStyle: { backgroundColor: Cores.primary },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="ListaDeContatos"
        component={ListaDeContatosTela}
        options={(props) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={BotaoAdicionarContato}>
              <Item
                title="Adicionar"
                style={styles.button}
                iconName="md-add"
                onPress={() => {
                  props.navigation.navigate('NovoContato');
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen name="NovoContato" component={NovoContatoTela} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 100,
    height: 100,
    bottom: -850,
    right: 40,
    borderRadius: 100 / 2,
    shadowRadius: 10,
    shadowColor: '#064059',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 15,
    },
    backgroundColor: '#2f7b9c',
  },
});

export default container;
