# Rust/Python binary search with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3924794/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3924794/)

---

# Intuition
One thing to notice is that we can very quickly calculate the total sum if you add all numbers up to `n`. What will it be? `n * (n + 1) / 2` minus all banned numbers up to `n`. And if we sort all unique banned numbers and calculate their cumulative sum, we can calculate the sum of those banned numbers in log time by finding a position in a sorted list of numbers and then taking the value cummulative array based on this position. And how many of the numbers will you select? It will be `n - pos`. See `sum_until` for implementation.

Now you can notice that that function is monotone. So you can use binary search between `0` and `n`.

# Complexity

Let $k$ be the size of banned integers and $n$ be the max number you can select. Then complexity is

- Time complexity: $O(k + \\log n \\log k)$
- Space complexity: $O(k)$

# Code
```Rust []
use std::collections::HashSet;

impl Solution {

  fn sum_until(arr: &Vec<i32>, cum_arr: &Vec<i64>, n: i32) -> (i64, i32) {
    let r = arr.binary_search(&n);
    let mut pos = 0;
    match r {
      Ok(i) => pos = i + 1,
      Err(i) => pos = i,
    };
    let total_sum = (n as i64) * (n as i64 + 1) / 2 - cum_arr[pos];
    return (total_sum, (n as usize - pos) as i32);
  }

  pub fn max_count(banned: Vec<i32>, n: i32, max_sum: i64) -> i32 {
    let banned: HashSet<i32> = banned.into_iter().collect();
    let mut banned = banned.into_iter().collect::<Vec<_>>();
    banned.sort_unstable();

    let mut cum_sum = vec![0i64; banned.len() + 1];
    for i in 0 .. banned.len() {
      cum_sum[i + 1] = cum_sum[i] + (banned[i] as i64);
    }

    let (mut lo, mut hi, mut res) = (0, n, 0);
    while lo < hi {
      let mi = (lo + hi + 1) / 2;
      let (curr_s, num) = Self::sum_until(&banned, &cum_sum, mi);
      if curr_s == max_sum {
        return num;
      }
      if curr_s < max_sum {
        res = num;
        lo = mi;
      } else {
        hi = mi - 1;
      }
    }
    
    return res;
  }
}
```
```python []
class Solution:

  def sum_until(self, arr, cum_arr, n) -> Tuple[int, int]:
    pos = bisect_right(arr, n)
    total_sum = n * (n + 1) // 2 - cum_arr[pos]
    return total_sum, n - pos

  def maxCount(self, banned: List[int], n: int, s: int) -> int:
    banned = sorted(list(set(banned)))
    cum_sum = [0] + list(accumulate(banned))

    lo, hi, res = 0, n, 0
    while lo < hi:
      mi = (lo + hi + 1) // 2
      curr_s, num = self.sum_until(banned, cum_sum, mi)
      if curr_s == s:
        return num
      if curr_s < s:
        res = num
        lo = mi
      else:
        hi = mi - 1

    return res
```