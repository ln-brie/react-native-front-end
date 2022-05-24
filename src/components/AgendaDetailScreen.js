import React, {useCallback} from "react";
import {StyleSheet, Text, SafeAreaView, Button, Image, View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const AgendaDetailScreen = ({route, navigation}) => {
  const closeScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const { title, descr, date, lieu, adresse, image} = route.params;

  return (
    <SafeAreaView style={style.container}>
      <Button style={style.button} onPress={closeScreen} title="Retour vers la liste des événements"/>
      <Image source={{ uri: image}} style={{ height:200, resizeMode:'cover' }}/>
      <View style={style.infos}>

        <Text style={style.titreItem}>{title}</Text>
        <Text> {date} </Text>
        <Text style={ style.descr}>{descr}</Text>
        <View style={ style.loc}>
          <Ionicons name='location-sharp' size={20} style={{ alignSelf: 'center'}} />
          <Text style={{ textAlign: 'center'}}>{adresse}  </Text>
          <Text style={{ textAlign: 'center'}}>{lieu}  </Text>
        </View>
        
      </View>       
        
        <Button onPress={closeScreen} title="Retour vers la liste des événements"/>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  titreItem: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center'
  },
  descr:{
    marginTop:20,
    marginBottom: 20
  },
  infos: {
    padding: 20
  },
  button: {
    margin:0
  },
  loc: {
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default AgendaDetailScreen;
