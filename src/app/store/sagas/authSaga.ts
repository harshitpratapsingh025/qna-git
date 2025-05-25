import { takeLatest, put, call } from 'redux-saga/effects';
import { loginUser, loginUserSuccess, loginUserFailure } from './../slices';
import { authenticateUser } from '../apis';


function* handleLogin(action: any) {
  try {
    const { username, password } = action.payload;
    const user = call(authenticateUser, username, password);
    yield put(loginUserSuccess(user));
  } catch (error: any) {
    yield put(loginUserFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(loginUser.type, handleLogin);
}

export default authSaga;