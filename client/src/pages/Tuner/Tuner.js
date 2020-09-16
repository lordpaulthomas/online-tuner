import React from 'react';
import './tuner.css';
const Tuner = () => {
  return (
    <div>
      <body>
        <div id='instrument_tuner'>
          <form autocomplete="off" onsubmit="doNothing(); return false;">
            <table>
              <tbody>
                <tr>
                  <td colspan="5">
                    <h1 class="tuner_title">Ukulele Tuner</h1>
                  </td>
                </tr>
                <tr>
                  <th>String 4</th>
                  <th>String 3</th>
                  <th>String 2</th>
                  <th>String 1</th>
                  <td rowspan="18" id="settings_td">
                    <fieldset>
                      <legend>Alternative Tunings</legend>
                      <select id="alt_tunings" size="4">
                        <option value="G4,C4,E4,A4" selected="">
                          Standard
                        </option>
                        <option value="Fs4,B3,Ds4,Gs4">Half-Step Down</option>
                        <option value="F4,As3,D4,G4">Full-Step Down</option>
                        <option value="Gs4,Cs4,F4,As4">Half-Step Up</option>
                        <option value="A4,D4,Fs4,B4">Soprano</option>
                      </select>
                    </fieldset>
                    <fieldset>
                      <legend>Tone</legend>
                      <input
                        type="radio"
                        name="radioTone"
                        id="toneNatural"
                        value="natural"
                        checked="checked"
                      />
                      <label for="toneNatural">Natural</label>
                      <input
                        type="radio"
                        name="radioTone"
                        id="toneSinewave"
                        value="sinewave"
                      />
                      <label for="toneSinewave">Beep</label>
                    </fieldset>
                    <fieldset>
                      <legend>Sharps/Flats</legend>
                      <input
                        type="radio"
                        name="radioSF"
                        id="sfSharps"
                        value="sharps"
                        checked="checked"
                      />
                      <label for="sfSharps">♯</label>
                      <input
                        type="radio"
                        name="radioSF"
                        id="sfFlats"
                        value="flats"
                      />
                      <label for="sfFlats">♭</label>
                    </fieldset>
                    <fieldset>
                      <legend>Repeat</legend>
                      <input
                        type="radio"
                        name="radioRepeat"
                        id="repeatYes"
                        value="true"
                        checked="checked"
                      />
                      <label for="repeatYes">Yes</label>
                      <input
                        type="radio"
                        name="radioRepeat"
                        id="repeatNo"
                        value="false"
                      />
                      <label for="repeatNo">No</label>
                    </fieldset>
                    <fieldset>
                      <legend>Volume</legend>
                      <input
                        type="range"
                        id="volume_slider"
                        name="points"
                        onchange="myTuner.setVolume(this.value)"
                        value="1"
                        min="0"
                        max="1"
                        step="0.05"
                      />
                    </fieldset>
                    <button id="stop_button" onclick="myTuner.stopSound()">
                      STOP
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4D5"
                      value="4D5"
                    />
                    <label for="str4D5" class="dnote">
                      D5
                    </label>
                  </td>
                  <td class="G note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3G4"
                      value="3G4"
                    />
                    <label for="str3G4" class="dnote">
                      G4
                    </label>
                  </td>
                  <td class="B note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2B4"
                      value="2B4"
                    />
                    <label for="str2B4" class="dnote">
                      B4
                    </label>
                  </td>
                  <td class="E note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1E5"
                      value="1E5"
                    />
                    <label for="str1E5" class="dnote">
                      E5
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="Cs note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4Cs5"
                      value="4Cs5"
                    />
                    <label for="str4Cs5" class="dnote">
                      C♯5
                    </label>
                  </td>
                  <td class="Fs note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3Fs4"
                      value="3Fs4"
                    />
                    <label for="str3Fs4" class="dnote">
                      F♯4
                    </label>
                  </td>
                  <td class="As note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2As4"
                      value="2As4"
                    />
                    <label for="str2As4" class="dnote">
                      A♯4
                    </label>
                  </td>
                  <td class="Ds note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1Ds5"
                      value="1Ds5"
                    />
                    <label for="str1Ds5" class="dnote">
                      D♯5
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="C note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4C5"
                      value="4C5"
                    />
                    <label for="str4C5" class="dnote">
                      C5
                    </label>
                  </td>
                  <td class="F note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3F4"
                      value="3F4"
                    />
                    <label for="str3F4" class="dnote">
                      F4
                    </label>
                  </td>
                  <td class="A note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2A4"
                      value="2A4"
                    />
                    <label for="str2A4" class="dnote">
                      A4
                    </label>
                  </td>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1D5"
                      value="1D5"
                    />
                    <label for="str1D5" class="dnote">
                      D5
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="B note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4B4"
                      value="4B4"
                    />
                    <label for="str4B4" class="dnote">
                      B4
                    </label>
                  </td>
                  <td class="E note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3E4"
                      value="3E4"
                    />
                    <label for="str3E4" class="dnote">
                      E4
                    </label>
                  </td>
                  <td class="Gs note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2Gs4"
                      value="2Gs4"
                    />
                    <label for="str2Gs4" class="dnote">
                      G♯4
                    </label>
                  </td>
                  <td class="Cs note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1Cs5"
                      value="1Cs5"
                    />
                    <label for="str1Cs5" class="dnote">
                      C♯5
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="As note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4As4"
                      value="4As4"
                    />
                    <label for="str4As4" class="dnote">
                      A♯4
                    </label>
                  </td>
                  <td class="Ds note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3Ds4"
                      value="3Ds4"
                    />
                    <label for="str3Ds4" class="dnote">
                      D♯4
                    </label>
                  </td>
                  <td class="G note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2G4"
                      value="2G4"
                    />
                    <label for="str2G4" class="dnote">
                      G4
                    </label>
                  </td>
                  <td class="C note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1C5"
                      value="1C5"
                    />
                    <label for="str1C5" class="dnote">
                      C5
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="A note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4A4"
                      value="4A4"
                    />
                    <label for="str4A4" class="dnote">
                      A4
                    </label>
                  </td>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3D4"
                      value="3D4"
                    />
                    <label for="str3D4" class="dnote">
                      D4
                    </label>
                  </td>
                  <td class="Fs note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2Fs4"
                      value="2Fs4"
                    />
                    <label for="str2Fs4" class="dnote">
                      F♯4
                    </label>
                  </td>
                  <td class="B note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1B4"
                      value="1B4"
                    />
                    <label for="str1B4" class="dnote">
                      B4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="Gs note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4Gs4"
                      value="4Gs4"
                    />
                    <label for="str4Gs4" class="dnote">
                      G♯4
                    </label>
                  </td>
                  <td class="Cs note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3Cs4"
                      value="3Cs4"
                    />
                    <label for="str3Cs4" class="dnote">
                      C♯4
                    </label>
                  </td>
                  <td class="F note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2F4"
                      value="2F4"
                    />
                    <label for="str2F4" class="dnote">
                      F4
                    </label>
                  </td>
                  <td class="As note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1As4"
                      value="1As4"
                    />
                    <label for="str1As4" class="dnote">
                      A♯4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="G note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4G4"
                      value="4G4"
                      checked="checked"
                    />
                    <label for="str4G4" class="dnote">
                      G4
                    </label>
                  </td>
                  <td class="C note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3C4"
                      value="3C4"
                      checked="checked"
                    />
                    <label for="str3C4" class="dnote">
                      C4
                    </label>
                  </td>
                  <td class="E note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2E4"
                      value="2E4"
                      checked="checked"
                    />
                    <label for="str2E4" class="dnote">
                      E4
                    </label>
                  </td>
                  <td class="A note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1A4"
                      value="1A4"
                      checked="checked"
                    />
                    <label for="str1A4" class="dnote">
                      A4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="Fs note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4Fs4"
                      value="4Fs4"
                    />
                    <label for="str4Fs4" class="dnote">
                      F♯4
                    </label>
                  </td>
                  <td class="B note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3B3"
                      value="3B3"
                    />
                    <label for="str3B3" class="dnote">
                      B3
                    </label>
                  </td>
                  <td class="Ds note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2Ds4"
                      value="2Ds4"
                    />
                    <label for="str2Ds4" class="dnote">
                      D♯4
                    </label>
                  </td>
                  <td class="Gs note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1Gs4"
                      value="1Gs4"
                    />
                    <label for="str1Gs4" class="dnote">
                      G♯4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="F note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4F4"
                      value="4F4"
                    />
                    <label for="str4F4" class="dnote">
                      F4
                    </label>
                  </td>
                  <td class="As note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3As3"
                      value="3As3"
                    />
                    <label for="str3As3" class="dnote">
                      A♯3
                    </label>
                  </td>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2D4"
                      value="2D4"
                    />
                    <label for="str2D4" class="dnote">
                      D4
                    </label>
                  </td>
                  <td class="G note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1G4"
                      value="1G4"
                    />
                    <label for="str1G4" class="dnote">
                      G4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="E note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4E4"
                      value="4E4"
                    />
                    <label for="str4E4" class="dnote">
                      E4
                    </label>
                  </td>
                  <td class="A note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3A3"
                      value="3A3"
                    />
                    <label for="str3A3" class="dnote">
                      A3
                    </label>
                  </td>
                  <td class="Cs note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2Cs4"
                      value="2Cs4"
                    />
                    <label for="str2Cs4" class="dnote">
                      C♯4
                    </label>
                  </td>
                  <td class="Fs note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1Fs4"
                      value="1Fs4"
                    />
                    <label for="str1Fs4" class="dnote">
                      F♯4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="Ds note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4Ds4"
                      value="4Ds4"
                    />
                    <label for="str4Ds4" class="dnote">
                      D♯4
                    </label>
                  </td>
                  <td class="Gs note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3Gs3"
                      value="3Gs3"
                    />
                    <label for="str3Gs3" class="dnote">
                      G♯3
                    </label>
                  </td>
                  <td class="C note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2C4"
                      value="2C4"
                    />
                    <label for="str2C4" class="dnote">
                      C4
                    </label>
                  </td>
                  <td class="F note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1F4"
                      value="1F4"
                    />
                    <label for="str1F4" class="dnote">
                      F4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4D4"
                      value="4D4"
                    />
                    <label for="str4D4" class="dnote">
                      D4
                    </label>
                  </td>
                  <td class="G note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3G3"
                      value="3G3"
                    />
                    <label for="str3G3" class="dnote">
                      G3
                    </label>
                  </td>
                  <td class="B note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2B3"
                      value="2B3"
                    />
                    <label for="str2B3" class="dnote">
                      B3
                    </label>
                  </td>
                  <td class="E note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1E4"
                      value="1E4"
                    />
                    <label for="str1E4" class="dnote">
                      E4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="Cs note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4Cs4"
                      value="4Cs4"
                    />
                    <label for="str4Cs4" class="dnote">
                      C♯4
                    </label>
                  </td>
                  <td class="Fs note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3Fs3"
                      value="3Fs3"
                    />
                    <label for="str3Fs3" class="dnote">
                      F♯3
                    </label>
                  </td>
                  <td class="As note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2As3"
                      value="2As3"
                    />
                    <label for="str2As3" class="dnote">
                      A♯3
                    </label>
                  </td>
                  <td class="Ds note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1Ds4"
                      value="1Ds4"
                    />
                    <label for="str1Ds4" class="dnote">
                      D♯4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td class="C note">
                    <input
                      type="radio"
                      name="radio4Note"
                      id="str4C4"
                      value="4C4"
                    />
                    <label for="str4C4" class="dnote">
                      C4
                    </label>
                  </td>
                  <td class="F note">
                    <input
                      type="radio"
                      name="radio3Note"
                      id="str3F3"
                      value="3F3"
                    />
                    <label for="str3F3" class="dnote">
                      F3
                    </label>
                  </td>
                  <td class="A note">
                    <input
                      type="radio"
                      name="radio2Note"
                      id="str2A3"
                      value="2A3"
                    />
                    <label for="str2A3" class="dnote">
                      A3
                    </label>
                  </td>
                  <td class="D note">
                    <input
                      type="radio"
                      name="radio1Note"
                      id="str1D4"
                      value="1D4"
                    />
                    <label for="str1D4" class="dnote">
                      D4
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="selected_note" id="str4Display">
                      G
                    </div>
                  </td>
                  <td>
                    <div class="selected_note" id="str3Display">
                      C
                    </div>
                  </td>
                  <td>
                    <div class="selected_note" id="str2Display">
                      E
                    </div>
                  </td>
                  <td>
                    <div class="selected_note" id="str1Display">
                      A
                    </div>
                  </td>
                </tr>{' '}
                <tr>
                  <td>
                    <audio
                      id="audio_string4"
                      src="sounds/guitar/Gs4.mp3"
                      preload="auto"
                    >
                      <p>
                        Your browser does not support the audio element. Please
                        update it to play.
                      </p>
                    </audio>
                    <button class="play" onclick="myTuner.playString(4);">
                      PLAY
                    </button>
                  </td>
                  <td>
                    <audio
                      id="audio_string3"
                      src="sounds/guitar/C4.mp3"
                      preload="auto"
                    >
                      <p>
                        Your browser does not support the audio element. Please
                        update it to play.
                      </p>
                    </audio>
                    <button class="play" onclick="myTuner.playString(3);">
                      PLAY
                    </button>
                  </td>
                  <td>
                    <audio
                      id="audio_string2"
                      src="sounds/guitar/E4.mp3"
                      preload="auto"
                    >
                      <p>
                        Your browser does not support the audio element. Please
                        update it to play.
                      </p>
                    </audio>
                    <button class="play" onclick="myTuner.playString(2);">
                      PLAY
                    </button>
                  </td>
                  <td>
                    <audio
                      id="audio_string1"
                      src="sounds/guitar/A4.mp3"
                      preload="auto"
                    >
                      <p>
                        Your browser does not support the audio element. Please
                        update it to play.
                      </p>
                    </audio>
                    <button class="play" onclick="myTuner.playString(1);">
                      PLAY
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
   
      </body>
    </div>
  );
};
export default Tuner;
