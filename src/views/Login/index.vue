<template>
    <div id="login">
        <div class="login-warp">
            <ul class="menu-tab"> 
                <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">{{ item.txt }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return {
            menuTab: [
            { txt: '登录', current: true },
            { txt: '注册', current: false }
          ]
        }
    },
    created(){},
    mounted(){},
    methods:{
        toggleMenu(data){
            this.menuTab.forEach((elem,index) => {
                elem.current = false
            });
            //高光
            data.current = true
        }

    } 
}
</script>
<style lang="scss" scoped>
#login{
    height: 100vh;
    background-color: #344a5f;
}
.login {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current {
        background-color: rgba(0,0,0,.1);
    }
    .login-form {
        margin-top: 29px;
        label {
            display: block;
            margin-bottom: 3px;
            font-size: 14px;
            color: #fff;
        }
        .item-form {
            margin-bottom: 13px;
        }
        .block {
          display: block;
          width: 100%;
        }
        .login-btn {
          margin-top: 19px;
        }
    }
}
</style>