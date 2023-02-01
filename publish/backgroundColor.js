const COLOR_THEMES = [
    {
        name: "Pale Sky",
        season_number: 1,
        css_class: "season1-theme",
    },
    {
        name: "Dusk Sky",
        season_number: 2,
        css_class: "season2-theme",
    },
    {
        name: "Rainbow!",
        season_number: 3,
        css_class: "season3-theme",
    },
    {
        name: "Submarine",
        season_number: 4,
        css_class: "season4-theme",
    },
];

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add(COLOR_THEMES.slice(-1)[0]["css_class"]);
}, { once: true });
