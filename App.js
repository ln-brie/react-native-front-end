/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import actus from './src/assets/data/Angers_News.json';
import musees from './src/assets/data/Angers_Musees.json';
import agenda from './src/assets/data/Angers_Events.json';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ActuDetailScreen from './src/components/ActuDetailScreen';
import AgendaDetailScreen from './src/components/AgendaDetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); 



const Actus = () => {
  const navigation = useNavigation();
  const Item = ({title}) => <Text style={style.titreItemActu}>{title}</Text>
  const renderItem = ({item}) => (
  <TouchableOpacity onPress={    
    () => navigation.navigate('ActuDetail', {
      title: item.title,
      content: item.content,
      image: item.image
    })
  } >
    <View  style={style.itemListe}>
      <Image source={{ uri: item.image}} style={style.imageFond} />
      <Item title={item.title}  />
    </View>
    
  </TouchableOpacity>  
);  
  return(
    <SafeAreaView>
         <View>
          <FlatList
          data={actus.articles}
          renderItem={renderItem}
          keyExtractor={item => item.publishedAt}
          />
        </View> 
  </SafeAreaView>
  );
};

const ScreenActus = () => {
  return(
      <Stack.Navigator initialRouteName='actus'>
        <Stack.Screen name='actus' component={Actus} options={{ headerShown: false}} />
        <Stack.Screen name='ActuDetail' component={ActuDetailScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
  );
};




const Agenda = () => {
  const navigation = useNavigation();
  const ItemEvent = ({title}) => <Text style={style.titreItem}>{title}</Text>
  const renderItemEvents = ({item}) => (
  <TouchableOpacity onPress={
    () => navigation.navigate('EventDetail', {
      title: item.fields.title,
      descr: item.fields.free_text,
      date: item.fields.space_time_info,
      lieu: item.fields.placename,
      ville: item.fields.city,
      adresse: item.fields.address,
      image: item.fields.image
    })
  } >
    <View style={ style.itemListe} >
      <Image source={{ uri: item.fields.image}} style={style.imageFond} />
      <View style={ style.eventText}>
        <ItemEvent title={item.fields.title}  />
        <Text style={style.descrItem}>{ item.fields.space_time_info}</Text>
        <Text style={style.descrItem}>Tags : {item.fields.tags}</Text>
      </View>
    </View>
    
  </TouchableOpacity>  
);
  return(
    <SafeAreaView>
        <View>
          <FlatList
          data={agenda.records}
          renderItem={renderItemEvents}
          keyExtractor={item => item.recordid}
          />
        </View>
    </SafeAreaView>
);  
};

const ScreenAgenda = () => {
  return(
      <Stack.Navigator initialRouteName='agenda'>
        <Stack.Screen name='agenda' component={Agenda} options={{ headerShown: false}} />
        <Stack.Screen name='EventDetail' component={AgendaDetailScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
  );
};




const Musees = () => {
  const ItemMusee = ({title}) => <Text style={style.titreMusee}>{title}</Text>
  const renderItemMusee = ({item}) => (
  <View style={style.itemMusee}>
    <Image source={ require('./src/assets/img/greek-temple.png' )} style={{ width: 50, height: 50}} />
    <View style={style.texteMusee}>
      <ItemMusee title={item.fields.nomoff}/>
      <View style={style.ligneMusee}>
        <Ionicons name='location-sharp' size={15} />
        <Text style={style.infosMusee}>{item.fields.adrl1_m} {item.fields.cp_m} {item.fields.ville_m}</Text>
      </View>  
      <View style={style.ligneMusee}>
        <Ionicons name='call-sharp' size={15} />
        <Text style={style.infosMusee}>{item.fields.tel_m}</Text>
      </View>    
    </View>   
  </View>
)
  return(
    <SafeAreaView>
        <View>
          <FlatList
          data={musees.records}
          renderItem={renderItemMusee}
          keyExtractor={item => item.recordid}
          />
        </View>
    </SafeAreaView>
  )
}



const App = () => {
  return (
  <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Agenda" component={ScreenAgenda} />   
        <Drawer.Screen name="Musées" component={Musees} />  
        <Drawer.Screen name="Actualités" component={ScreenActus} />   
      </Drawer.Navigator>
  </NavigationContainer>
  );
};



const style = StyleSheet.create({
  imageFond: {
    height:150,
    width: 350,
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'cover',
    borderRadius: 20
  },
  itemListe: {
    height:150,
    flex:1,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    margin: 20,
  },
  titreItem: {
      color: "white",
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold'
  },
  titreItemActu: {
    color: "white",
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: 15
  },
  eventText: {
    color: "white",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    textAlign:'center',
    padding: 10
  },
  descrItem:{
    color: "white",
    textAlign: 'center',
    fontSize: 10,
  },
  ligneMusee: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  itemMusee: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center'
  },
  texteMusee: {
    marginLeft:40,
    marginRight:40,
  },
  titreMusee: {
    fontSize: 18,
    textAlign: 'center'
  },
  infosMusee: {
    textAlign: 'center'
  }
});



export default App;
