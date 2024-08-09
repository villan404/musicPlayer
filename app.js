const songList = document.querySelector(".songList");
const song = document.querySelector(".songName");
const h2 = document.querySelector("h2");
const timer = document.querySelector(".timer");
const dot = document.querySelector(".dot");
const img = document.querySelector("#img");
// let intervaId;
const back = document.querySelector("#back");
const forw = document.querySelector("#forw");
const volume = document.querySelector(".volume");
let songUrl = new Audio();
let bacchi = false;
let currentIndex = 0;
let metadataLoaded = false;
// const choco = document.querySelector(".choco");
let folderName;
let URL;
const left = document.querySelector(".left_box");
const right = document.querySelector(".right_box");
const songplay = document.querySelector(".playsongname")
// console.log(left, right)
// choco.addEventListener("click", () => {
//     // async function chooseLibrary() {

//     //     let response = await fetch("list.json");
//     //     let data = await response.json();
//     //     console.log(data)
//     //     folderName = data.title;
//     //     // n = "music"
//     //     URL = `/${folderName}/`
//     //     name();


//     // }
//     // chooseLibrary();
// })


// choco.addEventListener("click", () => {
//     folderName = "music";
//     URL = `/${folderName}/`
//     console.log(URL)
//     console.log("hsdfsdf")
//     name()
// })

//async 
function nameOfFolder() {

    // let response = await fetch("music/");
    // let data = await response.text();
    // console.log(data)

    // let div1 = document.createElement("div")
    // div1.innerHTML = data
    // let songName = div1.getElementsByClassName("name")
    // songList.innerHTML = '';
    // for (let i = 1; i < songName.length; i++) {
    //     songList.innerHTML += `<div class = "library">${songName[i].textContent}</div>`
    // }

    let div = document.querySelectorAll(".library");

    div.forEach((s, index) => {
        s.addEventListener("click", () => {
            // console.log(s.innerHTML)
            folderName = s.innerHTML
            name(folderName);
        })
    })

}

// async 
// function name(folder) {
//     // URL = `music/${folder}/`
//     // let response = await fetch(URL);
//     // let data = await response.text();
//     // console.log(data);
//     let div1 = document.createElement("div")
//     div1.innerHTML = URL
//     song.innerHTML = ''
//     let songName = div1.getElementsByClassName("name")
//     console.log(songName);
//     song.innerHTML += `<h3>${folder}</h3>`
//     for (let i = 1; i < songName.length; i++) {
//         song.innerHTML += `
        
//         <div class = "song">${songName[i].textContent}</div>`
//     }
//     attachingSong();
// }
// Example predefined song list

const predefinedSongs = {
    "Bhojpuri Song": ["O Maahi.m4a", "o sajni re.m4a"],
    "Love Song": ["Shree.m4a", "Tum Hi Ho .m4a"]
};

function name(folder) {
    const songs = predefinedSongs[folder] || [];
    song.innerHTML = `<h3>${folder}</h3>`;
    songs.forEach(songName => {
        song.innerHTML += `
            <div class="song">${songName}</div>
        `;
    });
    attachingSong();
}



