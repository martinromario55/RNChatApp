import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="StartPage" /> */}
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      {/* <Stack.Screen name="groups" />
      <Stack.Screen name="profile" /> */}
      <Stack.Screen
        name="(auth)/register"
        options={{ headerTitle: 'Create Account' }}
      />
    </Stack>
  )
}

export default StackLayout
