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
        return getCursorEnd();
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
function updateInfo(key) {
  key = key.prev();
  if(key.attr("data-audio") != "") {
    $("#info").html(
        '<span>' + key.attr("data-title") + '</span>' +
        '<br><span style="font-size: 60px;">' + key.attr("data-unicode") + '</span>' +
        '<br><span>HTML: &amp;' + key.attr("data-html") + '</span>' +
        '<br><span>UTF-16: ' + key.attr("data-utf-16") + '</span>' +
        '<br><span>Shortcut: ' + key.attr("data-shortcut") + '</span>' +
        '<audio class="phonaudio" src="' + key.attr("data-audio") + '" title="Wikimedia Commons Audio" controls> Your browser does not support the <code>audio</code> element.</audio>'
    );
    Picobel();
  } else {
    $("#info").html(
        '<span>' + key.attr("data-title") + '</span>' +
        '<br><span style="font-size: 60px;">' + key.attr("data-unicode") + '</span>' +
        '<br><span>HTML: &amp;' + key.attr("data-html") + '</span>' +
        '<br><span>UTF-16: ' + key.attr("data-utf-16") + '</span>' +
        '<br><span>Shortcut: ' + key.attr("data-shortcut") + '</span>'
    );
  }
}
function keyLogic(key, offset, count) {
    insertChar(key.attr("data-unicode"), offset, count);
    key.addClass("key-pressed");
    updateInfo(key);
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
    $(".key-normal").removeClass("key-pressed");
    if(count%6 == 1) {
        var key = $("#a1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%6 == 2) { var key = $("#a2"); keyLogic(key, -1, 2); }
    else if(count%6 == 3) { var key = $("#a3"); keyLogic(key, -1, 3); }
    else if(count%6 == 4) { var key = $("#a4"); keyLogic(key, -1, 4); }
    else if(count%6 == 5) { var key = $("#a5"); keyLogic(key, -1, 5); }
    else if(count%6 == 0) { var key = $("#a6"); keyLogic(key, -1, 6); }
});
/**** B-BASED *****/
listener.counting_combo("alt b", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#b1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#b2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#b3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#b4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** C-BASED *****/
listener.counting_combo("alt c", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#c1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#c2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#c3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** D-BASED *****/
listener.counting_combo("alt d", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#d1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#d2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#d3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#d4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#d5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** E-BASED *****/
listener.counting_combo("alt e", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%9 == 1) {
        var key = $("#e1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%9 == 2) { var key = $("#e2"); keyLogic(key, -1, 2); }
    else if(count%9 == 3) { var key = $("#e3"); keyLogic(key, -1, 3); }
    else if(count%9 == 4) { var key = $("#e4"); keyLogic(key, -1, 4); }
    else if(count%9 == 5) { var key = $("#e5"); keyLogic(key, -1, 5); }
    else if(count%9 == 6) { var key = $("#e6"); keyLogic(key, -1, 6); }
    else if(count%9 == 7) { var key = $("#e7"); keyLogic(key, -1, 7); }
    else if(count%9 == 8) { var key = $("#e8"); keyLogic(key, -1, 8); }
    else if(count%9 == 0) { var key = $("#e9"); keyLogic(key, -1, 9); }
    $("#parchment").focus();
});
/**** F-BASED *****/
listener.counting_combo("alt f", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#f1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#f2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#f3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** G-BASED *****/
listener.counting_combo("alt g", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#g1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#g2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#g3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#g4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#g5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** H-BASED *****/
listener.counting_combo("alt h", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%7 == 1) {
        var key = $("#h1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%7 == 2) { var key = $("#h2"); keyLogic(key, -1, 2); }
    else if(count%7 == 3) { var key = $("#h3"); keyLogic(key, -1, 3);}
    else if(count%7 == 4) { var key = $("#h4"); keyLogic(key, -1, 4); }
    else if(count%7 == 5) { var key = $("#h5"); keyLogic(key, -1, 5); }
    else if(count%7 == 6) { var key = $("#h6"); keyLogic(key, -1, 6); }
    else if(count%7 == 0) { var key = $("#h7"); keyLogic(key, -1, 7); }
    $("#parchment").focus();
});
/**** I-BASED *****/
listener.counting_combo("alt i", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#i1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#i2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#i3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#i4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#i5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** J-BASED *****/
listener.counting_combo("alt j", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#j1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#j2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#j3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#j4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#j5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** K-BASED *****/
listener.counting_combo("alt k", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#k1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#k2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#k3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#k4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** L-BASED *****/
listener.counting_combo("alt l", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#l1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#l2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#l3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#l4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** M-BASED *****/
listener.counting_combo("alt m", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#m1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#m2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#m3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** N-BASED *****/
listener.counting_combo("alt n", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#n1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#n2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#n3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#n4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#n5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** O-BASED *****/
listener.counting_combo("alt o", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%6 == 1) {
        var key = $("#o1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%6 == 2) { var key = $("#o2"); keyLogic(key, -1, 2); }
    else if(count%6 == 3) { var key = $("#o3"); keyLogic(key, -1, 3); }
    else if(count%6 == 4) { var key = $("#o4"); keyLogic(key, -1, 4); }
    else if(count%6 == 5) { var key = $("#o5"); keyLogic(key, -1, 5); }
    else if(count%6 == 0) { var key = $("#o6"); keyLogic(key, -1, 6); }
    $("#parchment").focus();
});
/**** P-BASED *****/
listener.counting_combo("alt p", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#p1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#p2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#p3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#p4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** R-BASED *****/
listener.counting_combo("alt r", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%7 == 1) {
        var key = $("#r1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%7 == 2) { var key = $("#r2"); keyLogic(key, -1, 2); }
    else if(count%7 == 3) { var key = $("#r3"); keyLogic(key, -1, 3); }
    else if(count%7 == 4) { var key = $("#r4"); keyLogic(key, -1, 4); }
    else if(count%7 == 5) { var key = $("#r5"); keyLogic(key, -1, 5); }
    else if(count%7 == 6) { var key = $("#r6"); keyLogic(key, -1, 6); }
    else if(count%7 == 0) { var key = $("#r7"); keyLogic(key, -1, 7); }
    $("#parchment").focus();
});
/**** S-BASED *****/
listener.counting_combo("alt s", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#s1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#s2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#s3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** T-BASED *****/
listener.counting_combo("alt t", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#t1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#t2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#t3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** U-BASED *****/
listener.counting_combo("alt u", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#u1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#u2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#u3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#u4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** V-BASED *****/
listener.counting_combo("alt v", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%2 == 1) {
        var key = $("#v1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%2 == 0) { var key = $("#v2"); keyLogic(key, -1, 2); }
    $("#parchment").focus();
});
/**** W-BASED *****/
listener.counting_combo("alt w", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%3 == 1) {
        var key = $("#w1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%3 == 2) { var key = $("#w2"); keyLogic(key, -1, 2); }
    else if(count%3 == 0) { var key = $("#w3"); keyLogic(key, -1, 3); }
    $("#parchment").focus();
});
/**** Z-BASED *****/
listener.counting_combo("alt z", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#z1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#z2"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#z3"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#z4"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** CLICKS *****/
listener.counting_combo("alt q", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%5 == 1) {
        var key = $("#q1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%5 == 2) { var key = $("#q2"); keyLogic(key, -1, 2); }
    else if(count%5 == 3) { var key = $("#q3"); keyLogic(key, -1, 3); }
    else if(count%5 == 4) { var key = $("#q4"); keyLogic(key, -1, 4); }
    else if(count%5 == 0) { var key = $("#q5"); keyLogic(key, -1, 5); }
    $("#parchment").focus();
});
/**** APOSTROPHE-BASED *****/
listener.simple_combo("alt '", function() {
    $(".key-normal").removeClass("key-pressed");
    var key = $("#ej");
    keyLogic(key, 1, 1);
});
/**** UP-ARROW-BASED *****/
listener.counting_combo("alt up", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%4 == 1) {
        var key = $("#con11");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%4 == 2) { var key = $("#con12"); keyLogic(key, -1, 2); }
    else if(count%4 == 3) { var key = $("#con13"); keyLogic(key, -1, 3); }
    else if(count%4 == 0) { var key = $("#con14"); keyLogic(key, -1, 4); }
    $("#parchment").focus();
});
/**** DOWN-ARROW-BASED *****/
listener.counting_combo("alt down", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%10 == 1) {
        var key = $("#sup1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%10 == 2) { var key = $("#sup2"); keyLogic(key, -1, 2); }
    else if(count%10 == 3) { var key = $("#sup3"); keyLogic(key, -1, 3); }
    else if(count%10 == 4) { var key = $("#sup4"); keyLogic(key, -1, 4); }
    else if(count%10 == 5) { var key = $("#sup5"); keyLogic(key, -1, 5); }
    else if(count%10 == 6) { var key = $("#sup6"); keyLogic(key, -1, 6); }
    else if(count%10 == 7) { var key = $("#sup7"); keyLogic(key, -1, 7); }
    else if(count%10 == 8) { var key = $("#sup8"); keyLogic(key, -1, 8); }
    else if(count%10 == 9) { var key = $("#sup9"); keyLogic(key, -1, 9); }
    else if(count%10 == 0) { var key = $("#sup10"); keyLogic(key, -1, 10); }
    $("#parchment").focus();
});
/**** COMMA-BASED *****/
listener.counting_combo("alt ,", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%9 == 1) {
        var key = $("#dia1");
        if(count != 1) { keyLogic(key, -1, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%9 == 2) { var key = $("#dia2"); keyLogic(key, -1, 2); }
    else if(count%9 == 3) { var key = $("#dia3"); keyLogic(key, -1, 3); }
    else if(count%9 == 4) { var key = $("#dia4"); keyLogic(key, -1, 4); }
    else if(count%9 == 5) { var key = $("#dia5"); keyLogic(key, -1, 5); }
    else if(count%9 == 6) { var key = $("#dia6"); keyLogic(key, -1, 6); }
    else if(count%9 == 7) { var key = $("#dia7"); keyLogic(key, -1, 7); }
    else if(count%9 == 8) { var key = $("#dia8"); keyLogic(key, -1, 8); }
    else if(count%9 == 0) { var key = $("#dia9"); keyLogic(key, -1, 9); }
    $("#parchment").focus();
});
/**** PERIOD-BASED *****/
listener.counting_combo("alt .", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%9 == 1) {
        var key = $("#dia10");
        if(count != 1) { keyLogic(key, -3, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%9 == 2) { var key = $("#dia11"); keyLogic(key, -1, 2); }
    else if(count%9 == 3) { var key = $("#dia12"); keyLogic(key, -2, 3); }
    else if(count%9 == 4) { var key = $("#dia13"); keyLogic(key, -1, 4); }
    else if(count%9 == 5) { var key = $("#dia14"); keyLogic(key, -2, 5); }
    else if(count%9 == 6) { var key = $("#dia15"); keyLogic(key, -1, 6); }
    else if(count%9 == 7) { var key = $("#dia16"); keyLogic(key, -2, 7); }
    else if(count%9 == 8) { var key = $("#dia17"); keyLogic(key, -1, 8); }
    else if(count%9 == 0) { var key = $("#dia18"); keyLogic(key, -2, 9); }
    $("#parchment").focus();
});
/**** 1-BASED *****/
listener.counting_combo("alt 1", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%9 == 1) {
        var key = $("#dia19");
        if(count != 1) { keyLogic(key, -3, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%9 == 2) { var key = $("#dia20"); keyLogic(key, -1, 2); }
    else if(count%9 == 3) { var key = $("#dia21"); keyLogic(key, -2, 3); }
    else if(count%9 == 4) { var key = $("#dia22"); keyLogic(key, -1, 4); }
    else if(count%9 == 5) { var key = $("#dia23"); keyLogic(key, -2, 5); }
    else if(count%9 == 6) { var key = $("#dia24"); keyLogic(key, -1, 6); }
    else if(count%9 == 7) { var key = $("#dia25"); keyLogic(key, -2, 7); }
    else if(count%9 == 8) { var key = $("#dia26"); keyLogic(key, -1, 8); }
    else if(count%9 == 0) { var key = $("#dia27"); keyLogic(key, -2, 9); }
    $("#parchment").focus();
});
/**** 2-BASED *****/
listener.counting_combo("alt 2", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%9 == 1) {
        var key = $("#dia28");
        if(count != 1) { keyLogic(key, -3, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%9 == 2) { var key = $("#dia29"); keyLogic(key, -1, 2); }
    else if(count%9 == 3) { var key = $("#dia30"); keyLogic(key, -2, 3); }
    else if(count%9 == 4) { var key = $("#dia31"); keyLogic(key, -1, 4); }
    else if(count%9 == 5) { var key = $("#dia32"); keyLogic(key, -2, 5); }
    else if(count%9 == 6) { var key = $("#dia33"); keyLogic(key, -1, 6); }
    else if(count%9 == 7) { var key = $("#dia34"); keyLogic(key, -2, 7); }
    else if(count%9 == 8) { var key = $("#dia35"); keyLogic(key, -1, 8); }
    else if(count%9 == 0) { var key = $("#dia36"); keyLogic(key, -2, 9); }
    $("#parchment").focus();
});
/**** 3-BASED *****/
listener.counting_combo("alt 3", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%10 == 1) {
        var key = $("#ton1");
        if(count != 1) { keyLogic(key, -3, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%10 == 2) { var key = $("#ton2"); keyLogic(key, -1, 2); }
    else if(count%10 == 3) { var key = $("#ton3"); keyLogic(key, -2, 3); }
    else if(count%10 == 4) { var key = $("#ton4"); keyLogic(key, -1, 4); }
    else if(count%10 == 5) { var key = $("#ton5"); keyLogic(key, -2, 5); }
    else if(count%10 == 6) { var key = $("#ton6"); keyLogic(key, -1, 6); }
    else if(count%10 == 7) { var key = $("#ton7"); keyLogic(key, -2, 7); }
    else if(count%10 == 8) { var key = $("#ton8"); keyLogic(key, -1, 8); }
    else if(count%10 == 9) { var key = $("#ton9"); keyLogic(key, -2, 9); }
    else if(count%10 == 0) { var key = $("#ton10"); keyLogic(key, -2, 10); }
    $("#parchment").focus();
});
/**** 4-BASED *****/
listener.counting_combo("alt 4", function(e, count) {
    $(".key-normal").removeClass("key-pressed");
    if(count%10 == 1) {
        var key = $("#con1");
        if(count != 1) { keyLogic(key, -3, 1); }
        else { keyLogic(key, 1, 1); }
    }
    else if(count%10 == 2) { var key = $("#con2"); keyLogic(key, -1, 2); }
    else if(count%10 == 3) { var key = $("#con3"); keyLogic(key, -2, 3); }
    else if(count%10 == 4) { var key = $("#con4"); keyLogic(key, -1, 4); }
    else if(count%10 == 5) { var key = $("#con5"); keyLogic(key, -2, 5); }
    else if(count%10 == 6) { var key = $("#con6"); keyLogic(key, -1, 6); }
    else if(count%10 == 7) { var key = $("#con7"); keyLogic(key, -2, 7); }
    else if(count%10 == 8) { var key = $("#con8"); keyLogic(key, -1, 8); }
    else if(count%10 == 9) { var key = $("#con9"); keyLogic(key, -2, 9); }
    else if(count%10 == 0) { var key = $("#con10"); keyLogic(key, -2, 10); }
    $("#parchment").focus();
});
