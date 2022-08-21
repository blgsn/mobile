import  React from 'react';
import {
  StyleSheet, Image, TouchableOpacity,
  View,
  Text,
  Animated,
  FlatList,
  useWindowDimensions,
  
  ScrollView,
  TextInput,
} from 'react-native';
import { ScalingDot } from 'react-native-animated-pagination-dots';
import { SafeAreaView } from 'react-native-safe-area-context';
import Story from 'react-native-story'; 

const INTRO_DATA = [
  {
    key: '1',
    img: require('./assets/images/DigitusLogo.png'),
    image: require('./assets/images/J_0234-11.png'),
    title: 'Enim ad minim',
    description: ['Lorem ipsum dolor sit amet, consectetur',
     '\n adipiscing elit, sed do eiusmod tempor',
      '\n  incididunt ut labore et dolore magna',
       '\n aliqua. Ut enim ad minim veniam, qui'],
     img1: require('./assets/images/DigitusLogo.png'),
   image1: require('./assets/images/J_0256-07.png'),
    title1: 'Enim ad minim',
    description1:  ['Lorem ipsum dolor sit amet, consectetur',
    '\n adipiscing elit, sed do eiusmod tempor',
     '\n  incididunt ut labore et dolore magna',
      '\n aliqua. Ut enim ad minim veniam, qui'],
  img2: require('./assets/images/DigitusLogo.png'), 
   image2: require('./assets/images/J_0256-07.png'),
   title2: 'Enim ad minim',
   description2:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],

  },
  {
  key: '2',
  img: require('./assets/images/DigitusLogo.png'),
  image: require('./assets/images/J_0234-11.png'),
  title: 'Enim ad minim',
   description:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
  img1: require('./assets/images/DigitusLogo.png'),
   image1: require('./assets/images/J_0256-07.png'),
  title1: 'Enim ad minim',
   description1:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
  img2: require('./assets/images/DigitusLogo.png'),
  image2: require('./assets/images/J_0234-11.png'),
  title2: 'Enim ad minim',
   description2:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
},
{
  key: '3',
  img: require('./assets/images/DigitusLogo.png'),
  image: require('./assets/images/J_0234-11.png'),
  title: 'Enim ad minim',
   description:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
  
  img1: require('./assets/images/DigitusLogo.png'),
  image1: require('./assets/images/J_0256-07.png'),
  title1: 'Enim ad minim',
   description1:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
  img2: require('./assets/images/DigitusLogo.png'),
  image2: require('./assets/images/J_0234-11.png'),
  title2: 'Enim ad minim',
   description2:  ['Lorem ipsum dolor sit amet, consectetur',
   '\n adipiscing elit, sed do eiusmod tempor',
    '\n  incididunt ut labore et dolore magna',
     '\n aliqua. Ut enim ad minim veniam, qui'],
},
];

const App = () => {
  
  const { width } = useWindowDimensions();
  const scrollX = React.useRef(new Animated.Value(0)).current;

 
  const renderItem = React.useCallback( 
 
    ({ item }) => {
     
      return (
      
       
        <View style={[styles.itemContainer, { width: width - 80 }]}>


         
         <Animated.Image source={item.image} style={styles.image} />
         <Animated.Image source={item.img} style={styles.img} />
          <Text style={styles.title}>{item.title} </Text>
          <Animated.Text style={styles.description}>{item.description} </Animated.Text>
          <View style={styles.dotContainer}>
          
          <ScalingDot
            data={INTRO_DATA}
            scrollX={scrollX}
          
            containerStyle={{
              top: 30,
            }}
            inActiveDotColor={'#347af0'}
            activeDotColor={'#347af0'}
          />
          <View style={[styles.buttonContainer]}>
       
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => gotoNextPage()}
        >
          <Text style={[styles.buttonText]}>İleri</Text>
          </TouchableOpacity>
       
      
      </View> 
     
        </View> 
       
     
     <Animated.Image source={item.image1} style={styles.image1} />
        <Animated.Image source={item.img1} style={styles.img1} />   
          <Text style={styles.title1}>{item.title1} </Text>
          <Animated.Text style={styles.description1}>{item.description1} </Animated.Text> 
          <View style={styles.dotContainer}>
          
          <ScalingDot
            data={INTRO_DATA}
            scrollX={scrollX}
          
            containerStyle={{
              top: 30,
            }}
            inActiveDotColor={'#347af0'}
            activeDotColor={'#347af0'}
          />
          <View style={[styles.buttonContainer]}>
       
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => gotoNextPage()}
        >
          <Text style={[styles.buttonText]}>İleri</Text>
          </TouchableOpacity>
       
      </View> 
      </View> 
           <Animated.Image source={item.image2} style={styles.image2} /> 
         <Animated.Image source={item.img2} style={styles.img2} />
          <Text style={styles.title2}>{item.title2} </Text>
          <Animated.Text style={styles.description2}>{item.description2} </Animated.Text>
          <View style={styles.dotContainer}>
          
          <View style={[styles.buttonContainer]}>
          <ScalingDot
            data={INTRO_DATA}
            scrollX={scrollX}
          
            containerStyle={{
              top: 30,
            }}
            inActiveDotColor={'#347af0'}
            activeDotColor={'#347af0'}
          />
          
       
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => gotoNextPage()}
        >
          <Text style={[styles.buttonText]}>İleri</Text>
          </TouchableOpacity>
       
      </View> 
     </View>  
       
        </View>
     
   );
  },
   
    [width],
   
       
     
  
  ); 

  const keyExtractor = React.useCallback((item) => item.key, []);
   
  return (
   <SafeAreaView><ScrollView> 
    
    <View style={[styles.container]}> 
   
      <FlatList
        data={INTRO_DATA}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        style={styles.flatList}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
       
</View>
       
    </ScrollView></SafeAreaView>
  );
   
};

