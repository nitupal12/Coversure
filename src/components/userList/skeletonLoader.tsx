import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export const ITEM_HEIGHT = 80;
const ITEMS = 8;

const Shimmer = () => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1200,
        useNativeDriver: true,
      }),
    );

    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, { transform: [{ translateX }] }]}
    >
      <LinearGradient
        colors={['#E1E9EE', '#F2F8FC', '#E1E9EE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </Animated.View>
  );
};

const SkeletonItem = () => (
  <View style={[styles.item, { height: ITEM_HEIGHT }]}>
    {/* Avatar */}
    <View style={styles.avatar}>
      <Shimmer />
    </View>

    {/* Text */}
    <View style={styles.textContainer}>
      <View style={styles.name}>
        <Shimmer />
      </View>

      <View style={styles.line}>
        <Shimmer />
      </View>

      <View style={styles.smallLine}>
        <Shimmer />
      </View>
    </View>
  </View>
);

const UserListSkeleton = () => {
  return (
    <View>
      {Array.from({ length: ITEMS }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </View>
  );
};

export default UserListSkeleton;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E1E9EE',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    width: '60%',
    height: 14,
    borderRadius: 4,
    backgroundColor: '#E1E9EE',
    overflow: 'hidden',
    marginBottom: 8,
  },
  line: {
    width: '80%',
    height: 12,
    borderRadius: 4,
    backgroundColor: '#E1E9EE',
    overflow: 'hidden',
    marginBottom: 6,
  },
  smallLine: {
    width: '50%',
    height: 12,
    borderRadius: 4,
    backgroundColor: '#E1E9EE',
    overflow: 'hidden',
  },
});
