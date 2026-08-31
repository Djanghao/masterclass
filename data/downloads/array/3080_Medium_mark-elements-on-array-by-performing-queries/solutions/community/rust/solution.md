# Rust/Python sort and mark elements with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4913461/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4913461/)

---

# Intuition

The question tells that we need to keep track which elements were marked so we need to have a binary array `marked`. We also need to iterate over the values from smallest to highest so we either need to sort elements or to use min-heap. I use sorting and store the data in `data`.

As we need for each query to return the number of non-marked element, so we keep the value of current sum `total` and at each step update it.

Now at each step you check if the element at `q[0]` is marked (and do updates). Then you move over the values in your `data` maintaining a position and also check for at most `k` element. If the value is not marked, do update and reduce `k`. 



# Complexity
Let $n$ be the size of the array and $q$ the number of queries.

- Time complexity: $O(n \\log n + q)$
- Space complexity: $O(n)$

# Code
```python []
class Solution:
  def unmarkedSumArray(self, nums: List[int], queries: List[List[int]]) -> List[int]:
    data = sorted([(nums[i], i) for i in range(len(nums))])
    marked = [False] * len(nums)
    total, res, pos = sum(nums), [], 0

    for p, k in queries:
      if not marked[p]:
        marked[p] = True
        total -= nums[p]

      while pos < len(nums) and k > 0:
        if not marked[data[pos][1]]:
          total -= data[pos][0]
          marked[data[pos][1]] = True
          k -= 1
        pos += 1
      
      res.append(total)
    
    return res
```
```Rust []
impl Solution {
  pub fn unmarked_sum_array(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i64> {
    let n = nums.len();
    let mut data = Vec::with_capacity(n);
    let mut total = 0;
    for i in 0 .. n {
      data.push((nums[i], i));
      total += nums[i] as i64;
    }
    data.sort_unstable();

    let mut marked = vec![false; n];
    let (mut res, mut pos) = (Vec::with_capacity(queries.len()), 0);

    for q in queries {
      let (p, mut k) = (q[0] as usize, q[1]);
      if !marked[p] {
        marked[p] = true;
        total -= nums[p] as i64;
      }

      while pos < n && k > 0 {
        if !marked[data[pos].1] {
          total -= data[pos].0 as i64;
          marked[data[pos].1] = true;
          k -= 1;
        }
        pos += 1;
      }

      res.push(total);
    }

    return res;
  }
}
```