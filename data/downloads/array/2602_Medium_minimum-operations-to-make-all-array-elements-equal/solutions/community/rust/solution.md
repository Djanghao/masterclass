# Rust, Python. (n + m) log n. Detailed explanation with math

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3475424/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3475424/)

---

# Intuition
Lets look how to address this for one query and the value is $v$.

- If the numbers are below $v$. Then the results are $v - a_1 + v - a_2 + ... v - a_n = v \\cdot n -  \\sum_{i=1}^{n} a_i $
- If the numbers are above $v$. With similar logic, results are $\\sum_{i=1}^{n} a_i - v \\cdot n$

So we need to find how many numbers are below and above the $v$ and prefix sums to be able to quickly find sums. To be do both of those efficiently you need to sort array of numbers.

After the sorting you will have:

$a_1, a_2, ..., a_k$ **v** $a_{k + 1}, ..., a_n$

The result is:

$v \\cdot k - \\sum_{i=1}^{k} a_i + s - \\sum_{i=1}^{k} a_i - v\\cdot n + v \\cdot k = s + 2 vk -vn - 2 \\sum_{i=1}^{k} a_i = s + v (2k - n) - 2 \\sum_{i=1}^{k} a_i$

The value of `s` is a full sum: `prefix[-1]`. The value of sum is `prefix[k]`. 

# Complexity
- Time complexity: $O((n + m) \\log n)$
- Space complexity: $O(n)$


```Rust []
impl Solution {
  pub fn min_operations(mut nums: Vec<i32>, queries: Vec<i32>) -> Vec<i64> {
    nums.sort_unstable();
    let n = nums.len();

    let mut prefix: Vec<i64> = vec![0; n + 1];
    for i in 0 .. n {
      prefix[i + 1] = prefix[i] + nums[i] as i64;
    }

    let mut res: Vec<i64> = vec![0; queries.len()];
    for i in 0 .. queries.len() {
      let k = match nums.binary_search(&queries[i]) {
        Err(k) => k,
        Ok(k)  => k,
      };
      res[i] = prefix[n] + (queries[i] as i64) * (2 * k - n) as i64 - 2 * prefix[k];
    }

    return res;
  }
}
```
```python []
from bisect import bisect_right

class Solution:
  def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
    nums.sort()

    n = len(nums)
    prefix = [0] * (n + 1)
    for i, v in enumerate(nums):
      prefix[i + 1] = prefix[i] + v

    res, s = [0] * len(queries), prefix[-1]
    for i, v in enumerate(queries):
      k = bisect_right(nums, v)
      res[i] = s + v * (2 * k - n) - 2 * prefix[k]
    
    return res
```


Question to rust pro (this is my first weeks, so not so fluent). Is there a way to combine two arms in match (err/ok)?
