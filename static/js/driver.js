console.log('jai shree Ram!!');
const text = document.getElementById('text');
const card = document.getElementById('card');
const create = document.getElementById('create');
const test = document.getElementById('test');
const bgColor = document.getElementById('bg_color');
const fonts = document.getElementById('fontStyle')
const fontsize = document.getElementById('fontSize')
const bbg = document.getElementById('body_bg');
const main_test = document.getElementById('main_test');
const gifContainer = document.getElementById('gif_container');
const gifBtn = document.getElementById('gifBtn');

let selected_music = '0';



setInterval(() => {
    test1.innerText = text.value;

}, 200);

let radius_selector_present = 'card1';
let radius_selector_past = '';
const cardsChange = () => {
    radius_selector_past = radius_selector_present;
    radius_selector_present = card.value
    toogleSelectedClass(test.className, radius_selector_present, radius_selector_past, test);

}

let color_selector_present = 'bg_color1';
let color_selector_past = '';
const colorsChange = () => {
    color_selector_past = color_selector_present;
    color_selector_present = bgColor.value
    toogleSelectedClass(test.className, color_selector_present, color_selector_past, test);

}

let font_selector_present = 'font1';
let font_selector_past = '';
const fontsChange = () => {
    font_selector_past = font_selector_present;
    font_selector_present = fonts.value
    toogleSelectedClass(test.className, font_selector_present, font_selector_past, test);

}

let bbg_present = 'bbg1';
let bbg_past = '';
let test_container = document.getElementById('test_container');
const bodyBgChange = () => {
    test_container.classList = '';
    test_container.classList.add(bbg.value);
    bbg_past = bbg_present;
    bbg_present = bbg.value
    toogleSelectedClass(main_test.className, bbg_present, bbg_past, main_test);

}


let fontsize_selector_present = 'fontsize1';
let fontsize_selector_past = '';
const fontsizeChange = () => {
    fontsize_selector_past = fontsize_selector_present;
    fontsize_selector_present = fontsize.value
    toogleSelectedClass(test.className, fontsize_selector_present, fontsize_selector_past, test);

}

let music_elem = document.getElementById('music');
document.getElementById('play_btn').disabled = true;
document.getElementById('restart_music').disabled = true;
document.getElementById('music_name').innerText = 'No music Selected'

let mp3 = new Audio();
mp3.addEventListener('timeupdate', (element) => {
    // console.log(element);
    let progress = parseInt((mp3.currentTime / mp3.duration) * 100);
    console.log(progress)
        // document.getElementById('progress').value = progress;


})

