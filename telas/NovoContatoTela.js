import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Cores from '../constantes/Cores';
import * as contatosActions from '../store/contatos-actions';

const NovoContatoTela = (props) => {
  const [nomeNovoContato, setNomeNovoContato] = useState('');
  const [numeroNovoContato, setNumeroNovoContato] = useState('');
  const dispatch = useDispatch();

  const novoContatoNomeAlterado = (texto) => {
    setNomeNovoContato(texto);
  };
  const novoContatoNumeroAlterado = (texto) => {
    setNumeroNovoContato(texto);
  };

  const adicionarContato = () => {
    const acao = contatosActions.addContato(nomeNovoContato, numeroNovoContato);
    dispatch(acao);
    setNomeNovoContato('');
    setNumeroNovoContato('');
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo contato</Text>
        <TextInput
          placeholder="Nome: "
          style={styles.textInput}
          onChangeText={novoContatoNomeAlterado}
          value={nomeNovoContato}
        />
        <TextInput
          placeholder="Número: "
          style={styles.textInput}
          onChangeText={novoContatoNumeroAlterado}
          value={numeroNovoContato}
        />
        <Button
          title="Salvar Contato"
          color={Cores.primary}
          onPress={() => adicionarContato()}
        />
      </View>
    </ScrollView>
  );
};

export default NovoContatoTela;

const styles = StyleSheet.create({
  form: {
    margin: 200,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 12,
  },
  textInput: {
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 12,
    paddingVertical: 8,
    backgroundColor: '#d4d3d2',
    borderStyle: 'solid',
    bordeColor: 'black',
    borderWidth: 1.5,
  },
});
