# Tail recursive using elixir

**Author:** linhpduc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5063094/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5063094/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec min_moves(target :: integer, max_doubles :: integer) :: integer
  def min_moves(target, max_doubles) do
    move(target, max_doubles, 0)
  end

  defp move(target, 0, acc), do: acc + target - 1
  defp move(1, _, acc), do: acc
  defp move(target, max_doubles, acc) do
    case rem(target, 2) do
      0 -> move(div(target, 2), max_doubles - 1, acc + 1)
      1 -> move(target - 1, max_doubles, acc + 1)
    end
  end
end
```