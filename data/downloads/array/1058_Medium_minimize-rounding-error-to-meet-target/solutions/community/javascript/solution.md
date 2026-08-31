# [Javascript] DP w/ Memoization

**Author:** anna-hcj
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/2167796/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/2167796/)

---

**Solution: DP w/ Memoization**

Use dynamic programming.
For each `prices[i]`, we have two choices: floor (round it down) or ceil (round it up).
Take the minimum cost out of these two choices.  

The time complexity of such a solution will be `O(2^n)`, since we have two choices for each price.
We can memoize on `(index, current sum)` to bring the time complexity down to `O(n * target)`

We can use a hashmap to keep track of the memoized results instead of a 2D array, since the situations are fairly sparse.

`n = prices.length`
Time Complexity: `O(n * target)` 565ms
Space Complexity: `O(n * target)` 95.7MB
```
var minimizeError = function(prices, target) {
  let n = prices.length, memo = new Map();
  let res = dp(0, 0);
  return res === Infinity ? "-1" : res.toFixed(3);
  
  function dp(i, sum) {
    if (i === n) return sum === target ? 0 : Infinity;
    if (sum > target) return Infinity;
    let key = `${i},${sum}`;
    if (memo.has(key)) return memo.get(key);
    
    let price = Number(prices[i]);
    let floor = dp(i + 1, sum + Math.floor(price)) + (price - Math.floor(price));
    let ceil = dp(i + 1, sum + Math.ceil(price)) + (Math.ceil(price) - price);
    memo.set(key, Number((Math.min(floor, ceil)).toFixed(3)));
    return memo.get(key);
  }  
};
```