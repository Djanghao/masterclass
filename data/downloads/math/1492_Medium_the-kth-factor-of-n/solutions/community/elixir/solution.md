# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/4593277/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/4593277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 262ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.37MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec kth_factor(n :: integer, k :: integer) :: integer
  def kth_factor(n, k) do
    {cnt, ans} =
      Enum.reduce_while(1..div(n, 2)+1, {0, 0}, fn i, {cnt, _ans} ->
        if rem(n, i) == 0 do
          if cnt + 1 == k do
            {:halt, {cnt + 1, i}}
          else
            {:cont, {cnt + 1, i}}
          end
        else
          {:cont, {cnt, i}}
        end
      end)
    cond do
      cnt == k -> ans
      cnt == k - 1 -> n
      true -> -1
    end
  end
end

```