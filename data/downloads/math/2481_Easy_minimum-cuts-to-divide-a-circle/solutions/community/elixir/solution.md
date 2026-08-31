# Elixir, odd, even

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4700871/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4700871/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec number_of_cuts(n :: integer) :: integer
  def number_of_cuts(1), do: 0
  def number_of_cuts(n) do
    if rem(n, 2) == 0, do: div(n, 2), else: n
  end
end
```