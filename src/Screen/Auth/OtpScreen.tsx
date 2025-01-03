import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fontSizes, sizes } from '../../utils/Theme'
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const correctOtp = '1234'; // Replace with actual OTP logic

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus to next input if value is entered
      if (value && index < otp.length - 1) {
        const nextInput = index + 1;
        (refs[nextInput] as any)?.focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === correctOtp) {
      Alert.alert('Success', 'OTP Verified Successfully!');
      // Navigate to the next screen here
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const refs: any = {};

  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>Verify Otp.</Text>
      <Text style={styles.subtitle}>Enter the 4-digit OTP sent to your number</Text>

      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index]}
            onChangeText={(value) => handleChange(value, index)}
            ref={(ref) => (refs[index] = ref)} // Store refs for inputs
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp} disabled={isLoading}>
        <Text style={styles.verifyButtonText}>{isLoading ? 'Verifying...' : 'Verify OTP'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OtpScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center', 
    backgroundColor: '#fff',
    alignItems: 'center',
    // marginBottom: 60,
  },
  title: {
    fontSize: fontSizes.mHeader,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 120,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  verifyButton: {
    width: sizes.screenWidth - 76,
    backgroundColor: colors.darkCapsule,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
