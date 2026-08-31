# Rust/Python 3 lines. Quadratic with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4342859/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4342859/)

---

# Intuition
Lets walk thought the problem from end and assume that we know the solution to all positions starting from $i + 1$. and they are stored in some `dp`.

Now what will be the solution of $dp[i]$? Of course we have to take pay the original cost (`arr[i]`) and then take the smallest possible value starting from i + 1 and next i + 1 elements (which we already calculated).

This gives us an easy solution where we move from the end of the array and calculate the values. Notice that we do not need to create the array `dp` and can work directly with original array.

Also notice that there is no need to start from the every value and can drop half of the array

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn minimum_coins(mut arr: Vec<i32>) -> i32 {
    for i in (0 .. (arr.len() - 1) / 2).rev() {
      arr[i] += *arr[i + 1 .. 2 * i + 3].iter_mut().min().unwrap();
    }
    return arr[0];
  }
}
```
```python []
class Solution:
  def minimumCoins(self, arr: List[int]) -> int:
    for i in range((len(arr) - 1) // 2 - 1, -1, -1):
      arr[i] += min(arr[i + 1: 2 * i + 3])

    return arr[0]
```