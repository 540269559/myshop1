<template>
  <div class="item_params">
    <h3 class="text-center">{{res.info.key}}</h3>
    <div class="row_item" v-for="item in res.rule.tables[0]">
      <span v-for="(value, index) in item" v-show="index === 0">
        {{value}}
      </span>
      <span v-for="(value, index) in item" v-show="index !== 0">
        {{value}}
      </span>
    </div>
    <table class="table">
      <tbody>
        <tr  class="row_item_detail" v-for="(item, index) in res.info.set" :class="{detail: index === 0}">
          <td colspan="1" style="padding-left:0;padding-right:0;width:40px;">{{item.key}}</td>
          <td class="item_detail_value" style="padding-left:0;padding-right:0;">{{item.value}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="row_item_detail" v-for="(item, index) in res.info.set" :class="{detail: index === 0}">
      <div>
        {{item.key}}
      </div>
      <div class="item_detail_value">
        {{item.value}}
      </div>
    </div> -->
  </div>
</template>

<script>
export default {

  name: 'ItemParams',
  props: {
    res: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.item_params {
  font-size: 16px;
  color: #666;
  margin: 0 8px 0 8px;
  padding:0 8px 0 8px;
}
.row_item {
  padding:7px 0 7px 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom:1px solid #eee;
  border-top:1px solid #eee;
}
.row_item_detail {
  padding:7px 0 7px 0;
  border-bottom:1px solid #eee;
}
.detail {
  border-top: 5px solid #eee;
}
.item_detail_value {
  color: rgb(255, 105, 156);
  /*flex-grow: 2;*/
}
h3 {
  color: rgb(255, 105, 156);
}
</style>