# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/4617483/](https://leetcode.com/problems/closest-divisors/solutions/4617483/)

---

# Code
```
var closestDivisors = function (num) {
    let x1 = highestDivisor(num + 1);
    let x2 = highestDivisor(num + 2);
    let y1 = (num + 1) / x1;
    let y2 = (num + 2) / x2;
    return Math.abs(x1 - y1) < Math.abs(x2 - y2) ? [x1, y1] : [x2, y2];
};

function highestDivisor(num) {
    let squareRoot = ~~(Math.sqrt(num));
    while (num % squareRoot !== 0 && squareRoot > 1) {
        squareRoot--;
    }
    return squareRoot;
}
```