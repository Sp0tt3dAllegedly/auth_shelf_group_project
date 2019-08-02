import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function deleteListSaga (action) {
    try{
        yield axios.delete(`api/shelf/delete${action.payload}`)
        yield put({type:'SET_LIST'})
    } catch (error) {
            console.log('error Deleting', error)
    }
}

function* deleteList() {
    yield takeLatest('DELETE_ITEM', deleteListSaga)
   }
 
 export default deleteList;