import {FETCH_ALL_COUNTIES, STORE_ALL_COUNTRIES} from '../types';

import { call, put,take, takeEvery, takeLatest } from 'redux-saga/effects'

async function getAllCountries () {
    let request = await fetch('http://api.countrylayer.com/v2/all?access_key=4fd2b08d09a5b6295a03058d05cb49b9');
    let respond = await request.json();
    return respond
}

export function* rootSaga () {
 yield sagaWatcher()
}

function* sagaWatcher () {
yield take(FETCH_ALL_COUNTIES)
yield sagaFetchAllWorker()
}

function* sagaFetchAllWorker () {
const state = yield call(getAllCountries)
yield put({type: STORE_ALL_COUNTRIES , payload:state})
}