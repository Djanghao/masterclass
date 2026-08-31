# Elixir - O(n) solution | Generalized to O(n log k) for k colors

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913996/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913996/)

---

# Intuition
The number of swaps needed equals to the number of inversions in the string.

An inversion is a pair of indices `i` and `j` in the string `s` where `i < j` and `s[i] > s[j]`.

# Complexity
- Time Complexity: $$O(n \\log k)$$ for k colors of balls.
- Space Complexity: $$O(k)$$ for k colors of balls.

# Code
```elixir [Two colors]
defmodule Solution do
  @spec minimum_steps(s :: String.t) :: integer
  def minimum_steps(s) do
    inversions(s, 0, 0)
  end

  defp inversions(<<?0, rest::binary>>, ones, acc) do
    inversions(rest, ones, acc + ones)
  end

  defp inversions(<<?1, rest::binary>>, ones, acc) do
    inversions(rest, ones + 1, acc)
  end

  defp inversions(<<>>, _ones, acc), do: acc
end
```

```elixir [Any number of colors]
defmodule Solution do
  @spec minimum_steps(String.t() | list()) :: integer
  def minimum_steps(s) when is_binary(s) do
    s
    |> String.to_charlist()
    |> minimum_steps()
  end

  def minimum_steps(list) when is_list(list) do
    inversions(list, :gb_trees.empty(), 0)
  end

  defp inversions([h | t], tree, acc) do
    iter = :gb_trees.iterator_from(h + 1, tree)

    inv =
      iter
      |> Stream.unfold(&unfolder/1)
      |> Enum.sum()

    tree = incr_count(tree, h)

    inversions(t, tree, acc + inv)
  end

  defp inversions([], _tree, acc), do: acc

  defp unfolder(iter) do
    case :gb_trees.next(iter) do
      :none -> nil
      {_key, value, iter} -> {value, iter}
    end
  end

  defp incr_count(tree, key) do
    case :gb_trees.lookup(key, tree) do
      :none -> :gb_trees.insert(key, 1, tree)
      {:value, count} -> :gb_trees.update(key, count + 1, tree)
    end
  end
end
```