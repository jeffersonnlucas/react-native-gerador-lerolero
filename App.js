/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Aperte o botão para ter um momento de iluminação filosófica.',
      img: require('./src/images/ovelha-close.png')
    };

    this.gerarFrase = this.gerarFrase.bind(this);

    this.frases = [
      [
        "Fala pro cliente que ",
        "Com este commit, ",
        "Nesse pull request, ",
        "Dado o fluxo de dados atual, ",
        "Explica pro Product Onwer que ",
        "Desde ontem a noite ",
        "A equipe de suporte precisa saber que ",
      ],
      [
        "a normalização da data ",
        "um erro não identificado ",
        "o gerenciador de dependências do frontend ",
        "o módulo de recursão paralela ",
        "a otimização de performance da renderização do DOM ",
        "a disposição dos elementos HTML ",
        "a compilação final do programa ",
        "o deploy automatizado no Heroku ",
        "o último pull request desse SCRUM ",
      ],
      [
        "deletou todas as entradas ",
        "otimizou a renderização ",
        "causou o bug ",
        "corrigiu o bug ",
        "superou o desempenho ",
        "complexificou o merge ",
        "facilitou a resolução de conflito ",
        "causou a race condition ",
      ],
      [
        "do nosso servidor de DNS.",
        "do polimorfismo aplicado nas classes.",
        "do fluxo de dados de forma retroativa no server.",
        "de estados estáticos nos componentes da UI.",
        "do JSON compilado a partir de proto-buffers.",
        "de uma compilação com tempo acima da media.",
        "de uma configuração Webpack eficiente nos builds.",
        "da execução parelela de funções em multi-threads.",
        "de compilação multi-plataforma de forma asincrona.",
        "da execução de requisições effcientes na API.",
        "na estabilidade do protocolo de transferência de dados.",
        "do carregamento de JSON delimitado por linhas.",
        "na interpolação dinâmica de strings.",
        "no parse retroativo do DOM.",
        "no fechamento automático das tags.",
        "na compilação de templates literais.",
        "na definição de variaveis com tipos estáticos.",
        "da renderização de floats parciais.",
        "na organização alfanumérico dos arrays multidimensionais",
        "dos parametros passados em funções privadas.",
        "dos argumentos que definem um schema dinâmico.",
        "na criação de novos polyfills para suportar os processos."
      ]
    ];
  }

  gerarFrase() {
    return () => {
      let frase = this.frases.reduce((sentence, currentPiece) => {
        return sentence + currentPiece[Math.floor(Math.random() * currentPiece.length)]
      }, '');

      this.setState((state, props) => ({
        textoFrase: '"' + frase + '"',
        img: require('./src/images/ovelha-open.png')
      }));
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <Image
          source={this.state.img}
          style={styles.ovelha}
        />

        <TouchableOpacity style={styles.btn} onPress={this.gerarFrase()}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>Gerar Frase</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ovelha: {
    width: 250,
    height: 350
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    margin: 5
  },
  btnView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
