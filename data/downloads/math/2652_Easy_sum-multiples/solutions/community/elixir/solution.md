# [Elixir] Recursive Method | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/5763332/](https://leetcode.com/problems/sum-multiples/solutions/5763332/)

---

![image.png](./images/0.png)

# Approach
Iterate numbers from n to 1, check if the iterated number is divisible by 3, 5, or 7. If yes, add it to the result.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec sum_of_multiples(n :: integer) :: integer
  def sum_of_multiples(1), do: 0
  def sum_of_multiples(n) do
    cond do
      rem(n, 3) == 0 -> n + sum_of_multiples(n-1)
      rem(n, 5) == 0 -> n + sum_of_multiples(n-1)
      rem(n, 7) == 0 -> n + sum_of_multiples(n-1)
      true -> sum_of_multiples(n-1)
    end
  end
end
```