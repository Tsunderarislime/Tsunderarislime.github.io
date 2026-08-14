---
---
var dict = {{ site.data.index | jsonify }};

// Update the display of the large image when the small image in the control bar is clicked
async function update_big(imgs) {
    // Get IDs of image in the big display
    var big_image = document.getElementById("big-image");
    
    // Do nothing if you clicked the same image in the control bar
    if (big_image.alt == imgs.alt) {
        return
    };

    // Get IDs of other relevant elements in the big display
    var big_link = document.getElementById("big-link");
    var big_title = document.getElementById("big-title");
    var big_desc = document.getElementById("big-description");
    var big_image_container = document.getElementById("big-image-container");
    var big_text = document.getElementById("big-text");

    // Get the array for the image clicked in the control bar
    var items = dict[imgs.alt];

    // Remove the pulsing glow effect on the previous big image (has ID of 'control-big-image')
    document.getElementById("control-big-image").removeAttribute("id");

    // Fade out and add pulsing glow to currently clicked element
    big_image_container.classList.toggle("fade");
    big_text.classList.toggle("fade");
    imgs.id = "control-big-image";

    // Update the elements just as they completely fade out
    setTimeout(function() {
        big_image.alt = imgs.alt;
        big_image.src = items.image;
        big_link.href = items.link;
        big_title.innerHTML = items.title;
        big_desc.innerHTML = items.description;
        // Fade in
        big_image_container.classList.toggle("fade");
        big_text.classList.toggle("fade");
    }, 250);
};
