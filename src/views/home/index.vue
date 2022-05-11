<template>
  <div class="home">
    <van-nav-bar title="News" />
    <div class="tabs">
      <div
        v-for="(tab, index) of tabs"
        :key="index"
        class="tabs__tab"
        :class="tab === activeTab ? 'tabs__tab_active' : ''"
        @click="switchTab(tab)"
      >
        {{ tab }}
      </div>
    </div>

    <News v-show="activeTab === 'News'" :list="list" />
    <Technical v-show="activeTab === 'Technical'" :list="list" />
    <Podcast v-show="activeTab === 'Podcast'" :list="list" />
    <Video v-show="activeTab === 'Video'" :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import News from "./components/News/index.vue";
import Technical from "./components/Technical/index.vue";
import Podcast from "./components/Podcast/index.vue";
import Video from "./components/Video/index.vue";

interface DataProps {
  activeTab: string;
  tabs: Array<any>;
  list: Array<any>;
  switchTab: (tab: string) => void;
}

export default defineComponent({
  name: "",
  components: {
    News,
    Technical,
    Podcast,
    Video,
  },
  setup() {
    const data: DataProps = reactive({
      activeTab: "News",
      tabs: ["News", "Technical", "Podcast", "Video", "Interview", "Feature"],
      list: [
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/sutton/2022/EmiliaRomagna/Sunday/1393392729.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Albon says ‘an extra few tenths’ will see Williams scoring regularly in 2022",
        },
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/Sunday/GettyImages-1390148621.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Binotto expects advantage to shift ‘race by race’ between Ferrari and Red Bull",
        },
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/sutton/2022/EmiliaRomagna/Sunday/1393385103.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Tsunoda pleased to deliver strong run to P7 and rescue AlphaTauri's 'horrible' start to Imola weekend",
        },
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/manual/Ricciardo%20-%20Imola.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Ricciardo apologises for Sainz crash at Imola as he opens up on ‘painful’ Emilia Romagna GP",
        },
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/GP2204_121215_54I6050.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Vettel hails ‘unbelievable race’ in Imola as he and Stroll claim Aston Martin’s first points of 2022",
        },
        {
          cover:
            "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/GettyImages-1240209382.jpg.transform/4col-retina/image.jpg",
          tag: "News",
          title:
            "Bottas calls Russell battle ‘really good fun’ as he claims P5 in Emilia Romagna",
        },
      ],
      /**
       *
       */
      switchTab(tab: string) {
        this.activeTab = tab;
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  width: 345px;
  padding: 15px;
  overflow-x: scroll;

  &__tab {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 15px;
    color: #969799;
    background-color: #fff;
    box-shadow: $box-shadow;
  }

  &__tab + &__tab {
    margin-left: 10px;
  }

  &__tab_active {
    background-color: $f1-red;
    border-color: $f1-red;
    color: #fff;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
