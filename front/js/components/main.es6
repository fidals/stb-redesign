const mainPage = (() => {
  const DOM = {
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

  init();
})();
