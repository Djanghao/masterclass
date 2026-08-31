# Elixir, n - 1

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/4718832/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/4718832/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec distinct_integers(n :: integer) :: integer
  def distinct_integers(1), do: 1
  def distinct_integers(n), do: n - 1
end
```