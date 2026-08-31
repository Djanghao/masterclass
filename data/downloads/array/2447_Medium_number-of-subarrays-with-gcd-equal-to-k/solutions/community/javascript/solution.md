# [Javascript] Brute Force - Clean Solution

**Author:** anna-hcj
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2735365/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2735365/)

---

**Solution: Brute Force**

To get the GCD of an array of elements, keep the running GCD starting from `arr[0]`.
  For each `arr[i]`, `gcd = getGCD(gcd, arr[i])`.

Take each `nums[i]` as the start of a subarray.
  Keep the running GCD from index `i`.
  Go through each index `j` as the end of the subarray.

Time Complexity: `O(n^2 * log(n))` 123ms
Space Complexity: `O(1)` 41.6MB
```
var subarrayGCD = function(nums, k) {
  let n = nums.length, ans = 0;
  for (let i = 0; i < n; i++) {
    let gcd = nums[i];
    for (let j = i; j < n; j++) {
      gcd = getGCD(gcd, nums[j]);
      if (gcd === k) ans++;
    }
  }
  return ans;  
};

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}
```