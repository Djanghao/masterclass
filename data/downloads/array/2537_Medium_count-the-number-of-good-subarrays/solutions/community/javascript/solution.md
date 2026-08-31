# [Javascript] Sliding Window

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052707/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052707/)

---

**Solution: Sliding Window**

If a subarray has at least `k` good pairs, then we know that expanding the subarray will always also result in at least `k` good pairs.
Keep track of the count of occurances of each number.
We have two pointers `i` and `j` for our sliding window.
  * As we move `j` up, we will gain another `count[nums[j]]` good pairs.
  * Move `i` up while the good pairs >= `k`. When we move `i` up, we subtract `count[nums[i]] - 1` good pairs.
  * Then, we will know that all subarrays with start index between `0` and `i - 1`, and end index at `j` will have at least `k` good pairs.

Time Complexity: `O(n)`
Space Complexity: `O(n)`
```
var countGood = function(nums, k) {
  let n = nums.length, count = {}, goodPairs = 0, ans = 0;
  for (let j = 0, i = 0; j < n; j++) {
    goodPairs += count[nums[j]] || 0;
    count[nums[j]] = (count[nums[j]] || 0) + 1;
    while (goodPairs >= k) {
      goodPairs -= --count[nums[i]];
      i++;
    }
    ans += i;
  }
  return ans;
};
```