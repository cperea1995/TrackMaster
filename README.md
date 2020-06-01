# TrackMaster

### Architecture and Technologies
TrackMaster was built using:
* Vanilla JavaScript 10.13.0
* HTML5
* CSS3
* Node.js 10.13.0
* Webpack

### Background and Overview 
TrackMaster lets anyone from beginner to master level create quick, easy and catchy tracks. Easily change your tracks by pressing different pads and listen continuously with the loop feature. Be creative with a variety of different sound options.

[Live Site](https://cperea1995.github.io/TrackMaster/)

![TrackMaster GIF](./assets/trackmaster.gif)

### Looper:
The looper is consistantly running even when no pads are selected. When a user comes up with a track they are pleased with audio execution will not begin until the play button is pressed. The looper itterates through an array array of all the rows grabbed using vanilla javascript DOM manipulation. For every individual row each pad is selected and checked with a conditional to see if the user has enabled it. If the pad is enabled then the instrument and note for that row are assigned to the pad to be played for the duration of an 8th note. The loop is schedule to repeat every 8th note at 120bpm.

``` javascript
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

### Clearing Pads:
Since each pad is its own individual node and every pad is a checkbox, I was able to select all of them at once using the getElementsByTagName function. Once I had all the inputs i could check if they were enabled, if they were the property would be changed to disabled and the Transport.stop function from Tone.js was called to stop all audio playback. I wanted the user to be aware that clearing is in progress so I added an asynchronous timeout which triggers a callback that changes the eraser symbol to an X after 1 second.

``` javascript
    clearButton.addEventListener('click', () => {
        if (playButton.classList.contains('enabled') || pauseButton.classList.contains('enabled')) {
            playButton.classList.remove('enabled');
            pauseButton.classList.remove('enabled');
        }
        const inputs = Array.from(document.getElementsByTagName('input'));

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];

            if (input.checked) {
                input.checked = false;
            }
        }
        Tone.Transport.stop();
        clearButton.classList.add('enabled-clear');
        document.body.querySelector('.clear-button').innerHTML = '<i class="fas fa-times"></i>'
        setTimeout(removeEnableClass, 1000);
    })

    function removeEnableClass () {
        clearButton.classList.remove('enabled-clear')
        document.body.querySelector('.clear-button').innerHTML = '<i class="fas fa-eraser">'
    }
```

### Future Updates:
* Instrument Kits
* Recording
* BPM Adjustment
