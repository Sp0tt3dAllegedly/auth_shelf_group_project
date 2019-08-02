import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postNewList (action){
    try {
      const response = yield axios.post('api/shelf/post', action.payload );
      console.log(response);
      yield put({ type: 'SET_LIST'});
    } catch (error) {
      console.log('error in POST route', error);
    }
  }

  function* newList() {
    yield takeLatest('POST_LIST', postNewList)
   }
 
 export default newList;