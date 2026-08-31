# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/4652614/](https://leetcode.com/problems/min-max-game/solutions/4652614/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec min_max_game(nums :: [integer]) :: integer
  def min_max_game([n]), do: n
  def min_max_game(nums), do: do_min_max_game(nums, true, [])

  defp do_min_max_game([a, b | tl], min?, acc) do
    acc = [(if min?, do: min(a,b), else: max(a,b)) | acc]
    do_min_max_game(tl, !min?, acc)
  end
  defp do_min_max_game(_, _, acc), do: min_max_game(Enum.reverse(acc))
end
```