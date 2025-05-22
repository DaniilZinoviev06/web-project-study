document.addEventListener('DOMContentLoaded', () => {
    const parallaxText = document.querySelector('.parallax-text');

    setTimeout(() => {
        parallaxText.classList.add('visible');
    }, 500);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        parallaxText.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});

const video_player = document.querySelector("#video_player"),
mainVideo = video_player.querySelector(".main-video"),
progressAreaTime = video_player.querySelector(".progressAreaTime"),
controls = video_player.querySelector(".controls"),
progress_area = video_player.querySelector(".progress-area"),
progress_bar = video_player.querySelector(".progress-bar"),
fast_rewind = video_player.querySelector(".fast-rewind"),
play = video_player.querySelector(".play"),
play1 = video_player.querySelector(".play_1"),
fast_forward = video_player.querySelector(".fast-forward"),
volume = video_player.querySelector(".volume"),
volume_range = video_player.querySelector(".volume-range"),
current = video_player.querySelector(".current"),
totalduration = video_player.querySelector(".duration"),
settingsBtn = video_player.querySelector(".settingsBtn"),
picture_in_picture = video_player.querySelector(".picture_in_picture"),
fullscreen = video_player.querySelector(".fullscreen"),
settings = video_player.querySelector(".settings"),
playback = video_player.querySelectorAll(".playback li");
const bufferedBar = video_player.querySelector(".bufferedbar");
let thumbnail = video_player.querySelector(".thumbnail");

controls.hidden = true;


mainVideo.addEventListener('loadeddata', () => {
    setInterval(() => {
        let buffered = mainVideo.buffered;
        let lastBufferedEnd = buffered.length > 0 ? buffered.end(buffered.length - 1) : 0;
        let duration = mainVideo.duration;
        let width = (lastBufferedEnd / duration) * 100;
        bufferedBar.style.width = `${width}%`;
    }, 100);
});

function playV() {
    play.innerHTML = "pause";
    play.title = " ";
    //play1.innerHTML = "pause";
    play1.title = " ";
    mainVideo.innerHTML = "pause";
    mainVideo.title = " ";
    video_player.classList.add('paused');
    mainVideo.play();
    controls.hidden=false;
    play1.hidden=true;
    play1.style.display = "none";
};

function pauseV() {
    play.innerHTML = "play_arrow";
    play.title = " ";
    //play1.innerHTML = "play_arrow";
    play1.title = " ";
    mainVideo.innerHTML = "play_arrow";
    mainVideo.title = " ";
    video_player.classList.remove('paused');
    mainVideo.pause();
};

play.addEventListener('click',()=> {
    const vpaused = video_player.classList.contains('paused');

    vpaused ? pauseV() : playV();
});

mainVideo.addEventListener('click',()=> {
    const vpaused = video_player.classList.contains('paused');

    vpaused ? pauseV() : playV();
});

play1.addEventListener('click',()=> {
    const vpaused = video_player.classList.contains('paused');
    vpaused ? pauseV() : playV();
});

fast_rewind.addEventListener('click',()=>{
    mainVideo.currentTime -= 10;
});

fast_forward.addEventListener('click',()=>{
    mainVideo.currentTime += 10;
});

mainVideo.addEventListener('play',()=>{
    playV();
});

mainVideo.addEventListener('pause',()=>{
    pauseV();
});

mainVideo.addEventListener('loadeddata',(e)=>{
    let videoD = e.target.duration;
    let TotM = Math.floor(videoD / 60);
    let TotS = Math.floor(videoD % 60);

    TotS < 10 ? TotS = "0" + TotS : TotS;
    totalduration.innerHTML = `/ ${TotM} : ${TotS}`;
});

mainVideo.addEventListener('timeupdate',(e)=>{
    let CurT = e.target.currentTime;
    let CurM = Math.floor(CurT / 60);
    let CurS = Math.floor(CurT % 60);

    CurS < 10 ? CurS = "0" + CurS : CurS;
    current.innerHTML = `${CurM} : ${CurS}`;

    let videoD = e.target.duration;
    let progressWidth = (CurT / videoD) * 100;
    progress_bar.style.width = `${progressWidth}%`;
});

progress_area.addEventListener('pointerdown',(e) => {
    progress_area.setPointerCapture(e.pointerId);
    setTimeline(e);
    progress_area.addEventListener("pointermove", setTimeline);
    progress_area.addEventListener("pointerup", () => {
        progress_area.removeEventListener("pointermove", setTimeline);
    });
});

function setTimeline(e){
    let videoD = mainVideo.duration;
    let prW = progress_area.clientWidth;
    let COsetX = e.offsetX;

    mainVideo.currentTime = (COsetX / prW) * videoD;

    let progressWidth = (mainVideo.currentTime / videoD) * 100;
    progress_bar.style.width = `${progressWidth}%`;

    let CurT = mainVideo.currentTime;
    let CurM = Math.floor(CurT / 60);
    let CurS = Math.floor(CurT % 60);
    CurS < 10 ? CurS = "0" + CurS : CurS;
    current.innerHTML = `${CurM} : ${CurS}`;
};

