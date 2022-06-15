import SecondComponent from "./second-component.vue";
app.component("global-component", {
  template: `
    <div>
      <h1>Hi!</h1>
      <second-component></second-component>
    </div>
  `,
  components: {
    SecondComponent
  }
});
