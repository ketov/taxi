$(document).ready(function () {
    $("#date").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
    $("#time").mask("99:99", {placeholder: "чч.сс" });
    $("#date-back").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
    $("#time-back").mask("99:99", {placeholder: "чч.сс" });
    $("#phone").mask("+7 (999) 999-99-99");
});