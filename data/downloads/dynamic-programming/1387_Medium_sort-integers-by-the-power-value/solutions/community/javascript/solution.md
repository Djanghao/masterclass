# JavaScript, Simple Dynamic Programming

**Author:** hon9g
**Votes:** 5
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/546768/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/546768/)

---

- Time Complexity: O(N lg N + P) `N = hi - lo` `P = a maxinum value of power(x)`
- Space Complexity: O(P) 
```JavaScript
const memo = new Map();
memo.set(1, 0);
memo.set(2, 1);

/**
 * @param {number} x
 * @return {number}
 */
const power = x => {
    if (memo.has(x)) {
        return memo.get(x);
    }
    memo.set(x, 1 + power(x % 2 === 0 ? parseInt(x / 2) : 3 * x + 1));
    return memo.get(x);
};

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const arr = [];
    for (let x = lo; x <=hi; x++) {
        arr.push(x);
    }
    arr.sort((a, b) => {
        if (power(a) === power(b)) {
            return a > b ? 1 : -1;
        }
        return power(a) > power(b) ? 1 : -1;
    });
    return arr[k-1];
};
```