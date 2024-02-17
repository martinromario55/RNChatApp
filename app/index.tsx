import { Redirect, useRouter } from 'expo-router'
import { useContext, useEffect } from 'react'
import { AuthContext, AuthProvider } from '../context/AuthContext'
import { StyleSheet, Text, View } from 'react-native'

const InitialLayout = () => {
  const { user, initialized } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    console.log('Start Page')
    if (!initialized) return

    console.log('Forward to Page')

    if (user) {
      console.log('user Exists, forward to inside')
      router.push('/(tabs)/groups')
    } else {
      console.log('user does not exist, forward to login')
      router.push('/(auth)/login')
    }
  }, [user, initialized])
  return (
    <View style={styles.container}>
      {initialized ? <></> : <Text>Loading...</Text>}
    </View>
  )
}

const StartPage = () => {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default StartPage
