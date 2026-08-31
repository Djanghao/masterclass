# Py/Rust iterations with binary mask

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5169299/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5169299/)

---

# Intuition

First of all, lets ignore all the numbers where one divisor is already a square (like `[4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28]`). 

Now for each number lets find what multiples it consists. For example 30 = 2 * 3 * 5. As there can be at most one of each prime, you can convert it to a binary mask.

Why is this helpful? Because you can easily check if two masks results in a non-square free product this is `mask1 & mask2 != 0`. And merge two masks `mask1 | mask2`.

Now you start with the dictionary which maps masks to number of times it is seen `curr`. Now when you see a new mask. It can be used or not used with any of the masks in the dictionary. Not using is just making a copy of `curr`. When you use, you need to verify that two masks do not result in non-square number and if so, you merge them and increase the value.

This gives you a Python solution. In rust you can cache numbers to mask and use a vector instead of a dictionary

# Complexity

Let $p$ be the number of primes <= to our maximum number and $n$ total number of numbers.

- Time complexity: $O(n \\cdot 2^p)$
- Space complexity: $O(2^p)$

# Code
```Rust []
impl Solution {
  pub fn square_free_subsets(nums: Vec<i32>) -> i32 {
    let MOD = 1000000007;
    let masks = vec![-1, 0, 1, 2, -1, 4, 3, 8, -1, -1, 5, 16, -1, 32, 9, 6, -1, 64, -1, 128, -1, 10, 17, 256, -1, -1, 33, -1, -1, 512, 7];
    let mut curr = vec![0; 1024];
    curr[0] = 1;

    for v in nums {
      if masks[v as usize] == -1 {
        continue;
      }
      let mut tmp = curr.to_vec();
      for m in 0 .. 1024 {
        if m & masks[v as usize] == 0 {
          let r = (m | masks[v as usize]) as usize;
          tmp[r] = (tmp[r] + curr[m as usize]) % MOD;
        }
      }
      curr = tmp;
    }

    let mut res = 0;
    for v in curr {
      res = (res + v) % MOD;
    }

    return (res + MOD - 1) % MOD;
  }
}
```
```python []
class Solution:

  def get_mask(self, num: int) -> int:
    mask, mult = 0, 1
    for i, p in enumerate([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]):
      if num % p == 0:
        mask += mult
      mult *= 2

    return mask

  def squareFreeSubsets(self, nums: List[int]) -> int:
    masks = [self.get_mask(v) for v in nums if v not in [4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28]]
    curr = {0: 1}
    for m in masks:
      tmp = defaultdict(int, curr)
      for m1, n in curr.items():
        if m1 & m == 0:
          tmp[m1 | m] += n

      curr = tmp

    return (sum(curr.values()) - 1) % (10**9 + 7)
```