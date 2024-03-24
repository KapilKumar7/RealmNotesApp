// realm.js
import Realm from 'realm';
import {NoteSchema} from './Note';

const realmConfig = {
  schema: [NoteSchema],
  path: 'realm_notes/realmdb.realm', // Specify the path in external storage
};

export const openRealm = async () => {
  return await Realm.open(realmConfig);
};
