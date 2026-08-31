# Elixir, binary pattern matching and for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4574468/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4574468/)

---

# Approach
Uses binary pattern matching to read the middle character of the operations and accumulate the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec final_value_after_operations(operations :: [String.t]) :: integer
  def final_value_after_operations(operations) do
    for <<_, sign, _>> <- operations, reduce: 0 do
      acc -> if sign == ?-, do: acc - 1, else: acc + 1
    end
  end
end
```