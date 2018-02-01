<template>
  <div id="app">
    <router-view/>
    <router-view name="sidebar" />
    <router-view name="card" />
    <router-view name="columnsplitting" />
    <router-view name="simplecard" />
  </div>
</template>

<script>
// import {store} from '../store.js'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.flexcol {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap
}
.flexcol-wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap
}
.flexrow {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap
}
.flexrow-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
}
.as-start {
    align-self: flex-start
}
.as-end {
    align-self: flex-end
}
.as-center {
    align-self: center
}
.as-baseline {
    align-self: baseline
}
.as-stretch {
    align-self: stretch
}
.jc-around {
    justify-content: space-around
}
.jc-start {
    justify-content: flex-start
}
.jc-end {
    justify-content: flex-end
}
.jc-center {
    justify-content: center
}
.jc-between {
    justify-content: space-between
}
.ai-stretch {
    align-items: stretch
}
.ai-center {
    align-items: center
}
.ai-start {
    align-items: flex-start
}
.ai-end {
    align-items: flex-end
}
.ai-baseline {
    align-items: baseline
}
.ac-start {
    align-content: flex-start
}
.ac-end {
    align-content: flex-end
}
.ac-center {
    align-content: center
}
.ac-between {
    align-content: space-between
}
.ac-around {
    align-content: space-around
}
.ac-stretch {
    align-content: stretch
}
.flexitem-0 {
    flex: 0 0 auto
}
.colitem-0 {
    flex: 0 0 auto;
    height: 0
}
.rowitem-0 {
    flex: 0 0 auto;
    width: 0
}
.flexitem-1 {
    flex: 1 1 auto
}
.colitem-1 {
    flex: 1 1 auto;
    height: 0
}
.rowitem-1 {
    flex: 1 1 auto;
    width: 0
}
.flexitem-2 {
    flex: 2 2 auto
}
.colitem-2 {
    flex: 2 2 auto;
    height: 0
}
.rowitem-2 {
    flex: 2 2 auto;
    width: 0
}
.flexitem-3 {
    flex: 3 3 auto
}
.colitem-3 {
    flex: 3 3 auto;
    height: 0
}
.rowitem-3 {
    flex: 3 3 auto;
    width: 0
}
.flexitem-4 {
    flex: 4 4 auto
}
.colitem-4 {
    flex: 4 4 auto;
    height: 0
}
.rowitem-4 {
    flex: 4 4 auto;
    width: 0
}
.flexitem-5 {
    flex: 5 5 auto
}
.colitem-5 {
    flex: 5 5 auto;
    height: 0
}
.rowitem-5 {   
    flex: 5 5 auto;
    width: 0
}
.flexitem-6 {   
    flex: 6 6 auto
}
.colitem-6 {   
    flex: 6 6 auto;
    height: 0
}
.rowitem-6 {   
    flex: 6 6 auto;
    width: 0
}
.flexitem-7 {
    flex: 7 7 auto
}
.colitem-7 {
    flex: 7 7 auto;
    height: 0
}
.rowitem-7 {
    flex: 7 7 auto;
    width: 0
}
.flexitem-8 {
    flex: 8 8 auto
}
.colitem-8 {
    flex: 8 8 auto;
    height: 0
}
.rowitem-8 {

    flex: 8 8 auto;
    width: 0
}
.flexitem-9 {

    flex: 9 9 auto
}
.colitem-9 {
    flex: 9 9 auto;
    height: 0
}
.rowitem-9 {
    flex: 9 9 auto;
    width: 0
}
.flexitem-10 {
    flex: 10 10 auto
}
.colitem-10 {
    flex: 10 10 auto;
    height: 0
}
.rowitem-10 {

    flex: 10 10 auto;
    width: 0
}
.flexitem-11 {
    flex: 11 11 auto
}
.colitem-11 {
    flex: 11 11 auto;
    height: 0
}
.rowitem-11 {
    flex: 11 11 auto;
    width: 0
}
.flexitem-12 {
    flex: 12 12 auto
}
.colitem-12 {
    flex: 12 12 auto;
    height: 0
}
.rowitem-12 {
    flex: 12 12 auto;
    width: 0
}
.flexitem-13 {
    flex: 13 13 auto
}
.colitem-13 {
    flex: 13 13 auto;
    height: 0
}
.rowitem-13 {
    flex: 13 13 auto;
    width: 0
}
.flexitem-14 {
    flex: 14 14 auto
}
.colitem-14 {
    flex: 14 14 auto;
    height: 0
}
.rowitem-14 {
    flex: 14 14 auto;
    width: 0
}
.flexitem-15 {
    flex: 15 15 auto
}
.colitem-15 {
    flex: 15 15 auto;
    height: 0
}
.rowitem-15 {
    flex: 15 15 auto;
    width: 0
}
.flexitem-16 {
    flex: 16 16 auto
}
.colitem-16 {
    flex: 16 16 auto;
    height: 0
}
.rowitem-16 {
    flex: 16 16 auto;
    width: 0
}
.flexitem-17 {
    flex: 17 17 auto
}
.colitem-17 {
    flex: 17 17 auto;
    height: 0
}
.rowitem-17 {
    flex: 17 17 auto;
    width: 0
}
.flexitem-18 {
    flex: 18 18 auto
}
.colitem-18 {
    flex: 18 18 auto;
    height: 0
}
.rowitem-18 {
    flex: 18 18 auto;
    width: 0
}
.flexitem-19 {
    flex: 19 19 auto
}
.colitem-19 {
    flex: 19 19 auto;
    height: 0
}
.rowitem-19 {
    flex: 19 19 auto;
    width: 0
}
.flexitem-20 {
    flex: 20 20 auto
}
.colitem-20 {
    flex: 20 20 auto;
    height: 0
}
.rowitem-20 {
    flex: 20 20 auto;
    width: 0
}
.fleximage {
    max-width: 100%;
    max-height: 100%
}


</style>
