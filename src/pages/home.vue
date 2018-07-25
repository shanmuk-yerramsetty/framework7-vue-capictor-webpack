<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon-ios="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Trailers</f7-nav-title>
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-components" icon-ios="f7:search_strong" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-searchbar class="searchbar-components" search-container=".components-list" search-in="p" expandable></f7-searchbar>
    </f7-navbar>

    <f7-swiper pagination>
      <f7-swiper-slide v-for="(banner, index) in banners" :key="index"><img v-bind:src="banner" width="320" height="150"></f7-swiper-slide>
    </f7-swiper>

    <f7-block class="components-list searchbar-found">
      <f7-row v-for="(trailer_chunk, index) in trailers" :key="index">
        <f7-col v-for="(trailer, i) in trailer_chunk" :key="i">
          <img v-bind:src="trailer.img_url" width="110" height="140">
          <p class="trailer-title" :title="trailer.title">
            {{trailer.title}}
          </p>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
  import { f7Searchbar } from 'framework7-vue';
  export default {
    name: 'home',
    components: {
      f7Searchbar
    },
    computed: {
      banners () {
        return this.$root.$data.banners
      },
      trailers () {
        return this.listToMatrix(this.$root.$data.trailers, 3)
      }
    },
    methods: {
      listToMatrix (list, elementsPerSubArray) {
        var matrix = [], i, k;
        for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
          }
          matrix[k].push(list[i]);
        }
        return matrix;
      }
    }
  }
</script>


<style scoped>
  /* A bit of demo styles */;
  .demo-swiper .swiper-slide {
    font-size: 25px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
  }
  .swiper-slide img {
    width: 375px;
  }
  .demo-swiper .swiper-slide {
    box-sizing: border-box;
    border: 1px solid #ddd;
    background: #fff;
  }
  .demo-swiper {
    margin: 0px 0 10px;
    font-size: 18px;
  }
  .demo-swiper.demo-swiper-auto .swiper-slide {
    width: 85%;
  }
  .demo-swiper.demo-swiper-auto .swiper-slide:nth-child(2n) {
    width: 70%;
  }
  .demo-swiper.demo-swiper-auto .swiper-slide:nth-child(3n) {
    width: 30%;
  }
</style>

