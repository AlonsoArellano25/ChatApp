import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import {TextInput, IconButton} from 'react-native-paper';

export default function Input({sendMessage}) {
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemInput}>
        <TextInput
          placeholder="Esscribe tu mensaje..."
          style={{color: 'fff', backgroundColor: '#16202b', width: '80%'}}
          value={message}
          onChange={(e) => setMessage(e.nativeEvent.text)}
        />
        <TouchableOpacity onPress={onSubmit}>
          <IconButton icon="send" style={{color: '#fff'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  itemInput: {
    borderColor: '#16202b',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
