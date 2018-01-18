<<template>
  <div>
    <div class="ui breadcrumb">
      <div class="ui teal tag label">
        <i class="home icon"></i> !Support-Book
      </div>
    </div>

    <div class="ui divider"></div>
    <div class="ui active inverted dimmer" v-if="isLoading">
        <div class="ui text loader">Loading...</div>
    </div>
    <div class="ui ">
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="/images/avatar2/large/matthew.png">
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined in 2013
            </span>
            <span>
              <i class="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
