# Python: 6 lines, Rust. Linear solution with detailed explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995074/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995074/)

---

# Intuition

Notice that we do not care about the values in num, only the number of times the modulo is equal to k. So we can do 

```
cnt = 0
for v in nums:
  cnt += (v % m) == k
  ...
```

Lets store the number of times `cnt % m` was found, not forgetting that in the beginning `cnt = 0` so we start with `{0: 1}` (I use Counter because you do not need to check if in dict).

Now when we do our count at each position we need to check how many `cnt % m == k`, which means that `cnt = x * m + k`  -> `cnt - k = x * m`. And we can find this value in our dictionary by looking at the key:  `(cnt - k) % m`


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(min(n, m))$

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn count_interesting_subarrays(nums: Vec<i32>, m: i32, k: i32) -> i64 {
    let mut vals = HashMap::new();
    let (mut res, mut cnt) = (0i64, 0);
    vals.insert(0, 1);

    for v in nums {
      if v % m == k {
        cnt += 1;
      }
      let pos = (cnt - k + m) % m;
      match vals.get(&pos) {
        Some(i) => res += *i as i64,
        _ => (),
      }

      *vals.entry(cnt % m).or_insert(0) += 1;
    }

    return res;
  }
}
```
```python []
class Solution:
  def countInterestingSubarrays(self, nums: List[int], m: int, k: int) -> int:
    vals, res, cnt = Counter({0: 1}), 0, 0
    for v in nums:
      cnt += (v % m) == k
      res += vals[(cnt - k) % m]
      vals[cnt % m] += 1

    return res  
```