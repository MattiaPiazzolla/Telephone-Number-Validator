const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
    if (input === '') {
        alert('Please provide a phone number');
        return;
    }
    const countryCode = '(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const separator = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(`${countryCode}${areaCode}${separator}${phoneNumber}`);
    
    const pTag = document.createElement('p');
    pTag.classList.add('results-text');
    phoneRegex.test(input) ? (pTag.style.color = 'green') : (pTag.style.color = 'red');
    pTag.appendChild(document.createTextNode(
        `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} phone number entered: ${input}`
    ));
    
    resultsDiv.appendChild(pTag);
    
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
    
    pTag.classList.add('show');
};

checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
});