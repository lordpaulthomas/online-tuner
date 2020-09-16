$(document).ready(function () {
  myTuner = new Tuner(['G4', 'C4', 'E4', 'A4'], 'sounds/guitar/', '.mp3');
  $('input[type=radio][name=radioRepeat]').change(function () {
    myTuner.repeat(document.getElementById('repeatYes').checked);
  });
  $('input[type=radio][name=radioTone]').change(function () {
    myTuner.tone(document.getElementById('toneNatural').checked);
  });
  $('input[type=radio][name=radioSF]').change(function () {
    myTuner.changeSymbol(document.getElementById('sfSharps').checked);
  });
  $('#alt_tunings').change(function () {
    var tunings = $('#alt_tunings option:selected').val().split(',');
    var string_num = tunings.length;
    for (var i = 0; i < tunings.length; i++) {
      $('#str'.concat(string_num).concat(tunings[i]))
        .prop('checked', true)
        .trigger('change');
      string_num--;
    }
  });
});
