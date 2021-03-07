import React, {useState} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ViewPost = ({somePropToPass}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.button}>
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPressIn={() => setModalVisible(true)}
          onPressOut={() => setModalVisible(false)}>
          <Text style={{color:'#008000',fontWeight:'bold'}}>{somePropToPass}</Text>
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
  button: {
    backgroundColor: '#2f4f4f',
    marginVertical: 170,
    width: '30%',
    height: '30%',
    borderRadius: 5,
    alignSelf:'center'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginVertical: 60,
  },
});
