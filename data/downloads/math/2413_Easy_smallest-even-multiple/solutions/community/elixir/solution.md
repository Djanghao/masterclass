# Elixir, 2 * n

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/4679844/](https://leetcode.com/problems/smallest-even-multiple/solutions/4679844/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec smallest_even_multiple(n :: integer) :: integer
  def smallest_even_multiple(n), do: if rem(n, 2) == 0, do: n, else: n * 2
end
```