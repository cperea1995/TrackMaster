import * as Tone from 'tone';

window.addEventListener('DOMContentLoaded', () => {

    const synth = new Tone.FMSynth().toMaster();
    // synth.triggerAttackRelease('C4', '8n')

    const elements = Array.from(document.getElementsByClassName('pad-row-item'));
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener('click', async () => {
            await Tone.start()
            synth.triggerAttackRelease('C4', '8n')
        })
        
    }
    // console.log(elements);
    // const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    // let container = document.getElementById('container')
    // // let html= ''
    // for (let i = 0; i < notes.length; i++) {
    //     const note = notes[i];
    //     console.log(note);
    //     const div = document.createElement('div');
    //     div.classList.add('whitenote')
    //     container.appendChild(div);
    //     //div.setAttribute('onmousedown', 'notedown')
    //     // html += `<div onmousedown='noteDown(this)' data-note='${note}' class='whitenote'></div>`
    // }


    // // document.getElementById('container').innerHTML = html;
    // const child = document.getElementById('container').firstChild
    // child.onmousedown = noteDown(this);
    
    // console.log(child)
    // function noteDown(e) {
    //     const note = e.dataset.note;
    //     alert(note);
    // }


    // // document.getElementById('test').addEventListener('noteon', e => {
    // //     synth.triggerAttack(e.detail.name)
    // // })

    // // document.getElementById('test').addEventListener('noteoff', e => {
    // //     synth.triggerRelease()
    // // })

})
