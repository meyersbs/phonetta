/**** WINDOW RESIZING *************************************************************************************************/
//$(window).resize( function() {
//    var zoom = ( window.outerWidth - 10 ) / window.innerWidth;
//    if(zoom > 0.99 && zoom < 1.01) {}
//    else {
//        alert("This site has not be optimized for mobile browsers (or resizing in general). For best results, do not zoom in or out.");
//    }
//});

/**** KEYBOARD LOGISTICS **********************************************************************************************/
function getCursorStart() { return $('#parchment').prop("selectionStart"); }
function getCursorEnd() { return $('#parchment').prop("selectionEnd"); }
function getSelection() {
    if(getCursorStart() == getCursorEnd()) {

    } else {
        return $('#parchment').prop("selectionStart");
    }
}
function insertChar(char, offset, count) {
    if(offset == null) { offset = 1; }
    console.log(offset);
    var t = $('#parchment');
    var before = t.val().substring(0, t.prop("selectionStart"));
    var goto = t.prop("selectionStart");
    var selection = t.val().substring(goto, t.prop("selectionEnd"));
    var after = t.val().substring(t.prop("selectionEnd"), t.val().length);
    console.log(before);
    console.log(t.val().substring(0, t.prop("selectionStart")));
    console.log(selection);
    console.log(after);
    console.log(goto + Math.abs(offset));
    if(offset != 1) {
        t.val(before.slice(0, offset) + char + after);
        goto = goto + Math.abs(offset) - count + (count -1);
    } else {
        t.val(before + char + after);
        goto = goto + 1;
    }
    document.getElementById('parchment').selectionStart = goto;
    document.getElementById('parchment').selectionEnd = goto;
}

/**** BUTTONS *********************************************************************************************************/
$(".keyboard-button, .keyboard-button-md, .keyboard-button-lg").each(function(index, obj) {
    obj.addEventListener('click', function() {
        $("#parchment").val($("#parchment").val() + obj.getAttribute("data-unicode"));
        $("#parchment").focus();
    }, false);
});

//$("#copy").each(function(index, obj) {
//   obj.addEventListener('click', function() {
//       $("#parchment").select();
//       document.execCommand('copy');
//       $("#parchment").blur();
//       $("#parchment").focus();
//   }, false);
//});

$("#shortcut-toggle").each(function(index, obj) {
    obj.addEventListener('click', function() {
        if(obj.innerHTML == '<i class="fa fa-check-circle"></i>&nbsp;shortcuts: <span style="color: lime">ON</span>') {
            obj.innerHTML = '<i class="fa fa-ban"></i>&nbsp;shortcuts: <span style="color: #ff3399">OFF</span>';
            listener.stop_listening();
        } else {
            obj.innerHTML = '<i class="fa fa-check-circle"></i>&nbsp;shortcuts: <span style="color: lime">ON</span>';
            listener.listen();
        }
    }, false);
});

/**** POPUPS **********************************************************************************************************/
//$(".keyboard-button, .keyboard-button-md, .keyboard-button-lg").popover({
//    placement: 'auto', container: 'body', html: true, trigger: 'hover',
//    template: '<div class="popover"><div class="popover-inner"><div class="popover-title"></div><div class="popover-content"><p></p></div></div></div>',
//    content: function () { return $(this).next('.popover-content').html(); }
//});

/**** KEYBOARD SHORTCUTS **********************************************************************************************/
var listener = new window.keypress.Listener();

listener.simple_combo("ctrl i", function() {
    insertChar('i', -1);
});

