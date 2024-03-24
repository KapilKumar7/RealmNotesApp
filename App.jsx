// App.js
import React, {useEffect} from 'react';
import {PermissionsAndroid, View, Text, Button} from 'react-native';
import {addNote, getAllNotes} from './NoteService';

const requestExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'External Storage Permission',
        message:
          'RealmNotesApp needs access to your external storage ' +
          'to store notes.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('External storage permission granted');
    } else {
      console.log('External storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

requestExternalStoragePermission();
const App = () => {
  // useEffect(() => {
  // }, []);

  return (
    <View>
      <Text>Realm Notes App</Text>
      <Button
        title="Add Note"
        onPress={() => addNote('Sample Title', 'Sample Description')}
      />
    </View>
  );
};

export default App;
