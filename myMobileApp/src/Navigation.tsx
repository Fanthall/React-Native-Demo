import {
  isDetailsNavigatorMounted,
  detailsPush,
  detailsNavigate,
} from './Navigation/DetailNavigation';

export const PushDetailScreen = ({name, ID}, navigation) => {
  if (isDetailsNavigatorMounted()) {
    return detailsPush(name, {ID});
  }

  navigation.navigate(name, {ID});
};
