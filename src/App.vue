<template>
  <div id="app">
    <el-container>
      <el-aside>
        <el-menu class="app-menu" :collapse="isCollapse" :unique-opened="appMenuOpt.uniqueOpened"
          :background-color="appMenuOpt.bg"
          :text-color="appMenuOpt.txtColor"
          :active-text-color="appMenuOpt.activeTxtColor">
          <template v-for="(menu, menuIndex) in appMenu">
            <template v-if="menu.childrenWithGroup.length > 0">
              <el-submenu :index="`${menuIndex + 1}`" :key="'submenu_with_group_' + menuIndex" :disabled="menu.disabled">
                <template slot="title">
                  <i :class="menu.icon" v-if="menu.icon"></i>
                  <span slot="title">{{menu.txt}}</span>
                </template>
                <el-menu-item-group :title="menuGroup.groupTxt" v-for="(menuGroup, menuGroupIndex) in menu.childrenWithGroup" :key="'group_' + menuGroupIndex">
                  <template v-for="(menuLel1, menuLel1Index) in menuGroup.children">
                    <template v-if="menuLel1.children.length > 0">
                      <el-submenu :index="`${menuIndex + 1}-${menuGroupIndex + 1}-${menuLel1Index + 1}`" :key="'group_submenu_' + menuLel1Index">
                        <span slot="title">{{menuLel1.txt}}</span>
                        <el-menu-item :index="`${menuIndex + 1}-${menuGroupIndex + 1}-${menuLel1Index + 1}-${menuLel2Index + 1}`" v-for="(menuLel2, menuLel2Index) in menuLel1.children" :key="'group_submenu_item_' + menuLel2Index" :disabled="menuLel2.disabled">{{menuLel2.txt}}</el-menu-item>
                      </el-submenu>
                    </template>
                    <template v-else>
                      <el-menu-item :index="`${menuIndex + 1}-${menuGroupIndex + 1}-${menuLel1Index + 1}`" :key="'group_item_' + menuLel1Index" :disabled="menuLel1.disabled">{{menuLel1.txt}}</el-menu-item>
                    </template>
                  </template>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <template v-else-if="menu.children.length > 0">
              <el-submenu :index="`${menuIndex + 1}`" :key="'submenu_' + menuIndex" :disabled="menu.disabled">
                <template slot="title">
                  <i :class="menu.icon" v-if="menu.icon"></i>
                  <span slot="title">{{menu.txt}}</span>
                </template>
                <template v-for="(menuLel1, menuLel1Index) in menu.children">
                  <template v-if="menuLel1.children.length > 0">
                    <el-submenu :index="`${menuIndex + 1}-${menuLel1Index + 1}`" :key="'submenu_submenu_' + menuLel1Index">
                      <span slot="title">{{menuLel1.txt}}</span>
                      <el-menu-item :index="`${menuIndex + 1}-${menuLel1Index + 1}-${menuLel2Index + 1}`" v-for="(menuLel2, menuLel2Index) in menuLel1.children" :key="'submenu_submenu_item_' + menuLel2Index" :disabled="menuLel2.disabled">{{menuLel2.txt}}</el-menu-item>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item :index="`${menuIndex + 1}-${menuLel1Index + 1}`" v-for="(menuLel1, menuLel1Index) in menu.children" :key="'submenu_item_' + menuLel1Index" :disabled="menuLel1.disabled">{{menuLel1.txt}}</el-menu-item>
                  </template>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="`${menuIndex + 1}`" :disabled="menu.disabled" :key="'menu_item_' + menuIndex">
                <i :class="menu.icon" v-if="menu.icon"></i>
                <span slot="title">{{menu.txt}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="breadcrumbWrap">
            <i class="appMenuFold" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleMenu"></i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-dropdown size="medium" placement="bottom" trigger="click">
            <div class="headWrap">
              <el-avatar :size="40" :src="userHeadUrl">
                <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
              </el-avatar>
              <span class="userName">王小虎</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>返回首页</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
    
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appMenuOpt: require('./utils/app_menu').appMenuOpt,
      appMenu: require('./utils/app_menu').appMenu,
      isCollapse: false,
      userHeadUrl: 'http://img3.imgtn.bdimg.com/it/u=190213385,1613090290&fm=26&gp=0.jpg'
    }
  },
  methods: {
    handleMenu() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.9rem;
  line-height:1.3;
  height: 100vh;
  overflow: hidden;
}

html, body {
  padding: 0;
  margin: 0;
}

.app-menu {
  position: relative;
  width: 200px;
  height: 100%;
  user-select: none;
}

.el-container {
  position: relative;
  height: 100%;
}
.el-aside {
  width: auto !important;
}
.el-header {
  position: relative;
  user-select: none;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  height: 60px;
  padding: 0 20px 0 0 !important;
}
.breadcrumbWrap {
  position: relative;
  height: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
}
.appMenuFold {
  position: relative;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
  height: 100%;
  line-height: 60px !important;
  width: 60px;
  text-align: center;
  font-size: 22px;
}
.appMenuFold:hover {
  background: rgba(155, 155, 155, 0.1);
}
.headWrap {
  position: relative;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
  cursor: pointer;
}
.userName {
  margin-left: 10px;
}
.el-dropdown-menu {
  top: 46px !important;
}
</style>
