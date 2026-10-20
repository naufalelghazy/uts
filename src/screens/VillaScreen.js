import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DAFTAR_VILLA = [
  { id: '1', nama: 'Villa Minimalis Modern', tipe: 'Tipe Studio (1 Kamar)', harga: 'Rp 750.000 / malam', fasilitas: 'Kolam Renang Mini, Wifi, Dapur Bersih' },
  { id: '2', nama: 'Villa Family Garden', tipe: 'Tipe 2 Kamar Tidur', harga: 'Rp 1.500.000 / malam', fasilitas: 'Private Pool, Taman, Dapur Lengkap, BBQ' },
  { id: '3', nama: 'Villa Luxury Panoramic', tipe: 'Tipe 4 Kamar Tidur (VIP)', harga: 'Rp 2.800.000 / malam', fasilitas: 'Infinity Pool, Jacuzzi, View Alam Pegunungan' },
];

export default function VillaScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🏡 Pilihan Jenis & Tipe Vila</Text>
      <Text style={styles.subtitle}>Daftar pilihan vila untuk liburan dan keluarga:</Text>

      {DAFTAR_VILLA.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.nama}</Text>
          <Text style={styles.cardType}>{item.tipe}</Text>
          <Text style={styles.cardPrice}>{item.harga}</Text>
          <Text style={styles.cardFacility}>Fasilitas: {item.fasilitas}</Text>
          <TouchableOpacity style={styles.btnOrder} onPress={() => Alert.alert('Sukses', `Anda memilih: ${item.nama}`)}>
            <Text style={styles.btnText}>Pilih Vila Ini</Text>
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
  cardType: { fontSize: 13, color: '#10B981', fontWeight: '600', marginTop: 2 },
  cardPrice: { fontSize: 14, fontWeight: 'bold', color: '#2563EB', marginTop: 2 },
  cardFacility: { fontSize: 12, color: '#64748B', marginTop: 2 },
  btnOrder: { backgroundColor: '#10B981', paddingVertical: 8, borderRadius: 6, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  btnBack: { backgroundColor: '#E2E8F0', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  btnBackText: { color: '#334155', fontWeight: '600', fontSize: 13 },
});
