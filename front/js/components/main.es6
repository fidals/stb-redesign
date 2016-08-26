(() => {
  const DOM = {
    $navbar: $('.js-navbar'),
    $navbarNavItem: $('.js-navbar-nav-item'),
    navbarSubnav: '.js-navbar-subnav',
    $navbarChart: $('.js-navbar-chart'),
    $navbarNavChart: $('.js-navbar-nav-chart'),
    $application: $('.js-application'),
    $contactBarMain: $('.js-contact-bar-main'),
    $btnContactUs: $('.js-btn-contact-us'),
    $modal: $('.js-modal'),
    $modalClose: $('.js-modal-close'),
    $reviewsContentItems: $('.js-reviews-content-item'),
    $reviewsNavItems: $('.js-reviews-nav-item'),
    $popoverTrigger: $('.js-popover-trigger'),
    popover: '.js-popover',
    $searchField: $('.js-search-field'),
    searchPropose: '.js-search-propose',
  };

  const init = () => {
    setUpListeners();
  };

  const setUpListeners = () => {
    if (DOM.$contactBarMain.length) {
      $(window).scroll(toggleContactBar);
    }

    DOM.$btnContactUs.click(showContactUs);

    DOM.$modalClose.click(() => { DOM.$modal.fadeOut(); });

    DOM.$navbarNavItem
      .hover(function () {
        $(this).find(DOM.navbarSubnav).stop().fadeIn();
      }, function () {
        $(this).find(DOM.navbarSubnav).stop().fadeOut();
      });

    DOM.$navbarNavChart
      .hover(() => {
        DOM.$navbarChart.stop().fadeIn();
      }, () => {
        DOM.$navbarChart.stop().fadeOut();
      });

    DOM.$popoverTrigger
      .hover(function () {
        $(this).find(DOM.popover).stop().fadeIn();
      }, function () {
        $(this).find(DOM.popover).stop().fadeOut();
      });

    DOM.$reviewsNavItems.click(reviewsSlideTo);

    DOM.$searchField.on('change keyup', function() {
      toggleSearchPropose($(this));
    });
  };

  const showContactUs = event => {
    event.preventDefault();
    DOM.$modal.fadeIn();
  };

  const reviewsSlideTo = event => {
    const reviewID = $(event.target).data('slide-to');

    DOM.$reviewsContentItems
      .fadeOut()
      .eq(reviewID).fadeIn();
    DOM.$reviewsNavItems
      .removeClass('active')
      .eq(reviewID).addClass('active');
  };

  const toggleContactBar = () => {
    const scrollTop = $(window).scrollTop();
    const offset = DOM.$application.offset().top - DOM.$navbar.height();

    if (scrollTop > offset) {
      DOM.$contactBarMain.fadeIn();
    } else {
      DOM.$contactBarMain.fadeOut();
    }
  };

  const toggleSearchPropose = $input => {
    if ($input.val()) {
      $input.siblings(DOM.searchPropose).stop().fadeIn();
    } else {
      $input.siblings(DOM.searchPropose).stop().fadeOut();
    }
  };

  init();
})();
