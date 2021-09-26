function getLink(btn) {
    let link = document.location.href;
    let facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
    let twitterUrl = 'https://twitter.com/share?url=';
    let mailUrl = "mailto:" +
        "?subject=Hi I want to share the product link from Handicraftina" +
        "&body=Here is the link" + link


    if (btn == 'facebook') {
        let href = document.getElementById('facebook');
        href.setAttribute('href', facebookUrl + link);
    } else if (btn == 'twitter') {
        let href = document.getElementById('twitter');
        href.setAttribute('href', twitterUrl + link);
    } else {
        let href = document.getElementById('mail');
        href.setAttribute('href', mailUrl);
    }
}