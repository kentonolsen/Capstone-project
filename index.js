
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
let user_id = 0
const section4 = document.querySelector('#saved-responses-sec')

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
    user_id++
}

const saveHandler = () => {
    if(userConstant == ''){
        return alert('Not logged in')
    } else (
    axios.post(`${baseUrl}/api/saved`, {question: questionInput.value, serverRes: responsePara.textContent})
    .then((res) => {

    })
    )}

const savedResponses = () => {
    section4.innerHTML = ''
    axios.get(`${baseUrl}/api/savedres`)
    .then(res => {
        res.data.forEach(elem => {
        let responseCard = `<p>Question: ${elem.user_question} Answer: ${elem.response}</p>`
        section4.innerHTML += responseCard
    })
})}

questionBtn.addEventListener('click', questionHandler);
saveBtn.addEventListener('click', saveHandler);
usernameBtn.addEventListener('click', userHandler);
responseBtn.addEventListener('click', savedResponses);