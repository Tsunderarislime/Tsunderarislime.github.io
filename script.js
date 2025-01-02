var dict = {
    "1": ["assets/atsui-yo.webp", "https://github.com/Tsunderarislime/atsui-yo", "atsui-yo", "This is my first Discord bot I developed, using Python and discord.py. It is a weather forecast bot which can provide a 12-hour forecast, 1-7 day forecast, as well as provide automated daily weather forecasts. <br><br> Daily forecasts also come with a fun video depending on the highest temperature for that day. All of the functionality can be configured purely through using chat commands in a Discord channel."],
    "2": ["assets/maria.webp", "#", "Maria", "This is a placeholder (1)"],
    "3": ["assets/bun.webp", "#", "Bunny", "This is a placeholder (2)"]
};

function update_big(imgs) {
    // Get IDs of relevant elements in the big display
    var big_image = document.getElementById("big-image");
    var big_link = document.getElementById("big-link");
    var big_title = document.getElementById("big-title");
    var big_desc = document.getElementById("big-description");

    // Get the array for the image clicked in the control bar
    var items = dict[imgs.alt];

    // Update the values on the document
    big_image.src = items[0];
    big_link.href = items[1];
    big_title.innerHTML = items[2];
    big_desc.innerHTML = items[3];
};