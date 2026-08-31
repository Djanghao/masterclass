# Rust/Python square root solution with explanation

**Author:** SalvadorDali
**Votes:** 5
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4696340/](https://leetcode.com/problems/perfect-squares/solutions/4696340/)

---

# Intuition

In math [there is a theorem](https://en.wikipedia.org/wiki/Legendre%27s_three-square_theorem) which claims that any answer can be represented at most with 4 squares. And this happens when $n = 4^a (8b + 7)$

So we can easily check if we can represent it with 4 numbers. If no, then it can be represented as 1, 2 or 3 numbers.

We can easily check if the answer is 1 (in $O(1)$). Just check if `int(sqrt(x))^2 = x`

Now to check if the answer is 2, you try all different combinations that `i^2 + j^2 = x`. And this is done in $O(\\sqrt n)$

If this does not work, then the answer is 3.


# Complexity
- Time complexity: $O(\\sqrt n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn num_squares(mut n: i32) -> i32 {
    while n % 4 == 0 {
      n /= 4;
    }

    if n % 8 == 7 {
      return 4;
    }

    if ((n as f64).sqrt() as i32).pow(2) == n {
      return 1;
    }

    for i in 1 .. ((n as f64).sqrt() as i32 + 1) {
      let v = n - i * i;
      if ((v as f64).sqrt() as i32).pow(2) == v {
        return 2;
      }
    }

    return 3;
  }
}
```
```python []
class Solution:
  def numSquares(self, n: int) -> int:
    while not n % 4:
      n /= 4
      
    if n % 8 == 7:
      return 4
    
    for i in range(math.ceil(math.sqrt(n))):
      j = math.floor(math.sqrt(n - i*i))
      if i*i + j*j == n:
        if i > 0 and j > 0:
          return 2
        return 1           
    return 3 
```
