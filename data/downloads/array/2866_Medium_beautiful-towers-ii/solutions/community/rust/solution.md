# Python 11L, Rust a little more. Linear solution monotonic stack

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/6087970/](https://leetcode.com/problems/beautiful-towers-ii/solutions/6087970/)

---

# Intuition

Lets assume you calculated `vals_l` and array where in position `i` you have maximum sum of all values to the left and the same for array `vals_r`. Having this information you can easily calculate the total sum at each index `vals_l[i] + vals_r[i]` and then find the max.

Now how to calculate those arrays? Lets assume your array is :

```
arr =   [3, 5, 7, 2, 3, 9, 7, 6]
pos      0  1  2  3  4  5  6  7
vals_l   .  .  .  .  X  .  .
```

Let look what will be the last value: `pos = 6`. The value will be the `vals_l[p] + arr[pos] * (pos - p) = X + 6 * 3.

Basically you need to find the position of the previous smaller value and multiply the difference in positions by `arr[pos]` (as you need to change call those values to arr[pos]). And add the value you calculated in `vals_l`.

So you can calculate them one by one. Here you first calculate position of previous smaller value and then use it in the next loop. In reality you can combine them in one loop as it was done only for clarity
 
```
  def dp(self, arr):
    stack, res = [], []
    for i, v in enumerate(arr):
      while stack and arr[stack[-1]] > v:
        stack.pop()

      res.append(-1 if not stack else stack[-1])
      stack.append(i)

    out = [0]
    for i, v in enumerate(arr):
      out.append(out[res[i] + 1] + (i - res[i]) * v)
    return out
```



# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```rust []
impl Solution {

  fn dp(arr: &Vec<i32>) -> Vec<i64> {
    let mut stack: Vec<usize> = Vec::new();
    let mut pos_smaller: Vec<i32> = vec![-1];
    let mut res: Vec<i64> = vec![0];

    for (i, &v) in arr.iter().enumerate() {
      while !stack.is_empty() && arr[stack[stack.len() - 1]] > v {
        stack.pop();
      }

      let last_pos = if stack.is_empty() { -1 } else { stack[stack.len() - 1] as i32};
      pos_smaller.push(last_pos);

      let contribution = (i as i32 - last_pos) as i64 * v as i64;
      res.push(res[(last_pos + 1) as usize] + contribution);
      stack.push(i);
    }

    return res;
  }

  pub fn maximum_sum_of_heights(mut arr: Vec<i32>) -> i64 {
    let vals_l = Self::dp(&arr);
    arr.reverse();
    let vals_r = Self::dp(&arr);
    
    let n = arr.len();
    let mut res = 0;
    for i in 0 ..= n {
      res = res.max(vals_l[i] + vals_r[n - i])
    }
    return res;
  }
}
```
```python []
class Solution:

  def dp(self, arr):
    stack, pos_smaller, res = [], [], [0]
    for i, v in enumerate(arr):
      while stack and arr[stack[-1]] > v:
        stack.pop()

      pos_smaller.append(-1 if not stack else stack[-1])
      res.append(res[pos_smaller[i] + 1] + (i - pos_smaller[i]) * v)
      stack.append(i)

    return res

  def maximumSumOfHeights(self, arr: List[int]) -> int:
    vals_l = self.dp(arr)
    vals_r = self.dp(arr[::-1])[::-1]
    return max([vals_l[i] + vals_r[i] for i in range(len(arr) + 1)])
```