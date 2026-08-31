# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5845207/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5845207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 168ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 230.08MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec maximum_total_sum(maximum_height :: [integer]) :: integer
  def maximum_total_sum(maximum_height) do
    maximum_height = Enum.sort(maximum_height, :desc)
    Enum.reduce_while(maximum_height, {0, maximum_height |> hd}, fn num, {ans, cur} ->
      cur = min(cur, num)
      if cur <= 0 do
        {:halt, {-1, cur}}
      else
        {:cont, {ans + cur, cur - 1}}
      end
    end) |> elem(0)
  end
end

```