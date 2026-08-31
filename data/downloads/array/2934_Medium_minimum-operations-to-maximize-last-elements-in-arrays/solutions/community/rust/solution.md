# Rust/Python: try two options.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278660/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278660/)

---

# Intuition

Lets assume that you need to check how many swaps you need to have values below `v1, v2`. You can do this with:

```
  def f(self, nums1, nums2, v1, v2):
    res = 0
    for i in range(len(nums1) - 1):
      v1_, v2_ = nums1[i], nums2[i]
      if v1_ <= v1 and v2_ <= v2:
        continue
      elif v1_ <= v2 and v2_ <= v1:
        res += 1
      else:
        return float('inf')
    
    return res
```

Then you can just try both variations (knowing that in the second you already have done one swap)

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn f(nums1: &Vec<i32>, nums2: &Vec<i32>, v1: i32, v2: i32) -> i32 {
    let mut res = 0;
    for i in 0 .. nums1.len() - 1 {
      if nums1[i] <= v1 && nums2[i] <= v2 {
        continue;
      } else if nums1[i] <= v2 && nums2[i] <= v1 {
        res += 1;
      } else {
        return nums1.len() as i32 + 1;
      }
    }
    return res;
  }

  pub fn min_operations(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let n = nums1.len() - 1;
    let (v1, v2) = (nums1[n], nums2[n]);
    let res = Self::f(&nums1, &nums2, v1, v2).min(Self::f(&nums1, &nums2, v2, v1) + 1);
    if res > n as i32 + 1 {
      return -1;
    }
    return res;
  }
}
```
```python []
class Solution:

  def f(self, nums1, nums2, v1, v2):
    res = 0
    for i in range(len(nums1) - 1):
      v1_, v2_ = nums1[i], nums2[i]
      if v1_ <= v1 and v2_ <= v2:
        continue
      elif v1_ <= v2 and v2_ <= v1:
        res += 1
      else:
        return float('inf')
    
    return res


  def minOperations(self, nums1: List[int], nums2: List[int]) -> int:
    v1, v2 = nums1[-1], nums2[-1]
    res = min(self.f(nums1, nums2, v1, v2), self.f(nums1, nums2, v2, v1) + 1)
    return -1 if res == float('inf') else res
```