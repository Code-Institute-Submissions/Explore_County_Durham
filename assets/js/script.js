$(document).ready(() => {
  $('.learn-more-button').on('click', () => {
      $('.page-header').toggle('slow');
      $('.learn-more-button').toggle('slow');
    $('.site-info').fadeToggle('slow');
  });
});