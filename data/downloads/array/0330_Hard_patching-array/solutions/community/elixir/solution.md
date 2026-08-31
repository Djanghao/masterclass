# Elixir - Greedy Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/patching-array/solutions/5319764/](https://leetcode.com/problems/patching-array/solutions/5319764/)

---

# Complexity
- Time complexity: $$O(\\sqrt n)$$ in worst case, where $$n$$ _is_ the second argument `n`.
- Space complexity: $$O(1)$$

# Code
```elixir
defmodule Solution do
  @spec min_patches(nums :: [integer], n :: integer) :: integer
  def min_patches(nums, n) do
    patch(nums, n, 0, 0)
  end

  defp patch(_nums, n, cap, count) when n <= cap do
    count
  end

  defp patch([], n, cap, count) do
    patch([cap + 1], n, cap, count + 1)
  end

  defp patch([h | t], n, cap, count) when h > cap + 1 do
    patch([cap + 1, h | t], n, cap, count + 1)
  end

  defp patch([h | t], n, cap, count) do
    patch(t, n, cap + h, count)
  end
end

```