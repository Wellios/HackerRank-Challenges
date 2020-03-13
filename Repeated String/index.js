/**
 * 
 * @param {kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm} s
 * @param {736778906400} n 
 * @param {51574523448} result
 */

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var a = 0;
    var b = 0;

    var r = n / s.length;
    var d = n % s.length;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == 'a') {

            if (d > i) {
                b++;
            }

            a++;
        }
    }

    a *= parseInt(r);
    a += b;

    return a;
}

function main() {
    const s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'

    const n = 736778906400

    let result = repeatedString(s, n);

    console.log({ result });
}

main();
