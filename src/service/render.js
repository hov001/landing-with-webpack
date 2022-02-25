export default (page = [], parent) => {
  page.forEach(({ component, props }) => {
    parent.insertAdjacentHTML("beforeend", component(props));
  });
};
