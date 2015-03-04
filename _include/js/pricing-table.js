/* Copyright 2013 Soundarapandian
 * Script for pricing table built on Twitter Bootstrap.
 */
$('.pricing-table .plan').mouseover(function() {
  var plan = $(this);
  plan.addClass('plan-mouseover');
}).mouseout(function() {
  var plan = $(this);
  plan.removeClass('plan-mouseover');
});
