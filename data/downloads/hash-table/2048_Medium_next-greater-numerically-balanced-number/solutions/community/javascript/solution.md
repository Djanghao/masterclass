# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/4895604/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/4895604/)

---

# Code
```
var nextBeautifulNumber = function (n) {
    while (!isBalancedNumber(++n));
    function isBalancedNumber(num) {
        let counts = Array(10).fill(0);
        while (num) {
            let mantissa = num % 10;
            if (!mantissa) return false;
            counts[mantissa] += 1;
            num = ~~(num / 10);
        }
        return counts.every((count, index) => !count || count === index);
    }
    return n;
};
```