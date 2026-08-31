# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4560172/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4560172/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 359ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.01MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec has_trailing_zeros(nums :: [integer]) :: boolean
  def has_trailing_zeros(nums) do
    Enum.reduce_while(nums, {0, false}, fn num, {cnt, _res} ->
      if rem(num, 2) == 0 do
        if cnt + 1 == 2 do
          {:halt, {cnt + 1, true}}
        else
          {:cont, {cnt + 1, false}}
        end
      else
        {:cont, {cnt, false}}
      end
    end) |> elem(1)
  end
end

```