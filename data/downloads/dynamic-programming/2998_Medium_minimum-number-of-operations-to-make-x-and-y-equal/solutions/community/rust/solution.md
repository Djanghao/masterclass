# Rust/Python linear solution, iterative solution with explanation.

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4754454/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4754454/)

---

# Intuition

You need to notice that if `x < y` you can only increment x to reach y. Also you still might increment `x` even if it is less than `y`. The only reason to do it is to make it divisible by one 11 or 5. 

Now you can iteratively create next steps:
 - `x + 1`
 - `x - 1` (if `x > 1`)
 - `x // 11` if x is divisible by 11
 - `x // 5` if x is divisible by 5

So you create a frontier and at each step you expand your frontier (also maintaining the values you have already seen)

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {

  pub fn minimum_operations_to_make_equal(x: i32, y: i32) -> i32 {
    if x <= y {
      return (y - x) as i32;
    }

    let (x, y) = (x as usize, y as usize);
    let mut seen = vec![i32::MAX; (x * 11 + 1) as usize];
    seen[x] = 0;

    let mut frontier = vec![x];
    while seen[y] == i32::MAX {
      let mut new_frontier = Vec::new();
      for v in frontier {
        let mut tmp = vec![v + 1];
        if v > 1 {
          tmp.push(v - 1);
        }
        if v % 11 == 0 {
          tmp.push(v / 11);
        }
        if v % 5 == 0 {
          tmp.push(v / 5);
        }

        for v_ in tmp {
          if seen[v_] == i32::MAX {
            new_frontier.push(v_);
          }
          seen[v_] = seen[v_].min(seen[v] + 1);
        }
      }
      frontier = new_frontier;

    }
    return seen[y];
  }
}
```
```python []
class Solution:
  def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
    if y >= x:
      return y - x

    seen = [float('inf')] * (x * 11 + 1)
    seen[x] = 0

    frontier = [x]
    while seen[y] == float('inf'):
      new_frontier = []
      for v in frontier:
        tmp = [v + 1]
        if v > 1:
          tmp.append(v - 1)
        if v % 11 == 0:
          tmp.append(v // 11)
        if v % 5 == 0:
          tmp.append(v // 5)

        for v_ in tmp:
          if seen[v_] == float('inf'):
            new_frontier.append(v_)
          seen[v_] = min(seen[v_], seen[v] + 1)

      frontier = new_frontier

    return seen[y]
```
