import Navigator from './Navigation';

export const {
  isMounted: isDetailsNavigatorMounted,
  push: detailsPush,
  navigate: detailsNavigate,
  setNavigator: setDetailsNavigator,
} = new Navigator();
