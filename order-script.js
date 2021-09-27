document.getElementById('loading').style.display = "none";
document.getElementById('loading-text').style.display = "none";

function loading() {
    document.getElementById('loading').style.display = "inline-block";
    document.getElementById('loading-text').style.display = "inline-block";

    document.getElementById('loading').style.color = "#fff";
    document.getElementById('loading-text').style.color = "#fff";

    document.getElementById('submit-text').style.display = "none";
    document.getElementById('submit').disabled = true;

    let toast = document.getElementById('alert');

    setTimeout(function () {
        document.getElementById('submit-text').style.display = "inline";
        document.getElementById('loading').style.display = "none";
        document.getElementById('loading-text').style.display = "none";
        document.getElementById('submit').disabled = false;
        document.getElementById('submit').style.color = "#fff"
        toast.classList.toggle('active');
        toastRemove();
    }, 3000);


}

function toastRemove() {
    let toast = document.getElementById('alert');
    setTimeout(function () {
        toast.classList.remove('active');
    }, 5500);
}