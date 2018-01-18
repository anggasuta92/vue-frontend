<<template>
  <div>
    <div class="ui breadcrumb">
      <div class="ui teal tag label">
        <i class="home icon"></i> !Support-Book
      </div>
      <i class="right angle icon divider"></i>
      <div class="ui teal tag label">
        <i class="phone icon"></i> PhoneBook
      </div>
    </div>

    <div class="ui divider"></div>
    <div>
        <div class="ui" align="right">
          <div class="ui left icon action input">
            <i class="search icon"></i>
            <input type="text" name="txtSearch" v-model="txtSearch" placeholder="Name or phone number...">
            <div class="ui blue submit button" v-on:click="searchData()">Search</div>
          </div>
        </div>
    </div>
    <div>
      &nbsp; <!-- this is a blank space -->
    </div>
    <div>

    <table class="ui single line table">
      <thead>
        <tr>
          <th width="35%">Name</th>
          <th>Phone Number</th>
          <th width="30%">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results">
          <td>{{ result.name }}</td>
          <td>{{ result.phonenumber }}</td>
          <td>{{ result.address }}</td>
        </tr>
      </tbody>
    </table>

    <router-link to="/newphonebook" class="ui primary button"><i class="phone icon"></i> New Number</router-link>

    <div class="ui buttons right">
      <button class="ui labeled icon button" v-on:click="cmdPaginationPrev()">
        <i class="left chevron icon"></i>
        Back
      </button>
      <button class="ui button">
        Page : {{current_page}} of {{last_page}}
      </button>
      <button class="ui right labeled icon button" v-on:click="cmdPaginationNext()">
        Forward
        <i class="right chevron icon"></i>
      </button>
    </div>

    </div>
  </div>
</template>

<<script>
export default {
  data () {
    return {
      results: [],
      result: '',
      current_page: '',
      next_page_url: '',
      prev_page_url: '',
      last_page: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/api/phonebook')
      .then((response) => {
        this.results = response.body.data
        this.current_page = response.body.current_page
        this.last_page = response.body.last_page
        this.next_page_url = response.body.next_page_url
        this.prev_page_url = response.body.prev_page_url
      })
  },
  methods: {
    searchData: function (event) {
      this.$http.get('http://localhost:8000/api/phonebook/' + this.txtSearch)
        .then((response) => {
          this.results = response.body.data
          this.current_page = response.body.current_page
          this.last_page = response.body.last_page
          this.next_page_url = response.body.next_page_url
          this.prev_page_url = response.body.prev_page_url
        })
    },
    cmdPaginationNext: function (event) {
      this.$http.get(this.next_page_url)
        .then((response) => {
          this.results = response.body.data
          this.current_page = response.body.current_page
          this.last_page = response.body.last_page
          this.next_page_url = response.body.next_page_url
          this.prev_page_url = response.body.prev_page_url
        })
    },
    cmdPaginationPrev: function (event) {
      this.$http.get(this.prev_page_url)
        .then((response) => {
          this.results = response.body.data
          this.current_page = response.body.current_page
          this.last_page = response.body.last_page
          this.next_page_url = response.body.next_page_url
          this.prev_page_url = response.body.prev_page_url
        })
    }
  }
}
</script>
