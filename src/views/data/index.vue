<template>
  <van-nav-bar title="排行榜" />
  <van-tabs v-model:active="active">
    <van-tab title="车队积分">
      <van-list class="list">
        <div
          class="item"
          v-for="item in list"
          :key="item.rank"
          @click="goToInfo('team', item.id)"
        >
          <div class="item-rank">{{ item.rank }}</div>
          <div class="item-img">{{ item.img }}</div>
          <div class="item-name">{{ item.name }}</div>
          <div class="item-score">{{ item.score }}</div>
        </div>
      </van-list>
    </van-tab>
    <van-tab title="车手积分">
      <van-list class="list">
        <div
          class="item"
          v-for="item in list"
          :key="item.rank"
          @click="goToInfo('racer', item.id)"
        >
          <div class="item-rank">{{ item.rank }}</div>
          <div class="item-img">{{ item.img }}</div>
          <div class="item-name">{{ item.name }}</div>
          <div class="item-score">{{ item.score }}</div>
        </div>
      </van-list>
    </van-tab>
  </van-tabs>

  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

interface RankListItem {
  id: number;
  rank: number;
  img: string;
  name: string;
  score: number;
}

interface DataProps {
  active: number;
  list: Array<RankListItem>;
  goToInfo: (where: string, item: any) => void;
}

export default defineComponent({
  name: "",
  setup() {
    const router = useRouter();
    const data: DataProps = reactive({
      active: 0,
      list: [
        { id: 0, rank: 1, img: "", name: "xxx", score: 3 },
        { id: 1, rank: 2, img: "", name: "yyy", score: 2 },
        { id: 2, rank: 3, img: "", name: "zzz", score: 0 },
      ],
      goToInfo(where: string, id: number) {
        console.log(where, id);
        router.push({ path: `/data/${where}`, query: { id: id } });
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
.list {
  height: calc(100vh - 140px);
  overflow-y: scroll;
}
.item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
  background-color: antiquewhite;
}
.item + .item {
  border-top: 1px solid #fff;
}
.item-rank {
  width: 60px;
}
.item-img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: salmon;
}
.item-name {
  flex: 1;
}
.item-score {
  width: 80px;
}
</style>
