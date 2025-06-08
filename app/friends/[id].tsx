import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Sample friends data (same as in index.tsx)
const friends = [
  {
    id: '1',
    name: 'Uriel Jumao-as',
    photo: require('../../assets/images/profile1.jpg'),
    location: 'Daanbantayan, Cebu',
    bio: 'Pickpocket & cat burglar',
    followers: 1234,
    following: 567,
    posts: 89,
  },
  {
    id: '2',
    name: 'Rhainer Matheuz Mata',
    photo: require('../../assets/images/profile2.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Lowkey Big Tech CEO',
    followers: 2345,
    following: 432,
    posts: 156,
  },
  {
    id: '3',
    name: 'Kobe Mangubat',
    photo: require('../../assets/images/profile3.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Fitness coach & travel blogger',
    followers: 5678,
    following: 890,
    posts: 234,
  },
  {
    id: '4',
    name: 'Kent Jorjet Niez',
    photo: require('../../assets/images/profile4.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Traffic Light Hacker',
    followers: 3456,
    following: 789,
    posts: 167,
  },
  {
    id: '5',
    name: 'Joel Jay Arcipe',
    photo: require('../../assets/images/profile5.jpg'),
    location: 'Lapu-Lapu City, Cebu',
    bio: 'Hacker, Assembly Language Programmer',
    followers: 4567,
    following: 678,
    posts: 198,
  },
];

export default function FriendProfile() {
  const { id } = useLocalSearchParams();
  const friend = friends.find(f => f.id === id);

  if (!friend) {
    return (
      <View style={styles.container}>
        <Text>Friend not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={friend.photo}
          style={styles.profilePhoto}
        />
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.location}>{friend.location}</Text>
        <Text style={styles.bio}>{friend.bio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{friend.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{friend.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{friend.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Message</Text>
        </View>
        <View style={[styles.actionButton, styles.followButton]}>
          <Text style={styles.followButtonText}>Follow</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 20,
    marginHorizontal: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  followButton: {
    backgroundColor: '#007AFF',
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});