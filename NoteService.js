// NoteService.js
import {openRealm} from './realm';

export const addNote = async (title, description) => {
  const realm = await openRealm();
  realm.write(() => {
    realm.create('Note', {
      title,
      description,
    });
  });
};

export const getAllNotes = async () => {
  const realm = await openRealm();
  return realm.objects('Note');
};

// Implement other CRUD operations similarly
