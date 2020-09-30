<template>
  <div class="item">
    <el-row>
      <el-col>
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px' }">
          <img width="256" height="256" :src="`https://me.gwm.dev/api/items/${item.id}/icon`"
            class="image">
          <div style="padding: 12px;">
            <span class="card-name">{{item.name}}</span>
            <div class="bottom clearfix">
              <span>{{item.price}} ₽</span>
              <el-button @click="openPost" type="text" class="button">Подробнее</el-button>
            </div>
            <el-button type="primary" icon="el-icon-shopping-cart-1" circle size="medium"></el-button>
            <el-button 
              type="primary" 
              icon="el-icon-star-off" 
              circle size="small"
              @click="addItem(item)"
            >
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
        openPost() {
            const id = this.item.id
            this.$router.push(`/item/${id}`);
        },
        addItem(item) {
          this.$store.dispatch('favs/addItem', item)
        }
    }
  }

</script>

<style scoped>
  .card {
      max-width: 550px;
      margin-right: 20px;
      margin-bottom: 20px;
  }

  .card-name {
    font-weight: 500;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
