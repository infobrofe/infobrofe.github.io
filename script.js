let points = 0;

document.querySelector("#like").onclick = function () {
    alert("Ура! Вы поставили лайк!")
    points = points + 1;
    alert(points + " Лайк поставлена")
}

document.querySelector("#subscribe"). onclick = function () {
    alert("Ура! Вы подписаны на INFOBROFE!")
    points = points + 1;
    alert(points + " Подписаны");
}
