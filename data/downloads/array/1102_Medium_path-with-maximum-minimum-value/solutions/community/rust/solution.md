# Rust/Python priority queue with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3635003/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3635003/)

---

# Intuition

It seems like a shortest path problem but with a twist. We do not care about the length of the path or the sum of values in the path and we just want to make sure that the smallest element of the path is the biggest possible.

This already hints to a solution as it provides where to move. Lets assume that he have many potential paths in our frontier of paths. Because we do not care about the actual path and just their minimum value we can encode them as a tripple:

 1. `min_score` along this path
 2. `y` value of the end of the path
 3. `x` value of the end of the path

What is the most lucrative path to take? Of course the one which has the maximum score so far. Now from this path we try all possible moves in 4 directions. And this will produce at most 4 paths which will be `(min(min_score, M[y_new][x_new]), y_new, x_new)`

We can easily achieve taking the most lucrative score just using max-heap. So now we have just one issue is that we will infinitely move over the same values again and again. So we need to mark already seen positions.


# Complexity
- Time complexity: $O(n^2 \\log n)$
- Space complexity: $O(n^2)$

# Code
```Rust []
use std::collections::BinaryHeap;

impl Solution {
  pub fn maximum_minimum_path(M: Vec<Vec<i32>>) -> i32 {
    let (Y, X) = (M.len(), M[0].len());
    let mut seen = vec![vec![false; X]; Y];
    let mut frontier = BinaryHeap::from([(M[0][0], 0, 0)]);

    let dirs = [-1, 0, 1, 0, -1];
    seen[0][0] = true;
    
    while !frontier.is_empty() {
      let (score, y, x) = frontier.pop().unwrap();
      if y == Y - 1 && x == X - 1 {
        return score;
      }

      for i in 0 .. 4 {
        let y_ = (y as i32 + dirs[i]) as usize;
        let x_ = (x as i32 + dirs[i + 1]) as usize;

        if y_ >= Y || x_ >= X || seen[y_][x_] {
          continue;
        }

        seen[y_][x_] = true;
        frontier.push((score.min(M[y_][x_]), y_, x_));
      }
    }

    return -1;  // not possible
  }
}
```
```python []
from heapq import heappop, heappush

class Solution:
  def maximumMinimumPath(self, M: List[List[int]]) -> int:
    Y, X, dirs = len(M), len(M[0]), [-1, 0, 1, 0, -1]

    seen = [[0] * X for _ in range(Y)]
    frontier, seen[0][0] = [(-M[0][0], 0, 0)], 1

    while frontier:
      score, y, x = heappop(frontier)

      if y == Y - 1 and x == X - 1:
        return -score

      for i in range(4):
        y_, x_ = y + dirs[i], x + dirs[i + 1]
        if y_ < 0 or y_ == Y or x_ < 0 or x_ == X or seen[y_][x_] == 1:
          continue

        seen[y_][x_] = 1
        heappush(frontier, (max(-M[y_][x_], score), y_, x_))

    return 0
```
