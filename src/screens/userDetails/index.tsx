import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import IonIcons from '@react-native-vector-icons/ionicons';

import Loader from '../../components/loader';
import { getUserFirstChar } from '../../utils';
import createStyles from './styles';
import { InfoRowType } from './types';
import { ViewModel } from './viewModel';

const UserDetailsScreen = () => {
  const {
    usersDetail,
    loading,
    isFromUsers,
    toggleFavorite,
    openEmail,
    openPhone,
  } = ViewModel();

  const { colors } = useTheme();
  const styles = createStyles(colors);

  if (loading) {
    return <Loader containerStyle={styles.footer} size="small" />;
  }

  const InfoRow = ({ value, iconName, funCall }: InfoRowType) => (
    <TouchableOpacity onPress={funCall} style={styles.cardTouchableContainer}>
      <IonIcons name={iconName} size={20} color="grey" />
      <Text style={styles.value}> {value}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.initialsCircle}>
          <Text style={styles.initials}>
            {getUserFirstChar(usersDetail.name)}
          </Text>
        </View>
        <Text style={styles.name}>{usersDetail.name}</Text>
      </View>

      {/* Info Card */}
      <View style={styles.card}>
        <InfoRow
          value={usersDetail.email}
          iconName="mail"
          funCall={openEmail}
        />
        <InfoRow
          value={usersDetail.phone}
          iconName="phone-portrait-outline"
          funCall={openPhone}
        />
        <InfoRow value={usersDetail.company.name} iconName="business-outline" />
        <InfoRow value={usersDetail.website} iconName="earth-outline" />
        <InfoRow
          value={`${usersDetail.address.street} ${usersDetail.address.suite} ${usersDetail.address.city}\n${usersDetail.address.zipcode}`}
          iconName="map-outline"
        />
      </View>

      {/* Action */}
      <TouchableOpacity style={styles.favoriteBtn} onPress={toggleFavorite}>
        <Text style={styles.favoriteText}>
          {isFromUsers ? 'Add to Favorite' : 'Remove from Favorite'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserDetailsScreen;
