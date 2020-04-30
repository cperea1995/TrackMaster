import * as Tone from 'tone';
import "regenerator-runtime/runtime.js";



window.addEventListener('DOMContentLoaded', () => {

    // const synth = new Tone.FMSynth().toMaster();
    // const c4 = Array.from(document.getElementsByClassName('row-1'));

    // for (let i = 0; i < c4.length; i++) {
    //     c4[i].addEventListener('click', async () => {
    //         await Tone.start();
    //         synth.triggerAttackRelease('C4', '8n');
    //     })
        
    // }
    
    // const row1 = Array.from(document.getElementById('pad-row1').children);
    // for (let i = 0; i < row1.length; i++) {
    //     const element = row1[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('C4', '8n')
    //         // synth.triggerAttackRelease('C4', 0.5, 0)
    //     })
    // }
   
    // const row2 = Array.from(document.getElementById('pad-row2').children);
    // for (let i = 0; i < row2.length; i++) {
    //     const element = row2[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('D4', '8n')
    //     })
    // }
   
    // const row3 = Array.from(document.getElementById('pad-row3').children);
    // for (let i = 0; i < row3.length; i++) {
    //     const element = row3[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('E4', '8n')
    //     })
    // }
    
    // const row4 = Array.from(document.getElementById('pad-row4').children);
    // for (let i = 0; i < row4.length; i++) {
    //     const element = row4[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('F4', '8n')
    //     })
    // }
            
    // const row5 = Array.from(document.getElementById('pad-row5').children);
    // for (let i = 0; i < row5.length; i++) {
    //     const element = row5[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('G4', '8n')
    //     })
    // }
                    
    // const row6 = Array.from(document.getElementById('pad-row6').children);
    // for (let i = 0; i < row6.length; i++) {
    //     const element = row6[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('A4', '8n')
    //     })
    // }
                            
    // const row7 = Array.from(document.getElementById('pad-row7').children);
    // for (let i = 0; i < row7.length; i++) {
    //     const element = row7[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('B4', '8n')
    //     })
    // }
                                    
    // const row8 = Array.from(document.getElementById('pad-row8').children);
    // for (let i = 0; i < row8.length; i++) {
    //     const element = row8[i];
    //     element.addEventListener('click', async () => {
    //         await Tone.start()
    //         synth.triggerAttackRelease('C5', '8n')
    //     })
    // }
        
       
            
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
            
    synths[0].oscillator.type = 'triangle';
    synths[1].oscillator.type = 'sine';
    synths[2].oscillator.type = 'sawtooth';
    synths[3].oscillator.type = 'sawtooth';
    synths[4].oscillator.type = 'sawtooth';
    synths[5].oscillator.type = 'sawtooth';
    synths[6].oscillator.type = 'sawtooth';
    synths[7].oscillator.type = 'sawtooth';

    synths.forEach(synth => synth.toMaster());

    // const rows = Array.from(document.getElementsByClassName('pad-row'));
    
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    const rows = document.body.querySelectorAll('.pad-row')

    let index = 0;
    Tone.Transport.scheduleRepeat(repeat, '8n')
    Tone.Transport.start();
    
    function repeat(time) {
        let step = index % 8
        for (let i = 0; i < rows.length; i++) {
            let synth = synths[i];
            let note = notes[i];
            let row = rows[i]
            let input = row.querySelector(`input:nth-child(${step + 1})`);
            debugger
            
            //console.log(input);

            if (input === null || input.checked) synth.triggerAttackRelease(note, '8n', time);
            // debugger
            
        }
        index++;
    }

})
