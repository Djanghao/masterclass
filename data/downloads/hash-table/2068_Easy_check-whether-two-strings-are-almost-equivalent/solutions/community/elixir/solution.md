# 328ms 72.28MB using basic Elixir-functions from String/Enum/Map/Kernel

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5111164/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5111164/)

---

# Intuition
Somehow combine frequencies maps of both words and if keys doubled, subtract them. If at the end there is a value greater than 4 in the resulting map, its false, otherwise true.

# Approach
`Enum.frequencies` helps a lot

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec check_almost_equivalent(word1 :: String.t, word2 :: String.t) :: boolean
  def check_almost_equivalent(word1, word2) do
    word1
    |> String.graphemes()
    |> Enum.frequencies()
    |> Map.merge(word2 |> String.graphemes() |> Enum.frequencies(), fn _k, v1, v2 ->
      abs(v1 - v2)
    end)
    |> Map.values()
    |> Enum.find_value(&(&1 > 3))
    |> is_nil()
  end
end
```