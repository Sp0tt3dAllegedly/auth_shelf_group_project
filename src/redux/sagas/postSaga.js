function* postNewList (action){
    try {
      const response = yield axios.post('api/shelf/info', action.payload );
      console.log(response);
      yield put({ type: 'FETCH_LIST'});
    } catch (error) {
      console.log('error in POST route', error);
    }
  }

  function* newList() {
    yield takeLatest('POST_LIST', postNewList)
   }
 
 export default newList;