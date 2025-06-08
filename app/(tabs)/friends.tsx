import { View, Text, StyleSheet, Image, Alert, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const friends = [
  {
    id: '1',
    name: 'Uriel Jumao-as',
    photo: require('../../assets/images/profile1.jpg'),
    location: 'Daanbantayan, Cebu',
  },
  {
    id: '2',
    name: 'Rhainer Matheuz Mata',
    photo: require('../../assets/images/profile2.jpg'),
    location: 'Mandaue City, Cebu',
  },
  {
    id: '3',
    name: 'Kobe Mangubat',
    photo: require('../../assets/images/profile3.jpg'),
    location: 'Mandaue City, Cebu',
  },
  {
    id: '4',
    name: 'Kent Jorjet Niez',
    photo: require('../../assets/images/profile4.jpg'),
    location: 'Mandaue City, Cebu',
  },
  {
    id: '5',
    name: 'Joel Jay Arcipe',
    photo: require('../../assets/images/profile5.jpg'),
    location: 'Lapu-Lapu City, Cebu',
  },
];


export default function FriendsScreen() {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {friends.map((friend) => (
        <Pressable // Use Pressable directly here
          key={friend.id}
          onPress={() =>
            Alert.alert(
              "Confirmation",
              "Do you want to proceed to your Friend's Profile?",
              [
                { text: "No", style: "cancel" }, // Optional: Add a cancel style
                {
                  text: "Yes",
                  onPress: () => {
                    router.push(`/friends/${friend.id}`); // Navigate when "Yes" is pressed
                  },
                },
              ]
            )
          }
          style={styles.friendCard}
        >
          <Image
            source={friend.photo}
            style={styles.photo}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{friend.name}</Text>
            <Text style={styles.location}>{friend.location}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  friendCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});