import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
  ActivityIndicator,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
// import firebase from 'firebase'
import { FIREBASE_AUTH } from '../../config/Firebase.Config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('johndoe@jd.com')
  const [password, setPassword] = useState('123456')
  const [loading, setLoading] = useState(false)
  // const router = useRouter()

  // handleLogin
  const handleLogin = async () => {
    try {
      setLoading(true)
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      console.log('Logged In')
      // router.push('/(tabs)/groups')
    } catch (error) {
      console.log('There was an error loggin in', error)
    } finally {
      setLoading(false)
      Keyboard.dismiss()
      // setEmail('')
      // setPassword('')
    }
  }

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
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button title="login" onPress={handleLogin} disabled={loading} />
        )}
      </View>

      <Link href="/(auth)/register" asChild>
        <Pressable>
          <Text style={styles.link}>Don't have an account? Register</Text>
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

export default Login
