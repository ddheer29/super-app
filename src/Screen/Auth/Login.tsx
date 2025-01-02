import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fontSizes, sizes } from '../../utils/Theme'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
      <View>
        <View>
          <View>
            <Text
              style={{
                fontSize: fontSizes.mHeader,
                fontWeight: 'bold'
              }}
            >Login</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: fontSizes.xlarge,
                marginTop: 16
              }}>Please Sign in to continue.</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              // borderWidth: 1,
              width: sizes.screenWidth - 76,
              paddingVertical: 8,
              paddingHorizontal: 12,
              // gap: 8,
              marginTop: 16,
              borderRadius: 8,
              backgroundColor: colors.lightGray1
            }}>
            <Text>
              Username or Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='abc@mail.com'
              style={{
                paddingVertical: 12,
                paddingHorizontal: 8
              }}
            />
          </View>
          <View
            style={{
              // borderWidth: 1,
              width: sizes.screenWidth - 76,
              paddingVertical: 8,
              paddingHorizontal: 12,
              // gap: 8,
              marginTop: 16,
              borderRadius: 8,
              backgroundColor: colors.lightGray1
            }}
          >
            <Text>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='******'
              style={{
                paddingVertical: 12,
                paddingHorizontal: 8
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 24,
              backgroundColor: colors.darkCapsule,
              borderRadius: 50,
              paddingVertical: 16,
              width: sizes.screenWidth / 3,
              alignSelf: 'flex-end',
              marginTop: 16
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: 'bold',
                fontSize: fontSizes.regular,

              }}
            >LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 56 }}>
        <Text
          style={{
            fontSize: fontSizes.regular,
          }}
        >
          Don't have an account?{" "}
          <Text
            style={{
              color: colors.darkRed,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
            onPress={() => navigation.navigate('Signup')}
          >Sign up</Text>
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})