<template>
  <div id="main-site-wrapper">
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="header-top-wrapper">
            <div class="header-top-left">
              <div class="currency"><span v-click-outside="currencyLeftMemuDropdownfunction"
                  @click.prevent="currencyLeftMemuDropdown = !currencyLeftMemuDropdown"
                  class="header-top-left-info">USD</span>
                <transition name="fade">
                  <ul v-if="currencyLeftMemuDropdown" class="header-top-left-dropdown-menu">
                    <li>RUB</li>
                    <li>KZT</li>
                  </ul>
                </transition>
              </div>
              <div class="languages"><span v-click-outside="languagesLeftMemuDropdownfunction"
                  @click.prevent="languagesLeftMemuDropdown = !languagesLeftMemuDropdown"
                  class="header-top-left-info">English</span>
                <transition name="fade">
                  <ul v-if="languagesLeftMemuDropdown" class="header-top-left-dropdown-menu">
                    <li>Russian</li>
                    <li>Kazakh</li>
                  </ul>
                </transition>
              </div>
              <div class="help"><span v-click-outside="helpLeftMemuDropdownfunction"
                  @click.prevent="helpLeftMemuDropdown = !helpLeftMemuDropdown" class="header-top-left-info">Help</span>
                <transition name="fade">
                  <ul v-if="helpLeftMemuDropdown" class="header-top-left-dropdown-menu">
                    <li>About</li>
                    <li>Contacts</li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="header-top-right"><a href="#" class="header-top-right-item"><i
                  class="icon-user header-top-right-icon"></i>Login </a><a href="#" class="header-top-right-item"><i
                  class="icon-lock header-top-right-icon"></i>Register </a>
              <div class="wrapper-burder header-top-right-item">
                <div class="burder-nav-close"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-middle">
        <div class="container">
          <div class="header-middle-wrapper">
            <div class="phone-block"><i class="icon-mobile-phone phone-block-icon"></i><a href="+23003560222"
                class="phone">2300 - 3560 - 222 </a></div><a href="#" class="logo"><img src="./../public/logo.png"
                alt=""></a><a href="#" class="basket-block"><i class="icon-shopping-basket basket-block-icon"></i><span
                class="basket-count">0</span></a>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="header-bottom-wrapper">
            <div class="header-bottom-left-nav">
              <div class="select-and-search-options">
                <div class="select-category-wrapper" @click="selectCategoryMenu = !selectCategoryMenu"
                  v-click-outside="selectCategoryMenufunction">
                  <div class="select-category-button">
                    <div class="select-category-icon-menu">
                      <div class="select-category-icon-points"><span class="select-category-icon-points-items"></span>
                      </div>
                      <div class="select-category-icon-lines"><span class="select-category-icon-lines-items"></span>
                      </div>
                    </div>Select a category <div class="select-category-triangle"></div>
                  </div>
                  <transition name="fade" v-if="selectCategoryMenu">
                    <ul class="select-category-dropdown-items">
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Mice And Trackballs</a></li>
                      <li><a href="#">Scanners</a></li>
                      <li><a href="#">Games and Consoles</a></li>
                      <li><a href="#">Cameras</a></li>
                      <li><a href="#">Headphones</a></li>
                      <li><a href="#">More Items</a></li>
                    </ul>
                  </transition>
                </div>
                <div class="select-and-search-options-search"><input class="select-and-search-options-input" type="text"
                    placeholder="Search products..."><button type="button" class="select-and-search-options-button"><i
                      class="icon-search"></i></button></div>
              </div>
            </div>
            <div class="header-bottom-right-nav">
              <nav class="nav" :class="{'nav-mobile-show': mainNav}">
                <ul class="nav-items">
                  <li><a class="nav-items-link nav-items-link-active" href="#">Home</a></li>
                  <li><a class="nav-items-link" href="#">Furniture</a></li>
                  <li><a class="nav-items-link" href="#">Chair</a></li>
                  <li><a class="nav-items-link" href="#">Table</a></li>
                  <li><a class="nav-items-link" href="#">Sofa</a></li>
                  <li><a class="nav-items-link" href="#">Bedroom</a></li>
                  <li><a class="nav-items-link" href="#">Blog</a></li>
                </ul><button @click="mainNav = !mainNav" class="close-mobile-menu" type="button"></button>
              </nav>
            </div>
          </div>
          <div class="nav-menu-show" @click="mainNav = !mainNav"><span class="nav-menu-show-item"></span></div>
        </div>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>  
    <footer class="footer"></footer>
  </div>
</template>

