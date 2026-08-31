# Elixir, -half..half

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/4338013/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/4338013/)

---

# Approach
Create a list from -div(n,2)..div(n,2). If the number is odd add a 0 to the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec sum_zero(n :: integer) :: [integer]
  def sum_zero(n) do
    half = div(n, 2)
    res = create_sequence(half, -half, [])
    if rem(n, 2) != 0, do: [0 | res], else: res
  end 

  defp create_sequence(i, j, acc) when i >= j and j != 0, do: create_sequence(i, j + 1, [j | acc])
  defp create_sequence(i, 0, acc), do: create_sequence(i, 1, acc)
  defp create_sequence(_, _, acc), do: acc
end
```