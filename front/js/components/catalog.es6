const mainCatalog = (() => {
  const DOM = {
    $catalogCategory: $('.js-catalog-category-title'),
    $catalogCategoryUL: $('.js-catalog-category-ul'),
    $catalogSubcategory: $('.js-catalog-subcategory'),
    $catalogSubcategoryUL: $('.js-catalog-subcategory-ul'),
  };

  const init = () => {
    setUpListeners();
  };

  const setUpListeners = () => {
    DOM.$catalogCategory
      .click(function () {
        toggleCategory($(this));
      });

    DOM.$catalogSubcategory
      .click(function () {
        toggleSubcategory($(this));
      });
  };

  const toggleCategory = ($category) => {
    $category
      .toggleClass('catalog-category-title-active')
      .next('.js-catalog-category-ul')
      .stop()
      .slideToggle();
  };

  const toggleSubcategory = ($subcategory) => {
    $subcategory
      .find('.catalog-subcategory-ico')
      .toggleClass('fa-minus')
      .toggleClass('fa-plus')
      .end()
      .toggleClass('catalog-subcategory-active')
      .next('.js-catalog-subcategory-ul')
      .stop()
      .slideToggle();
  };

  init();
})();