const attachingSong = () => {
    let div = document.querySelectorAll(".song")
    div.forEach((s, index) => {
        s.addEventListener("click", () => {
            currentIndex = index
            // console.log(index)
            // let p = s.innerHTML
            playsong(s.innerHTML)
            // console.log(p)
            img.src = 'pause.svg'
            // let number = 0;
            // let number2 = 0
            // dot.style.animation = `line ${hello}s linear`;
            // let song = s.innerHTML
            // for (let i = 1; i < songName.length; i++) {
            //     if (song === songName[i].innerHTML) {
            //         number = i;

            //     }

            // }

        })

    })
    back.addEventListener("click", () => {
        // number--;
        // if (number <= 0) {
        //     console.log("Nothing is availabel before 0")
        //     number = 1;
        // }
        // else {
        //     playsong(songName[number].innerHTML)
        //     // console.log(songName[number].innerHTML, number)
        //     song = `${songName[number].innerHTML}`
        // }
        // number2 = number;
        // console.log(currentIndex)
        currentIndex = Math.max(0, currentIndex - 1);
        playsong(div[currentIndex].innerHTML)
        // console.log(currentIndex)
    })

    forw.addEventListener("click", () => {
        // for(let i = 1; i < songName.length; i++){
        // i = number;
        // if (number >= songName.length) {
        //     console.log("dsfjfsjdl")
        //     number = songName.length;
        // }
        // else {

        //     if (song === songName[i].innerHTML) {
        //         // number2 = i;
        //         number++;
        //     }
        //     else {
        //         playsong(songName[number].innerHTML)
        //         // console.log(songName[number2].innerHTML, number2)

        //         song = `${songName[number].innerHTML}`
        //     }
        // }
        // }
        currentIndex = Math.min(div.length - 1, currentIndex + 1);
        playsong(div[currentIndex].innerHTML)
    })

    document.addEventListener("keydown", (event) => {
        const keyName = event.key;
        console.log(keyName)

        if (keyName === "ArrowLeft") {
            currentIndex = Math.max(0, currentIndex - 1);
            playsong(div[currentIndex].innerHTML);
        }
        else if (keyName === "ArrowRight") {
            currentIndex = Math.min(div.length - 1, currentIndex + 1);
            playsong(div[currentIndex].innerHTML);
        }
        else if (keyName === " ") {
            if (!songUrl.src) {
                return;
            }
            if (bacchi) {

                songUrl.play()
                img.src = 'pause.svg'
                dot.style.animationPlayState = 'running'
                bacchi = false
                // playsong()
            }
            else {
                songUrl.pause()
                img.src = 'play.svg'
                dot.style.animationPlayState = 'paused'
                bacchi = true
                // clearInterval(intervaId)?
                // playsong()?
            }
        }
        // if (keyName === "ArrowLeft") {
        //     console.log("left arrow clicked")
        //     number--;
        //     if (number <= 0) {
        //         console.log("Nothing is availabel before 0")
        //         number = 1;
        //     }
        //     else {
        //         playsong(songName[number].innerHTML)
        //         // console.log(songName[number].innerHTML, number)
        //         song = `${songName[number].innerHTML}`
        //     }

        // }


        // if (keyName === "ArrowRight") {
        //     console.log("rgith arrow clicked")
        //     i = number;
        //     if (number >= songName.length) {
        //         console.log("dsfjfsjdl")
        //         number = songName.length;
        //     }
        //     else {

        //         if (song === songName[i].innerHTML) {
        //             // number2 = i;
        //             number++;
        //         }
        //         else {
        //             playsong(songName[number].innerHTML)
        //             // console.log(songName[number2].innerHTML, number2)

        //             song = `${songName[number].innerHTML}`
        //         }
        //     }
        // }
    })






}

const playsong = (songN) => {
    songUrl.src = `/music/${folderName}/` + songN
    console.log(songUrl)
    songUrl.play()
    metadataLoaded = false;

    dot.style.animation = 'none';
    dot.offsetHeight;
    dot.style.animation = '';
    // console.log(dot.offsetHeight);
    songUrl.addEventListener('loadedmetadata', () => {
        metadataLoaded = true
        const duration = songUrl.duration;
        // changeformat(duration)
        // console.log(duration)
        // console.log(duration)
        // console.log(timer)
        timer.innerHTML = `${changeformat(songUrl.currentTime)} / ${changeformat(duration)}`;
        dot.style.animation = `line ${duration}s linear`;
        songplay.innerHTML = songN
        // console.log(dot.offsetHeight);
    });


    songUrl.addEventListener('timeupdate', () => {
        if (metadataLoaded) {
            timer.innerHTML = `${changeformat(songUrl.currentTime)} / ${changeformat(songUrl.duration)}`
        }
        // volume.innerHTML = `${songUrl.volume}`
    })


    pausesong()
}

const pausesong = () => {

    img.addEventListener("click", () => {
        if (bacchi) {

            songUrl.play()
            img.src = 'pause.svg'
            dot.style.animationPlayState = 'running'
            bacchi = false
            // playsong()
        }
        else {
            songUrl.pause()
            img.src = 'play.svg'
            dot.style.animationPlayState = 'paused'
            bacchi = true
            // clearInterval(intervaId)?
            // playsong()?
        }
    })

}








const changeformat = (duration) => {

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    const changeMinutes = minutes.toString().padStart(2, '0');
    const changeSeconds = seconds.toString().padStart(2, '0');

    // console.log(`${changeMinutes}:${changeSeconds}`)
    // console.log(changeMinutes, changeSeconds)
    // console.log(duration)

    return `${changeMinutes}:${changeSeconds}`;
}


// name();

nameOfFolder()
// name()


// const library = document.querySelectorAll(".library");

// // library.addEventListener("click", () => {
// //     console.log("hellsfsdsfsfsdf");
// // })

// console.log(library)