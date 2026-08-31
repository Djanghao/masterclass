# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4560167/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4560167/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 295mb
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.10MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec missing_integer(nums :: [integer]) :: integer
  def missing_integer(nums) do
    prev = nums |> hd
    total = Enum.reduce_while(nums |> tl, {prev, prev}, fn num, {prev, total} ->
        if prev + 1 == num do
          {:cont, {num, total + num}}
        else
          {:halt, {num, total}}
        end
    end) |> elem(1)
    Enum.reduce(Enum.sort(nums), total, fn num, total ->
      if num == total do
        total + 1
      else
        total
      end
    end)
  end
end

```