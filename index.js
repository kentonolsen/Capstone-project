

console.log('connected');

const baseUrl = "http://localhost:6070";

const questionInput = document.querySelector('#question-input');
const questionBtn = document.querySelector('#question-btn');
const saveInput = document.querySelector('#save-input');
const saveBtn = document.querySelector('#save-btn');
const createInput = document.querySelector('#create-input');
const usernameBtn = document.querySelector('#username-btn');
const getSaveInput = document.querySelector('#get-save-input');
const responseBtn = document.querySelector('#saved-btn');
const responsePara = document.querySelector('#response-para')
const loggedUser = document.querySelector('#logged-user')

const questionHandler = () => {
    axios.get(`${baseUrl}/api/question`)
    .then((res) => {
        responsePara.innerHTML = `${res.data}`
    }
    )
}

const userHandler = () => {
    let userName = createInput.value
    axios.post(`${baseUrl}/api/users`, {username: `${userName}`})
    console.log(userName)
    loggedUser.innerHTML = `${userName}`
    createInput.value = ''
}


questionBtn.addEventListener('click', questionHandler);
// saveBtn.addEventListener('click', );
usernameBtn.addEventListener('click', userHandler);
// responseBtn.addEventListener('click', );