<template>
  <div class="ui menu">
    <router-link to="/" class="item">
      <i class="big home icon"></i>
      <strong>!Support-Book</strong>
    </router-link>
    <div class="item">
      <div class="ui action left icon input">
        PT. Danaco Global Solusi
      </div>
    </div>
    
    <div class="right menu">
      <router-link to="/phonebook" class="item"><i class="phone icon"></i> PhoneBook</router-link>
      <router-link to="/customer" class="item"><i class="thumbs up icon"></i> Customer Management</router-link>
      <div class="ui simple dropdown item">
        More
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="edit icon"></i> Edit Profile</a>
          <a class="item"><i class="globe icon"></i> Choose Language</a>
          <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
      </div>
      <div class="ui simple dropdown item">
        hi, Username
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="edit icon"></i> Edit Profile</a>
          <a class="item"><i class="globe icon"></i> Choose Language</a>
          <router-link to="/" class="item"><i class="settings icon"></i> Account Settings</router-link>
          <router-link to="/" class="item"><i class="sign out icon"></i> Sign Out</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dropdown } from 'semantic-ui-vue2'
export default {
  components: {
    'semantic-ui-dropdown': Dropdown
  }
}
</script>
