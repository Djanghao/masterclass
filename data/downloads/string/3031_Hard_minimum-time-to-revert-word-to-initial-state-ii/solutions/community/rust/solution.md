# Python/Rust. Z-function with explanation

**Author:** SalvadorDali
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674082/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674082/)

---

# Intuition

It is better to start with easier problem with smaller constrains. [Look here](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674153/python-startswith-find-an-offset-of-the-prefix-also-how-to-achieve-linear-solution/) for a simpler $O(n^2)$ solution upon which we will improve here.

The problem asks you for a specific string `s` to find such offset `i * k` (where `i > 0`) that `s[i * k :]` is a prefix of a string `s`.

With this information z-function calculates something very similar:

*The Z-function for this string is an array of length $n$\u200A where the $i$\u200A-th element is equal to the greatest number of characters starting from the position $i$\u200A that coincide with the first characters of $s$.*

You can calculate this function in linear time. For more detailed explanation see https://cp-algorithms.com/string/z-function.html

---------------------------

Now once the function is calculated, you just need to check all offsets possible `k, 2k, 3k, ...` and check that `z[i] == n - i`. This gives a few lines solution.
 

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  
  fn z_function(s: Vec<u8>) -> Vec<usize> {
    let mut z = vec![0; s.len()];
    let (mut l, mut r, mut n) = (0, 0, s.len());
    
    for i in 1 .. n {
      if i < r {
        z[i] = (r - i).min(z[i - l]);
      }
      
      while i + z[i] < n && s[i + z[i]] == s[z[i]] {
        z[i] += 1;
      }
      
      if i + z[i] > r {
        l = i;
        r = i + z[i];
      }
    }
    
    return z;
  }
  
  pub fn minimum_time_to_initial_state(s: String, k: i32) -> i32 {
    let z = Self::z_function(s.into_bytes());
    let (n, mut res) = (z.len(), 1);

    for i in (k as usize .. n).step_by(k as usize) {
      if z[i] == n - i {
        return res;
      }
      res += 1;
    }
    return res;
  }
}
```
```python []
class Solution:
  def z_function(self, s):
    z, l, r, n = [0] * len(s), 0, 0, len(s)
    for i in range(1, n):
      if i < r:
        z[i] = min(r - i, z[i - l])

      while i + z[i] < n and s[i + z[i]] == s[z[i]]:
        z[i] += 1

      if i + z[i] > r:
        l, r = i, i + z[i]

    return z

  def minimumTimeToInitialState(self, s: str, k: int) -> int:
    z, n, res = self.z_function(s), len(s), 1

    for i in range(k, n, k):
      if z[i] == n - i:
        return res
      res += 1

    return res
```