import React from 'react';
import { StyleSheet, View, StatusBar, FlatList,} from 'react-native';

import Card from '../components/FlightCard.js';

const flight = [
  {
    name: 'Turkish Airlines',
    categories: 'Economy Class',
    deliveryTime: 'Istanbul-Bratislava',
    distance: '1520,3 KM  Pm 09:00',
     image:source=require('../assets/istanbul.jpg'),
    id: 1,
  },
  {
     name: 'Pegasus',
    categories: 'Economy Class',
    deliveryTime: 'Amsterdam-Kahire',
    distance: '3282 KM Pm 06:00',
      image:source=require('../assets/amsterdam.jpg'),

    id: 2,
  },
  {
     name: 'Qatar Airlines',
    categories: 'First Class',
    deliveryTime: 'Berlin-Brüksel',
     image:source=require('../assets/bruksel.jpg'),

    distance: '754,3 KM Pm 17:00',
    id: 3,
  },
  {
    name: 'Sunexpress',
    categories: 'Economy Class',
    deliveryTime: 'Varşova-Buenos Aires',
     image:source=require('../assets/varsova.jpg'),

    distance: '12.320 km Pm 11:00',
    id: 4,
  },
  {
    name: 'Anadolu Jet',
    categories: 'First Class',
    deliveryTime: 'Norwich-Oslo',
     image:source=require('../assets/oslo.jpg'),

    distance: '1645,6 km Pm 07:00',
    id: 5,
  },
  {
    name: 'British Airways',
    categories: 'First Class',
    deliveryTime: 'Tokyo-Montevideo',
     image:source=require('../assets/tokyo.jpg'),

    distance: '18.565 km Pm 01:00',
    id: 6,
  },
    {
    name: 'Air France',
    categories: 'Economy Class',
    deliveryTime: 'Calais-Dublin',
     image:source=require('../assets/dublin.jpg'),
    distance: '764.2 km Pm 15:20',
    id: 7, 
  },
    {
    name: 'Lufthansa',
    categories: 'Economy Class',
    deliveryTime: 'Bogota-Tahran',
     image:source=require('../assets/bogota.jpg'),
    distance: '12.767 km Pm 23:40',
    id: 8,
  },
   {
    name: 'Emirates',
    categories: 'Economy Class',
    deliveryTime: 'Viyana-Paris',
     image:source=require('../assets/paris.jpg'),
    distance: '1235,3 km Pm 10:30',
    id: 9,
  },
   {
    name: 'KLM',
    categories: 'Economy Class',
    deliveryTime: 'Moscow-Canberra',
     image:source=require('../assets/moskova.jpg'),
    distance: '14.472 km Pm 08:10',
    id: 10,
  },
];

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>

      <FlatList
        data={flight}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(flights) => flights.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40A2E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

