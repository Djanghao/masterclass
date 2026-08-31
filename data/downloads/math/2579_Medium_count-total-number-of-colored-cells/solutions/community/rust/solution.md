# O(1). With simple mathematical full proof. Rust, Python

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3464419/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3464419/)

---

# Intuition
Lets assume that we know the answer of $a_{n - 1}$ and need to know the answer for $a_n$


```
    X          |
  X X X        | this height is (n - 1)
X X X X X      |
  X X X
    X
```

How many points will we add next turn? If we add them in this manner,

```
      .
    * X .
  * X X X .
. X X X X X .
  . X X X *
    . X *
      .
```

We see that we will add $2 n$ dots and $2(n - 2)$ stars. So in total we add $4(n - 1)$. 

So we have a recursive function:
 
- $a_1 = 1$
- $a_n = a_{n - 1} + 4 (n - 1)$

Unwinding this recursion we get 

$ a_n = a_{n - 1} + 4 (n - 1) = a_{n-2} + 4 (n - 1 + n - 2) = ... = 1 + 4 (n - 1 + n - 2 + ... + 3 + 2 + 1)$

Using arithmetic progression we get:

$$a_n = 1 + 2 n(n-1)$$ 


# Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

```Rust []
impl Solution {
  pub fn colored_cells(n: i32) -> i64 {
    let n = n as i64;
    return 1 + 2 * n * (n - 1);
  }
}
```
```python []
class Solution:
  def coloredCells(self, n: int) -> int:
    return 1 + 2 n * (n - 1)
```
