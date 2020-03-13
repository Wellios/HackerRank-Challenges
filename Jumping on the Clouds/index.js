// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let j = 0;

    for (var i = 0; i < c.length - 1; i++) {
        if (c[i + 2] == 0) {
            i++;
        }

        j++;
    }

    return j;
}

function main() {
    const n = 7;

    const c = [0, 0, 1, 0, 0, 1, 0];

    let result = jumpingOnClouds(c);

    console.log({ result })
}

main();