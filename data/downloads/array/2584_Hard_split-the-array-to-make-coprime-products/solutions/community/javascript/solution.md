# [Javascript] Common Prime Factors

**Author:** anna-hcj
**Votes:** 6
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258069/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258069/)

---

**Solution: Common Prime Factors**

Calculating the product creates numbers that are far too large.
Instead, get the prime factors of each number in the left and right sides and check if they share any common prime factors.
Keep the common prime factors in a hashset and remove prime factors when they are no longer shared.

Time Complexity: `O(n sqrt(n))`
Space Complexity: `O(n sqrt(n))`
```
var findValidSplit = function(nums) {
  let n = nums.length, right = {};
  for (let i = 0; i < n; i++) {
    let primeFactorsCount = getPrimeFactors(nums[i]);
    for (let prime in primeFactorsCount) {
      let count = primeFactorsCount[prime];
      right[prime] = (right[prime] || 0) + count;
    }
  }
  let left = {}, common = new Set();
  for (let i = 0; i <= n - 2; i++) {
    let primesFactorsCount = getPrimeFactors(nums[i]);
    for (let prime in primesFactorsCount) {
      let count = primesFactorsCount[prime];
      left[prime] = (left[prime] || 0) + count;
      right[prime] -= count;
      if (right[prime] > 0) common.add(prime);
      else if (right[prime] === 0) common.delete(prime);
    }
    if (common.size === 0) return i;
  }
  return -1;
};

function getPrimeFactors(n) {
  let counts = {};
  for (let x = 2; (x * x) <= n; x++) {
    while (n % x === 0) {
      counts[x] = (counts[x] || 0) + 1;
      n /= x;
    }
  }
  if (n > 1) counts[n] = (counts[n] || 0) + 1;
  return counts;
}
```