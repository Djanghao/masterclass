# Rust/Py find left-top and bottom-right

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355936/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355936/)

---

# Intuition

To find the rectangle which can cover every 1, you need to find the position of left-top value and bottom-right. So you iterate over all positions and do

```
y1 = min(y1, y)
y2 = max(y2, y)
x1 = min(x1, x)
x2 = max(x2, x)
```

# Complexity
- Time complexity: $O(n \\cdot m)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn minimum_area(M: Vec<Vec<i32>>) -> i32 {
    let (mut y1, mut y2, mut x1, mut x2) = (i32::MAX, i32::MIN, i32::MAX, i32::MIN);
    for y in 0 .. M.len() {
      for x in 0 .. M[0].len() {
        if M[y][x] == 1 {
          y1 = y1.min(y as i32 );
          y2 = y2.max(y as i32);
          x1 = x1.min(x as i32);
          x2 = x2.max(x as i32);
        }
      }
    }

    return (y2 - y1 + 1) * (x2 - x1 + 1);
  }
}
```
```python []
class Solution:
  def minimumArea(self, M: List[List[int]]) -> int:
    y1, y2, x1, x2 = float('inf'), -float('inf'), float('inf'), -float('inf')
    for y in range(len(M)):
      for x in range(len(M[0])):
        if M[y][x] == 1:
          y1 = min(y1, y)
          y2 = max(y2, y)
          x1 = min(x1, x)
          x2 = max(x2, x)
    
    return (y2 - y1 + 1) * (x2 - x1 + 1)
    
```