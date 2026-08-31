# [Javascript] Binary Search

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778546/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778546/)

---

**Solution: Binary Search**

Binary search for the earliest second `s`.
To check if it's possible to mark all indices in `s` seconds,
*   The idea is to delay the "marking" of numbers as much as possible.
*   The latest point we can mark an index is the last occurance of it in `changeIndices` (only consider the prefix of `changeIndices` up to index `s`).
*   Before the latest point, store up as many decrement operations as possible.
*   When the time comes to mark an index, check whether we have enough decrement operations to use on `nums[changeIndices[i]]`.
*   If the decrement operations are not enough, it's not possible - return false.
*   If they are enough, subtract `nums[changeIndices[i]]` from `operations`.

`n = length of nums`, `m = length of changeIndices`
Time Complexity: `O((n + m) * log(m))`
Space Complexity: `O(n + m)`
```
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  changeIndices = changeIndices.map((index) => index - 1);
  let n = nums.length;
  let low = 0, high = changeIndices.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(mid)) high = mid;
    else low = mid + 1;
  }
  return isPossible(low) ? low + 1 : -1;
  
  function isPossible(s) {
    let last = Array(n).fill(-1);
    for (let i = 0; i <= s; i++) {
      last[changeIndices[i]] = i;
    }
    let marked = 0, operations = 0;
    for (let i = 0; i <= s; i++) {
      if (i === last[changeIndices[i]]) {
        if (nums[changeIndices[i]] > operations) return false;
        operations -= nums[changeIndices[i]];
        marked++;
      } else {
        operations++;
      }
    }
    return marked === n;
  }
};
```