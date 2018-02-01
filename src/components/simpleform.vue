<template>
<div>
<div style="margin: 20px;"></div>
<el-form label-position="left" label-width="100px" :model="formLabelAlign">
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  name: 'simpleform',
 data() {
      return {
      	formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods: {
     
    }
}
</script>
<style>

</style>