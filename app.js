Vue.component("app-header", {
  template: `
  <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
            Contacts
          </a>
          </div>
          <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
          </span>
          <div class="nav-right nav-menu">
          </div>
        </div>
      </header>
    </div>
  `
});

Vue.component("app-footer", {
  template: `
  <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
        </div>
      </nav>
    </div>
    `
});

Vue.component("person", {
  props: ["person"],
  template: `
  <li>
    {{ gender }} {{ person.firstname }} {{ person.lastname }}
    <button @click="$emit('view-detail', person)">View</button>
  </li>
  `,
  computed: {
    gender() {
      return this.person.gender === "Male" ? "♂" : "♀";
    }
  }
});

Vue.component("person-detail", {
  props: ["person"],
  template: `
  <div class="card content">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="person.photo" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ person.firstname }} {{ person.lastname }}</p>
        <p class="subtitle is-6">{{ person.email }}</p>
      </div>
    </div>
  </div>
</div>
  `
});

window.vm = new Vue({
  el: "#app",
  data: {
    people: window.people,
    personDetail: null,
    searchQuery: ""
  },
  computed: {
    smallListOfPeople() {
      return this.filteredPeople.slice(0, 20);
    },
    filteredPeople() {
      return this.people.filter(person =>
        (person.firstname + person.lastname)
          .toLowerCase()
          .includes(this.searchQuery)
      );
    }
  }
});
