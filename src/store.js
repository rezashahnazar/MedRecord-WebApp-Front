import { action, createStore } from 'easy-peasy';

const model ={
  gLogged: false,
  gUserData: {},
  addGUserData: action((state, payload) => {
    state.gUserData = payload;
  }),
  setGlogged: action((state, payload) => {
    state.gLogged = payload;
  }),
}

export const store = createStore(model);
