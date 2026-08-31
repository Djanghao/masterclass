# Rust/Go/Python sort intervals with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/4007876/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/4007876/)

---

# Intuition
As with majority of intervals solutions you need to sort the intervals first to be able to properly merge them and do other operations.

Now you need to keep track of the last unmerged element which I call `prev` in the code. Because the range starts at zero, we initiate `prev = -1`. 

Now we iterate intervals and each time we:

 1. Check `interval[0] > prev + 1`. If yes, it mean that we have some range which can't be covered by anything. What is this range? It will be `[prev + 1, interval[0] - 1]`. We also need to change the value of prev here as now it will be `interval[1]`
 2. If the first statment is wrong, it means that our `prev` value overlap with our new interval. This means that `prev = max(prev, interval[1])`

Now when we finish with this operation we might end up with the end of the range which migh be untracked. We can check if it was with `n > prev + 1` and in this case we add that range `[prev + 1, n - 1]`


# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(n)$

# Code
```Go []
func findMaximalUncoveredRanges(n int, ranges [][]int) [][]int {
  prev, res := -1, [][]int{}
  sort.Slice(ranges, func(i, j int) bool {
    return ranges[i][0] < ranges[j][0]
  })

  for _, v := range ranges {
    if v[0] > prev + 1 {
      res = append(res, []int{prev + 1, v[0] - 1})
      prev = v[1]
    } else if v[1] > prev {
      prev = v[1]
    }
  }

  if n > prev + 1 {
    res = append(res, []int{prev + 1, n - 1})
  }

  return res
}
```
```python []
class Solution:
  def findMaximalUncoveredRanges(self, n: int, ranges: List[List[int]]) -> List[List[int]]:
    prev, res = -1, []
    for v1, v2 in sorted(ranges):
      if v1 > prev + 1:
        res.append([prev + 1, v1 - 1])
        prev = v2
      else:
        prev = max(v2, prev)

    if n > prev + 1:
      res.append([prev + 1, n - 1])
    return res
```
```Rust []
impl Solution {
  pub fn find_maximal_uncovered_ranges(n: i32, mut ranges: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let (mut prev, mut res) = (-1, Vec::new());
    ranges.sort_unstable();

    for v in ranges {
      if v[0] > prev + 1 {
        res.push(vec![prev + 1, v[0] - 1]);
        prev = v[1];
      } else if v[1] > prev {
        prev = v[1];
      }
    }

    if n > prev + 1 {
      res.push(vec![prev + 1, n - 1]);
    }

    return res;
  }
}
```
