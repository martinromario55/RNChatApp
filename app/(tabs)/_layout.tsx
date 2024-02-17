import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { Button } from 'react-native'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../config/Firebase.Config'

const TabsPage = () => {
  const router = useRouter()

  const doLogout = () => {
    console.log('doLogout')
    signOut(FIREBASE_AUTH)
    router.push('/(auth)/login')
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="groups"
        options={{
          headerTitle: 'Chat Groups',
          headerRight: () => <Button onPress={doLogout} title="Logout" />,
        }}
      />
    </Tabs>
  )
}

export default TabsPage
