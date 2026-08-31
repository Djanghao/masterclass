# Elixir : Prepend / append bounds to nums

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/3246055/](https://leetcode.com/problems/non-decreasing-array/solutions/3246055/)

---

# Approach
Put `nums` between [-100000] and [100000] for simpler logic.
Every elements in `nums` will have the chance to be matched by `b` in pattern `[a, b, c | nums]`.

# Code
```
defmodule Solution do
  @spec check_possibility(nums :: [integer]) :: boolean
  def check_possibility(nums) do
    ok?([-100_000] ++ nums ++ [100_000], false)
  end

  defp ok?([_], _), do: true
  defp ok?([a, b, c | nums], false)
  when a <= c and (b < a or b > c) do
    ok?([c | nums], true)
  end
  defp ok?([a, b | nums], modified) when a <= b do
    ok?([b | nums], modified)
  end
  defp ok?(_, _), do: false
end
```