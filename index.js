const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5500;
let link_html = {};
let user_info = {};

// app.use(express.json());
app.use('/static', express.static('static'));
// app.use(bodyParser.json());

// app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    // res.render('index', data = user_info);
    res.sendFile(__dirname + '/index.html')
})
app.post('/generatelink', (req, res) => {
    let link = getLink();
    console.log(req.body);
    link_html[link.link] = { html: modify_html(req.body.data.toString()), music: req.body.music, ip: req.body.ip };
    // console.log((link_html))

    res.json({ "link": link });
})

app.get('/:id', (req, res) => {
    console.log("link called");
    if (link_html[req.params["id"]]) {
        // res.render('link', { data: req.params["id"] });
        res.sendFile(__dirname + '/link.html')

    } else {
        // res.render('link_f', { data: link_html[req.params["id"]] });
        res.sendFile(__dirname + '/link_f.html')

    }

})
app.post('/addme', (req, res) => {
    user_info[req.body.ip] = { "city": req.body.city, "country": req.body.country, "country_code": req.body.country_code, "time": req.body.time };
    res.json({ "result": "added successfully", "data": user_info })
})


app.get('/get/:id', (req, res) => {
    console.log("link called");
    if (link_html[req.params["id"]]) {
        res.json({ "data": link_html[req.params["id"]].html, "music": link_html[req.params["id"]].music });
    } else {
        // res.render('link_f', { data: link_html[req.params["id"]] });

    }

})

app.post('/deletelink/:id', (req, res) => {
    if (link_html[req.params["id"]] && link_html[req.params["id"]].ip == req.body.ip) {
        delete link_html[req.params["id"]];
        res.json({ "result": "success" })
    } else {
        res.json({ "result": "failed" })
    }
})


app.listen(port, () => {
    console.log('listening on', port)
})

const getLink = () => {
    let time = Date.now();
    let arr = (time + "").split("");
    let link = '';
    for (let i = 0; i < arr.length; i++) {
        if (i > 6) {
            link += arr[i];
        }
    }
    return { "link": link };
}

// console.log(getLink());

const modify_html = (data) => {
    data = data.split(`onClick="imgClicked(this)"`).join("");
    data = data.split(`title="Click to Delete element"`).join("");
    data = data.split(`title="Click to Delete Image"`).join("");

    return data.trim();

}
