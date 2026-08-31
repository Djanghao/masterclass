# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/4428555/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/4428555/)

---

# Approach
Uses binary pattern matching to extract the numbers and produce the result

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_time(time :: String.t) :: String.t
  def maximum_time(<<h1, h2, _, m1, m2>>) do
    {max_h1, max_h2} = max_hour(h1, h2)
    {max_m1, max_m2} = max_min(m1, m2)
    <<max_h1, max_h2, ":", max_m1, max_m2>>
  end

  defp max_hour(??, ??), do: {?2, ?3}
  defp max_hour(??, h2), do: if h2 <= ?3, do: {?2, h2}, else: {?1, h2}
  defp max_hour(h1, ??), do: if h1 == ?2, do: {h1, ?3}, else: {h1, ?9}
  defp max_hour(h1, h2), do: {h1, h2}

  defp max_min(??, ??), do: {?5, ?9}
  defp max_min(??, m2), do: {?5, m2}
  defp max_min(m1, ??), do: {m1, ?9}
  defp max_min(m1, m2), do: {m1, m2}
end
```