<template>
  <div class="content__wrapper">
    <CardCat
      v-for="(item, index) in likeCats"
      :key="index"
      :url="item.url"
      text="cat"
      :item="item"
    />
    <h1 v-if="likeCats.length === 0" class="title">Нет любимых котиков</h1>
  </div>
</template>

<script>
import CardCat from "../components/CardCat.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CardCat,
  },
  computed: {
    ...mapGetters(["likeCats"]),
  },
};
</script>

<style scoped lang="scss">
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  text-align: center;
  font-size: 34px;
  color: rgba(0, 0, 0, 0.7);
}

@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 20px;
  }
}
</style>