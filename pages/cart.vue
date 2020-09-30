<template>
  <div class="cart-container">
    <h2 class="cart-title">
      Корзина
    </h2>
    <h2 class="cart-info">
      В вашей корзине нету товаров, не-а)
    </h2>
    <p class="cart-desc">
      Лорем ипсум долор сит амет, еос иусто тамяуам ут. 
      Сонет витае молестие те сеа, еа вел стет делицата, дицат солеат епицури вел ан. 
      Пер ид нонумы адмодум детерруиссет, идяуе патриояуе аргументум ад усу. 
      Децоре номинати сед еу, те утинам лаборе плацерат вим.
    </p>
    <p class="cart-auth">
      Ну или вы можете 
        <nuxt-link to="/signin?message=login" class="auth-link">
          авторизоваться
        </nuxt-link>
      )))
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .cart-container {
    text-align: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .cart-title {
    font-size: 40px;
    margin-bottom: 50px;
    text-align: left;
  }

  .cart-desc {
    max-width: 550px;
    margin: 0 auto;
  }

  .auth-link {
    color: #1D8CE0;
  }

  .cart-auth {
    margin-bottom: 100px;
  }

</style>