mp3.addEventListener('ended', () => {
    console.log("ended fired")
    document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/pause.png" alt=""></button>`;

})
const musicChange = () => {
    document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/pause.png" alt=""></button>`;
    mp3.pause();
    selected_music = music_elem.value



    if (music_elem.value == 0) {
        document.getElementById('music_name').innerText = 'No music Selected'
        mp3 = new Audio();
        document.getElementById('play_btn').disabled = true;
        document.getElementById('restart_music').disabled = true;
        document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/play.png" alt=""></button>`;

        document.getElementById('progress').value = 0;


    } else {





        document.getElementById('play_btn').disabled = false;
        document.getElementById('restart_music').disabled = false;

        mp3 = new Audio(`static/media/mp3/${music_elem.value}.mp3`)

        if (music_elem.value == 1) {
            document.getElementById('music_name').innerText = 'Loading music@ HBD(female)';

        } else if (music_elem.value == 2) {
            document.getElementById('music_name').innerText = 'Loading music@ HBD (Funny)';

        } else if (music_elem.value == 3) {
            document.getElementById('music_name').innerText = 'Loading music@ HBD(instrumental)';

        } else if (music_elem.value == 4) {
            document.getElementById('music_name').innerText = 'Loading music@ Into your arms';

        } else if (music_elem.value == 5) {
            document.getElementById('music_name').innerText = 'Loading music@ Tuje dekha toye jna';

        } else if (music_elem.value == 6) {
            document.getElementById('music_name').innerText = 'Loading music@ Cuppy Cake';

        } else if (music_elem.value == 7) {
            document.getElementById('music_name').innerText = 'Loading music@ Tone 1';

        } else if (music_elem.value == 8) {
            document.getElementById('music_name').innerText = 'Loading music@ Tone 2';

        }





        document.getElementById('play_btn').disabled = true;
        document.getElementById('restart_music').disabled = true;

        mp3.addEventListener('loadeddata', () => {
            document.getElementById('play_btn').disabled = false;
            document.getElementById('restart_music').disabled = false;

            if (music_elem.value == 1) {
                document.getElementById('music_name').innerText = 'HBD(female)';

            } else if (music_elem.value == 2) {
                document.getElementById('music_name').innerText = 'HBD (Funny)';

            } else if (music_elem.value == 3) {
                document.getElementById('music_name').innerText = 'HBD(instrumental)';

            } else if (music_elem.value == 4) {
                document.getElementById('music_name').innerText = 'Into your arms';

            } else if (music_elem.value == 5) {
                document.getElementById('music_name').innerText = 'Tuje dekha toye jna';

            } else if (music_elem.value == 6) {
                document.getElementById('music_name').innerText = 'Cuppy Cake';

            } else if (music_elem.value == 7) {
                document.getElementById('music_name').innerText = 'Tone 1';

            } else if (music_elem.value == 8) {
                document.getElementById('music_name').innerText = 'Tone 2';

            }


        })



        mp3.addEventListener('timeupdate', (element) => {
            // console.log(element);
            let progress = parseInt((mp3.currentTime / mp3.duration) * 100);
            document.getElementById('progress').value = progress;

        })
        mp3.addEventListener('ended', () => {
            console.log("ended fired")
            document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/play.png" alt="">`;

        })

        mp3.play();
    }

}

const musicToogle = () => {
    if (mp3.ended || mp3.paused) {
        mp3.play()
        document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/pause.png" alt=""></button>`;

    } else {
        mp3.pause();
        document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/play.png" alt=""></button>`;

    }
}


const restart_music = () => {
    mp3.currentTime = 0;
    mp3.play();
    document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/pause.png" alt=""></button>`;

}


const previewClicked = () => {
    mp3.currentTime = 0;
    mp3.play();
    document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/pause.png" alt=""></button>`;

    let elem = document.getElementById('main_test');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    let div = document.createElement('div');
    div.innerHTML = `<img class="cancelPreviewIcon" onClick="fs_btn_clicked(this)" src="static/media/button_img/cancel.png" alt="">`;
    // div.addEventListener('click',fs_btn_clicked,true);
    document.getElementById('main_test').append(div);
}

const fs_btn_clicked = (val) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    mp3.currentTime = 0;
    mp3.pause();
    val.remove();
    document.getElementById('play_btn').innerHTML = `<img class="btn_icon" src="static/media/button_img/play.png" alt=""></button>`;

}

let imgSize = document.getElementById('imgSize');
let imgSize_level = 'imgsize1';
const imgSizeChange = () => {
    console.log("imgSizeChange fired")
    imgSize_level = imgSize.value;
}

const createClicked = () => {
    if (document.getElementById('jugad2')) {
        document.getElementById('jugad2').remove();
    }
    console.log('create clicked!!\n', test);
    let div = document.createElement('div');
    div.addEventListener('click', creationClicked, false);
    div.title = "Click to Delete element";
    test.classList.forEach((elem) => {
        div.classList.add(elem);
    })
    let str = test.innerHTML;
    div.innerHTML = str.replace('id="test1"', 'id="creation"');
    main_test.append(div);
}

const creationClicked = () => {
    console.log("creation clicked")
    event.target.remove();
}


const clearClicked = () => {
    console.log("clear clicked!!");
    text.value = '';
}



