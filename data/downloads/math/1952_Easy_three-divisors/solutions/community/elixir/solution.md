# Elixir, square of prime

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-divisors/solutions/4555986/](https://leetcode.com/problems/three-divisors/solutions/4555986/)

---

# Approach
Every number is divisible by 1 and itself. Hence we already have 2 divisors for the number. For a number to have only one divisor other than the above mentioned 2, the divisor and dividend must be same. Hence it is only possible for perfect squares. Moreover if the root of the number is not prime, then the number can have more than one divisor. Hence check if the number is a perfect square and the root of the number is prime.

# Complexity
- Time complexity:
O(n^1/4)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_three(n :: integer) :: boolean
  def is_three(n) when n < 3, do: false
  def is_three(n) do
    root = :math.sqrt(n) |> floor
    root * root == n && prime?(root) 
  end 

  defp prime?(n), do: prime?(n, 2, :math.sqrt(n) |> floor)
  defp prime?(n, i, max_i) when i <= max_i, do: rem(n, i) != 0 && prime?(n, i + 1, max_i)
  defp prime?(_, _, _), do: true
end
```