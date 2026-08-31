# Elixir my solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/3544609/](https://leetcode.com/problems/decoded-string-at-index/solutions/3544609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 253ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 62.6MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec decode_at_index(s :: String.t, k :: integer) :: String.t
  def decode_at_index(s, k) do
    arr_s = String.to_charlist(s)
    {i, pos} =
      Enum.reduce_while(arr_s, {0, 0}, fn ch, {i, pos} ->
        pos =
        if (?0 <= ch) and (ch <= ?9) do
          pos*(ch - ?0)
        else
          pos + 1
        end
        if k <= pos do
          {:halt, {i, pos}}
        else
          {:cont, {i + 1, pos}}
        end
      end)
    ch =
      Enum.reduce_while(i..0, {'', pos, k}, fn j, {_, pos, k} ->
        ch = Enum.at(arr_s, j)
        if (?0 <= ch) and (ch <= ?9) do
          pos = div(pos, ch - ?0)
          {:cont, {ch, pos, rem(k, pos)}}
        else
          if k == pos || k == 0 do
            {:halt, {ch, pos, k}}
          else
            {:cont, {ch, pos - 1, k}}
          end
        end
      end) |> elem(0)
    << ch >>
  end
end

```