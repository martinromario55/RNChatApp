import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
} from 'react-native'
// import { createUserWithEmailAndPassword } from 'firebase/auth/react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
// import { FIREBASE_AUTH } from '../../config/Firebase.Config'

const register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle Registration with firebase
  // const handleRegister = async () => {
  //   try {
  //     createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
  //     console.log('Logged In')
  //   } catch (error) {
  //     console.log('There was an error loggin in', error)
  //   }
  // }

  return (
    <View style={styles.container}>
      {/* placeholderimage */}
      <Image
        style={styles.logo}
        source={{
          uri: 'https://picsum.photos/200/200',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.button}>
        <Button title="register" />
      </View>

      <Link href="/(auth)/login" asChild>
        <Pressable>
          <Text style={styles.link}>Already have an account? Login</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    height: 40,
    margin: 10,
  },
  link: {
    color: '#007aff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    margin: 10,
  },
})

export default register
