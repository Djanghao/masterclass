# Python/Rust. Linear solution with constant space. With explanation.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949726/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949726/)

---

# Intuition

You can definitely write this more consice but this gives you the explanation of the logic.

It is essential here to understand how to find a maximum manhattan distance for an array. To do this you need to find maximum. $|x_i - x_j| + |y_i - y_j|$. To do this you need to unroll the modulo operation. This gives you 4 possible options and if you fix that `x_i < x_j` (you can do this as the result is symmetric), you will get two possible options.


Which gives you the function **find_max_distance**. Now this gives you just result on the whole array. But you need to find some maximum if you remove one point.

Which point should you remove? The point which gave you that maximum. So you should rewrite this function to keep track which points contribute to maximum. See **find_max_distance_with_pos**. Of course there would be two points. 

Now try to remove each one of the points and see what is the minimum between them.

-----------------------

Now this solution is correct and runs in $O(n)$ time, but it has few issues:
 - two different function. You do not need them (second one was just for explanation). You can just use `find_max_distance_with_pos`
 - we copy arrays two times. You do not need to do this. You can modify one function to skip one position

This reduces the number of lines you need to write and also you can do this in $O(1)$ space complexity. 

See `Rust` code.



# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$ (See rust solution)

# Code
```Rust []
impl Solution {
  
  fn min_dist(arr: &Vec<Vec<i32>>, p_ignore: usize) -> (i32, usize, usize) {
    let (mut max_sum, mut min_sum) = (i32::MIN, i32::MAX);
    let (mut max_dif, mut min_dif) = (i32::MIN, i32::MAX);
    let (mut res, mut p1, mut p2) = (0, 0, 0);
    let (mut p_max1, mut p_max2, mut p_min1, mut p_min2) = (0, 0, 0, 0);

    for p in 0 .. arr.len() {
      if p == p_ignore {
        continue;
      }

      let (x1, y1) = (arr[p][0], arr[p][1]);
      if x1 + y1 > max_sum {
        max_sum = x1 + y1;
        p_max1 = p;
      }

      if x1 + y1 < min_sum {
        min_sum = x1 + y1;
        p_min1 = p;
      }

      if x1 - y1 > max_dif {
        max_dif = x1 - y1;
        p_max2 = p;
      }

      if x1 - y1 < min_dif {
        min_dif = x1 - y1;
        p_min2 = p;
      }

      if res < max_sum - min_sum {
        p1 = p_max1;
        p2 = p_min1;
        res = max_sum - min_sum;
      }

      if res < max_dif - min_dif {
        p1 = p_max2;
        p2 = p_min2;
        res = max_dif - min_dif
      }
    }
    
    return (res, p1, p2);
  }
  
  pub fn minimum_distance(points: Vec<Vec<i32>>) -> i32 {
    let (_, p1, p2) = Self::min_dist(&points, usize::MAX);

    let (r1, _, _) = Self::min_dist(&points, p1);
    let (r2, _, _) = Self::min_dist(&points, p2);
    return r1.min(r2);
  }
}    
```
```python []
class Solution:
  
  def find_max_distance_with_pos(self, arr):
    max_sum, min_sum, max_dif, min_dif, res = -float('inf'), float('inf'), -float('inf'), float('inf'), 0
    p1, p2 = None, None

    for p, (x1, y1) in enumerate(arr):
      if x1 + y1 > max_sum:
        max_sum = x1 + y1
        p_max1 = p

      if x1 + y1 < min_sum:
        min_sum = x1 + y1
        p_min1 = p

      if x1 - y1 > max_dif:
        max_dif = x1 - y1
        p_max2 = p

      if x1 - y1 < min_dif:
        min_dif = x1 - y1
        p_min2 = p

      if res < max_sum - min_sum:
        p1, p2 = p_max1, p_min1
        res = max_sum - min_sum
      if res < max_dif - min_dif:
        p1, p2 = p_max2, p_min2
        res = max_dif - min_dif
    
    return res, p1, p2
  
  def find_max_distance(self, arr):
    max_sum, min_sum, max_dif, min_dif, res = -float('inf'), float('inf'), -float('inf'), float('inf'), 0
    for x1, y1 in arr:
      max_sum = max(max_sum, x1 + y1)
      min_sum = min(min_sum, x1 + y1)

      max_dif = max(max_dif, x1 - y1)
      min_dif = min(min_dif, x1 - y1)

      res = max(res, max_sum - min_sum, max_dif - min_dif)
    return res
  
  def minimumDistance(self, points: List[List[int]]) -> int:
    _, p1, p2 = self.find_max_distance_with_pos(points)
    
    tmp = [points[p] for p in range(len(points)) if p != p1]
    res1 = self.find_max_distance(tmp)
    
    tmp = [points[p] for p in range(len(points)) if p != p2]
    res2 = self.find_max_distance(tmp)
    
    return min(res1, res2)
    
        
```