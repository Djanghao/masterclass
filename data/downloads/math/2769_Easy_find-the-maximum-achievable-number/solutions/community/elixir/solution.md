# Elixir, num + 2t

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4770863/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4770863/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec the_maximum_achievable_x(num :: integer, t :: integer) :: integer
  def the_maximum_achievable_x(num, t), do: num + 2 * t
end
```