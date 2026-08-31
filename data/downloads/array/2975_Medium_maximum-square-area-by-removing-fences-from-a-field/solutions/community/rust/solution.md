# Python/Rust: maximum overlap of all sides.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449665/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449665/)

---

# Intuition

Lets find out all possible widths for the rectangles. Then we do the same for heights. If we have values `[1, 6, 7, 10]` we can generate sizes `6 - 1, 7 - 1, 10 - 1` and `7 - 6, 10 - 6` and also `10 - 7`. So you need to sort the values and then iterate over half of the pairs. 

Now if you have those sides of with and heights you just need to find the maximum overlap of those sets.

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$

# Code
```Rust []
use std::collections::HashSet;

impl Solution {
  pub fn maximize_square_area(v1: i32, v2: i32, mut arr1: Vec<i32>, mut arr2: Vec<i32>) -> i32 {
    arr1.extend_from_slice(&[1, v1]);
    arr1.sort_unstable();

    let mut data = HashSet::new();
    for i in 0 .. arr1.len() - 1 {
      for j in i + 1 .. arr1.len() {
        data.insert(arr1[j] - arr1[i]);
      }
    }

    let mut res = -1;
    arr2.extend_from_slice(&[1, v2]);
    arr2.sort_unstable();
    for i in 0 .. arr2.len() - 1 {
      for j in i + 1 .. arr2.len() {
        let diff = arr2[j] - arr2[i];
        if data.contains(&diff) {
          res = res.max(diff);
        }
      }
    }

    if res == -1 {
      return res;
    }

    return (((res as u64) * (res as u64)) % 1000000007) as _;
  }
}
```
```python []
class Solution:
  def maximizeSquareArea(self, m: int, n: int, hFences: List[int], vFences: List[int]) -> int:
    hFences.append(1)
    hFences.append(m)
    hFences.sort()
    vFences.append(1)
    vFences.append(n)
    vFences.sort()

    possible = set()
    for i in range(len(hFences) - 1):
      for j in range(i + 1, len(hFences)):
        diff = hFences[j] - hFences[i]
        possible.add(diff)
    
    res = -1
    for i in range(len(vFences) - 1):
      for j in range(i + 1, len(vFences)):
        diff = vFences[j] - vFences[i]
        if diff in possible:
          res = max(res, diff)
    
    if res == -1:
      return -1
    return res * res % (10**9 + 7)
```