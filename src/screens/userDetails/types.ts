import { RootStackParamList } from '../../navigation/types';
import type { RouteProp } from '@react-navigation/native';

export type InfoRowType = {
  value: string;
  iconName: string;
  funCall?: () => void;
};

export type UserDetailsRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;
