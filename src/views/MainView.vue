<template>
  <div>
    <div class="upper-block">
      <div class="upper-item-block">
        <ItemComponent 
          v-for="item in chosenUserItems"
          :key="item.id"
          :item="item"
          @click.native="removeUserItem(item.id)"
        />
      </div>

      <div class="single-item-block">
        <ItemComponent
          v-if="!!chosenItem"
          :item="chosenItem"
        />
      </div>
    </div>

    <div class="lower-block">
      <div class="items-block">
        <ItemComponent
          v-for="item in userItems"
          :key="item.id"
          :item="item"
          @click.native="addUserItem(item)"
        />
      </div>

      <div class="items-block">
        <ItemComponent 
          v-for="item in itemsList"
          :key="item.id"
          :item="item"
          @click.native="selectItem(item)"
        />      
      </div>
    </div>
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent'

import {mapGetters, mapMutations} from 'vuex'

import {VuexGetters as VuexUserItemsGetters, VuexMutations as VuexUserItemsMutations} from '@/store/modules/userItems/types'
import {VuexGetters as VuexItemsToChooseGetters, VuexMutations as VuexItemsToChooseMutations} from '@/store/modules/itemsToChoose/types'

export default {
  name: 'MainView',
  components: {
    ItemComponent
  },
  computed: {
    ...mapGetters({
      userItems: VuexUserItemsGetters.UserItems.fullName,
      chosenUserItems: VuexUserItemsGetters.ChosenUserItems.fullName,
      itemsList: VuexItemsToChooseGetters.ItemsList.fullName,
      chosenItem: VuexItemsToChooseGetters.ChosenItem.fullName,
    }),
  },
  methods: {
    ...mapMutations({
      addUserItem: VuexUserItemsMutations.AddUserItem.fullName,
      removeUserItem: VuexUserItemsMutations.RemoveUserItem.fullName,
      selectItem: VuexItemsToChooseMutations.SelectItem.fullName,
    }),
  }
}

</script>

<style>
  .upper-block {
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
  }

  .lower-block {
    display: flex;
    gap: 4px;
  }

  .items-block {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 100vh;
    border: 4px solid blue;
    align-content: flex-start
  }

  .upper-item-block {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    border: 4px solid blueviolet;
    min-height: 108px;
    box-sizing: border-box;
  }

  .single-item-block {
    display: flex;
    width: 50%;
    min-height: 108px;
    justify-content: end;
    box-sizing: border-box;
  }
</style>