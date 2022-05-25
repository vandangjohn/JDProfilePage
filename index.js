const options = {
	method: 'GET'
};

let response = fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw', options)
                .then(response => response.json())
                .then(response => {
                    if(response.type == 'twopart')
                    {
                        document.getElementById("jokeSetup").innerHTML = 'Q: ' + response.setup;
                        document.getElementById("jokeDelivery").innerHTML = 'A: ' +response.delivery;
                    }
                    else
                    {
                        document.getElementById("jokeSetup").innerHTML = response.joke;
                    }
                })
                .catch(err => console.error(err));

//Use window object to direct user to link               
document.getElementById("attendProjectBtn").onclick = () =>
{
    linkToProj("https://github.com/metainmotion/TakeAttendance/");
}

document.getElementById("tweetProjectBtn").onclick = () =>
{
    linkToProj("https://github.com/metainmotion/FollowUpcomingNFTAccounts/");
}

//Switch between Profile Pic and Resume on hover in and out
document.querySelector(".profilePic").addEventListener("mouseover", (event) => {
    event.target["src"] = 'assets/resume.png';
});

document.querySelector(".profilePic").addEventListener("mouseout", (event) => {
    event.target["src"] = 'assets/portrait.JPG';
});


//Highlight list items on hover
let listItems = document.getElementsByClassName("list-group-item");

for (var item of listItems)
{
    item.addEventListener("mouseover", (event) => {
        event.target["className"] += ' active';
        console.log(event.target["className"]);
    });
    
    item.addEventListener("mouseout", (event) => {
        event.target["className"] = event.target["className"].replace(' active', '');
        console.log(event.target["className"]);
    });
}


//Handle Project Buttons
function linkToProj(url)
{
    window.location = url;
    console.log(`Navigating to ${url}`);
}