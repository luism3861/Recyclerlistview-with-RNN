import {Navigation} from 'react-native-navigation';

export const registerScreens = () => {
  Navigation.registerComponent(
    'blog.PostsList',
    () => require('./screens/PostList').default,
  );
  Navigation.registerComponent(
    'blog.ViewPost',
    () => require('./screens/ViewPost').default,
  );
};
