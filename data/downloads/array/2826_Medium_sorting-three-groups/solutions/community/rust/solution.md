# Rust/Python linear solution with constant space. Explanation and generalization to k groups

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/4497646/](https://leetcode.com/problems/sorting-three-groups/solutions/4497646/)

---

# Intuition

It is easy to do $O(n^3)$ and it will pass as constrains are very low. Also not hard to see a $O(n^2)$. But you can also easily do this in $O(n)$

Lets look at some random example like `[3, 1, 1, 2, 3, 1, 3, 2, 2, 3, 3]` And see what changes do we need to get everything to 1. This is easy, just `dp[i + 1] = dp[i] + int(nums[i] != 1)`

So our results are:

```[1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 8]```

Now what do we need to get all values to 1 or 2 where all ones are before the 2? The value at position `i + 1` will be the minimum between getting all ones or getting all `1 -> 2` + 1 if `nums[i] != 2` or zero otherwise. So `dp[i + 1] = min(dp[i + 1], dp[i] + int(nums[i] != 2))` and the result will be

```[1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6]```

And absolutely the same for 3. This gives us a simple solution (see Python code).

----------------------------

The only issue with this python solution is that it is $O(n)$ space. But you should notice that you do not actually need all those values in `dp`. As you only rely on one value before it. So you can do everything in one pass and maintain only 3 values. See Rust code.

------------------------------

It is easy to see that this generalizes to any number of groups (not just 3, but k).


# Complexity
- Time complexity: $O(n)$. For if we have not 3, but k, then $O(nk)$
- Space complexity: $O(1)$. For if we have not 3, but k, then $O(k)$

# Code
```Rust []
class Solution:
  def minimumOperations(self, nums: List[int]) -> int:
    dp = [0] * (len(nums) + 1)
    
    for i in range(len(nums)):
      dp[i + 1] = dp[i] + int(nums[i] != 1)

    for i in range(len(nums)):
      dp[i + 1] = min(dp[i + 1], dp[i] + int(nums[i] != 2))
    
    for i in range(len(nums)):
      dp[i + 1] = min(dp[i + 1], dp[i] + int(nums[i] != 3))

    return dp[-1]
```
```python []
impl Solution {
  pub fn minimum_operations(nums: Vec<i32>) -> i32 {
    let (mut v1, mut v2, mut v3) = (0, 0, 0);
    for i in 0 .. nums.len() {
      if nums[i] != 1 {
        v1 += 1;
      }

      if nums[i] != 2 {
        v2 += 1;
      }
      v2 = v1.min(v2);

      if nums[i] != 3 {
        v3 += 1;
      }
      v3 = v2.min(v3);
    }
    return v3;
  }
}
```