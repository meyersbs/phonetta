// document.getElementById('voiceless_bilabial_plosive').addEventListener('click', function() {
//     $("#parchment").val($("#parchment").val() + "\u0070");
// }, false);
// document.getElementById('voiced_bilabial_plosive').addEventListener('click', function() {
//     $("#parchment").val($("#parchment").val() + "\u0062");
// }, false);

function strToUTF8(str) {
    return String.fromCharCode(str,16);
}

function toUnicode(theString) {
    var unicodeString = '';
    for (var i=0; i < theString.length; i++) {
        var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
        while (theUnicode.length < 4) {
            theUnicode = '0' + theUnicode;
        }
        theUnicode = '\\u' + theUnicode;
        unicodeString += theUnicode;
    }
    return unicodeString;
}

$('.keyboard-button').each(function(index, obj) {
    obj.addEventListener('click', function() {
        $("#parchment").val($("#parchment").val() + obj.getAttribute("data-unicode"));
        $("#parchment").focus();
    }, false);
});