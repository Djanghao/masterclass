# Elixir, brute force

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/4690724/](https://leetcode.com/problems/odd-string-difference/solutions/4690724/)

---

# Complexity
- Time complexity:
O(n * k) where n is the number of words and k is the length of a single word

- Space complexity:
O(k)

# Code
```
defmodule Solution do
  @spec odd_string(words :: [String.t]) :: String.t
  def odd_string([w1, w2, w3 | tl]) do 
    w1_diff = diff_arr(w1)
    w2_diff = diff_arr(w2)
    cond do
      w1_diff == w2_diff -> do_odd_string([w3 | tl], w1_diff)
      true -> if diff_arr(w3) == w2_diff, do: w1, else: w2
    end
  end

  defp do_odd_string([hd | tl], prev_diff) do
    if diff_arr(hd) == prev_diff, do: do_odd_string(tl, prev_diff), else: hd
  end

  defp diff_arr(<<x, rest::bytes>>), do: diff_arr(rest, x, [])
  defp diff_arr(<<x, rest::bytes>>, prev, acc), do: diff_arr(rest, x, [x - prev | acc])
  defp diff_arr(_, _, acc), do: acc
end
```