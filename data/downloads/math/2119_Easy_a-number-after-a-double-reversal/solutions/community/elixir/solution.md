# [Elixir] O(1) | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5763442/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5763442/)

---

![image.png](./images/0.png)

# Approach
Every number that has trailing zero (e.g. 10, 120, 2930) must be not equal to the origin number after being reversed twice.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec is_same_after_reversals(num :: integer) :: boolean
  def is_same_after_reversals(0), do: true
  def is_same_after_reversals(num) do
    case rem(num, 10) do
      0 -> false
      _ -> true
    end
  end
end
```