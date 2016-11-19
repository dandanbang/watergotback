//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
window.onload = function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // // returns all infos as an object
    // var infos = controller.info();

    // // build scene
    // // var scene = new ScrollMagic.Scene().addTo(controller);
    // var viewPort = controller.info("size");
    var house = document.getElementById("house"),
        // house2 = document.getElementById("house2"),
        tractor1 = document.getElementById("tractor1"),
        tractor2 = document.getElementById("tractor2"),
        tractor3 = document.getElementById("tractor3"),
        tractor4 = document.getElementById("tractor4");

    // TweenLite.to([red, yellow, green], 1, {scale:0.2, opacity:0.3});
    // TweenLite.to([house, tractor1, tractor2, tractor3, tractor4], 1.75, {left:"+=450px"});

//     scene.on("#demo", function (event) {
//     var clientRect = trg.getBoundingClientRect();
//     var top = Math.floor(clientRect.top) - clientRect.height;
//     var visible = top - infos.size;
    
//     console.log("Scene updated.", top - infos.size );
    
//     if(visible <= 0) {
//         TweenLite.to([house, tractor1, tractor2, tractor3, tractor4], 1.75, {left:"+=450px"});
//     }
// });
    var timeline = new TimelineMax();
    var tween0 = TweenMax.from(house, 1, {left:"200px", opacity:0});
    var tween1 = TweenMax.from(tractor1, 1, {left:"-200px", opacity:0, delay:-1});
    var tween2 = TweenMax.from(tractor2, 1, {left:"-200px", opacity:0, delay:-1});
    var tween3 = TweenMax.from(tractor3, 1, {left:"-200px", opacity:0, delay:-1});
    var tween4 = TweenMax.from(tractor4, 1, {left:"-200px", opacity:0, delay:-1});
        timeline
            .add(tween0)
            .add(tween1)
            .add(tween2)
            .add(tween3)
            .add(tween4);
    var scene = new ScrollMagic.Scene({
                    triggerElement: "#demo"
                })
                .setTween(timeline) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
                    triggerElement: "#bridge"
                })
                .setTween(".bridge-a", 1, {top:"+=25px", delay:1}) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);

// add multiple tweens, wrapped in a timeline.
    // var timeline = new TimelineMax();
    // var tween1 = TweenMax.to("#house", 1.75, {left:"+=450px"});
    // var tween2 = TweenMax.to("#tractor1", 1.75, {left:"+=450px"});
    // timeline
    //         .add(tween1)
    //         .add(tween2);
    // scene.setTween(timeline);

}





