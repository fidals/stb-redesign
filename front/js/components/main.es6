const mainPage = (() => {
  const DOM = {
    $navbar: $('.js-navbar'),
    $application: $('.js-application'),
    $contactbarMain: $('.js-contactbar-main'),
    $btnContuctus: $('.js-btn-contact-us'),
    $modal: $('.js-modal'),
    $modalClose: $('.js-modal-close'),
    $reviewsContentItems: $('.js-reviews-content-item'),
    $reviewsNavItems: $('.js-reviews-nav-item'),
  };

  const init = () => {
    setUpListeners();
  };

  const setUpListeners = () => {
    if (DOM.$contactbarMain.length) {
      $(window).scroll(toggleContactBar);
    }

    DOM.$btnContuctus
      .click(event => {
        event.preventDefault();
        DOM.$modal.fadeIn();
      });

    DOM.$modalClose
      .click(() => {
        DOM.$modal.fadeOut();
      });

    DOM.$reviewsNavItems
      .click(function () {
        let reviewID = $(this).data('slide-to');
        reviewsSlideTo(reviewID);
      });
  };

  const reviewsSlideTo = (reviewID) => {
    DOM.$reviewsContentItems
      .fadeOut()
      .eq(reviewID).fadeIn();
    DOM.$reviewsNavItems
      .removeClass('reviews-nav-item-active')
      .eq(reviewID).addClass('reviews-nav-item-active');
  };

  const toggleContactBar = () => {
    let scrolltop = $(window).scrollTop();
    let offset = DOM.$application.offset().top - DOM.$navbar.height();
    if (scrolltop > offset) {
      DOM.$contactbarMain.fadeIn();
    } else {
      DOM.$contactbarMain.fadeOut();
    }
  };

  init();
})();
