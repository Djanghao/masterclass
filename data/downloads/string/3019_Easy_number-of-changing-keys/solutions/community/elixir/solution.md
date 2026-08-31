# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4637633/](https://leetcode.com/problems/number-of-changing-keys/solutions/4637633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 350ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.22MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec count_key_changes(s :: String.t) :: integer
  def count_key_changes(s) do
    arr_s = s |> String.to_charlist()
    Enum.reduce(arr_s |> tl, {arr_s |> hd, 0}, fn ch, {prev, ans} ->
      val = abs(ch - prev)
      if val == 0 or val == 0x20 do
        {ch, ans}
      else
        {ch, ans + 1}
      end
    end) |> elem(1)
  end
end

```