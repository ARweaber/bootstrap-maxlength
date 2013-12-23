(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('maxlength');

  test('Maxlength is displayed correctly', function () {
      $('<input type="text" maxlength="10" />')
          .appendTo('#qunit-fixture')
          .maxlength().focus();

      ok($('.bootstrap-maxlength').length, 'maxlength was inserted');

      $('.bootstrap-maxlength').remove();

      $('#qunit-fixture').empty();
    });

    test('Maxlength is visible on focus', function () {
      $('<input type="text" maxlength="10" />')
          .appendTo('#qunit-fixture')
          .maxlength().end().focus();

      ok($('.bootstrap-maxlength').is(':visible'), 'Maxlength is visible');

      $('.bootstrap-maxlength').remove();

      $('#qunit-fixture').empty();
    });

    test('Maxlength is invisible on blur', function () {
      var maxlengthInput = $('<input type="text" maxlength="10" />')
          .appendTo('#qunit-fixture')
          .maxlength();

          maxlengthInput.focus();
          maxlengthInput.blur();
          ok( !$('.bootstrap-maxlength').length, 'Maxlength is not visible');
          $('.bootstrap-maxlength').remove();
          $('#qunit-fixture').empty();
    });

    test('Maxlength updates the maxlength', function () {

      var maxlengthInput = $('<input type="text" maxlength="10" />')
          .appendTo('#qunit-fixture');

      maxlengthInput.maxlength();
      maxlengthInput.focus();

      // Change the maxlength attribute
      maxlengthInput.blur();
      maxlengthInput.attr('maxlength','142');

      maxlengthInput.focus();

      ok($('.bootstrap-maxlength').html(), '0 / 142', 'Maxlength updated the field');
      $('.bootstrap-maxlength').remove();
      $('#qunit-fixture').empty();

    });

}(jQuery));