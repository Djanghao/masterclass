# Python/Rust: Linear solution using prefix sum and explanation

**Author:** SalvadorDali
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4111982/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4111982/)

---

# Intuition

Lets look at a simpler question: what if we do not have an infinite number of append operation but just a few. Lets assume this is only 3. We can do this by calculating a prefix sum. For example for array `1, 2, 4, 3, 1` you do

```
1, 2, 4,  3,  1 |  1,  2,  4,  3,  1|  1,  2,  4,  3,  1
1, 3, 7, 10, 11 | 12, 14, 18, 21, 22| 23, 25, 29, 32, 33
```

And while doing this you also check whether your current prefix minus target was already seen and if yes you get the differences between position we are now and already seen. Minimum of such differences will be our answer.

```
if curr - target in seen:
  res = min(res, i - seen[curr - target])
```

But we have infinite amount of such runs which is a problem. Instead we can check how many cycles will we need: `num_cycles = target // sum(nums)` and change the target to `target = target % sum(nums)`. You will need the number of cycles to increase the result by total number of values in thos cycles (and BTW you do not need 3 passes, 2 is enough):


# Code
```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn min_size_subarray(nums: Vec<i32>, target: i32) -> i32 {
    let n = nums.len();
    let mut s = 0i64;
    for i in 0 .. n {
      s += nums[i] as i64;
    }

    let (num_cycles, target) = ((target as i64) / s, (target as i64) % s);
    let mut res = i64::MAX;
    let mut seen = HashMap::new();
    let mut curr = 0i64;
    seen.insert(0, -1);
    
    for i in 0 .. n * 2 {
      curr += nums[i % n] as i64;
      seen.insert(curr, i as i64);
      if seen.contains_key(&(curr - target)) {
        res = res.min(i as i64 - seen.get(&(curr - target)).unwrap());
      }
    }

    if res == i64::MAX {
      return -1;
    }
    return (res as usize + (num_cycles as usize) * n) as i32;
  }
}
```
```python []
class Solution:
  def minSizeSubarray(self, nums: List[int], target: int) -> int:
    s = sum(nums)
    num_cycles, target = target // s, target % s

    seen, curr, res = {0: -1}, 0, float('inf')
    for i in range(len(nums) * 2):
      curr += nums[i % len(nums)]
      seen[curr] = i
      if curr - target in seen:
        res = min(res, i - seen[curr - target])

    res += num_cycles * len(nums)
    return -1 if res == float('inf') else res
```


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$