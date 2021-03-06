import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {RecyclerListView, DataProvider} from 'recyclerlistview';
import {DataCall} from '../utils/DataCall';
import {getLayoutProvider} from '../utils/LayoutUtil';
import {ImageRenderer} from '../components/ImageRenderer';
import {ViewSelector} from '../components/ViewSelector';

const PostsList = ({componentId}) => {
  const [images, setImages] = useState([]);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );
  let inProgressNetworkReq = false;
  const layoutProvider = getLayoutProvider(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!inProgressNetworkReq) {
      inProgressNetworkReq = true;
      const images = await DataCall();
      inProgressNetworkReq = false;
      setDataProvider(dataProvider.cloneWithRows(images));
      setImages(images);
    }
  };

  const rowRenderer = (type, data) => {
    console.log('test data', data);
    return (
      <TouchableOpacity onPress={pushViewPostScreen}>
        <ImageRenderer imageUrl={data} />
      </TouchableOpacity>
    );
  };

  const handleListEnd = () => {
    fetchData();
  };

  const renderFooter = () => {
    return inProgressNetworkReq ? (
      <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    ) : (
      <View style={{height: 60}} />
    );
  };

  Navigation.events();

  const pushViewPostScreen = () => {
    Navigation.push(componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: 'Post1',
            },
          },
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      {images.length !== 0 ? (
        <RecyclerListView
          style={{flex: 1}}
          contentContainerStyle={{margin: 3}}
          onEndReached={handleListEnd}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
          renderFooter={renderFooter}
        />
      ) : (
        <ViewSelector text="Error load data fetching" />
      )}
    </View>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
