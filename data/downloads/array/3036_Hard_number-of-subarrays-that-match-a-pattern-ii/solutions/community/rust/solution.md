# Rust/Python linear solution. Convert to pattern matching with explanation

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4712800/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4712800/)

---

# Intuition

We already have seen here how to solve this problem with $O((n\u2212p)\u22C5p)$ time complexity. But we can also solve it in $O(n + m)$ which would not be much harder.

You can convert the original values to the their pattern. For example: `[1,4,4,1,3,5,5,3]` is converted to `[1,0,-1,1,1,0,-1]`. Now this is a pattern matching problem where you need to find how many times you can find your pattern `[1,0,-1]` in this converted array.

There are many approaches RK, KMP, z-function. As in the previous competition we already had [pattern matching approach](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674082/python-rust-z-function-with-explanation/), we will reuse that [z-function](https://cp-algorithms.com/string/z-function.html).

Here to find the number of times it was seen you do `z(pattern + '|' + vals)` and then count the number of times you see `len(pattern)` in this array.


# Complexity
- Time complexity: $O(n + p)$
- Space complexity: $O(n + p)$

# Code
```Rust []
impl Solution {

  fn z_function(s: Vec<i32>) -> Vec<usize> {
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

  pub fn count_matching_subarrays(nums: Vec<i32>, pattern: Vec<i32>) -> i32 {
    let p = pattern.len();
    let mut vals = vec![0; nums.len() + p];
    for i in 0 .. p {
      vals[i] = pattern[i];
    }
    vals[p] = 5;
    for i in 0 .. nums.len() - 1 {
      if nums[i + 1] < nums[i] {
        vals[i + p + 1] = -1;
      } else if nums[i + 1] > nums[i] {
        vals[i + p + 1] = 1;
      }
    }

    let mut res = 0;
    for v in Self::z_function(vals) {
      if v == p {
        res += 1;
      }
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

  def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
    vals = [0] * (len(nums) - 1)
    for i in range(len(nums) - 1):
      if nums[i + 1] < nums[i]:
        vals[i] = -1
      elif nums[i + 1] > nums[i]:
        vals[i] = 1
    
    z = self.z_function(pattern + [5] + vals)
    return z.count(len(pattern))
```

