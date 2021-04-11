const allCommands = [
    {
        command: '',
        result: '',
        elements: '',
    },
    {
        command: 'clear',
        result: '',
        elements: '',
    },
    {
        command: 'help',
        result: `Use this command to get your result: <br>
        about contact skill welcome <br><br>`,
        elements: '',
    },
    {
        command: 'about',
        result: `I'm a super simple and busy person at all, having less time in hand!
        I'm a Tech enthusiast, and love to learn all the new tech stuffs and stacks!
        And trying to do so.<br><br>`,
        elements: '',
    },
    {
        command: 'contact',
        result: `Hey I'm super glad that you want to contact me! <br>
        Here is my contact info: <br>
        E-mail: <a href="mailto:selim@gmail.com">selim@gmail.com</a> <br>
        LinkedIn: <a href="https://www.linkedin.com/in/selim/"> Reza </a> <br>
        Instagram: <a href="https://www.instagram.com/selim/"> Swadhin </a> <br><br>`,
        elements: '',
    },
    {
        command: 'skill',
        result: `I'm a newbie! I'm learning all the new things, I found. And still that's my skill.<br><br>`,
        elements: '',
    },
    {
        command: 'welcome',
        result: '',
        elements: `                        <h1>Welcome</h1>
                        <h3 class="src-code-font">Myself, Swadhin</h3>
                        <p class="intro src-code-font">
                            Programming Enthusiast, Learner & Self Taught Programmer
                        </p>
                        <p class="text src-code-font">
                            To Learn More, Type a command Below <br>
                        <p class="command-list src-code-font">
                            about contact skill welcome
                        </p>
                        </p>`,
    },
];

const welcomeScreen = document.querySelector('.welcome-screen');
const preLabelForEmptyCommand = document.querySelector('.label-for-empty-command');
const commandInput = document.querySelector('#command');
const commandResult = document.querySelector('.command-result');


// initial codes for first page load
for (let i = 0; i < allCommands.length; i++) {
    if (allCommands[i].command == 'welcome') {
        welcomeScreen.innerHTML = allCommands[i].elements;
        break;
    };
};

// command input keypress event
commandInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        commandExicution();
    }
});

// up and down key terminal history functionality

// commandInput.addEventListener("keydown", (event) => {
//    if (event.keyCode === 38) {
//        console.log('up keypressed');
//     }
//     console.log(event.keyCode)
// });


// defining commandExicution function
let isCommandAvailable = false;
let i = 0;
commandExicution = () => {
    // storing the input command value for 'command' veriable
    let command = String(commandInput.value).toLowerCase().trim();
        for (i = 0; i < allCommands.length; i++) {
            // command == commandList.[j] ? runCommand() : emptyCommand();
            if (command == allCommands[i].command) {
                isCommandAvailable = true;
                break;
            } else { isCommandAvailable = false; };
        };
        commandResultExecution(i, command);
        if (command == 'clear' || command == 'welcome') {
            commandResult.innerHTML = '';
            preLabelForEmptyCommand.innerHTML = '';
        };
    };
    
// creating elements
commandResultExecution = (i, command) => {
    welcomeScreen.innerHTML = isCommandAvailable ? allCommands[i].elements : '';
    // defining new label for new command
    let preLabelWithCommand = document.createElement('label');
    preLabelWithCommand.classList.add('command-input-label');
    preLabelWithCommand.innerHTML = `root@swadhin's-portfolio:~$ `  + `<span class="green-color"> ${command}</span>`;
    // defining paragraph tag for command result
    let pTagForResult = document.createElement('p');
    pTagForResult.innerHTML = isCommandAvailable ? allCommands[i].result : `<span class="red-color">'${command}' is not a valid command</span> <br> type 'help' to get all the valid commands <br><br>`;
            // appending label and result P tag to the commandResult div for each iteration
            commandResult.appendChild(preLabelWithCommand);
            commandResult.appendChild(pTagForResult);
            // clearing the commnand input field
            commandInput.value = '';
};

// this snippet is for getiing focused the command input field, clicking the body area
document.body.addEventListener('click', () => {
    commandInput.focus();
});