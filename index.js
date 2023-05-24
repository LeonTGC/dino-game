import { add, subtract } from './functions.js'
import { getName, weapon, goForward } from './inq.js'

let start = async () => {
    let answer = await getName()
    console.log(answer)
    console.log('ahhh a good name, you must now select a weapon')
    chooseWeapon()
}

let chooseWeapon = async () => {
    console.log('be careful what you choose, i know what i would pick')
    let answer = await weapon()
    console.log(answer)
    if(answer === 'bubblegum'){
        console.log('y?')
    }else {
        console.log('a fine choice')
    }
}

let advance = async () => {
    let answer = await goForward()
    console.log(answer)
}
advance()