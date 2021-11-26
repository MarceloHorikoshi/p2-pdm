import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ContatoItem = (props) => {
  return (
    <View style={styles.contatoNaLista}>
      {/* <Text>id: {props.idContato}</Text> */}
      <Text>Nome: {props.nomeContato}</Text>
      <Text>Número: {props.numeroContato}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contatoNaLista: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#d4d3d2',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 2,
    borderRadius: 12,
    fontSize: 16,
    width: '50%',
    alignSelf: 'center',
  },
});

export default ContatoItem;