<script>
  import vClickOutside from 'v-click-outside'

  export default {
    data() {
      return {
        currencyLeftMemuDropdown: false,
        languagesLeftMemuDropdown: false,
        helpLeftMemuDropdown: false,
        selectCategoryMenu: false,
        mainNav: false,
      }
    },
    methods: {
      currencyLeftMemuDropdownfunction() {
        this.currencyLeftMemuDropdown = false
      },
      languagesLeftMemuDropdownfunction() {
        this.languagesLeftMemuDropdown = false
      },
      helpLeftMemuDropdownfunction() {
        this.helpLeftMemuDropdown = false
      },
      selectCategoryMenufunction() {
        this.selectCategoryMenu = false
      }
    },
    directives: {
      clickOutside: vClickOutside.directive
    }
  }
</script>

<style lang="scss">
  @import '@/assets/scss/style';

  .header-top {
    background-color: #434343;
  }

  .header-top-right {
    display: flex;
    align-items: center;
    margin: 14px 16px 0 0;

    @include max-width-530 {
      margin: 20px 0 0 0;
      justify-content: center;
    }
  }

  .header-top-right-item {
    margin: -1px 0 0 39px;

    @include max-width-530 {
      margin: 0px 13px;
    }
  }

  .header-top-right-icon {
    display: inline-block;
    font-size: 16px;
    padding: 3px 2px 0 0;
  }

  .header-top-right a {
    display: inline-block;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
  }

  .header-top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 17px;

    @include max-width-530 {
      flex-wrap: wrap;
    }
  }

  .header-top-left,
  .header-top-right {
    @include max-width-530 {
      width: 100%;
    }
  }

  .header-top-left-info {
    display: inline-block;
    font-size: 13px;
    color: #fff;
    position: relative;
    cursor: pointer;
    margin: 0 0 0 -6px;
    padding: 0px 20px 0px 20px;

    @include max-width-530 {
      margin: 0;
    }
  }

  .header-top-left div:last-child {
    border-right: 1px solid transparent;
  }

  .currency,
  .languages,
  .help {
    position: relative;
    border-right: 1px solid #fff;
    margin: 10px 0 0 0;

    @include max-width-530 {
      margin: 15px 0 0 0;
    }
  }

  .header-top-left {
    display: flex;

    @include max-width-530 {
      justify-content: center;
    }
  }

  .header-top-left-dropdown-menu {
    position: absolute;
    margin: 4px 0 0 1px;
    padding: 0;
    list-style: none;
    border: 1px solid #ccc;
    background-color: #434343;
    width: 80px;
    text-align: center;
  }

  .header-top-left-dropdown-menu li {
    font-size: 13px;
    color: #fff;
    border-bottom: 1px solid #363636;
    cursor: pointer;
    padding: 10px;
  }

  .header-top-left-info::after {
    content: '';
    position: absolute;
    top: 7px;
    right: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #ffffff transparent transparent transparent;
    cursor: pointer;
  }

  .wrapper-burder {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .burder-nav-close {
    position: absolute;
    width: 17px;
    height: 2px;
    background: #fff;
    border: none;
    outline: none;
    margin-top: 11px;
  }

  .burder-nav-close:before,
  .burder-nav-close:after {
    content: "";
    position: absolute;
    width: 17px;
    height: 2px;
    background: #fff;
  }

  .burder-nav-close:before {
    top: -4px;
    left: 0;
  }

  .burder-nav-close:after {
    top: 4px;
    left: 0;
  }

  .header-middle {
    background-color: #363636;
  }

  .header-middle-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 27px;

    @include max-width-650 {
      flex-wrap: wrap;
    }
  }

  .phone-block {
    display: flex;
    align-items: center;
    margin: 2% 0 0 0;

    @include max-width-650 {
      margin: 3% auto;
    }
  }

  .phone-block-icon {
    display: inline-block;
    color: $secondColor;
    font-size: 44px;
    margin: 0 0 0 6px;
  }

  .phone {
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    color: #d8d8d8;
    margin: 0 0 0 13px;
    text-decoration: none;
  }

  .logo {
    margin: 2.8% 9% 0 0;
    text-decoration: none;

    @include max-width-650 {
      width: 100%;
      margin: 0 0 3% 0;
      text-align: center;
    }
  }

  .basket-block {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: $secondColor;
    text-decoration: none;
    margin: 2% 4% 0 0;

    @include max-width-650 {
      margin: 3% auto;
    }
  }

  .basket-block-icon {
    color: #fff;
    font-size: 18px;
  }

  .basket-count {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: -23px;
    font-size: 14px;
    color: #e0e3ed;
    background-color: #363636;
    border-radius: 50%;
  }

  .header-bottom {
    box-shadow: 0px 4px 6px 0px rgba(1, 2, 2, 0.2);

    @include max-width-650 {
      padding-bottom: 7px;
    }
  }

  .header-bottom-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include max-width-1150 {
      flex-wrap: wrap;
    }
  }

  .nav-menu-show {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    cursor: pointer;

    @include min-width-651 {
      display: none;
    }
  }

  .nav-menu-show-item,
  .nav-menu-show-item::before,
  .nav-menu-show-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: #ccc;
  }

  .nav-menu-show-item::before {
    top: 7px;
  }

  .nav-menu-show-item::after {
    top: -7px;
  }

  .header-bottom-left-nav {
    @include max-width-1150 {
      width: 100%;
    }
  }

  .select-and-search-options {
    display: flex;
    align-items: flex-end;
    margin: 4px 0 0 7px;

    @include max-width-1150 {
      margin: 1% 0;
    }

    @include max-width-430 {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
    }
  }

  .select-category-wrapper {
    position: relative;

    @include max-width-1150 {
      width: 100%;
    }

  }

  .select-category-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 213px;
    height: 47px;
    border: 1px solid $mainColor;
    cursor: pointer;
    font-size: 14px;
    color: $mainColor;

    @include max-width-1150 {
      width: 100%;
    }

    @include max-width-430 {
      justify-content: space-around;
      border-bottom: none;
    }
  }

  .select-category-icon-menu {
    display: flex;
    margin: -3px 0 0 14px;

    @include max-width-430 {
      margin: 0;
    }
  }

  .select-category-icon-lines {
    margin: -1px 0 0 2px;
  }

  .select-category-icon-points-items,
  .select-category-icon-lines-items {
    display: inline-block;
    position: relative;
  }

  .select-category-icon-points-items,
  .select-category-icon-points-items::before,
  .select-category-icon-points-items::after,
    {
    width: 6px;
    height: 6px;
    background-color: $secondColor;
    border-radius: 50%;
  }

  .select-category-icon-points-items::before,
  .select-category-icon-points-items::after,
  .select-category-icon-lines-items::before,
  .select-category-icon-lines-items::after {
    content: '';
    position: absolute;
  }

  .select-category-icon-points-items::before,
  .select-category-icon-lines-items::before {
    top: 7px;
  }

  .select-category-icon-points-items::after,
  .select-category-icon-lines-items::after {
    top: -7px;
  }

  .select-category-icon-lines-items,
  .select-category-icon-lines-items::before,
  .select-category-icon-lines-items::after {
    width: 17px;
    height: 4px;
    background-color: $secondColor;
  }

  .select-category-triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #2a2a2a transparent transparent transparent;
    margin: 1px 12px 0 0;

    @include max-width-430 {
      margin: 0;
    }
  }

  .select-category-dropdown-items {
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid $mainColor;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    z-index: 3;
  }

  .select-category-dropdown-items a {
    display: block;
    font-size: 14px;
    text-decoration: none;
    color: $mainColor;
    border-bottom: 1px solid $mainColor;
    padding: 10px 0 10px 20px;
  }

  .select-and-search-options-search {
    display: flex;

    @include max-width-1150 {
      width: 100%;
    }
  }

  .select-and-search-options-input {
    display: inline-block;
    font-size: 14px;
    color: #a4a4a4;
    width: 227px;
    height: 47px;
    border: 1px solid $mainColor;
    border-left: none;
    border-right: none;
    outline: none;
    padding: 0 0 5px 13px;

    @include max-width-1150 {
      width: 100%;
    }

    @include max-width-430 {
      border-left: 1px solid $mainColor;
    }
  }

  .select-and-search-options-button {
    display: inline-block;
    width: 48px;
    height: 47px;
    border: 1px solid $mainColor;
    border-left: none;
    outline: none;
    background-color: #fff;
    cursor: pointer;
  }

  .header-bottom-right-nav {
    @include max-width-1150 {
      width: 100%;
    }
  }

  .nav {
    @include max-width-650 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      background: rgba(0, 0, 0, .71);
      z-index: 4;
      transition: 0.5s linear;
    }
  }

  .nav-mobile-show {
    left: 0;
  }

  .nav-items {
    display: flex;
    margin: 0 6px 0 0;
    padding: 0;
    list-style: none;

    @include max-width-1150 {
      justify-content: space-between;
      margin: 0 0 1% 0;
    }

    @include max-width-650 {
      position: absolute;
      width: 80%;
      height: 100%;
      flex-direction: column;
      z-index: 5;
      background-color: #ccc;
      margin: 0;
      justify-content: inherit;
    }
  }

  .nav-items-link {
    display: inline-block;
    font-size: 14px;
    color: $mainColor;
    text-decoration: none;
    text-transform: uppercase;
    padding: 31px 17px;

    @include max-width-650 {
      color: #fff;
      width: 100%;
    }
  }

  .nav-items-link-active {
    position: relative;
    background-color: $secondColor;
    color: #fff;
  }

  .nav-items-link-active::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: $mainColor;
    top: 0;
    left: 0;
  }

  .close-mobile-menu {
    display: inline-block;
    position: absolute;
    top: 4%;
    right: 4.5%;
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 1px solid #ccc;

    @include min-width-651 {
      display: none;
    }
  }

  .close-mobile-menu::before,
  .close-mobile-menu::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 17%;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }

  .close-mobile-menu::before {
    transform: rotate(45deg);
  }

  .close-mobile-menu::after {
    transform: rotate(-45deg);
  }
</style>