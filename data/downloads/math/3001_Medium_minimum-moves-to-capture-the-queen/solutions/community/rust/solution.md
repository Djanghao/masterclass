# Python/Rust, constant time solution. At most 2 moves needed. BTW, you can also allow queen to move.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4520804/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4520804/)

---

# Intuition

First thing to notice is that at most you need 2 moves to capture it. As even if bishop is blocking the rook or rook is blocking the bishop you can move the blocking (not blocked) piece and capture it.

So if in two you can always capture it, the question is what conditions should happen so you can capture it in one move.

There are two possibilities:
 - capture with a rook. For this to happen bishop, rook and queen should be on the came row/column and bishop should not be blocking the rook
 - capture with a bishop. For this to happen bishop, rook and queen should be on the came diagonal and rook should not be blocking the bishop

Both conditions can be checked in constant time. 

----------

You can also simplify to not use divisions (like I have done in Rust). And even can put all of this in one if statement, but this screws up readability by a lot.

-----------

So the question could have int64 coordinates. Also it could have allowed the queen to move (and white/black could have moved first). As in this case if you can't capture it in one turn, you will never be able to capture it.

# Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn min_moves_to_capture_the_queen(r_y: i32, r_x: i32, b_y: i32, b_x: i32, q_y: i32, q_x: i32) -> i32 {
    let is_d1 = (b_y - q_y == b_x - q_x) && ((r_y - q_y != r_x - q_x) || r_y < b_y.min(q_y) || r_y > b_y.max(q_y));
    let is_d2 = (b_y - q_y == q_x - b_x) && ((r_y - q_y != q_x - r_x) || r_y < b_y.min(q_y) || r_y > b_y.max(q_y));
    let is_c  = (r_y == q_y) && ((b_y != r_y) || b_x < r_x.min(q_x) || b_x > r_x.max(q_x));
    let is_r  = (r_x == q_x) && ((b_x != r_x) || b_y < r_y.min(q_y) || b_y > r_y.max(q_y));
    
    if is_d1 || is_d2 || is_c || is_r {
      return 1;
    }
    return 2;
  }
}
```
```python []
class Solution:
  def minMovesToCaptureTheQueen(self, r_y: int, r_x: int, b_y: int, b_x: int, q_y: int, q_x: int) -> int:
    # One move bishop diagonal
    d1 = (b_y - q_y) / (b_x - q_x) if b_x != q_x else float('inf')
    d2 = (r_y - q_y) / (r_x - q_x) if r_x != q_x else float('inf')
    if abs(d1) == 1:
      if d2 != d1 or r_y < min(b_y, q_y) or r_y > max(b_y, q_y):
        return 1

    # One move rook column
    if r_y == q_y:
      if b_y != r_y or b_x < min(r_x, q_x) or b_x > max(r_x, q_x):
        return 1
    
    # One move rook row
    if r_x == q_x:
      if b_x != r_x or b_y < min(r_y, q_y) or b_y > max(r_y, q_y):
        return 1

    return 2
```