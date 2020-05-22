# TrackMaster

### Architecture and Technologies
TrackMaster was built using:
* Vanilla JavaScript
* HTML5
* CSS3
* Node.js
* Webpack

### Background and Overview 
TrackMaster lets anyone from beginner to master level create quick, easy and catchy tracks. Easily change your tracks by pressing different pads and listen continuously with the loop feature. Be creative with a variety of different sound options.

[Live Site](https://cperea1995.github.io/TrackMaster/)

![TrackMaster GIF](https://gyazo.com/efae2c0e982b436f795136d9f5daa9a0.gif)

### Looper:
The looper is consistantly running even when no pads are selected. When a user comes up with a track they are pleased with audio execution will not begin until the play button is pressed. The looper itterates through an array array of all the rows grabbed using vanilla javascript DOM manipulation. For every individual row each pad is selected and checked with a conditional to see if the user has enabled it. If the pad is enabled then the instrument and note for that row are assigned to the pad to be played for the duration of an 8th note. The loop is schedule to repeat every 8th note at 120bpm.

```
    const rows = document.body.querySelectorAll('.pad-row')
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, '8n')
    
    function repeat(time) {
        let step = index % 8
        for (let i = 0; i < rows.length; i++) {
            let synth = synths[i],
                note = notes[i],
                row = rows[i],
                input = row.querySelector(`label:nth-child(${step + 1})`),
                checkbox = input.querySelector('input');
            
            if (checkbox.checked) synth.triggerAttackRelease(note, '8n', time);
        }

        index++;
    }
```

### Future Updates:
* Instrument Kits
* Recording
* BPM Adjustment
