# Rust/Python linear time, constant space. With full explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4356617/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4356617/)

---

# Intuition
This is a tricky problem and the main issue here is to understand one concept. 

Lets assume that you had some values of coins and you can construct with them any numbers from $1$ to $k$. Now if you add a coin $v$ to them you can construct any value from $1$ to $v + k$.

So we sort all the coins we have and store only two element:
 - `seen_until`: all the values we can get so far (in the beginning we can get only 0, so `seen_until = 1`)
 - `res`: basically our result

Now we iterate over all coins and two things can happen:
 - our value `v` can be already constructed (`v <= seen_until`). Then we do not need to add any coins and `seen_until += v`
 - if `v > seen_until`, then some values will be missing. And there is no way to fix it with other values in array. So we need to add coins.

This gives us an easy solution

# Complexity
Let $n$ be the size of the array and $t$ be the maximum value of target, then

- Time complexity: $O(\\min(\\log t, n))$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn minimum_added_coins(mut arr: Vec<i32>, target: i32) -> i32 {
    arr.sort_unstable();
    let (mut seen_until, mut res) = (1u64, 0);
    for v in arr {
      while v as u64 > seen_until {
        seen_until += seen_until;
        res += 1;
      }
      seen_until += v as u64;
    }

    while seen_until < target as u64 + 1 {
      seen_until += seen_until;
      res += 1;
    }

    return res;
  }
}
```
```python []
class Solution:
  def minimumAddedCoins(self, arr: List[int], target: int) -> int:
    arr.sort()
    seen_until, res = 1, 0
    for v in arr:
      while v > seen_until:
        seen_until += seen_until
        res += 1
      seen_until += v

    while seen_until < target + 1:
      seen_until += seen_until
      res += 1
    return res
```

