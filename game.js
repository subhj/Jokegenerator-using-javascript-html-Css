const jokeConatiner = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit";

let getjoke = () => {
    jokeConatiner.classList.remove("Fade");
    fetch(url)
    .then(data => data.json())
    .then(item => { 
        jokeConatiner.textContent = `${item.joke}`;
         jokeConatiner.classList.add("Fade");

});

}
btn.addEventListener("click",getjoke);
getjoke();




