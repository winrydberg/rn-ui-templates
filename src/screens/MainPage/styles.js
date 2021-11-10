import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 4,
    width: '100%',
    backgroundColor: 'rgb(0,0,0)',
    elevation: 5,
  },
  listContainer: {
    flexGrow: 1,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
  },
  subTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageStyle: {
    opacity: 0.2,
  },
});

export default styles;
