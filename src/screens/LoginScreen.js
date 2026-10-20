import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('12345');

  const handleLogin = () => {
    if (!username || !password) return Alert.alert('Peringatan', 'Username dan password wajib diisi!');
    navigation.replace('MainMenu', { user: username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Halaman Login</Text>
        <Text style={styles.subtitle}>Masukkan akun Anda untuk melanjutkan</Text>

        <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk ke Menu Utama</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', padding: 20 },
  card: { width: '100%', maxWidth: 340, backgroundColor: '#FFF', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 13, color: '#64748B', marginTop: 4, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: '#FFF' },
  button: { backgroundColor: '#2563EB', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 4 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});
