# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/4297125/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/4297125/)

---

# Approach
Creates a map with to compare letter order. Uses binary pattern matching and tail call recursion to compare every two words character by character in the list to determine if they are sorted.

# Complexity
- Time complexity:
O(n * m) where n is the number of words and m is the length of the words

- Space complexity:
O(n * m)

# Code
```
defmodule Solution do
  @spec is_alien_sorted(words :: [String.t], order :: String.t) :: boolean
  def is_alien_sorted(words, order), do: do_is_alien_sorted(words, build_order_map(order, 0, %{}))

  defp do_is_alien_sorted([word, word1 | tl], order_map) do
    sorted?(word, word1, order_map) && do_is_alien_sorted([word1 | tl], order_map)
  end
  defp do_is_alien_sorted([_], _), do: true

  defp sorted?(<<f, rest::bytes>>, <<f1, rest1::bytes>>, order_map) do
    case {order_map[f], order_map[f1]} do
      {x, y} when x < y -> true
      {x, y} when x > y -> false
      _ -> sorted?(rest, rest1, order_map)
    end
  end
  defp sorted?(word, _, _), do: byte_size(word) == 0

  defp build_order_map(<<f, rest::bytes>>, i, order_map), do: build_order_map(rest, i + 1, Map.put(order_map, f, i))
  defp build_order_map(<<>>, _, order_map), do: order_map
end
```