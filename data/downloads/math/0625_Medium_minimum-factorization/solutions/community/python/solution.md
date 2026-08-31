# Rust/Python factorize the number with restricted fractions

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/3559873/](https://leetcode.com/problems/minimum-factorization/solutions/3559873/)

---

# Intuition

The first task is factorize the number into multiples from 9 to 2, trying to get the biggest multiple. Why is this? Because if you have one multiple (6 for example), it will be only one digit which is better than 3 and 2 which will be 2 digits.

If you see that the after factorization you get the value bigger than 1, this means that other multiples will be 2 digit numbers and the factorization further can't be done.

Now lets assume that our factors are `[5, 2, 2, 9, 3]`. To get the smallest you can have will be after sorting. The last thing you need to check if the value fits i32.


# Complexity

- Time complexity: $O(\\log n)$
- Space complexity: $O(\\log n)$

# Code
```Rust []
impl Solution {
  pub fn smallest_factorization(mut num: i32) -> i32 {
    if num == 1 {
      return 1;
    }

    let mut factors = Vec::new();
    for d in (2 .. 10).rev() {
      while num % d == 0 {
        num /= d;
        factors.push(d);
      }
    }

    if num != 1 {
      return 0;
    }

    let mut res: i64 = 0;
    factors.sort_unstable();
    for f in factors {
      res = res * 10 + f as i64;
    }

    if res > 2147483647 {
      return 0;
    }
    return res as i32;
  }
}
```
```python []
class Solution:
  def smallestFactorization(self, num: int) -> int:
    if num == 1:
      return 1

    factors = []
    for d in [9, 8, 7, 6, 5, 4, 3, 2]:
      while num % d == 0:
        num //= d
        factors.append(d)

    if num == 1:
      res = 0
      for m in sorted(factors):
        res = res * 10 + m

      if res > 2147483647:
        return 0
      return res
    return 0
```

