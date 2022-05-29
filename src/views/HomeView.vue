<template>
  <div class="content__wrapper">
    <CardCat
      v-for="(item, index) in allPostsCats"
      :key="index"
      :url="item.url"
      text="cat"
      :item="item"
    />
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
    ...mapGetters(["allPostsCats"]),
  },
};
</script>
