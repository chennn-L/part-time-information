<template>
  <div class="index">
      <div class="logo"><img src="../../assets/tan.jpg" alt="logo"></div>
      <div class="name">大学生兼职管理系统</div>
      <div class="descrip">这是一个大学生兼职管理系统————父愁者联盟</div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index{
        margin-top: 6%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .name{
        margin-top: 2%;
        font-size: 32px;
        font-weight: bold;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
    .descrip{
        font-size: 1.2rem;
        color: #6a8bad;
        margin-top: 2%;
    }
</style>
