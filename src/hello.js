window.addEventListener('load', function() {
    ['World', 'Szabi', 'Peti'].forEach(greetings);
});

function greetings(name) {
    var p=document.createElement('P');
    p.innerText = 'Hello ' + name + '!';
    document.body.appendChild(p);
}