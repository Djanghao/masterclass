# Concise Newton approach with Stream module

**Author:** Dompdv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sqrtx/solutions/4775555/](https://leetcode.com/problems/sqrtx/solutions/4775555/)

---

# Intuition
Newton algorithm. Using Stream module

# Approach
Very concise solution due to the use of Stream module. 

# Complexity
- Time complexity:
See Newton converge speed

- - Space complexity:
O(1)

# Code
```
defmodule Solution do
    def my_sqrt(x) do
      Stream.iterate({0, x / 2}, fn {_b, a} -> {a, 0.5 * (a + x / a)} end)
      |> Stream.filter(fn {a, b} -> abs(a - b) < 0.5 end)
      |> Enum.take(1)
      |> then(fn [{_a, b}] -> trunc(b) end)
    end
  end
```