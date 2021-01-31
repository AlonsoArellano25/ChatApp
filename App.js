import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';
import Chat from './src/screens/Chat';
import Login from './src/screens/Login';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  const [userName, setUserName] = useState(null);
  return (
    <PaperProvider>
      <View style={styles.container}>
        {!userName ? (
          <Login setUserName={setUserName} />
        ) : (
          <Chat userName={userName} />
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16202b',
  },
});
