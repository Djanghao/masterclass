# Elixir - Greedy

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5785080/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5785080/)

---

# Complexity
- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec find_maximum_score(nums :: [integer]) :: integer
  def find_maximum_score([h | t]) do
    solve(t, h, 1, 0)
  end

  defp solve([h | t], peak, len, sum) when h <= peak do
    solve(t, peak, len + 1, sum)
  end

  defp solve([h | t], peak, len, sum) do
    solve(t, h, 1, sum + peak * len)
  end

  defp solve([], peak, len, sum) do
    sum + peak * (len - 1)
  end
end
```