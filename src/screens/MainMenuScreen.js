import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainMenuScreen({ route, navigation }) {
  const user = route.params?.user || 'Pengguna';

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang, {user}!</Text>
      <Text style={styles.subtitle}>Silakan pilih kategori penginapan Anda:</Text>

      <TouchableOpacity style={[styles.card, { backgroundColor: '#10B981' }]} onPress={() => navigation.navigate('Villa')}>
        <Text style={styles.cardTitle}>🏡 [1] Pilihan Vila</Text>
        <Text style={styles.cardDesc}>Lihat berbagai pilihan jenis dan tipe vila liburan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { backgroundColor: '#2563EB' }]} onPress={() => navigation.navigate('Hotel')}>
        <Text style={styles.cardTitle}>🏨 [2] Pilihan Kamar Hotel</Text>
        <Text style={styles.cardDesc}>Pilihan kamar Standar, VIP, dan President Suite</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>🚪 Keluar (Logout)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  welcomeText: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 14, color: '#64748B', marginTop: 4, marginBottom: 20 },
  card: { padding: 18, borderRadius: 12, marginBottom: 14 },
  cardTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  cardDesc: { color: '#F1F5F9', fontSize: 13, marginTop: 4 },
  logoutBtn: { backgroundColor: '#EF4444', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 14 },
  logoutText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});
