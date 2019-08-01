import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchList() {

    try{
        const response = yield axios.get('api/shelf/info');
        yield put({type: 'SET_LIST', payload: response.data});
        console.log('in fetch list', response.data)
    } catch (error) {
        console.log('error in GET', error);
      }
}


function* takeList() {
   yield takeLatest('FETCH_LIST', fetchList)
  }

export default takeList;