mainVideo.addEventListener('waiting',()=>{
    loader.style.display = "block";
});

mainVideo.addEventListener('canplay',()=>{
    loader.style.display = "none";
});

function checkVolStyle(){
    if(volume_range.value == 0) {
        volume.innerHTML = "volume_off";
    }
    else if(volume_range.value < 40){
        volume.innerHTML = "volume_down";
    }
    else {
        volume.innerHTML = "volume_up";
    }
};

let changedVol = volume_range.value;

function muteV(){
    if(volume_range.value == 0) {
        volume_range.value = changedVol;
        mainVideo.volume = changedVol/100;
        if(changedVol == 0) {
            volume_range.value = 50;
            mainVideo.volume = 50/100;
        }
        checkVolStyle();
    }
    else {
        volume_range.value = 0;
        mainVideo.volume = 0;
        volume.innerHTML = "volume_off";
    }
};

volume_range.addEventListener('input',()=>{
    changedVol = volume_range.value;
    mainVideo.volume = volume_range.value / 100;
    checkVolStyle();
});

volume.addEventListener('click',()=>{
    muteV();
});

picture_in_picture.addEventListener('click',()=>{
    mainVideo.requestPictureInPicture();
});

function FullScreen(){
    if(!video_player.classList.contains('openFullScreen')){
        video_player.classList.add('openFullScreen');
        fullscreen.innerHTML = "fullscreen_exit";
        video_player.requestFullscreen();


        let containerElement = document.querySelector('#video_player');
        containerElement.style.border = "none";
    }
    else {
        let containerElement = document.querySelector('#video_player');
        containerElement.style.border = "4px solid #212121";
        video_player.classList.remove('openFullScreen');
        fullscreen.innerHTML = "fullscreen";
        document.exitFullscreen();
    }
};

fullscreen.addEventListener('click',()=>{
    FullScreen();
});


mainVideo.addEventListener('dblclick',()=>{
    FullScreen();
});

settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('active');
    settingsBtn.classList.toggle('active');
});

playback.forEach((event)=>{
    event.addEventListener('click',()=>{
        removeActiveClasses(playback);
        event.classList.add('active');
        let speed = event.getAttribute("data-speed");
        mainVideo.playbackRate = speed;
    })
});

//качество...
const settingHome = video_player.querySelectorAll(".settings [data-label='settingHome'] > ul > li"),
settingDivs = video_player.querySelectorAll('.settings > div'),
settingBack = video_player.querySelectorAll('.settings > div .back_arrow'),
quality_ul = video_player.querySelector(".settings > [data-label='quality'] ul"),
qualities = video_player.querySelectorAll("source[size]");

qualities.forEach(event => {
    let quality_html = `<li data-quality="${event.getAttribute('size')}">${event.getAttribute('size')}p</li>`;
    quality_ul.insertAdjacentHTML('afterbegin', quality_html);
})

const quality_li = video_player.querySelectorAll(".settings > [data-label='quality'] ul > li");
quality_li.forEach((event) => {
    event.addEventListener('click', (e) => {
        let quality = event.getAttribute('data-quality');
        removeActiveClasses(quality_li);
        event.classList.add('active');
        qualities.forEach(event => {

            let getQuality = localStorage.getItem('Quality');
            if (event.getAttribute('size') == quality) {
                let video_current_duration = mainVideo.currentTime;
                let video_source = event.getAttribute('src');
                mainVideo.src = video_source;
                mainVideo.currentTime = video_current_duration;
                playV();
            }
        })
    })
})

settingBack.forEach((event) => {
    event.addEventListener('click', (e) => {
        let setting_label = e.target.getAttribute('data-label');
        for (let i = 0; i < settingDivs.length; i++) {
            if (settingDivs[i].getAttribute('data-label') == setting_label) {
                settingDivs[i].removeAttribute('hidden');
            } else {
                settingDivs[i].setAttribute('hidden', "");
            }
        }
    })
})

settingHome.forEach((event) => {
    event.addEventListener('click', (e) => {
        let setting_label = e.target.getAttribute('data-label');
        for (let i = 0; i < settingDivs.length; i++) {
            if (settingDivs[i].getAttribute('data-label') == setting_label) {
                settingDivs[i].removeAttribute('hidden');
            } else {
                settingDivs[i].setAttribute('hidden', "");
            }
        }
    })
})

function removeActiveClasses(e) {
    e.forEach((event) => {
        event.classList.remove("active");
    });
}

// сейвим в локалку
window.addEventListener('unload',()=>{
    let setDuration = localStorage.setItem('duration',`${mainVideo.currentTime}`);
})

// выгружаем из лок-ки
window.addEventListener('load',()=>{
    let getDuration = localStorage.getItem('duration');
    mainVideo.currentTime = getDuration;
});

mainVideo.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
});

video_player.addEventListener('mouseover',()=>{
    controls.classList.add('active');
});

video_player.addEventListener('mouseleave',()=>{
    if (video_player.classList.contains('paused')){
        if (settingsBtn.classList.contains('active')){
            controls.classList.add('active');
        }
        else {
            controls.classList.remove('active');
        }
    }
    else {
        controls.classList.add('active');
    }
});

