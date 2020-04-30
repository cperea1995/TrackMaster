import * as Tone from 'tone';
import "regenerator-runtime/runtime.js";



window.addEventListener('DOMContentLoaded', () => {
        
    document.documentElement.addEventListener('mousedown', () => {
        if (Tone.context.state !== 'running') Tone.context.resume();
    });

    const synths = [
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth()
    ];
            
    // synths[0].oscillator.type = 'triangle';
    // synths[1].oscillator.type = 'sine';
    // synths[2].oscillator.type = 'sawtooth';
    // synths[3].oscillator.type = 'sawtooth';
    // synths[4].oscillator.type = 'sawtooth';
    // synths[5].oscillator.type = 'sawtooth';
    // synths[6].oscillator.type = 'sawtooth';
    // synths[7].oscillator.type = 'sawtooth';

    synths.forEach(synth => synth.toMaster());

    // const rows = Array.from(document.getElementsByClassName('pad-row'));
    
    const rows = document.body.querySelectorAll('.pad-row')
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    let index = 0;

    // Tone.Transport.bpm.value = 240;
    Tone.Transport.scheduleRepeat(repeat, '8n')
    Tone.Transport.start();
    
    function repeat(time) {
        let step = index % 8
        for (let i = 0; i < rows.length; i++) {
            let synth = synths[i],
                note = notes[i],
                row = rows[i],
                input = row.querySelector(`label:nth-child(${step + 1})`),
                checkbox = input.querySelector('input');
            // debugger
            
            if (checkbox.checked) synth.triggerAttackRelease(note, '8n', time);
        }

        index++;
    }

})
