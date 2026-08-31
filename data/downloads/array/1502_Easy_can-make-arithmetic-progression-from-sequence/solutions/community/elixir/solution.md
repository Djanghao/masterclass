# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/4377079/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/4377079/)

---

# Approach
Sort the list, iterate the sorted list and check if all the numbers have the same difference

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec can_make_arithmetic_progression(arr :: [integer]) :: boolean
  def can_make_arithmetic_progression(arr) do
    [hd | [hd1 | _] = tl] = Enum.sort(arr)
    do_can_make_arithmetic_progression(tl, hd - hd1)  
  end

  defp do_can_make_arithmetic_progression([hd | [hd1 | _] = tl], diff) do
    if hd - hd1 == diff, do: do_can_make_arithmetic_progression(tl, diff), else: false
  end
  defp do_can_make_arithmetic_progression(_, _), do: true
end
```