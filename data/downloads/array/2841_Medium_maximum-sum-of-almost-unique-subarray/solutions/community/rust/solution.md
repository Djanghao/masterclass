# Rust/Python sliding window

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4140364/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4140364/)

---

# Intuition
Standard sliding window question. You maintain a hashmap and a sum. Each time you move you add the right value to the hash and increase the sum and remove the left value from the hash and decrease the sum. If the count of the decreased values becomes zero, you remove the value from the map. When the map has a size we need `<= m` you check your maximum

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(k)$

# Code
```Rust []
class Solution:
  def maxSum(self, nums: List[int], m: int, k: int) -> int:
    cnt, s, res = Counter(nums[:k]), sum(nums[:k]), 0
    if len(cnt) >= m and s > res:
      res = s
    for i in range(k, len(nums)):
      cnt[nums[i]] += 1
      cnt[nums[i - k]] -= 1
      if cnt[nums[i - k]] == 0:
        del cnt[nums[i - k]]

      s += nums[i] - nums[i - k]
      if len(cnt) >= m and s > res:
        res = s

    return res
```
```python []
use std::collections::HashMap;

impl Solution {
  pub fn max_sum(nums: Vec<i32>, m: i32, k: i32) -> i64 {
    let mut cnt: HashMap<i32, i32> = HashMap::new();
    let (mut s, mut res, k, m) = (0i64, 0i64, k as usize, m as usize);
    for i in 0 .. k {
      s += nums[i] as i64;
      *cnt.entry(nums[i]).or_default() += 1;
    }
    if cnt.len() >= m {
      res = s;
    }

    for i in k .. nums.len() {
      *cnt.entry(nums[i]).or_default() += 1;
      *cnt.entry(nums[i - k]).or_default() -= 1;
      s += nums[i] as i64 - nums[i - k] as i64;

      if *cnt.get(&nums[i - k]).unwrap() == 0 {
        cnt.remove(&nums[i - k]);
      }
      if cnt.len() >= m {
        res = res.max(s);
      }
    }


    return res;
  }
}
```