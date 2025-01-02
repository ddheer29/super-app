import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors, fontSizes, sizes } from '../../utils/Theme';

const Signup = () => {

  const navigation = useNavigation();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightColor: colors.white }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: colors.darkCapsule,
          borderRadius: 50,
          padding: 16,
          position: 'absolute',
          top: 76,
          left: 26
        }}
      >
        <Text>
          👈🏻
        </Text>
      </TouchableOpacity>
      <View>
        <View>
          <View>
            <Text
              style={{
                fontSize: fontSizes.mHeader,
                fontWeight: 'bold'
              }}
            >SignUp</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: fontSizes.xlarge,
                marginTop: 16
              }}>Create your new account.</Text>
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
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder='John Doe'
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
            >SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 56 }}>
        <Text
          style={{
            fontSize: fontSizes.regular,
          }}
        >
          Already have a account?{" "}
          <Text
            style={{
              color: colors.primary1,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
            onPress={() => navigation.goBack()}
          >Log in</Text>
        </Text>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})