import * as Tone from 'tone';
import "regenerator-runtime/runtime.js";

const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
];

synths[0].oscillator.type = 'triangle';
synths[0].oscillator.type = 'sine';
synths[0].oscillator.type = 'sawtooth';

synths.forEach(synth => synth.toMaster());

const rows = Array.from(document.querySelectorAll('.grid > div'));
const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
let index = 0

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
    let step = index % 8
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
        note = notes[i],
        row = rows[i],
        input = row.querySelector(`input:nth-child(${step + 1})`);

        if (input.checked) {
            synth.triggerAttackRelease(note, '8n', time);
        }
    }
    index++;
}
