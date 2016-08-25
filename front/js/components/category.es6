(() => {
  const DOM = {
    $filterItem: $('.js-category-filter-item'),
    $filterCheckAll: $('.js-category-filter-item-all'),
    $filterClear: $('.js-category-filter-clear'),
    tableColCountInput: '.js-category-table-col-count-input',
    tableColCountUp: '.js-category-table-col-count-up',
    tableColCountDown: '.js-category-table-col-count-down',
    filterItemIco: '.category-filter-item-ico',
    $filterItemIco: $('.category-filter-item-ico'),
  };

  const init = () => {
    setUpListeners();
  };

  const setUpListeners = () => {
    $(document)
      .on('click', DOM.tableColCountUp, function () {
        countIncrease($(this).siblings(DOM.tableColCountInput));
      })
      .on('click', DOM.tableColCountDown, function () {
        countDecrease($(this).siblings(DOM.tableColCountInput));
      });

    DOM.$filterItem.click(function () {
      filterItemToggle($(this).find(DOM.filterItemIco));
    });

    DOM.$filterCheckAll.click(filterCheckAll);

    DOM.$filterClear.click(filterClear);
  };

  const countIncrease = $input => {
    $input.val((i, val) => ++val);
  };

  const countDecrease = $input => {
    $input.val((i, val) => (val > 1) ? --val : val);
  };

  const filterItemToggle = $ico => {
    $ico.toggleClass('fa-square-o fa-check-square-o');
    DOM.$filterCheckAll.find(DOM.filterItemIco)
      .addClass('fa-square-o')
      .removeClass('fa-check-square-o');
  };

  const filterCheckAll = () => {
    DOM.$filterItemIco
      .addClass('fa-check-square-o')
      .removeClass('fa-square-o');
  };

  const filterClear = () => {
    DOM.$filterItemIco
      .addClass('fa-square-o')
      .removeClass('fa-check-square-o');
  };

  init();
})();