/**** A-BASED *****/
listener.counting_combo("alt a", function(e, count) {
    if(count%6 == 1) {
        if(count != 1) { insertChar($("#a1").attr("data-unicode"), -1, 1); }
        else { insertChar($("#a1").attr("data-unicode"), 1, 1); }
    }
    else if(count%6 == 2) {insertChar($("#a2").attr("data-unicode"), -1, 2);}
    else if(count%6 == 3) {insertChar($("#a3").attr("data-unicode"), -1, 3);}
    else if(count%6 == 4) {insertChar($("#a4").attr("data-unicode"), -1, 4);}
    else if(count%6 == 5) {insertChar($("#a5").attr("data-unicode"), -1, 5);}
    else if(count%6 == 0) {insertChar($("#a6").attr("data-unicode"), -1, 6);}
});
/**** B-BASED *****/
listener.counting_combo("alt b", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#b1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#b1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#b2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#b3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#b4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** C-BASED *****/
listener.counting_combo("alt c", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#c1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#c1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#c2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#c3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** D-BASED *****/
listener.counting_combo("alt d", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#d1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#d1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#d2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#d3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#d4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#d5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** E-BASED *****/
listener.counting_combo("alt e", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#e1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#e1").attr("data-unicode")); }
    }
    else if(count%9 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e2").attr("data-unicode"));}
    else if(count%9 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e3").attr("data-unicode"));}
    else if(count%9 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e4").attr("data-unicode"));}
    else if(count%9 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e5").attr("data-unicode"));}
    else if(count%9 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e6").attr("data-unicode"));}
    else if(count%9 == 7) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e7").attr("data-unicode"));}
    else if(count%9 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e8").attr("data-unicode"));}
    else if(count%9 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#e9").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** F-BASED *****/
listener.counting_combo("alt f", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#f1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#f1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#f2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#f3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** G-BASED *****/
listener.counting_combo("alt g", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#g1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#g1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#g2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#g3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#g4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#g5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** H-BASED *****/
listener.counting_combo("alt h", function(e, count) {
    if(count%7 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#h1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#h1").attr("data-unicode")); }
    }
    else if(count%7 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h2").attr("data-unicode"));}
    else if(count%7 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h3").attr("data-unicode"));}
    else if(count%7 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h4").attr("data-unicode"));}
    else if(count%7 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h5").attr("data-unicode"));}
    else if(count%7 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h6").attr("data-unicode"));}
    else if(count%7 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#h7").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** I-BASED *****/
listener.counting_combo("alt i", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#i1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#i1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#i2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#i3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#i4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#i5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** J-BASED *****/
listener.counting_combo("alt j", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#j1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#j1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#j2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#j3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#j4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#j5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** K-BASED *****/
listener.counting_combo("alt k", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#k1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#k1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#k2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#k3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#k4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** L-BASED *****/
listener.counting_combo("alt l", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#l1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#l1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#l2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#l3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#l4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** M-BASED *****/
listener.counting_combo("alt m", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#m1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#m1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#m2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#m3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** N-BASED *****/
listener.counting_combo("alt n", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#n1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#n1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#n2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#n3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#n4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#n5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** O-BASED *****/
listener.counting_combo("alt o", function(e, count) {
    if(count%6 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#o1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#o1").attr("data-unicode")); }
    }
    else if(count%6 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#o2").attr("data-unicode"));}
    else if(count%6 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#o3").attr("data-unicode"));}
    else if(count%6 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#o4").attr("data-unicode"));}
    else if(count%6 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#o5").attr("data-unicode"));}
    else if(count%6 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#o6").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** P-BASED *****/
listener.counting_combo("alt p", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#p1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#p1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#p2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#p3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#p4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** R-BASED *****/
listener.counting_combo("alt r", function(e, count) {
    if(count%7 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#r1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#r1").attr("data-unicode")); }
    }
    else if(count%7 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r2").attr("data-unicode"));}
    else if(count%7 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r3").attr("data-unicode"));}
    else if(count%7 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r4").attr("data-unicode"));}
    else if(count%7 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r5").attr("data-unicode"));}
    else if(count%7 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r6").attr("data-unicode"));}
    else if(count%7 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#r7").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** S-BASED *****/
listener.counting_combo("alt s", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#s1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#s1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#s2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#s3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** T-BASED *****/
listener.counting_combo("alt t", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#t1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#t1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#t2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#t3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** U-BASED *****/
listener.counting_combo("alt u", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#u1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#u1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#u2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#u3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#u4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** V-BASED *****/
listener.counting_combo("alt v", function(e, count) {
    if(count%2 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#v1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#v1").attr("data-unicode")); }
    }
    else if(count%2 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#v2").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** W-BASED *****/
listener.counting_combo("alt w", function(e, count) {
    if(count%3 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#w1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#w1").attr("data-unicode")); }
    }
    else if(count%3 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#w2").attr("data-unicode"));}
    else if(count%3 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#w3").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** Z-BASED *****/
listener.counting_combo("alt z", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#z1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#z1").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#z2").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#z3").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#z4").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** CLICKS *****/
listener.counting_combo("alt q", function(e, count) {
    if(count%5 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#q1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#q1").attr("data-unicode")); }
    }
    else if(count%5 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#q2").attr("data-unicode"));}
    else if(count%5 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#q3").attr("data-unicode"));}
    else if(count%5 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#q4").attr("data-unicode"));}
    else if(count%5 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#q5").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** APOSTROPHE-BASED *****/
listener.simple_combo("alt '", function() {
    $("#parchment").val($("#parchment").val() + $("#ej").attr("data-unicode"));
});
/**** UP-ARROW-BASED *****/
listener.counting_combo("alt up", function(e, count) {
    if(count%4 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#con11").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#con11").attr("data-unicode")); }
    }
    else if(count%4 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con12").attr("data-unicode"));}
    else if(count%4 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con13").attr("data-unicode"));}
    else if(count%4 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con14").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** DOWN-ARROW-BASED *****/
listener.counting_combo("alt down", function(e, count) {
    if(count%10 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#sup1").attr("data-unicode")); }
    }
    else if(count%11 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup2").attr("data-unicode"));}
    else if(count%11 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup3").attr("data-unicode"));}
    else if(count%11 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup4").attr("data-unicode"));}
    else if(count%11 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup5").attr("data-unicode"));}
    else if(count%11 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup6").attr("data-unicode"));}
    else if(count%11 == 7) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup7").attr("data-unicode"));}
    else if(count%11 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup8").attr("data-unicode"));}
    else if(count%11 == 9) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup9").attr("data-unicode"));}
    else if(count%11 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#sup10").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** COMMA-BASED *****/
listener.counting_combo("alt ,", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#dia1").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia2").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia3").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia4").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia5").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia6").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia7").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia8").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia9").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** PERIOD-BASED *****/
listener.counting_combo("alt .", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -3) + $("#dia10").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#dia10").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia11").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia12").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia13").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia14").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia15").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia16").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia17").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia18").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** 1-BASED *****/
listener.counting_combo("alt 1", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -3) + $("#dia19").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#dia19").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia20").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia21").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia22").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia23").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia24").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia25").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia26").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia27").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** 2-BASED *****/
listener.counting_combo("alt 2", function(e, count) {
    if(count%9 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -3) + $("#dia28").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#dia28").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia29").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia30").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia31").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia32").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia33").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia34").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#dia35").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#dia36").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** 3-BASED *****/
listener.counting_combo("alt 3", function(e, count) {
    if(count%10 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -3) + $("#ton1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#ton1").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#ton2").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#ton3").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#ton4").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#ton5").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#ton6").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#ton7").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#ton8").attr("data-unicode"));}
    else if(count%10 == 9) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#ton9").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#ton10").attr("data-unicode"));}
    $("#parchment").focus();
});
/**** 4-BASED *****/
listener.counting_combo("alt 4", function(e, count) {
    if(count%10 == 1) {
        if(count != 1) { $("#parchment").val($("#parchment").val().slice(0, -3) + $("#con1").attr("data-unicode")); }
        else { $("#parchment").val($("#parchment").val() + $("#con1").attr("data-unicode")); }
    }
    else if(count%10 == 2) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con2").attr("data-unicode"));}
    else if(count%10 == 3) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#con3").attr("data-unicode"));}
    else if(count%10 == 4) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con4").attr("data-unicode"));}
    else if(count%10 == 5) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#con5").attr("data-unicode"));}
    else if(count%10 == 6) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con6").attr("data-unicode"));}
    else if(count%10 == 7) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#con7").attr("data-unicode"));}
    else if(count%10 == 8) {$("#parchment").val($("#parchment").val().slice(0, -1) + $("#con8").attr("data-unicode"));}
    else if(count%10 == 9) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#con9").attr("data-unicode"));}
    else if(count%10 == 0) {$("#parchment").val($("#parchment").val().slice(0, -2) + $("#con10").attr("data-unicode"));}
    $("#parchment").focus();
});
