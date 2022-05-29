<template>
  <div class="card">
    <img class="card__image" :src="url" :alt="text" />
    <div
      class="like"
      :class="{ like_active: item.like }"
      @click="likePost(item)"
    >
      <img src="assets/like.svg" alt="like" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    url: String,
    text: String,
    item: Object,
  },
  methods: {
    ...mapMutations(["likePost"]),
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  height: 225px;
  width: 225px;
  transition: all 0.5s;
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 1px 1px 15px black;
    transform: scale(1.2);
    .like {
      opacity: 1;
    }
  }
}
.like {
  position: absolute;
  width: 40px;
  height: 36px;
  bottom: 25px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: block;
    width: 100%;
    height: 100%;
    mask: url("../assets/likeFull.svg") center / contain no-repeat;
    background: #f24e1e;
    transition: all 0.5s;
  }
  &:hover {
    &:before {
      opacity: 1;
    }
  }
  &_active {
    &:before {
      background: #ff3a00;
      opacity: 1;
    }
  }
}

@media (max-width: 1200px) {
  .card {
    height: 200px;
    width: 200px;
  }
}

@media (max-width: 992px) {
  .card {
    &:hover {
      transform: scale(1);
    }
  }
  .like {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .card {
    height: 225px;
    width: 225px;
  }
}

@media (max-width: 576px) {
  .card {
    height: 300px;
    width: 100%;
  }
}
</style>
