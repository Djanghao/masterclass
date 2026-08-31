# [Elixir] Counter Recursion Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5451138/](https://leetcode.com/problems/crawler-log-folder/solutions/5451138/)

---

# Approach
I realized that we dont need to put every element in stack. Instead I use counter that increment when I encounter "x/", and decrement when I encounter "../".


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
defmodule Solution do
  @spec min_operations(logs :: [String.t], depth :: integer) :: integer
  defp min_operations([], depth), do: depth
  defp min_operations([h | t], depth) do
    depth = case h do
      "../" -> depth - 1
      "./" -> depth
      _ -> depth + 1
    end
    depth = if depth < 0, do: 0, else: depth

    min_operations(t, depth)
  end

  @spec min_operations(logs :: [String.t]) :: integer
  def min_operations(logs), do: min_operations(logs, 0)
end
```