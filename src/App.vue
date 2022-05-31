<template>
  <div id="app">
    <nav class="navigation">
      <div class="container">
        <ul class="navbar">
          <router-link
            tag="li"
            class="navbar__link"
            exact
            active-class="navbar__link_active"
            to="/"
          >
            <a class="link">Все котики</a>
          </router-link>
          <router-link
            tag="li"
            class="navbar__link"
            active-class="navbar__link_active"
            to="/likes"
            ><a class="link">Любимые котики</a></router-link
          >
        </ul>
      </div>
    </nav>
    <section class="content">
      <div class="container">
        <router-view />
        <img
          src="assets/load.svg"
          alt="loading"
          v-if="loading"
          class="loading"
        />
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["loading"]),
  },
  methods: {
    ...mapMutations(["updateNumberCats"]),
    ...mapActions(["getPost"]),
    roundPX(num) {
      return Math.round((num / 100) * 100);
    },
    scroll() {
      window.addEventListener("scroll", () => {
        if (
          this.roundPX(
            document.documentElement.scrollTop + window.innerHeight
          ) == this.roundPX(document.documentElement.offsetHeight) &&
          this.$router.currentRoute.name === "home"
        ) {
          this.getPost();
        }
      });
    },
  },
  updated() {
    if (
      window.innerHeight == document.documentElement.scrollHeight &&
      !this.loading &&
      this.$router.currentRoute.name === "home"
    ) {
      this.getPost();
    }
  },
  mounted() {
    this.$router.push("/").catch(() => {});
    this.scroll();
  },
  created() {
    switch (true) {
      case document.documentElement.clientWidth < 992 &&
        document.documentElement.clientWidth > 576:
        this.updateNumberCats(15);
        break;
      case document.documentElement.clientWidth < 576:
        this.updateNumberCats(10);
        break;
    }
    this.getPost();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}

.navigation {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 64px;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
}

.navbar {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 64px;
  &__link {
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: all 0.5s;
    &_active {
      background: #1e88e5;
    }
  }
}

.link {
  display: flex;
  align-items: center;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  text-decoration: none;
  .navbar__link_active & {
    color: white;
  }
  &:hover {
    color: white;
  }
}
.content {
  margin: 35px 0 100px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px;
  }
}
.loading {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1200px) {
  .container {
    max-width: 900px;
  }
  .content {
    margin: 35px 0 80px 0;
    &__wrapper {
      grid-template-columns: repeat(4, 1fr);
      gap: 35px;
    }
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 740px;
  }
  .content {
    margin: 35px 0 60px 0;
    &__wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 550px;
  }
  .content {
    margin: 35px 0 50px 0;
    &__wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
}

@media (max-width: 576px) {
  .container {
    max-width: calc(100% - 30px);
  }
  .content {
    margin: 35px 0 50px 0;
    &__wrapper {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}
</style>
