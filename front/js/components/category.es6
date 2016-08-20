(() => {
  const DOM = {
    $filterItem: $('.js-category-filter-item'),
    tableColCountInput: '.js-category-table-col-count-input',
    tableColCountUp: '.js-category-table-col-count-up',
    tableColCountDown: '.js-category-table-col-count-down',
    filterItemIco: '.category-filter-item-ico',
  };

  const init = () => {
    setUpListeners();
  };

  const setUpListeners = () => {
    $(document)
      .on('click', DOM.tableColCountUp, function () {
        $(this).siblings(DOM.tableColCountInput)
          .val((i, val) => ++val);
      })
      .on('click', DOM.tableColCountDown, function () {
        $(this).siblings(DOM.tableColCountInput)
          .val((i, val) => (val > 1) ? --val : val);
      });

    DOM.$filterItem
      .click(function () {
        $(this).find(DOM.filterItemIco)
          .toggleClass('fa-square-o fa-check-square-o');
      });
  };

  init();
})();
