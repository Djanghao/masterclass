# SLOW Solution in Elixir

**Author:** calogyne
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/3221265/](https://leetcode.com/problems/permutation-sequence/solutions/3221265/)

---

# Approach
Think of it as finding the path of a decision tree that, at each level, the fanout decrements by one. Each node determines the element that should be shuffled.

# Complexity
- Time complexity: $$O(??!!)$$

- Space complexity: $$O(??)$$
- Beats 100% of the other solutions in Elixir in terms of time and memory usage

# Code
```
defmodule Solution do
  def get_permutation(1, 1), do: "1"
  def get_permutation(n, ok) do
    2..n
    |> Enum.reverse()
    |> Enum.reduce(
      {ok - 1, Enum.reduce(1..n, & &1 * &2), 0, Enum.take('123456789', n)},
      fn i, {k, f, swapped_count, list} ->
        f = div(f, i)
        selection = div(k, f)
        {front, back} = Enum.split(list, swapped_count)
        {x, rest} = List.pop_at(back, selection)
        {k - f * selection, f, swapped_count + 1, front ++ [x | rest]}
    end)
    |> elem(3)
    |> List.to_string()
  end
end

```