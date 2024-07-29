import React,{useEffect, useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import axios  from './axios'
import Message from './Message'

const App = () => {

  const [messages, setMessages] = useState([]);

  //TODO: it sends messages 
  // const sendMessage = async() => {
  //   await axios.post('/save/message', {
  //     username: 'subho',
  //     message: 'sent at 8 pm',
  //     timestamp: Date.now(),
  //   })
  // }

  // useEffect(() => {
  //   sendMessage()
  // },[])

  const sync = async() => {
    await axios.get('/retrieve/conversation').then((res) => {
      setMessages(res.data)
      // console.log(res.data)
    })
  }

  useEffect(() => {
    sync()
  },[])

  

  return (
    <View style={styles.container}>
      {
        messages.map(message => (
          // console.log(message);
          <Message key={message._id} message={message} />
        ))
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  input: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 15,
    marginBottom: 50,
    borderRadius: 15,
    display: 'flex',
  },
  textArea: {
    padding: 5,
  },
})
