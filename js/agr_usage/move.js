//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
window.onload = function() {
    var house = document.getElementById("house"),
        // house2 = document.getElementById("house2"),
        tractor1 = document.getElementById("tractor1"),
        tractor2 = document.getElementById("tractor2"),
        tractor3 = document.getElementById("tractor3"),
        tractor4 = document.getElementById("tractor4");

    // TweenLite.to([red, yellow, green], 1, {scale:0.2, opacity:0.3});
    TweenLite.from([house, tractor1, tractor2, tractor3, tractor4], 1, {left:"-=200px"});
}
