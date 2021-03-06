import React, {useCallback} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';
import {global} from '../styles';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  thanks: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-R',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    marginTop: 64,
  },
});

type DataUploadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DataUpload'
>;

export const DataUpload: React.FC<{
  navigation: DataUploadScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = (): boolean => {
        navigation.navigate('Home');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return (): void =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation]),
  );

  return (
    <View style={global.container}>
      <Header
        navigationButton={{
          title: 'home',
          fn: (): void => navigation.navigate('Home'),
        }}
        showHelp={true}
      />
      <Text style={styles.thanks}>{t('dataUpload.thanks')}</Text>
    </View>
  );
};
export default DataUpload;
