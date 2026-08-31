# Rust, move until you have gcd = 1

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/3647810/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/3647810/)

---

# Intuition
Try to grab as many numbers as possible in the array. When you can't no longer add numbers, start from anew and increase counter.


# Complexity
- Time complexity: $O(n \\log max_num)$
- Space complexity: $O(1)$

# Code
```
impl Solution {

  fn gcd(mut y: i32, mut x: i32) -> i32 {
    while y != 0             {
      let temp = x;
      x = y;
      y = temp;
      y %= x;
    }
    return x
  }

  pub fn minimum_splits(nums: Vec<i32>) -> i32 {
    let (mut res, mut g) = (0, 1);

    for v in nums {
      g = Self::gcd(g, v);
      if g == 1 {
        res += 1;
        g = v;
      }
    }
    return res;
  }
}
```