import {StyleSheet} from 'react-native';

export const colors = StyleSheet.create({
  floralwhite: {
    color: '#fffaf0',
  },
  backDarkMain: {
    backgroundColor: '#181818',
  },
  backDarkHead: {
    backgroundColor: '#080808',
  },
  backDarkFoot: {
    backgroundColor: '#080808',
  },
  gold: {
    color: '#ffd700',
  },
  green: {
    color: '#39CC4B',
  },
  orange: {
    color: '#EA7309',
  },
});

export const fonts = StyleSheet.create({
  f5: {
    fontSize: 5,
  },
  f10: {
    fontSize: 10,
  }, f12: {
    fontSize: 12,
  },
  f15: {
    fontSize: 15,
  },
  f20: {
    fontSize: 20,
  },
  f25: {
    fontSize: 25,
  },
  f30: {
    fontSize: 30,
  },
  f35: {
    fontSize: 35,
  },
});
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'column',
    flex: 10,
  }, 
  mainDetay: {
    flexDirection: 'column',
    flex: 10,
  }, 
  CenterContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerUserView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginRight: '-4%',
  },
  headerTitleView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    marginLeft: '8%',
  },
  headerLogoView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3.5%',
  },
  bordeRadius: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  row:{    
    flexDirection: 'row',
  },
  musicsLogo:{    
    flex: 1.3,
    marginLeft: '2%',
  },
  musicsArtist:{    
    flex: 3,
    marginLeft: '5%',
  }, 
  musicsName:{    
    flex: 3,
    marginLeft: '5%',
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  logo: {
    width:25,
    height: 40,
  },
  normalLogo: {
    width: 175,
    height: 175,
  },
  marginbottom5:{
    marginBottom: '5%',
  },
  textContentCenter:{
    textAlign: 'center',
  },
  MusicRow:{
    marginBottom: '1%',
  },
  button: {
    backgroundColor: "#262525",
  },
  MarginB2: {
    marginBottom: '3%',
  }, 
  LeftWindow: {
    flex: 7,
  }, 
  RightWindow: {
    flex: 15,
  },
  TabletMain: {
    flex: 1,
    alignContent: 'flex-start',
    flexDirection: 'row',
  }, 
  border: {
    borderWidth: 5,
    borderColor: '#FF1744',
  }
});
