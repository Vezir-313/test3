var salamatArr = ['eng', 'aze', 'aze', 'aze', 'aze', 'aze', 'aze', 'ru'];

function change() {
    var ar = salamatArr[0];
    // salamatArr[2] = salamatArr[1];
    // salamatArr[1] = salamatArr[0];
    // salamatArr[0] = ar;
    for (var i = 0; i < salamatArr.length - 1; i++) {
        salamatArr[i] = salamatArr[i + 1];
    }
    salamatArr[salamatArr.length - 1] = ar;
}
