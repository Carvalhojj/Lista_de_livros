import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 120,
    paddingRight: 10,
    paddingBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
  }
})

const SectionListBasics = () => {
    return (
      <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
      <View style={styles.container}>
        <Text style={style.container}>Lista de livros</Text>
        <SectionList
          sections={[
            {title: 'A', data: ['A história da família de Anne Frank', 'A ilusão do tempo', 'A máquina do tempo', 'As quatro rainhas mortas',
                                'A revolução dos bichos']},
            {title: 'B', data: ['Breves respostas para grandes questões']},
            {title: 'C', data: []},
            {title: 'D', data: ['Data Science para Negócios']},
            {title: 'E', data: ['Encontros no tempo', 'Esta e todas as vidas']},
            {title: 'F', data: ['Fera']},
            {title: 'G', data: ['Gravity']},
            {title: 'H', data: []},
            {title: 'I', data: ['Interestelar']},
            {title: 'J', data: []},
            {title: 'K', data: []},
            {title: 'L', data: []},
            {title: 'M', data: ['Manual de DevOps', 'Matéria escura']},
            {title: 'N', data: ['Na corda bamba', 'Noites brancas', 'No rumo do mundo de regeneração']},
            {title: 'O', data: ['O diário de Anne Frank', 'O Hobbit', 'O investidor inteligente', 'O Livro dos Espíritos', 
                                'O Livro dos Médiuns', 'O processo','O universo elegante', 'O velho que acordou menino']},
            {title: 'P', data: []},
            {title: 'Q', data: []},
            {title: 'R', data: ['Recursão', 'Respire uma vida em movimento']},
            {title: 'S', data: ['Sarau Brasil 2019']},
            {title: 'T', data: []},
            {title: 'U', data: ['Uma breve história do tempo']},
            {title: 'V', data: []},
            {title: 'W', data: []},
            {title: 'X', data: []},
            {title: 'Y', data: []},
            {title: 'Z', data: []},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
      </View>
    );
}

export default SectionListBasics;