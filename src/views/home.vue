<template>

<el-container class="home-container">
        <el-header>
            <div>
                <img src="" alt="">
                <span>基于功能点的软件开发成本评估系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
    <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
            <div class="toggle-button" @click="toggleCollapse">|||</div>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#333744"
                text-color="#fff"
                active-text-color="#409EFF"
                :collapse= 'isCollapse'
                :collapse-transition='false'
                :router='true'
                unique-opened
                :default-active="activePath">
                <!-- 一级菜单 -->
                <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
                    <template #title>
                        <i :class="iconsObj[item.id]"></i>
                        <span>{{item.authName}}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"
                    @click="saveNavState('/' + subItem.path)">
                        <template #title>
                            <i class="el-icon-menu"></i>
                            <span>{{subItem.authName}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</el-container>

</template>

<script>
export default {
    data() {
        return {
            //左侧菜单数据
            menulist: [],
            iconsObj: {
                '125': 'el-icon-s-custom',
                '103': 'el-icon-setting',
                '101': 'el-icon-goods',
                '102': 'el-icon-goods',
                '145': 'el-icon-goods'
            },
            isCollapse : false,

            //被激活的链接地址
            activePath: ''
        }
        
    },
    

    created() {
       this.getMenuList(),
       this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        logout() {
        window.sessionStorage.clear();
        this.$router.push("/login");
        },
        //获取菜单数据
        async getMenuList() {
            const {data : res} = await this.$http.get('menus')
            if(res.meta.status !== 200) 
                return this.$message.error(res.meta.msg);
            this.menulist = res.data  

            console.log(res)
        },
        //实现侧边栏的折叠与展开
        toggleCollapse() {
            
            this.isCollapse = ! this.isCollapse
        },
        //gaoliang
        saveNavState(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
            this.activePath = activePath
        }
    }
  
};
</script>

<style lang="less" scoped>

.home-container {
  height: 100vh;
  padding: 0px;
  margin: 0px;
}

.el-header {
    background-color: #373D41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    background-color: #333744;
    .el-menu {
        border-right: none;
    }
    transition: all 0.7s;
}

.el-main {
    background-color: #EAEDF1;
}

.toggle-button {
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #FFF;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>