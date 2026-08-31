# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5019708/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5019708/)

---

# Code
```
var combinations = function (array) {
    return Array(1 << array.length)
        .fill()
        .map((_, i) => array.filter((_, j) => i & (1 << j)));
};

var gcd = function (a, b) {
    return a ? gcd(b % a, a) : b;
};

var findKthSmallest = function (coins, k) {
    coins.sort((a, b) => a - b);
    var cur = [];
    loop: for (var x of coins) {
        for (var y of cur) if (x % y === 0) continue loop;
        cur.push(x);
    }

    var arr = Array(cur.length)
        .fill()
        .map(() => []);
    var comb = combinations(cur);
    for (var x of comb) {
        if (x.length) arr[x.length - 1].push(x.reduce((a, b) => (a * b) / gcd(a, b)));
    }

    var helper = (n) => {
        var res = 0;
        for (var i = 0; i < arr.length; ++i) {
            var sign = i & 1 ? -1 : 1;
            for (var x of arr[i]) {
                res += sign * Math.floor(n / x);
            }
        }
        return res;
    };

    var lo = 1, hi = Number.MAX_SAFE_INTEGER;
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        if (helper(mid) < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
```