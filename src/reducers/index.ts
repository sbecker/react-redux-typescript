import { combineReducers } from 'redux'
import { Action } from '../actions'

export namespace Store {
    export type Counter = {
        readonly value: number,
    }

    export type All = {
        counter: Counter,
    }
}

const initialCounterState: Store.Counter = {
    value: 0,
}

function counter(state: Store.Counter = initialCounterState, action: Action): Store.Counter {
    switch (action.type) {
    case 'INCREMENT_COUNTER':
        return { value: state.value + action.delta }
    case 'RESET_COUNTER':
        return { value: 0 }
    default:
        return state
    }
}

export const reducers = combineReducers<Store.All>({
    counter,
})