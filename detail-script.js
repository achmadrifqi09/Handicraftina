function getLink(btn) {
    let link = document.location.href;
    let facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
    let twitterUrl = 'https://twitter.com/share?url=';


    if (btn == 'facebook') {
        let href = document.getElementById('facebook');
        href.setAttribute('href', facebookUrl + link);
    } else {
        let href = document.getElementById('twitter');
        href.setAttribute('href', twitterUrl + link);
    }
}