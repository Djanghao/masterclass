# [Elixir | Go] Prime Factorization | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5663427/](https://leetcode.com/problems/2-keys-keyboard/solutions/5663427/)

---

![image.png](./images/0.png)

# Intuition
We can detect the pattern by looking at the below examples:
```
# 7 -> C P P P P P P -> 7
# 5 -> C P P P P -> 5
# 10 -> C P P P P C P -> 5 + 2 -> 7
# 32 -> C P C P C P C P C P -> 2*5 -> 10
```

We can say that the optimal solution is obtained from sum of the prime factorization of the integer.

# Approach
To obtain the prime factorization, just divide the n with the integer from 2 until square root of n. If there are no n that can be divided anymore, we can assume that the n is a prime number. Hence, return n.

# Complexity
- Time complexity:
$$O(sqrt(n))$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec min_steps(n :: integer, i :: integer) :: integer
  def min_steps(n, i) when i*i > n, do: n
  def min_steps(n, i) when rem(n, i) == 0, do: i + min_steps(div(n,i))
  def min_steps(n, i), do: min_steps(n, i+1)

  @spec min_steps(n :: integer) :: integer
  def min_steps(1), do: 0
  def min_steps(n), do: min_steps(n,2)
end
```
```go []
func minSteps(n int) int {
  if n == 1 { return 0 }

  squareRoot := math.Sqrt(float64(n))
  for i:=2; i<=int(squareRoot); i++ {
    if n%i == 0 {
      return minSteps(n/i) + i
    }
  }

  return n
}
```