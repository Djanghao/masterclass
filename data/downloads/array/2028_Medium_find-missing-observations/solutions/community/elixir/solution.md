# Simple Elixir

**Author:** elbasti
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5751236/](https://leetcode.com/problems/find-missing-observations/solutions/5751236/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec missing_rolls(rolls :: [integer], mean :: integer, n :: integer) :: [integer]
  def missing_rolls(rolls, mean, n) do
    needed_sum = (mean) * (length(rolls) + n) - Enum.sum(rolls)
    needed_avg = needed_sum / n

    whole_part = floor(needed_avg)
    extras = rem(needed_sum,n)

    cond do
    (needed_avg <= 6) and (needed_avg >= 1) -> 
        1..n 
        |> Enum.map(fn i -> if i <= extras do (whole_part + 1) else whole_part end end)
    true -> [] 
    end
  end
end 
```