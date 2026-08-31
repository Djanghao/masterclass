# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4701025/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4701025/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec pivot_integer(n :: integer) :: integer
  def pivot_integer(n) do
    n_sum = n * (n + 1) |> div(2)
    x = :math.sqrt(n_sum)
    if x == floor(x) + 0.0, do: floor(x), else: -1
  end
end
```