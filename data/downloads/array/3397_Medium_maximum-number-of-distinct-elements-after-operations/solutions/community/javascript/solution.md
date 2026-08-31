# [Javascript, Java] Greedy w/ Sorting

**Author:** anna-hcj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6184571/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6184571/)

---

**Solution: Greedy w/ Sorting**

Sort `nums` in asc order.
The largest range is achieved by reducing the minimum element of nums by `k`.
Keep track of the current largest element we have operated on and change each `nums[i]` to take the next available spot within the bounds of `k`.
*   If it's impossible to change `nums[i]` into a distinct number (`last + 1 >= nums[i] + k`), skip it.
*   Otherwise, take the smallest possible next position: `Math.max(last + 1, nums[i] - k)`.
Return the number of distinct elements after the operations.

Time Complexity: `O(n log(n))`
Space Complexity: `O(log(n))`

**JS**
```
function maxDistinctElements(nums, k) {
  nums.sort((a, b) => a - b);
  let last = nums[0] - k, distinct = 1;
  for (let i = 1; i < nums.length; i++) {
    if (last + 1 > nums[i] + k) continue;
    last = Math.max(last + 1, nums[i] - k);
    distinct++;
  }
  return distinct;
};
```

**Java**
```
class Solution {
    public int maxDistinctElements(int[] nums, int k) {
        Arrays.sort(nums);
        int last = nums[0] - k;
        int distinct = 1;
        for (int i = 1; i < nums.length; i++) {
            if (last + 1 > nums[i] + k) continue;
            last = Math.max(last + 1, nums[i] - k);
            distinct++;
        }
        return distinct;
    }
}
```