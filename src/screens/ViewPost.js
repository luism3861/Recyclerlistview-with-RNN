import React, {useState} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ViewPost = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{backgroundColor: 'red', marginVertical: 150}}>
        <Text style={{textAlign: 'center'}}>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPressIn={() => setModalVisible(true)}
          onPressOut={() => setModalVisible(false)}>
          <Text style={{}}>Modal Content...</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ViewPost;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
