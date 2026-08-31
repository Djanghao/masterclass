# Elixir - I hate this 1-liner

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/6083758/](https://leetcode.com/problems/find-champion-i/solutions/6083758/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec find_champion(grid :: [[integer]]) :: integer
  def find_champion(grid) do
    Enum.find_index(grid, &Enum.count(&1, fn v -> v == 0 end) == 1)
  end
end
```