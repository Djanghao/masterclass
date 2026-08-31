# Rust/Python binary search with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3563227/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3563227/)

---

# Intuition

Lets slook at the following colors array `[1, 1, 2, 1, 3, 2, 2, 3, 3]`. We can seee that we can decompose it into 3 different arrays of positions for different colors:

 - `0, 1, 3`
 - `2, 5, 6`
 - `4, 7, 8`

Now for every query we will just need to find where in those sorted arrays the values will be inserted. 

There are a couple of edge cases we need to be aware:
 - if the corresponding array is empty, then -1
 - if the value is found at the index, then distance is zero
 - if position is at the end of the array (left, right)

# Complexity
Let $n$ be the size of colors array, and $q$ the size of queries.

- Time complexity: $O(n + q \\log n)$
- Space complexity: $O(n + q)$

# Code
```Rust []
impl Solution {
  pub fn shortest_distance_color(colors: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
    let mut data = vec![vec![], vec![], vec![]];
    for i in 0 .. colors.len() {
      data[(colors[i] - 1) as usize].push(i);
    }

    let mut res: Vec<i32> = Vec::with_capacity(queries.len());
    for i in 0 .. queries.len() {
      let (pos, c) = (queries[i][0] as usize, (queries[i][1] - 1) as usize);
      if data[c].is_empty() {
        res.push(-1);
        continue;
      }

      let r = data[c].binary_search(&pos);
      match r {
        Ok(_) => res.push(0),
        Err(p) => {
          if p == 0 {
            res.push((data[c][0] - pos) as i32);
          } else if p == data[c].len() {
            res.push((pos - data[c][p - 1]) as i32);
          } else {
            res.push((pos - data[c][p - 1]).min(data[c][p] - pos) as i32);
          }
        }
      }
    }

    return res;
  }
}
```
```python []
from bisect import bisect

class Solution:
  def shortestDistanceColor(self, colors: List[int], queries: List[List[int]]) -> List[int]:
    data = [[-float('inf')], [-float('inf')], [-float('inf')]]
    for i, c in enumerate(colors):
      data[c - 1].append(i)
    
    for i in [0, 1, 2]:
      data[i].append(float('inf'))


    res = []
    for pos, c in queries:
      if len(data[c - 1]) == 2:
        res.append(-1)
        continue

      p = bisect(data[c - 1], pos)
      if data[c - 1] == pos:
        res.append(0)
      else:
        res.append(min(pos - data[c - 1][p - 1], data[c - 1][p] - pos))
    
    return res
```

