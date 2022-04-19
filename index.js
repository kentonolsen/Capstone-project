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
let userConstant = ''
let serverRes = responsePara.value

const questionHandler = () => {
    axios.get(`${baseUrl}/api/question`)
    .then((res) => {
        responsePara.innerHTML = `${res.data}`
    }
    )
}

const userHandler = () => {
    let userName = createInput.value
    userConstant = userName
    axios.post(`${baseUrl}/api/users`, {username: `${userName}`})
    console.log(userName)
    loggedUser.innerHTML = `Logged in as ${userName}`
    createInput.value = ''
    console.log(userConstant)
}

const saveHandler = () => {
    if(userConstant == ''){
        return alert('Not logged in')
    } else (
    axios.post(`${baseUrl}/api/saved`, {username: userConstant, question: questionInput, answer: serverRes})
    .then((res) => {

    })
    )}


questionBtn.addEventListener('click', questionHandler);
saveBtn.addEventListener('click', saveHandler);
usernameBtn.addEventListener('click', userHandler);
// responseBtn.addEventListener('click', );