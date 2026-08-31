# [Javascript] Math

**Author:** jialihan
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141743/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141743/)

---

**Referenced** the Idea from:
https://leetcode.com/problems/number-of-different-subsequences-gcds/discuss/1141309/Simple-explanation-or-O(n-*-sqrt-n)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
    var factor = new Array(200001).fill(0);
    for (var num of nums) {
        // get all factors for each num
        for (var x = 1; x * x <= num; x++) {
            if (num % x === 0) {
                var f1 = x;
                var f2 = num / x;
                if (factor[f1] === 0) {
                    factor[f1] = num;
                }
                else {
                    factor[f1] = gcd(factor[f1], num);
                }
                if (f1 === f2) {
                    continue;
                }
                if (factor[f2] === 0) {
                    factor[f2] = num;
                }
                else {
                    factor[f2] = gcd(factor[f2], num);
                }
            }
        }
    }
    // count valid factor that is same with Largest GCD
    var res = 0;
    for (var i = 1; i <= 200000; i++) {
        if (factor[i] === i) {
            res++;
        }
    }
    return res;
}
function gcd(a, b) {
    // if(b===0)
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
```