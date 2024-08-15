import { VuexMutations, VuexGetters } from './types'

const state = {
  userItems: [
    {
        "id": 1,
        "name": "Shoes 1"
    },
    {
        "id": 2,
        "name": "Shoes 2"
    },
    {
        "id": 3,
        "name": "Shoes 3"
    },
    {
        "id": 4,
        "name": "Shoes 4"
    },
    {
        "id": 5,
        "name": "T-shirt 1"
    },
    {
        "id": 6,
        "name": "T-shirt 2"
    },
    {
        "id": 7,
        "name": "T-shirt 3"
    },
    {
        "id": 8,
        "name": "T-shirt 4"
    }
  ],
  chosenUserItems: []
}

const mutations = {
  [VuexMutations.AddUserItem.name]: (state, payload) => {
    const isItemAdded = state.chosenUserItems.find(item => item.id === payload.id);
    
    if (!isItemAdded && state.chosenUserItems.length < 6) {
      state.chosenUserItems.push(payload);
    }
  },
  [VuexMutations.RemoveUserItem.name]: (state, payload) => {
    state.chosenUserItems = state.chosenUserItems.filter(item => item.id !== payload);
  },
}

const getters = {
  [VuexGetters.UserItems.name]: state => state.userItems,
  [VuexGetters.ChosenUserItems.name]: state => state.chosenUserItems,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}