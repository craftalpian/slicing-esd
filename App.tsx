// import React  from 'react';
// import {View, Text} from 'react-native';

// const ViewBoxesWithColorAndText = () => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         // height: 100, // density-independent pixels
//         padding: 20,
//         backgroundColor: 'green',
//         flex: 1
//       }}>
//       <View style={{backgroundColor: 'blue', flex: 0.3}} />
//       <View style={{backgroundColor: 'red', flex: 0.5}} />
//       {/* <View style={{backgroundColor: 'yellow', flex: 0.1}} />
//       <View style={{backgroundColor: 'pink', flex: 0.1}} /> */}
//       <Text style={{backgroundColor: 'cyan'}}>Hello World!!!!!!!</Text>
//     </View>
//   );
// };

// export default ViewBoxesWithColorAndText;































// import React, {useState} from 'react';
// import {Text, StyleSheet} from 'react-native';

// const TextInANest = () => {
//   const [titleText, setTitleText] = useState("Bird's Nest");
//   const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

//   const onPressTitle = (value: string) => {
//     setTitleText(value);
//   };

//   return (
//     <Text style={styles.main}>
//       <Text style={styles.titleText} onPress={() => onPressTitle("shalex gans")}>
//         {titleText}
//         {'\n'}
//         {'\n'}
//       </Text>
//       <Text>{bodyText}</Text>
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     // backgroundColor: 'red'
//   },
//   main: {
//     color: 'red'
//   }
// });

// export default TextInANest;













// import React from 'react';
// import {View, Image, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={require('./flex-direction.png')}
//       />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <Image
//         style={styles.logo}
//         source={{
//           uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//         }}
//       />
//     </View>
//   );
// };

// export default DisplayAnImage;








// import React from 'react';
// import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

// const TextInputExample = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');

//   return (
//     <SafeAreaView>
//       <Text>{text}</Text>
//       <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         onChangeText={(text) => onChangeText(text)}
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="phone-pad"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

// export default TextInputExample;











// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
// } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });

// export default App;