# Rust/Python/Go linear with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3602310/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3602310/)

---

# Intuition

You can easily see that the array repeats itself after `2 * l` (wehre `l` is `len(nums)`) iterations. So you can treat `ts` as `ts % (2 * l)`

After it you need to calculate what will be the maximum size of array at each ts. It will be `max_l = l - ts if ts < l else ts - l`.

Then you need to look at 2 cases if `ts > l` in this case the answer is jsut `nums[ind]` and otherwise, where the answer is `nums[ts + ind]`

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn element_in_nums(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
    let (l, q) = (nums.len(), queries.len());
    let mut res = Vec::with_capacity(q);

    for q in queries {
      let (ts, ind) = ((q[0] as usize)% (2 * l) , q[1] as usize);
      let mut max_l = 0;
      if ts < l {
        max_l = l - ts;
      } else {
        max_l = ts - l;
      }

      if max_l <= ind {
        res.push(-1);
      } else if ts > l {
        res.push(nums[ind]);
      } else {
        res.push(nums[ts + ind]);
      }
    }

    return res;
  }
}
```
```python []
class Solution:

  def elementInNums(self, nums: List[int], queries: List[List[int]]) -> List[int]:
    res, l = [], len(nums)
    for ts, ind in queries:
      ts = ts % (2 * l)
      max_l = l - ts if ts < l else ts - l

      if max_l <= ind:
        res.append(-1)
      elif ts > l:
        res.append(nums[ind])
      else:
        res.append(nums[ts + ind])
    
    return res

```
```Go []
func elementInNums(nums []int, queries [][]int) []int {
  l, q := len(nums), len(queries)
  res := make([]int, q)

  for i := 0; i < q; i++ {
    ts, ind := queries[i][0] % (2 * l), queries[i][1]
    max_l := l - ts
    if ts >= l {
      max_l = ts - l
    }

    if max_l <= ind {
      res[i] = -1
    } else if ts > l {
      res[i] = nums[ind]
    } else {
      res[i] = nums[ts + ind]
    }
  }

  return res
}
```
