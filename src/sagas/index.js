import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';
import getDocuments from '../services/documentService';
import { setDocuments } from '../reducers/documentsReducer';

function* fetchDocumentsSaga() {
  try {
    const documents = yield call(getDocuments);
    yield put(setDocuments(documents));
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
}

function* moveDocumentSaga(action) {
  try {
    console.log('Moving document:', action.payload);
  } catch (error) {
    console.error('Error moving document:', error);
  }
}

function* watchFetchDocuments() {
  yield takeEvery('FETCH_DOCUMENTS', fetchDocumentsSaga);
}

function* watchMoveDocument() {
  yield takeEvery('MOVE_DOCUMENT', moveDocumentSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchDocuments(),
    watchMoveDocument(),
  ]);
}
