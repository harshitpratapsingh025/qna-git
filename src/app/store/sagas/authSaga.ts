import { takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loginUser, loginUserSuccess, loginUserFailure } from "./../slices";
import { authenticateUser } from "../apis";
import { LoginPayload } from "../../types";


function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const { username, password } = action.payload;
    const user =  call(authenticateUser, username, password);
    yield put(loginUserSuccess(user));
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

function* authSaga() {
  yield takeLatest(loginUser, handleLogin); // now types match
}

export default authSaga;
