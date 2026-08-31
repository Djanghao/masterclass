# Rust/Python/Go logarithmic solution with explanation and no gray code

**Author:** SalvadorDali
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345019/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345019/)

---

# Intuition
After solving a problem I saw that there is an elegant solution which relies on knowing the theory of gray code. I knew what is it but it was not enough for me to notice it.

Still seems to me that my approach is also elegant and have the same efficiency. But at first we need to understand the intuition of what is going on in the problem. First it is clear that we have to look at numbers in binary representation. 

So lets look at a number which has 1 and then multiple zeros. As we only allow to change either last element or the element before the one (and having all the element after it as zero), then in your sequence of conversion you will encounter every value from 0..0 to 1.1. So for $n$ zeros you will need $2^{k + 1} - 1$ steps. 

Now when you have a couple of zeros and ones. Here we have only 2 ones.

```
10010
```

The solution will need $2^5 - 1$ but we already have seen $2^2 - 1$ elements. So result will be $r = 2^5 - 1 - (2^2 - 1)$.

Now if we add a another one somewhere in front

```
110010
```

then $r = 2^6 - 1 - r$. Which gives us an iterative solution



# Complexity
- Time complexity: $O(\\log n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def minimumOneBitOperations(self, n: int) -> int:
    res, curr = 0, 1
    while n:
      if n % 2:
        res = curr - res
      curr = curr * 2 + 1
      n //= 2
    
    return res
```
```Rust []
impl Solution {
  pub fn minimum_one_bit_operations(mut n: i32) -> i32 {
    let (mut res, mut curr) = (0, 1);
    while n != 0 {
      if n % 2 == 1 {
        res = curr - res;
      }
      curr = 2 * curr + 1;
      n /= 2;
    }
    return res;
  }
}
```
```Go []
func minimumOneBitOperations(n int) int {
  res, curr := 0, 1
  for n != 0 {
    if n % 2 == 1 {
      res = curr - res
    }
    curr = 2 * curr + 1
    n /= 2
  }
  return res
}
```