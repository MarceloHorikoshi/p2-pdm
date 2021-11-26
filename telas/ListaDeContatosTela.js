import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ContatoItem from '../componentes/ContatoItem';

const ListaDeContatosTela = () => {
  const contatos = useSelector((estado) => estado.contatos.contatos);
  return (
    <>
      <ScrollView>
        <FlatList
          data={contatos}
          keyExtractor={(contato) => contato.id}
          renderItem={(contato) => (
            <ContatoItem
              //idContato={contato.item.id}
              nomeContato={contato.item.nome}
              numeroContato={contato.item.numero}
            />
          )}
        />
      </ScrollView>
    </>
  );
};

export default ListaDeContatosTela;

const styles = StyleSheet.create({});