progress_area.addEventListener("mousemove", (e) => {
    let progressWidthval = progress_area.clientWidth + 2;
    let x = e.offsetX;
    let videoDuration = mainVideo.duration;
    let progressTime = Math.floor((x / progressWidthval) * videoDuration);
    let currentMin = Math.floor(progressTime / 60);
    let currentSec = Math.floor(progressTime % 60);
    progressAreaTime.style.setProperty("--x", `${x}px`);
    progressAreaTime.style.display = "block";
    if (x >= progressWidthval - 80) {
        x = progressWidthval - 80;
    } else if (x <= 75) {
        x = 75;
    } else {
        x = e.offsetX;
    }

    currentSec < 10 ? (currentSec = "0" + currentSec) : currentSec;
    progressAreaTime.innerHTML = `${currentMin} : ${currentSec}`;

    thumbnail.style.setProperty("--x", `${x}px`);
    thumbnail.style.display = "block";

    for (var item of thumbnails) {
        var data = item.sec.find(x1 => x1.index === Math.floor(progressTime));

        if (data) {
            if (item.data != undefined) {
                thumbnail.setAttribute("style", `background-image: url(${item.data});background-position-x: ${data.backgroundPositionX}px;background-position-y: ${data.backgroundPositionY}px;--x: ${x}px;display: block;`)
                return;
            }
        }
    }

});


progress_area.addEventListener('mouseleave',()=>{
    thumbnail.style.display = "none";
    progressAreaTime.style.display = "none";
});

/*let xhr = new XMLHttpRequest();
 x hr*.open("GET","");
 xhr.responseType = "arraybuffer";
 xhr.onload = (e) => {
 let blob = new Blob([xhr.response]);
 let url = URL.createObjectURL(blob);
 mainVideo.src = url;
 };
 xhr.send();
 */

loader = video_player.querySelector(".loader");

let isMouseMoving = false;
let timeoutId;

function hideControls() {
    controls.classList.remove('active');
    controls.hidden=true;
}

function showControls() {
    controls.classList.add('active');
    controls.hidden=false;
}

function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideControls, 2000);
}

function MouseMove() {
    isMouseMoving = true;
    showControls();
    resetTimer();
};

video_player.addEventListener('mousemove', () => {
    if(play1.style.display == "none"){
        MouseMove();
    }
});

video_player.addEventListener('click', () => {
    MouseMove();
});

video_player.addEventListener('mouseover', () => {
    isMouseMoving = false;
    resetTimer();
});

//timeoutId = setTimeout(hideControls, 2000);

const thumbnails = [],
thumbnailWidth = 158,
thumbnailHeight = 90,
horizontalItemCount = 5,
verticalItemCount = 5;

let preview_video = document.createElement('video');
preview_video.preload = "metadata";
preview_video.width = "500";
preview_video.height = "300";
preview_video.controls = true;
preview_video.src = mainVideo.querySelector("source").src;
preview_video.addEventListener("loadeddata", async function () {
    preview_video.pause();

    var count = 1;
    var id = 1;
    var x = 0,
    y = 0;

    var array = [];

    var duration = parseInt(preview_video.duration);
    for (var i = 1; i <= duration; i++) {
        array.push(i);
    }

    var canvas;

    var i, j;

    for (i = 0, j = array.length; i < j; i += horizontalItemCount) {
        for (var startIndex of array.slice(i, i + horizontalItemCount)) {
            var backgroundPositionX = x * thumbnailWidth;
            var backgroundPositionY = y * thumbnailHeight;
            var item = thumbnails.find((x) => x.id === id);

            if (!item) {
                canvas = document.createElement("canvas");
                canvas.width = thumbnailWidth * horizontalItemCount;
                canvas.height = thumbnailHeight * verticalItemCount;
                thumbnails.push({
                    id: id,
                    canvas: canvas,
                    sec: [
                        {
                            index: startIndex,
                            backgroundPositionX: -backgroundPositionX,
                            backgroundPositionY: -backgroundPositionY,
                        },
                    ],
                });
            } else {
                canvas = item.canvas;
                item.sec.push({
                    index: startIndex,
                    backgroundPositionX: -backgroundPositionX,
                    backgroundPositionY: -backgroundPositionY,
                });
            }
            var context = canvas.getContext("2d");
            preview_video.currentTime = startIndex;
            await new Promise(function (resolve) {
                var event = function () {
                    context.drawImage(
                        preview_video,
                        backgroundPositionX,
                        backgroundPositionY,
                        thumbnailWidth,
                        thumbnailHeight
                    );
                    x++;

                    preview_video.removeEventListener("canplay", event);
                    resolve();
                };
                preview_video.addEventListener("canplay", event);
            });
            count++;
        }

        x = 0;

        y++;

        if (count > horizontalItemCount * verticalItemCount) {
            count = 1;
            x = 0;
            y = 0;
            id++;
        }
    }
    console.log(thumbnails);
    thumbnails.forEach(function (item) {
        item.canvas.toBlob((blob) => (item.data = URL.createObjectURL(blob)), "image/jpeg");
        delete item.canvas;
    });
});
