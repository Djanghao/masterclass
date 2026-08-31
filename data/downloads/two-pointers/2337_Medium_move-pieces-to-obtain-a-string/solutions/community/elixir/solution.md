# Elixir - Verbose Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6114985/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6114985/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec can_change(start :: String.t, target :: String.t) :: boolean
  def can_change(start, target) do
    can_change(start, target, 0, 0)
  end

  defp can_change("", "", i, i), do: true

  defp can_change("", "", _, _), do: false

  defp can_change("L" <> _, "R" <> _, _i, _j), do: false

  defp can_change("R" <> _, "L" <> _, _i, _j), do: false

  defp can_change("L" <> _, "", _i, _j), do: false

  defp can_change("R" <> _, "", _i, _j), do: false

  defp can_change("", "R" <> _, _i, _j), do: false

  defp can_change("", "L" <> _, _i, _j), do: false

  defp can_change("L" <> _, "L" <> _, i, j) when i < j, do: false

  defp can_change("R" <> _, "R" <> _, i, j) when i > j, do: false

  defp can_change("L" <> start, "L" <> target, i, j) do
    can_change(start, target, i + 1, j + 1)
  end

  defp can_change("R" <> start, "R" <> target, i, j) do
    can_change(start, target, i + 1, j + 1)
  end

  defp can_change("_" <> start, "_" <> target, i, j) do
    can_change(start, target, i + 1, j + 1)
  end

  defp can_change("_" <> start, target, i, j) do
    can_change(start, target, i + 1, j)
  end

  defp can_change(start, "_" <> target, i, j) do
    can_change(start, target, i, j + 1)
  end
end
```