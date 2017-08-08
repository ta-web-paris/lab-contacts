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

window.vm = new Vue({
  el: "#app",
  data: {
    people: window.people
  }
});
