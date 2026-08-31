# Rust/Python z-function

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/5437603/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/5437603/)

---

# Intuition

This problem is pretty bad. It basically asks "do you know z-function". If the answer is yes, you solve it in 1 minute. If no, it is very hard to come up with this concept on the spot.

An excellent explanation about this concept is on [cp-algorithms](https://cp-algorithms.com/string/z-function.html) which is by itself a good resource to learn many concepts. 


The Z-function for this string is an array of length $n$\u200A where the $i$\u200A-th element is equal to the greatest number of characters starting from the position $i$\u200A that coincide with the first characters of $s$.

---------------

So once you calculate the z-function, just sum all of the values and add `len(s)` (as the first value in z-function is zero).

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn sum_scores(s: String) -> i64 {
    let s = s.into_bytes();
    let mut z = vec![0; s.len()];
    let mut res = s.len();
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
      res += z[i];
    }
    
    return res as i64;
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

  def sumScores(self, s: str) -> int:
    z = self.z_function(s)
    return sum(z) + len(s)
```
