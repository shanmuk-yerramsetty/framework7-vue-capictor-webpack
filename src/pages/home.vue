<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon-ios="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Trailers</f7-nav-title>
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-trailers" icon-ios="f7:search_strong" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-searchbar class="searchbar-trailers" expandable @input="searchTrailers($event)" @change="resetSearch($event)"></f7-searchbar>
    </f7-navbar>

    <!-- <f7-swiper pagination class="swipe-slider swiper-init" :params="{slidesPerView: 1, spaceBetween: 20, pagination: { el: '.swiper-pagination', clickable: true} }">
      <f7-swiper-slide class="swipe-tile" v-for="(banner, index) in banners" :key="index">
        <img v-bind:src="banner" width="375">
      </f7-swiper-slide>
    </f7-swiper> -->

    <div data-pagination='{"el": ".swiper-pagination", "clickable": "true"}' data-space-between="20" :data-slides-per-view="noOfSlides" class="swipe-slider swiper-container swiper-init demo-swiper">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <img v-bind:src="banner" height="140" width="375">
        </div>
      </div>
    </div>

    <f7-block class="trailer-list">
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
    name: 'home-page',
    components: {
      f7Searchbar
    },
    data () {
      return {
        search: '',
        tilesPerRow: 3,
        noOfSlides: 1,
        fullWidth: document.documentElement.clientWidth
      }
    },
    mounted () {
      this.handleResize()
      this.tilesCountPerRow
    },
    created () {
      window.addEventListener('resize', this.handleResize)
    },
    destroyed () {
      window.removeEventListener('resize', this.handleResize)
    },
    computed: {
      banners () {
        return this.$root.$data.banners
      },
      trailers () {
        var self=this
        var filteredResults = this.$root.$data.trailers.filter(function(cust){return cust.title.toLowerCase().indexOf(self.search.toLowerCase())>=0})
        return this.listToMatrix(filteredResults, this.tilesPerRow)
      },
      tilesCountPerRow () {
        if (window.matchMedia("(orientation: portrait)").matches) {
          this.noOfSlides = 1
          this.tilesPerRow = 3
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
          this.noOfSlides = 2
          this.tilesPerRow = 5
        }
      }
    },
    methods: {
      handleResize (event) {
        let mySwiper = document.querySelector('.swipe-slider').swiper
        if (mySwiper) {
          if (window.matchMedia("(orientation: portrait)").matches) {
            mySwiper.params.slidesPerView = 1
            this.tilesPerRow = 3
          }
          if (window.matchMedia("(orientation: landscape)").matches) {
            mySwiper.params.slidesPerView = 2
            this.tilesPerRow = 5
          }
          mySwiper.update()
        }
      },
      searchTrailers (event) {
        this.search = event.target.value
      },
      resetSearch () {
        this.search = event.target.value
      },
      listToMatrix (list, elementsPerSubArray) {
        var matrix = [], i, k
        for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
            k++
            matrix[k] = []
          }
          matrix[k].push(list[i])
        }
        return matrix
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
  /*.swiper-slide img {
    width: 375px;
  }*/
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

