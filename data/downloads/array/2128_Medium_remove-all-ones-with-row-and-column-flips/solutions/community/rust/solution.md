# Rust/Python with detailed explanation. Rust 10 lines without overcomplications

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/3917113/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/3917113/)

---

# Intuition
This problem is the same as the following problem. Starting from a zero matrix, flip any rows/columns to get a matrix X. After a few manipulation you will see that any matrix achieved from zero matrix suppose to have at most 2 different rows/column and if you have two different, they suppose to be flips of each other. As in all programming languages it is easier to check rows of matrices, I will do it here.

My original approach to check for this condition was to conver all rows to a number (as in python you have infinite arithmetic for free). So I check if I have at most two numbers and then see if the numbers are flips of each other. See python's solution.

----------

But then I started to think how can I do the same in Rust (which does not have infinite arithmetic). And then I saw that this is not even needed as I can just check whether the rows are the same. Because if they are not, I need to check if each element in row j is different from element in zero-th row. `if M[0][i] == M[j][i] {`.

And if no, this means that we already have rows which are different and can't become the same after a flip, so it is not possible to reach zero.

# Complexity
- Time complexity: $O(n \	imes m)$
- Space complexity: $O(1)$

# Code


```Rust []
impl Solution {
  pub fn remove_ones(mut M: Vec<Vec<i32>>) -> bool {
    for j in 1 .. M.len() {
      if M[0] != M[j] {
        for i in 0 .. M[0].len() {
          if M[0][i] == M[j][i] {
            return false;
          }
        }
      }
    }

    return true;
  }
}
```
```python []
class Solution:
  def removeOnes(self, M: List[List[int]]) -> bool:
    seen = set()
    for line in M:
      s, m = 0, 1
      for v in line:
        if v == 1:
          s += v * m
        m *= 2
      seen.add(s)
      if len(seen) > 2:
        return 0
    
    if len(seen) == 1:
      return True

    v1, v2 = list(seen)
    return v1 + v2 + 1 == pow(2, len(M[0]))
```