# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/4315567/](https://leetcode.com/problems/last-stone-weight/solutions/4315567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Uses Enum.sort to sort the stones in descending order, smashes the two largest stones in the list and recurses with the rest of the stones.

# Complexity
- Time complexity:
O(n\xB2log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec last_stone_weight(stones :: [integer]) :: integer
  def last_stone_weight(stones), do: get_two_largest_nums(stones) |> do_last_stone_weight

  defp do_last_stone_weight({[x, y], rest}) when rest != [] do
    rest = if x == y, do: rest, else: [x - y | rest]
    get_two_largest_nums(rest) |> do_last_stone_weight
  end
  defp do_last_stone_weight({[x, y], _}), do: x - y
  defp do_last_stone_weight({[x], _}), do: x

  defp get_two_largest_nums(nums), do: Enum.sort(nums, :desc) |> Enum.split(2)
end
```