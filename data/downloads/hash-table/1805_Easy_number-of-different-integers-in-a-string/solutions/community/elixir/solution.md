# Elixir, binary pattern matching and MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4485672/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4485672/)

---

# Approach
Uses binary pattern matching to read each character, uses a MapSet to store the number sequences as strings and returns the size of the MapSet at the end.

# Complexity
- Time complexity:
O(n) where n is the length of the word

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec num_different_integers(word :: String.t) :: integer
  def num_different_integers(word), do: do_num_diff_int(word, <<>>, MapSet.new())

  defp do_num_diff_int(<<ch, rest::bytes>>, cur_num, acc) do
    cond do
      digit?(ch) -> do_num_diff_int(rest, update_cur_num(cur_num, ch), acc)
      true -> do_num_diff_int(rest, <<>>, update_mapset(acc, cur_num))
    end
  end
  defp do_num_diff_int(<<>>, cur_num, acc) do
    update_mapset(acc, cur_num) |> MapSet.size()
  end

  defp update_cur_num(cur_num, digit) do
    cond do
      cur_num == <<?0>> -> <<digit>>
      true -> <<cur_num::bytes, digit>>
    end
  end

  defp update_mapset(acc, num_str) do
    if byte_size(num_str) == 0, do: acc, else: MapSet.put(acc, num_str)
  end

  defp digit?(ch), do: ch >= ?0 and ch <= ?9
end
```