// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const getjoke = () =>{

    const setheader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setheader)
    .then((res) => res.json())
    .then((data) => {
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
}


jokebtn.addEventListener('click', getjoke);
getjoke();
// get joke ko ek bar ese e cll krlia taki humein miljaye atleast ek joke in starting