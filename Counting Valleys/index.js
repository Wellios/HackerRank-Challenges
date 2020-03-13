/**
 * Another values
 *  12
    DDUUDDUDUUUD
    2
 */

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let nivel = 0;
    let valleys = 0;

    for (var i = 0; i < n; i++) {
        s[i] == "U" ? nivel++ : nivel--;

        if (s[i] == 'U' && nivel == 0) {
            valleys++;
        }
    }

    return valleys;
}

function main() {
    const n = 12;

    const s = ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"];

    let result = countingValleys(n, s);

    console.log({ result });
}

main()