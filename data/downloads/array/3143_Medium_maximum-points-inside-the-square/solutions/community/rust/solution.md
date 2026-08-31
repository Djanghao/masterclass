# Rust/Python binary search with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5149661/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5149661/)

---

# Intuition

You can see that a function that checks if whether the values inside of the square have unique characters is monotone. Which means that you can use binary search where you are trying different sizes of squares in binary search fashion.

What this helper function does is straight-forward. You store which characters have you seen and now many normal points have you found.

Now you iterate over all of the points and if the point is inside the square, then check if the character was not seen (if no, this square is not possible). The function just returns whether the square is possible and the number of points.

Now you use this helper in a binary search.

# Complexity

Let $n$ be the size of array of points and $k$ be the biggest absolute value of the coordinate

- Time complexity: $O(n \\log k)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:

  def is_ok(self, points, s, h):
    seen, num_points = [False] * 26, 0
    for i in range(len(points)):
      y, x = points[i]
      if -h <= y <= h and -h <= x <= h:
        if seen[ord(s[i]) - 97]:
          return False, -1
        seen[ord(s[i]) - 97] = True
        num_points += 1
    
    return True, num_points


  def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
    lo, hi, res = 0, max(max(abs(y), abs(x)) for y, x in points) + 3, 0
    while lo < hi:
      mi = (lo + hi) // 2
      is_ok, num = self.is_ok(points, s, mi)
      if is_ok:
        lo = mi + 1
        res = max(res, num)
      else:
        hi = mi

    return res
```
```Rust []
impl Solution {

  fn is_ok(points: &Vec<Vec<i32>>, s: &[u8], h: i32) -> (bool, i32) {
    let mut seen = [false; 26];
    let mut num_points = 0;

    for i in 0 .. points.len() {
      if -h <= points[i][0] && points[i][0] <= h && -h <= points[i][1] && points[i][1] <= h {
        if seen[(s[i] - 97) as usize] {
          return (false, -1);
        }
        seen[(s[i] - 97) as usize] = true;
        num_points += 1;
      }
    }

    return (true, num_points);
  }

  pub fn max_points_inside_square(points: Vec<Vec<i32>>, s: String) -> i32 {
    let s = s.as_bytes();
    let (mut lo, mut hi, mut res) = (0, 0, 0);
    for i in 0 .. points.len() {
      hi = hi.max(points[i][0].abs()).max(points[i][1].abs());
    }
    hi += 3;

    while lo < hi {
      let mi = (lo + hi) / 2;
      let (is_ok, num) = Self::is_ok(&points, s, mi);

      if is_ok {
        lo = mi + 1;
        res = res.max(num);
      } else {
        hi = mi;
      }
    }

    return res;
  }
}

```