import { createStore } from 'redux'
import { portfolioData } from './portfolio-store-data'
function emptyReducer(state) {
    return state;
}

export const portfolioStore = createStore(emptyReducer, portfolioData);

