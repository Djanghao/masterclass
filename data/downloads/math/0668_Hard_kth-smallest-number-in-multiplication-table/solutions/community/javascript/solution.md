# JavaScript Binary Search Solution / Comments and Intuition

**Author:** darkalarm
**Votes:** 11
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580856/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580856/)

---

**Intuition**

We know that the solution is going to be somewhere between `1` and `m * n` inclusive. If we can figure out some kind of monotonicity that each number in this range shows, binary search could be our friend.

Let's select any number in the range `[1, m * n]`, let's call it `x`.
Is there a way to count all the numbers which are less than or equal to `x` in this multiplication table?
If there is, then we could compare this `count` with the given `k`.

For each `x` between our range, the count is either going to be `>=  k` or `< k`. And this is going to show a monotonic behaviour because of the sorted nature of the multiplication matrix. This is a typical binary search problem now, where we need to find the minimum `x` for which `count >= k`.

**Code**

```
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  // lo always points to a value which is
  // not going to be our answer
  let lo = 0;
  let hi = m * n;
  
  // the loop stops when lo and hi point to two adjascent numbers
  // because lo is always incorrect, hi will contain our final answer
  while (lo + 1 < hi) {
    
    // As a general practice don't do a (lo + hi) / 2 because that
    // might cause integer overflow
    const mid = lo + Math.floor((hi - lo) / 2);
    const count = countLessThanEqual(mid, m, n);
    
    // Find the minimum mid, such that count >= k
    if (count >= k) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return hi;
};

function countLessThanEqual(target, rows, cols) {
  let count = 0;
  // we move row by row in the multiplication table
  // Each row contains at max (target / rowIndex) elements less than
  // or equal to target. The number of cols would limit it though.
  for (let i = 1; i <= rows; i++) {
    count += Math.min(Math.floor(target / i), cols);
  }
  return count;
}
```



