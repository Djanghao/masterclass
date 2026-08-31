# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/4472891/](https://leetcode.com/problems/find-center-of-star-graph/solutions/4472891/)

---

# Approach
A valid star graph will have the centre node in all of the edges. Hence find the common node in the first two edges.
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_center(edges :: [[integer]]) :: integer
  def find_center([[u1, v1], [u2, v2] | _]) do
    cond do
      u1 == u2 or u1 == v2 -> u1
      true -> v1
    end
  end
end
```