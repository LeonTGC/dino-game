import inquirer from "inquirer";

export async function getName() {
    let { userInput } = await inquirer.prompt({
        // type of question
        type: "input",
        // user answer store
        name: 'userInput',
        // question to ask user
        message: 'what is your name?'
    })
    // return the answer
    return userInput
}

export let weapon = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: "list",
        name: 'userAnswer',
        message: 'choose your weapon',
        choices: ['bubblegum', 'coffee', 'paper']
    })
    return userAnswer
}

export let goForward = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: 'confirm',
        name: 'userAnswer',
        message: 'do you want to continue?'
    })
    return userAnswer
}
