const Module = 'userItems'

export const VuexMutations = {
  AddUserItem: {
    name: 'addUserItem',
    fullName: `${Module}/addUserItem`
  },
  RemoveUserItem: {
    name: 'removeUserItem',
    fullName: `${Module}/removeUserItem`
  },
}

export const VuexGetters = {
  UserItems: {
    name: 'userItems',
    fullName: `${Module}/userItems`
  },
  ChosenUserItems: {
    name: 'chosenUserItems',
    fullName: `${Module}/chosenUserItems`
  },
}
