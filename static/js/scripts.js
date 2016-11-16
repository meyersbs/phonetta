/**** BUTTONS *********************************************************************************************************/
$('.keyboard-button').each(function(index, obj) {
    obj.addEventListener('click', function() {
        $("#parchment").val($("#parchment").val() + obj.getAttribute("data-unicode"));
        $("#parchment").focus();
    }, false);
});

/**** KEYBOARD SHORTCUTS **********************************************************************************************/
var listener = new window.keypress.Listener();

/**** A-BASED *****/
listener.counting_combo("alt a", function(e, count) {
    if(count%6 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#a1").attr("data-unicode")); }
    }
    else if(count%6 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a2").attr("data-unicode"));
    }
    else if(count%6 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a3").attr("data-unicode"));
    }
    else if(count%6 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a4").attr("data-unicode"));
    }
    else if(count%6 == 5) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a5").attr("data-unicode"));
    }
    else if(count%6 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#a6").attr("data-unicode"));
    }
});
/**** B-BASED *****/
listener.counting_combo("alt b", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#b1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#b1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#b2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#b3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#b4").attr("data-unicode"));
    }
});
/**** C-BASED *****/
listener.counting_combo("alt c", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#c1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#c1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#c2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#c3").attr("data-unicode"));
    }
});
/**** D-BASED *****/
listener.counting_combo("alt d", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#d1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d5").attr("data-unicode"));
    }
});
/**** E-BASED *****/
listener.counting_combo("alt e", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#e1").attr("data-unicode")); }
    }
    else if(count%9 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e2").attr("data-unicode"));
    }
    else if(count%9 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e3").attr("data-unicode"));
    }
    else if(count%9 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e4").attr("data-unicode"));
    }
    else if(count%9 == 5) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e5").attr("data-unicode"));
    }
    else if(count%9 == 6) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e6").attr("data-unicode"));
    }
    else if(count%9 == 7) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e7").attr("data-unicode"));
    }
    else if(count%9 == 8) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e8").attr("data-unicode"));
    }
    else if(count%9 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e9").attr("data-unicode"));
    }
});
/**** F-BASED *****/
listener.counting_combo("alt f", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#f1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#f1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#f2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#f3").attr("data-unicode"));
    }
});
/**** G-BASED *****/
listener.counting_combo("alt g", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#g1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g5").attr("data-unicode"));
    }
});
/**** H-BASED *****/
listener.counting_combo("alt h", function(e, count) {
    if(count%7 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#h1").attr("data-unicode")); }
    }
    else if(count%7 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h2").attr("data-unicode"));
    }
    else if(count%7 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h3").attr("data-unicode"));
    }
    else if(count%7 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h4").attr("data-unicode"));
    }
    else if(count%7 == 5) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h5").attr("data-unicode"));
    }
    else if(count%7 == 6) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h6").attr("data-unicode"));
    }
    else if(count%7 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h7").attr("data-unicode"));
    }
});
/**** I-BASED *****/
listener.counting_combo("alt i", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#i1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i5").attr("data-unicode"));
    }
});
/**** J-BASED *****/
listener.counting_combo("alt j", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#j1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j5").attr("data-unicode"));
    }
});
/**** K-BASED *****/
listener.counting_combo("alt k", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#k1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#k1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#k2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#k3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#k4").attr("data-unicode"));
    }
});
/**** L-BASED *****/
listener.counting_combo("alt l", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#l1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#l1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#l2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#l3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#l4").attr("data-unicode"));
    }
});
/**** M-BASED *****/
listener.counting_combo("alt m", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#m1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#m1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#m2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#m3").attr("data-unicode"));
    }
});
/**** N-BASED *****/
listener.counting_combo("alt n", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#n1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n5").attr("data-unicode"));
    }
});
/**** O-BASED *****/
listener.counting_combo("alt o", function(e, count) {
    if(count%6 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#o1").attr("data-unicode")); }
    }
    else if(count%6 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o2").attr("data-unicode"));
    }
    else if(count%6 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o3").attr("data-unicode"));
    }
    else if(count%6 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o4").attr("data-unicode"));
    }
    else if(count%6 == 5) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o5").attr("data-unicode"));
    }
    else if(count%6 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o6").attr("data-unicode"));
    }
});
/**** P-BASED *****/
listener.counting_combo("alt p", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#p1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#p1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#p2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#p3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#p4").attr("data-unicode"));
    }
});
/**** R-BASED *****/
listener.counting_combo("alt r", function(e, count) {
    if(count%7 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#r1").attr("data-unicode")); }
    }
    else if(count%7 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r2").attr("data-unicode"));
    }
    else if(count%7 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r3").attr("data-unicode"));
    }
    else if(count%7 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r4").attr("data-unicode"));
    }
    else if(count%7 == 5) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r5").attr("data-unicode"));
    }
    else if(count%7 == 6) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r6").attr("data-unicode"));
    }
    else if(count%7 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r7").attr("data-unicode"));
    }
});
/**** S-BASED *****/
listener.counting_combo("alt s", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#s1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#s1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#s2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#s3").attr("data-unicode"));
    }
});
/**** T-BASED *****/
listener.counting_combo("alt t", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#t1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#t1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#t2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#t3").attr("data-unicode"));
    }
});
/**** U-BASED *****/
listener.counting_combo("alt u", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#u1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#u1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#u2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#u3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#u4").attr("data-unicode"));
    }
});
/**** V-BASED *****/
listener.counting_combo("alt v", function(e, count) {
    if(count%2 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#v1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#v1").attr("data-unicode")); }
    }
    else if(count%2 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#v2").attr("data-unicode"));
    }
});
/**** W-BASED *****/
listener.counting_combo("alt w", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#w1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#w1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#w2").attr("data-unicode"));
    }
    else if(count%3 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#w3").attr("data-unicode"));
    }
});
/**** Z-BASED *****/
listener.counting_combo("alt z", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#z1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#z1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#z2").attr("data-unicode"));
    }
    else if(count%4 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#z3").attr("data-unicode"));
    }
    else if(count%4 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#z4").attr("data-unicode"));
    }
});
/**** CLICKS *****/
listener.counting_combo("alt q", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#click1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#click1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#click2").attr("data-unicode"));
    }
    else if(count%5 == 3) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#click3").attr("data-unicode"));
    }
    else if(count%5 == 4) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#click4").attr("data-unicode"));
    }
    else if(count%5 == 0) {
        $("#parchment").val($("#parchment").val().slice(0, -1) + $("#click5").attr("data-unicode"));
    }
});
