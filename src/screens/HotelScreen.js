import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DAFTAR_KAMAR = [
  { id: '1', kategori: 'Kamar Standar', bed: '1 Queen Bed', harga: 'Rp 350.000 / malam', fasilitas: 'AC, TV Kabel, Free Wifi, Shower Air Panas' },
  { id: '2', kategori: 'Kamar VIP', bed: '1 King Size Bed', harga: 'Rp 750.000 / malam', fasilitas: 'Smart TV 50", Minibar, Sarapan Gratis, Bathtub' },
  { id: '3', kategori: 'Kamar President (Suite)', bed: 'Master Suite + Ruang Tamu', harga: 'Rp 1.800.000 / malam', fasilitas: 'Jacuzzi, View Kota, Layanan Butler, Lounge VIP' },
];

export default function HotelScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🏨 Pilihan Kamar Hotel</Text>
      <Text style={styles.subtitle}>Tersedia kamar Standar, VIP, dan President Suite:</Text>

      {DAFTAR_KAMAR.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.kategori}</Text>
          <Text style={styles.cardType}>Tipe Bed: {item.bed}</Text>
          <Text style={styles.cardPrice}>{item.harga}</Text>
          <Text style={styles.cardFacility}>Fasilitas: {item.fasilitas}</Text>
          <TouchableOpacity style={styles.btnOrder} onPress={() => Alert.alert('Sukses', `Anda memilih: ${item.kategori}`)}>
            <Text style={styles.btnText}>Pilih Kamar Ini</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Text style={styles.btnBackText}>← Kembali ke Menu Utama</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 13, color: '#64748B', marginTop: 4, marginBottom: 14 },
  card: { backgroundColor: '#FFF', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  cardType: { fontSize: 13, color: '#2563EB', fontWeight: '600', marginTop: 2 },
  cardPrice: { fontSize: 14, fontWeight: 'bold', color: '#059669', marginTop: 2 },
  cardFacility: { fontSize: 12, color: '#64748B', marginTop: 2 },
  btnOrder: { backgroundColor: '#2563EB', paddingVertical: 8, borderRadius: 6, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  btnBack: { backgroundColor: '#E2E8F0', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  btnBackText: { color: '#334155', fontWeight: '600', fontSize: 13 },
});
