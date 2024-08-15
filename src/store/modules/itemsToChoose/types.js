const Module = 'itemsToChoose'

export const VuexMutations = {
  SelectItem: {
    name: 'selectItem',
    fullName: `${Module}/selectItem`
  },
}

export const VuexGetters = {
  ItemsList: {
    name: 'itemsList',
    fullName: `${Module}/itemsList`
  },
  ChosenItem: {
    name: 'chosenItem',
    fullName: `${Module}/chosenItem`
  },
}
