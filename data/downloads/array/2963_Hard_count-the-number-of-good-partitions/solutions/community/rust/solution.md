# Rust/Python linear solution with detailed explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4385623/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4385623/)

---

# Intuition
Let's first figure out how many partitions can we have in an array of size $n$. It will be $2^n$ as at any step you can either add to the previous partition or start the new one.

Now let's take a look at some example:

`3, 5, 2, 4, 2, 5, 1, 6, 1, 7, 1, 8`

What we can notice that positions with the same values should go to the same partition. So all 5 are going to the same partion, same with 2 and 1.

So you can view this as `( 3 ), (5, 2, 4, 2, 5), ( 1, 6, 7, 1), (8)`. Which can be viewed as partition of 4 elements which will be $2^4$.

How can we find those guaranteed partitions? For every value we can store the position we see it last time. Now when we iterate over the values we remember the last maximum position we had and update it as `max(pos, last_pos[v])`


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```javascript []
use std::collections::HashMap;

impl Solution {
  pub fn number_of_good_partitions(nums: Vec<i32>) -> i32 {
    let mut last_pos = HashMap::new();
    for i in 0 .. nums.len() {
      last_pos.insert(nums[i], i);
    }

    let (mut res, mut pos, m) = (1u64, 0, 1000000007u64);
    for i in 0 .. nums.len() {
      if i > pos {
        res = res * 2 % m;
      }
      pos = pos.max(*last_pos.get(&nums[i]).unwrap());
    }

    return res as i32;
  }
}
```
```python []
class Solution:
  def numberOfGoodPartitions(self, nums: List[int]) -> int:
    last_pos = {v: i for i, v in enumerate(nums)}
    pos, mod, res = 0, 10**9 + 7, 1
    for i, v in enumerate(nums):
      if i > pos:
        res = res * 2 % mod
      if last_pos[v] > pos:
        pos = last_pos[v]
    return res
```
