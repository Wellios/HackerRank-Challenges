// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const noPairs = ar;
    let pairs = 0;

    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < noPairs.length; j++) {
            if (ar[i] === noPairs[j]) {
                noPairs.splice(j, 1);
                pairs++
                break;
            }
        }
    }

    return pairs;
}

function main() {
    const n = 10;
    const ar = ['1', '1', '3', '1', '2', '3', '3', '3', '3', '1'];

    let result = sockMerchant(n, ar);

    console.log({ result })
}

main()
