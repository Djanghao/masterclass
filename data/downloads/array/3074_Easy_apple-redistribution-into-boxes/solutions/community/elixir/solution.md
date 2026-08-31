# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4881888/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4881888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 319ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.58MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec minimum_boxes(apple :: [integer], capacity :: [integer]) :: integer
  def minimum_boxes(apple, capacity) do
    total = Enum.sum(apple)
    capacity
    |> Enum.sort()
    |> Enum.reverse
    |> Enum.reduce_while({0, 0}, fn cap, {i, t_cap} ->
      if t_cap >= total do
        {:halt, {i, t_cap}}
      else
        {:cont, {i + 1, t_cap + cap}}
      end
    end)
    |> elem(0)
  end
end

```