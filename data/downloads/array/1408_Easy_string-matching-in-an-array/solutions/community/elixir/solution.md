# Elixir, brute force

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/4360329/](https://leetcode.com/problems/string-matching-in-an-array/solutions/4360329/)

---

# Approach
Check if each string in the list is a substring of the other strings and accumulate the result.

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec string_matching(words :: [String.t]) :: [String.t]
  def string_matching(words), do: do_string_matching(words, MapSet.new())

  defp do_string_matching([hd], res), do: MapSet.to_list(res)
  defp do_string_matching([hd | tl], res) do
    hd_size = byte_size(hd)
    res = for x <- tl, reduce: res do
      res ->  x_size = byte_size(x)
      {larger, smaller} = if hd_size > x_size, do: {hd, x}, else: {x, hd}
      if sub_string?(larger, smaller, byte_size(smaller)), do: MapSet.put(res, smaller), else: res  
    end
    do_string_matching(tl, res)
  end

  defp sub_string?(<<_, rest::bytes>> = s1, s2, s2_size) do
    case s1 do
      <<^s2::bytes-size(s2_size), _::bytes>> -> true
      s1 when byte_size(s1) > s2_size -> sub_string?(rest, s2, s2_size)
      _ -> false
    end
  end
end
```