<template>
  <f7-page>
    <f7-tabs swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <home-page> </home-page>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
    <f7-toolbar tabbar class="tabs-bottom">
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
import HomePage from './home';

export default {
  name: 'tabs-page',
  components: {
    HomePage
  }
}
</script>
