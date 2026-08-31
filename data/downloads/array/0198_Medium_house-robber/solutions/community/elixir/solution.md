# Elixir - Simple DP

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber/solutions/4600499/](https://leetcode.com/problems/house-robber/solutions/4600499/)

---

# Code
```
defmodule Solution do
  @spec rob(nums :: [integer]) :: integer
  def rob(nums) do
    do_rob([0, 0, 0] ++ nums)
  end

  defp do_rob([a, b, c, d]), do: max(c, max(a,b) + d)
  defp do_rob([a, b, c, d | rest]), do: do_rob([ b, c, max(a, b) + d | rest])
end
```