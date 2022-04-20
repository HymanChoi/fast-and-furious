<template>
  <div class="list">
    <div
      class="list__item"
      :class="getClassName(item.team)"
      v-for="item in info.teams"
      :key="item.season + 'teams'"
    >
      <div class="list__item-team">{{ item.team }}</div>
      <div class="list__item-season">{{ item.season }}</div>
      <!-- <div
        class="list__item-driver"
        v-for="i in item.teammate"
        :key="i + 'teammate'"
      >
        {{ i }}
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Career",
  props: {
    info: Object,
  },
  setup() {
    const data = reactive({
      getClassName(team: string) {
        return `list__item_${team.replace(/\s/g, "")}`;
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 380px);
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  &__item-season {
  }

  &__item-team {
  }

  &__item_Ferrari {
    background-color: $Ferrari;
    color: #fff;
  }

  &__item_Mercedes {
    background-color: $Mercedes;
    color: #fff;
  }

  &__item_RedBull {
    background-color: $RedBull;
    color: #fff;
  }

  &__item_McLaren {
    background-color: $McLaren;
    color: #fff;
  }

  &__item_AlpineF1Team {
    background-color: $AlpineF1Team;
    color: #fff;
  }

  &__item_AlfaRomeo {
    background-color: $AlfaRomeo;
    color: #fff;
  }

  &__item_HaasF1Team {
    background-color: $HaasF1Team;
    color: #fff;
  }

  &__item_AlphaTauri {
    background-color: $AlphaTauri;
    color: #fff;
  }

  &__item_Williams {
    background-color: $Williams;
    color: #fff;
  }

  &__item_AstonMartin {
    background-color: $AstonMartin;
    color: #fff;
  }

  &__item_Sauber {
    background-color: $Sauber;
    color: #fff;
  }

  &__item_Renault {
    background-color: $Renault;
  }

  &__item_ToroRosso {
    background-color: $ToroRosso;
    color: #fff;
  }

  &__item_ManorMarussia {
    background-color: $ManorMarussia;
    color: #fff;
  }

  &__item_HRT {
    background-color: $HRT;
  }

  &__item_ForceIndia,
  &__item_RacingPoint {
    background-color: $ForceIndia;
    color: #fff;
  }

  &__item_BMWSauber {
    background-color: $BMWSauber;
  }
}
</style>
