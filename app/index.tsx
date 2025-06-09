import { View, Text, StyleSheet, Image, ScrollView, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import { X, Users, MapPin, MessageCircle, UserPlus } from 'lucide-react-native';

const friends = [
  {
    id: '1',
    name: 'Uriel Jumao-as',
    photo: require('../assets/images/profile1.jpg'),
    location: 'Daanbantayan, Cebu',
    bio: 'Pickpocket & cat burglar',
    followers: 1234,
    following: 567,
    posts: 89,
  },
  {
    id: '2',
    name: 'Rhainer Matheuz Mata',
    photo: require('../assets/images/profile2.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Lowkey Big Tech CEO',
    followers: 2345,
    following: 432,
    posts: 156,
  },
  {
    id: '3',
    name: 'Kobe Mangubat',
    photo: require('../assets/images/profile3.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Fitness coach & travel blogger',
    followers: 5678,
    following: 890,
    posts: 234,
  },
  {
    id: '4',
    name: 'Kent Jorjet Niez',
    photo: require('../assets/images/profile4.jpg'),
    location: 'Mandaue City, Cebu',
    bio: 'Traffic Light Hacker',
    followers: 3456,
    following: 789,
    posts: 167,
  },
  {
    id: '5',
    name: 'Joel Jay Arcipe',
    photo: require('../assets/images/profile5.jpg'),
    location: 'Lapu-Lapu City, Cebu',
    bio: 'Hacker, Assembly Language Programmer',
    followers: 4567,
    following: 678,
    posts: 198,
  },
];

const myProfile = {
  name: 'Noel Batoctoy',
  photo: require('../assets/images/profile6.jpg'),
  bio: 'Software Developer | Stay at Home Enthusiast',
  location: 'Cebu City, Philippines',
  friends: 250,
  photos: 54,
  places: 89,
};

export default function HomeScreen() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showMyProfile, setShowMyProfile] = useState(false);

  const openFriendProfile = (friend) => {
    setSelectedFriend(friend);
  };

  const closeFriendProfile = () => {
    setSelectedFriend(null);
  };

  const openMyProfile = () => {
    setShowMyProfile(true);
  };

  const closeMyProfile = () => {
    setShowMyProfile(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable onPress={openMyProfile} style={styles.profileButton}>
            <Image source={myProfile.photo} style={styles.headerProfilePhoto} />
            <View style={styles.headerInfo}>
              <Text style={styles.headerName}>{myProfile.name}</Text>
              <Text style={styles.headerBio}>{myProfile.bio}</Text>
            </View>
          </Pressable>
          <View style={styles.headerStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{myProfile.friends}</Text>
              <Text style={styles.statLabel}>Friends</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Friends List */}
      <ScrollView style={styles.friendsList} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Users size={20} color="#666" />
          <Text style={styles.sectionTitle}>My Friends</Text>
        </View>
        
        {friends.map((friend) => (
          <Pressable
            key={friend.id}
            onPress={() => openFriendProfile(friend)}
            style={styles.friendCard}
          >
            <Image source={friend.photo} style={styles.friendPhoto} />
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={14} color="#666" />
                <Text style={styles.friendLocation}>{friend.location}</Text>
              </View>
              <Text style={styles.friendBio} numberOfLines={1}>{friend.bio}</Text>
            </View>
            <View style={styles.friendStats}>
              <Text style={styles.friendFollowers}>{friend.followers}</Text>
              <Text style={styles.friendFollowersLabel}>followers</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Friend Profile Modal */}
      <Modal
        visible={selectedFriend !== null}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeFriendProfile}
      >
        {selectedFriend && (
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Friend Profile</Text>
              <Pressable onPress={closeFriendProfile} style={styles.closeButton}>
                <X size={24} color="#666" />
              </Pressable>
            </View>
            
            <ScrollView style={styles.modalContent}>
              <View style={styles.profileHeader}>
                <Image source={selectedFriend.photo} style={styles.modalProfilePhoto} />
                <Text style={styles.modalName}>{selectedFriend.name}</Text>
                <View style={styles.modalLocationContainer}>
                  <MapPin size={16} color="#666" />
                  <Text style={styles.modalLocation}>{selectedFriend.location}</Text>
                </View>
                <Text style={styles.modalBio}>{selectedFriend.bio}</Text>
              </View>

              <View style={styles.modalStatsContainer}>
                <View style={styles.modalStatItem}>
                  <Text style={styles.modalStatNumber}>{selectedFriend.followers}</Text>
                  <Text style={styles.modalStatLabel}>Followers</Text>
                </View>
                <View style={styles.modalStatItem}>
                  <Text style={styles.modalStatNumber}>{selectedFriend.following}</Text>
                  <Text style={styles.modalStatLabel}>Following</Text>
                </View>
                <View style={styles.modalStatItem}>
                  <Text style={styles.modalStatNumber}>{selectedFriend.posts}</Text>
                  <Text style={styles.modalStatLabel}>Posts</Text>
                </View>
              </View>

              <View style={styles.actionsContainer}>
                <Pressable style={styles.actionButton}>
                  <MessageCircle size={20} color="#444" />
                  <Text style={styles.actionButtonText}>Message</Text>
                </Pressable>
                <Pressable style={[styles.actionButton, styles.followButton]}>
                  <UserPlus size={20} color="white" />
                  <Text style={styles.followButtonText}>Follow</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        )}
      </Modal>

      {/* My Profile Modal */}
      <Modal
        visible={showMyProfile}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeMyProfile}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>My Profile</Text>
            <Pressable onPress={closeMyProfile} style={styles.closeButton}>
              <X size={24} color="#666" />
            </Pressable>
          </View>
          
          <ScrollView style={styles.modalContent}>
            <View style={styles.profileHeader}>
              <Image source={myProfile.photo} style={styles.modalProfilePhoto} />
              <Text style={styles.modalName}>{myProfile.name}</Text>
              <View style={styles.modalLocationContainer}>
                <MapPin size={16} color="#666" />
                <Text style={styles.modalLocation}>{myProfile.location}</Text>
              </View>
              <Text style={styles.modalBio}>{myProfile.bio}</Text>
            </View>

            <View style={styles.modalStatsContainer}>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatNumber}>{myProfile.friends}</Text>
                <Text style={styles.modalStatLabel}>Friends</Text>
              </View>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatNumber}>{myProfile.photos}</Text>
                <Text style={styles.modalStatLabel}>Photos</Text>
              </View>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatNumber}>{myProfile.places}</Text>
                <Text style={styles.modalStatLabel}>Places</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerProfilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  headerBio: {
    fontSize: 14,
    color: '#666',
  },
  headerStats: {
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  friendsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginLeft: 8,
  },
  friendCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  friendPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  friendLocation: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
  friendBio: {
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
  friendStats: {
    alignItems: 'center',
    marginLeft: 12,
  },
  friendFollowers: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  friendFollowersLabel: {
    fontSize: 11,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  closeButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  modalProfilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  modalName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  modalLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalLocation: {
    fontSize: 16,
    color: '#666',
    marginLeft: 4,
  },
  modalBio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
  modalStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  modalStatItem: {
    alignItems: 'center',
  },
  modalStatNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  modalStatLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginLeft: 8,
  },
  followButton: {
    backgroundColor: '#007AFF',
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});