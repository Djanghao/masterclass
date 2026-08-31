# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/4610138/](https://leetcode.com/problems/watering-plants/solutions/4610138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 268ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 73.69MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec watering_plants(plants :: [integer], capacity :: integer) :: integer
  def watering_plants(plants, capacity) do
    Enum.reduce(plants, {0, capacity, 0}, fn cur, {i, water, ans} ->
      if cur <= water do
        {i + 1, water - cur, ans + 1}
      else
        {i + 1, capacity - cur, ans + 2*i + 1}
      end
    end) |> elem(2)
  end
end

```