const gifBtnClicked = () => {
    if (gifContainer.style.display == 'block') {

        gifContainer.style.display = 'none';
        document.getElementById('search_memes').style.display = 'none';
        gifBtn.innerHTML = `GIFs <img class="btn_icon" src="static/media/button_img/image.png" alt=""></button>`;
    } else {
        document.getElementById('search_memes').style.display = 'block';
        gifContainer.style.display = 'block';
        gifBtn.innerHTML = 'Hide GIFs <img class="btn_icon" src="static/media/button_img/image.png" alt=""></button>';
    }
}

const toogleSelectedClass = (list_str, selection, to_remove, element) => {
    let arr = list_str.split(' ');
    let count = 0;
    arr.forEach((elem) => {
        if (elem) {
            if (elem == to_remove) {
                delete arr[count];
            }
            count++;
        }
    })
    let str = selection;
    arr.forEach((elem) => { str += " " + elem; })
    element.className = str;


}



// ###########################################################
// ############## Using AJAX for Link Generation #############
// ###########################################################

let ress;
const generateLink = () => {
    console.log("called generateLink")
    let elem = document.getElementById('jugad');
    if (document.getElementById('jugad2')) {
        document.getElementById('jugad2').remove();
    }
    $.post(`/generatelink`, { data: elem.innerHTML, music: music_elem.value, ip: info["query"] }, (result) => {
        console.log(result);
        ress = result;
        let div = document.createElement('div');
        div.innerHTML = `<div id="jugad2">Click to open Link:<br><a  id="link_gen" target="_blank" href="https://writenshare.herokuapp.com/${result.link.link}">https://writenshare.herokuapp.com/${result.link.link}</a><br><button class="btn btn-success my-2" onclick="copyLink()">Copy  <img class="btn_icon" src="static/media/button_img/copy.png" alt=""></button>
            <a class="btn btn-danger my-2 mx-3"  onclick="deleteLink()">Delete <img class="btn_icon" src="static/media/button_img/delete.png" alt=""</a> </div>`;
        document.getElementById('jugad').prepend(div);
        document.getElementById('goToJugad').click();
    })

}


const deleteLink = () => {
    $.post(`/deletelink/${ress["link"].link}`, { ip: info["query"] }, (result) => {
        let link_name = document.getElementById('link_gen').innerText;
        if (result["result"] == 'success') {
            alert(`Link:   ${link_name} \nDeleted Successfully`);
        } else {
            alert(`Link:   ${link_name} \nAlready Deleted`);

        }
    })
}


const copyLink = () => {
    console.log("copylinked called")
    var copyText = document.getElementById("link_gen");
    navigator.clipboard.writeText(copyText.innerText);

}



const entryClicked = () => {
    document.getElementById('entry').style.display = 'none';
    document.getElementById('all').style.display = 'block';
}



//################################################################
// #################### GIFs API #################################
// ###############################################################

let prevMsgLen1 = 0;
let tag, gifs, lastTimeTyped, defaultMemes;
let typingStatus = false;
const search_memes = document.getElementById('search_memes');
// const container = document.getElementById('container');


defaultMemes = gifContainer.innerHTML;

const myInterval11 = setInterval(myTimer11, 100);

function myTimer11() {
    const current_len = search_memes.value.length;
    if (current_len != prevMsgLen1) {
        console.log('typing status:True')

        typingStatus = true;
        lastTimeTyped = Date.now();
        prevMsgLen1 = current_len;
    }
}

const myInterval22 = setInterval(myTimer22, 100);

function myTimer22() {
    if (typingStatus == true) {
        if (Date.now() - lastTimeTyped >= 700) {
            typingStatus = false;
            console.log('typing status:False')
            gifContainer.innerHTML = '';
            gifContainer.innerHTML = `<div class="spnr"><div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span></div>
          </div>`;

            $.get(`https://g.tenor.com/v1/search?q=${search_memes.value}&key=58MHVZMINMH9&limit=27`, function(data, status) {
                showCustomMemes(data)
                console.log(data);
            });
        }
    }
}