const styles = StyleSheet.create({
  container: {
    flex:15,
   paddingTop:800,
   paddingBottom:0,
   marginBottom:0,
   marginTop: -1250,
   

    backgroundColor: '#ffff',
  },
  
  title: {
    flex: 1,
    margin:80,
    marginBottom:-100,
    marginTop:340,
    fontSize: 24,
    fontWeight:'bold',
    color: '#278b5e',
    justifyContent: 'center',
  },
  description: {
    flex: 3,
    margin: 120,
    marginRight:-10,
    marginLeft:10,
    fontSize: 14,
    lineHeight:24,
    color: '#666b6e',
    justifyContent: 'center',
  },
  title1: {
    flex: 1,
    margin:-100,
    marginTop:-240,
    marginBottom:500,
    fontSize: 24,
    fontWeight:'bold',
    color: '#278b5e',
    justifyContent: 'center',
  },
  description1: {
    flex: 3,
    margin:-100,
    marginTop:-490,
    marginBottom:90,
    fontSize: 14,
    lineHeight:24,
    color: '#666b6e',
    justifyContent: 'center',
  },
  title2: {
    flex: 1,
    margin:-100,
    marginBottom:50,
    marginTop:220,
    fontSize: 24,
    fontWeight:'bold',
    color: '#278b5e',
    justifyContent: 'center',
  },
  description2: {
    flex: 3,
     margin:-50,
     marginTop:-20,
     marginBottom:120,
     fontSize: 14,
     lineHeight:24,
     color: '#666b6e',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
  },
  dotContainer: {
    
    marginBottom: 30,
    marginTop: -50,
    
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginTop:330,
    marginBottom:150,
    bottom:-150,
    marginHorizontal: 40,
    
    borderRadius: 20,
  },
  image: {
    flex:4,
    width: 576,
    height: 269.79,
    margin:10,
    marginTop:150,
    marginBottom:-300,
    resizeMode: 'cover'
  },
  img: {
    flex:2,
    width: 149,
    height: 78,
    margin:15,
    marginTop:-60,
    marginBottom:-15,
    resizeMode: 'cover'
  },
  image1: {
    flex: 4,
    width: 576,
    height: 269.79,
    margin:15,
    marginTop:95,
    marginBottom:-330,
    resizeMode: 'cover'
  },
  img1: {
    flex: 2,
    width: 149,
    height: 78,
    margin:50,
    marginBottom:560,
    marginTop:-20,
    resizeMode: 'cover'
  },
  image2: {
    flex: 4,
    width: 576,
    height: 269.79,
   margin:10,
    marginTop: 90,
    marginBottom:-10,
    resizeMode: 'cover'
  },
  img2: {
    flex: 2,
    width: 149,
    height: 78,
    margin:10,
    marginTop: -300,
    marginBottom: 50,
    resizeMode: 'cover'
  },

  button: {
    
    marginBottom: 80,
    marginTop: 60,
    fontWeight: '700',
    borderRightWidth: 100,
    borderLeftWidth: 100,
    borderWidth: 10,
    borderColor: '#278b5e',
    backgroundColor: '#278b5e',
    borderRadius: 18,
    borderRightColor: '#278b5e',
    borderLeftColor: '#278b5e',
    borderTopColor: '#278b5e',
    borderBottomColor:'#278b5e'

  },
  buttonContainer: {
    
    marginBottom: 100,
    marginTop: -80,
  },
 
});

export default App;