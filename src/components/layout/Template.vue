<<template>
    <div>
        <app-navbar></app-navbar>
        <div class="ui container">
            <div class="row" >
                <div class="column"><!-- this row intentionally left blank --></div>
            </div>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        </div>
    </div>
</template>

<<script>
import Navbar from './Navbar.vue'
export default {
  components: {
    'app-navbar': Navbar
  }
}
</script>
