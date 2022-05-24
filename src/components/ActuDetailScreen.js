import React, {useCallback} from "react";
import {StyleSheet, Text, SafeAreaView, Button, Image, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ActuDetailScreen = ({route, navigation}) => {
  const closeScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const {title, content, image} = route.params;

  return (
    <SafeAreaView style={style.container}>
        <Button onPress={closeScreen} title="Retour vers la liste des actualités"/>
        <Image source={{ uri: image}} style={{ height:200, resizeMode: 'cover'}} />

        <View style={style.infosActu}>
            <Text style={style.titreItem}>{title}</Text>
            <Text style={style.content}>{content}</Text>
        </View>
        
        <Button onPress={closeScreen} title="Retour vers la liste des actualités"/>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  infosActu: {
    padding: 20,
    marginTop: 15,
  },
  titreItem: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  content: {
      marginBottom:20
  }
});

export default ActuDetailScreen;
