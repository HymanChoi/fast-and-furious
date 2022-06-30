<template>
  <div class="info-list">
    <div class="info-list__item">
      <div class="info-list__item-label">Age</div>
      <div class="info-list__item-value">{{ info.age }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Birth Date</div>
      <div class="info-list__item-value">{{ info.birth_date }}</div>
    </div>
    <div class="info-list__item">
      <div class="info-list__item-label">Nationality</div>
      <div class="info-list__item-value">{{ info.nationality }}</div>
    </div>

    <van-divider
      content-position="right"
      :style="{ color: '#969799', borderColor: '#969799' }"
    >
      Statistics
    </van-divider>

    <div class="info-list__totals">
      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ cutPercent(info.world_championships) }}
        </div>
        <div class="info-list__totals__total-title">Championships</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ cutPercent(info.wins) }}
        </div>
        <div class="info-list__totals__total-title">Wins</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ cutPercent(info.best_result) }}
        </div>
        <div class="info-list__totals__total-title">Best Result</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">{{ info.seasons }}</div>
        <div class="info-list__totals__total-title">Seasons</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">{{ info.starts }}</div>
        <div class="info-list__totals__total-title">Starts</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">{{ info.events }}</div>
        <div class="info-list__totals__total-title">Events</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">{{ info.laps_raced }}</div>
        <div class="info-list__totals__total-title">Laps Raced</div>
      </div>

      <div class="info-list__totals__total">
        <div class="info-list__totals__total-num">
          {{ cutPercent(info.points) }}
        </div>
        <div class="info-list__totals__total-title">Points</div>
      </div>
    </div>

    <van-divider
      content-position="right"
      :style="{ color: '#969799', borderColor: '#969799' }"
    >
      Percentage
    </van-divider>

    <div class="info-list__circles">
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.wins)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.wins)"
        />
        <div class="info-list__circles__circle-title">Wins</div>
      </div>
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.fastest_laps)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.fastest_laps)"
        />
        <div class="info-list__circles__circle-title">Fastest Laps</div>
      </div>
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.pole_positions)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.pole_positions)"
        />
        <div class="info-list__circles__circle-title">Pole Positions</div>
      </div>
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.laps_led)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.laps_led)"
        />
        <div class="info-list__circles__circle-title">Laps Led</div>
      </div>
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.podiums)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.podiums)"
        />
        <div class="info-list__circles__circle-title">Podiums</div>
      </div>
      <div class="info-list__circles__circle">
        <van-circle
          :current-rate="getRace(info.retirements)"
          :rate="30"
          :speed="100"
          :size="80"
          :stroke-width="40"
          layer-color="#f5f6f7"
          :text="getText(info.retirements)"
        />
        <div class="info-list__circles__circle-title">Retirements</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface DataProps {
  getRace: (val: any) => number;
  getText: (val: any) => string;
  cutPercent: (val: any) => string;
}

export default defineComponent({
  name: "Basic",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data: DataProps = reactive({
      /**
       *
       * @param val
       */
      getRace(val: any) {
        return val ? Number(val.match(/\((.+?)\)/g)[0].slice(1, -2)) : 0;
      },
      /**
       *
       * @param val
       */
      getText(val: any) {
        return val ? val.replace("(", "\n(") : 0;
      },
      /**
       *
       * @param val
       */
      cutPercent(val: any) {
        return val ? val.split("(")[0] : "";
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.info-list {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  height: calc(100vh - 364px);
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;

    &-label {
      width: 90px;
      color: #969799;
    }

    &-value {
      flex: 1;
    }
  }

  &__item + &__item {
    margin-top: 15px;
  }

  &__totals {
    display: flex;
    flex-wrap: wrap;

    &__total {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 85px;
      padding: 10px;
      margin-right: 15px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: $box-shadow;

      &-num {
        font-size: 26px;
        color: $f1-red;
        line-height: 50px;
      }

      &-title {
        font-size: 13px;
        color: #969799;
      }
    }

    &__total:nth-child(n + 4) {
      margin-top: 15px;
    }

    &__total:nth-child(3n) {
      margin-right: 0px;
    }
  }

  &__circles {
    display: flex;
    flex-wrap: wrap;

    &__circle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 85px;
      padding: 10px;
      margin-right: 15px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: $box-shadow;

      &-title {
        margin-top: 10px;
        font-size: 13px;
        color: #969799;
      }
    }

    &__circle:nth-child(n + 4) {
      margin-top: 15px;
    }

    &__circle:nth-child(3n) {
      margin-right: 0px;
    }
  }
}

::v-deep .van-circle__text {
  white-space: pre-line;
}
</style>
