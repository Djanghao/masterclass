# Rust/Python 3 lines solution with explanation how to get there

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5356344/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5356344/)

---

# Intuition

First it does not name sense to have an division in which we have more than 3 elements. For example if one of the divisions is `a1, a2, a3`, you can do the same with divison `a1, a2` and another one `a3`.

Now we can look at the problem recursively.

```
f(arr) = max(
   arr[i] + f(arr[i + 1:]),
   arr[i] - arr[i + 1] + f(arr[i + 2:]),
)
```

Just add boundary conditions and caching to redo the same computations and you have a solution

```
class Solution:

  def maximumTotalCost(self, nums: List[int]) -> int:
    @lru_cache(None)
    def dp(i):
      if i >= len(nums):
        return 0

      if i == len(nums) - 1:
        return nums[-1]

      return max(
        nums[i] + dp(i + 1),
        nums[i] - nums[i + 1] + dp(i + 2)
      )

    return dp(0)
```

Now you can see that you can move backwards in the array and do the same computations (you can notice that you need only last 2 results). So you can rewrite it with

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:

  def maximumTotalCost(self, nums: List[int]) -> int:
    v1, v2 = nums[-1], 0
    for i in range(len(nums) - 2, -1, -1):
      v1, v2 = max(nums[i] + v1, nums[i] - nums[i + 1] + v2), v1
    return v1
```
```Rust []
impl Solution {
  pub fn maximum_total_cost(nums: Vec<i32>) -> i64 {
    let (mut v1, mut v2) = (nums[nums.len() - 1] as i64, 0);
    for i in (0 .. nums.len() - 1).rev() {
      (v1, v2) = ((nums[i] as i64 + v1).max(nums[i] as i64 - nums[i + 1] as i64 + v2), v1);
    }
    return v1;
  }
}

```