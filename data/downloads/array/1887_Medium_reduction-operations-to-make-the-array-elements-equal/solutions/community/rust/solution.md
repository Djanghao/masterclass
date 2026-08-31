# Rust 7L /Python 6L log-linear with explanation

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4304071/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4304071/)

---

# Intuition

Lets look at some array: `[7, 3, 7, 5, 6, 5]`. At the beginning we need to get rid of all 7th (by converting them to 6). There are two of them. And after getting rid of them we will get three sixes. Getting rid of those 3 sixes we will end up with 5 fives.

Which gives us a simple solution. We need to sort the values from biggest to smallest and count each unique numbers. Then you move from biggest to smallest, you add the value of counts to the res and calculate cummulative sum to know the count of the next value.

This would still provide the best time complexity, but this counting might be costly due to storing results in a dictionary. So we can bypass it. For example in python I use groupby to quickly find how many numbers of the same value do I have. In rust I just check when `nums[i] != nums[i - 1]` 


# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

# Code
```Python []
from itertools import groupby

class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        res, cur = 0, 0
        for _, els in groupby(nums):
            cur += len(list(els))
            res += cur
        return res - cur
```
```Rust []
impl Solution {
  pub fn reduction_operations(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();
    let (mut res, mut cnt) = (0, 1);
    for pos in (1 .. nums.len()).rev() {
      if nums[pos] != nums[pos - 1] {
        res += cnt;
      }
      cnt += 1;
    }
    return res;
  }
}
```