const myInterval33 = setInterval(myTimer33, 1000);

function myTimer33() {
    if (search_memes.value.length == 0) {
        document.getElementById('gif_container').innerHTML = '';
        if (defaultMemes) {
            document.getElementById('gif_container').innerHTML = defaultMemes;
        }
    }
}


const showCustomMemes = (gifs) => {
    gifContainer.innerHTML = '';
    gifs["results"].forEach(async(element) => {
        const img = document.createElement("img");
        img.addEventListener('click', memeClicked, false);
        img.classList.add("gifsCase")
        img.src = element["media"][0]["tinygif"]["url"];
        gifContainer.append(img);
    });

}


const showTrendingMemes = (data) => {
    gifContainer.innerHTML = '';
    data["tags"].forEach((element) => {
        const img = document.createElement("img");
        img.addEventListener('click', memeClicked, false);
        img.classList.add("gifsCase")
        img.src = element["image"];
        gifContainer.append(img);
    });
    defaultMemes = gifContainer.innerHTML;

}

const memeClicked = () => {
    var attribute = event.target.getAttribute("src");
    console.log(attribute);
    let img = document.createElement("img");
    img.src = attribute;
    img.title = "Click to Delete Image";

    if (imgSize_level == 'imgsize1') {
        img.classList.add('imgsize1');
    } else if (imgSize_level == 'imgsize2') {
        img.classList.add('imgsize2');
    } else if (imgSize_level == 'imgsize3') {
        img.classList.add('imgsize3');
    } else if (imgSize_level == 'imgsize4') {
        img.classList.add('imgsize4');
    } else {
        img.classList.add('imgsize5');
    }
    img.addEventListener('click', selected_img_clicked, false);

    test.append(img);
    document.getElementById('goToTest').click()

};

const imgClicked = (val) => {
    console.log(val.src);
    let img = document.createElement("img");
    img.src = val.src;
    img.title = "Click to Delete Image";
    if (imgSize_level == 'imgsize1') {
        img.classList.add('imgsize1');
    } else if (imgSize_level == 'imgsize2') {
        img.classList.add('imgsize2');
    } else if (imgSize_level == 'imgsize3') {
        img.classList.add('imgsize3');
    } else if (imgSize_level == 'imgsize4') {
        img.classList.add('imgsize4');
    } else {
        img.classList.add('imgsize5');

    }
    img.addEventListener('click', selected_img_clicked, false);

    test.append(img);
    document.getElementById('goToTest').click()
}


const selected_img_clicked = () => {
    console.log("img clicked")
    event.target.remove();
}

// ###########################################################
// #################  IP Tracker #############################
// ###########################################################

let info;
$.get("https://ipinfo.io/json", (data, status) => {
    console.log("ip data:", data);
    info = data;
    console.log("get ip:", status);
    if (status === 'success') {
        callBack1();
    }
})

const callBack1 = () => {


    //################## Sending user info to Server ############
    // #########################################################
    $.post('/addme', {
        ip: info["ip"],
        city: info["city"],
        country: info["region"],
        country_code: info["country"],
        time: new Date().toLocaleString()
    }, (result) => {
        users_info = result.data;
        console.log("from server:", result);
        let div = document.createElement('div');
        let str = '';
        // count = 0;
        for (let e in users_info) {
            // if (count > 0) {
            str += users_info[e].time + '&nbsp&nbsp&nbsp&nbsp' + `<img style="margin-bottom:4px;" src="https://flagcdn.com/h20/${users_info[e].country_code.toLowerCase()}.png" alt="">` + "&nbsp&nbsp" + users_info[e].city + " , " + users_info[e].country + "<br>";

            // }
            // count++;
        }
        let arr = str.split("<br>");
        arr.reverse();
        str = '';

        arr.forEach((e) => {
            str += e + "<br>";
        })
        div.innerHTML = str;
        console.log(str)
        document.getElementById('user').append(div);


    })


}
