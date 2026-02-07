function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

function countdown(n) {
    console.log(n)
    if (n < 1) return;
    countdown(n - 1)
}

function sumArray(arr) {

    function sum(arr, i) {
        
        if (i === 0) return arr[i]
        return arr[i] + sum(arr, i - 1)
    }

    return sum(arr, arr.length - 1)
}

function reverse(str) {
    let revstr = []

    function rev(str, i) {
        if (i === 0) return str[i];

        revstr.unshift(rev(str, i - 1))
        return str[i]
    }
    revstr.unshift(rev(str, str.length - 1));
    return revstr.join('')
}

console.log(reverse("She sells sea shells"))
