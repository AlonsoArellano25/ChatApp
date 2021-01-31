import React, {useEffect, useState, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Title, Appbar} from 'react-native-paper';
import Input from '../components/Input';
import firebase from '../utils/firebase';
import 'firebase/database';
import moment from 'moment';
import Message from '../components/Message';
import {map} from 'lodash';

export default function Chat({userName}) {
  const [messages, setMessages] = useState([]);
  const chatScrollRef = useRef();

  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', (snapshot) => {
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTo({y: 1000000000000000000});
  }, [messages]);

  const sendMessage = (message) => {
    const time = moment().format('hh:mm a');
    firebase.database().ref('general').push({userName, text: message, time});
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Chat de netos" />
      </Appbar.Header>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef}>
          {map(messages, (message, index) => (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#16202b',
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
