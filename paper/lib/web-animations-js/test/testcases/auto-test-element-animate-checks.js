timing_test(function() {
  at(0 * 1000, function() {
    assert_styles('body', {'display':'none'});
  }, "Autogenerated");
  at(0.5 * 1000, function() {
    assert_styles('body', {'display':'block'});
  }, "Autogenerated");
}, "Autogenerated checks.");