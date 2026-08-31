# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-number/solutions/4212952/](https://leetcode.com/problems/perfect-number/solutions/4212952/)

---

# Approach
Uses tail call recursion and iterates the numbers from 2 to sqrt(n) to check for factors and accumulates the result by adding the factors on each iteration. 

# Complexity
- Time complexity:
O(sqrt(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check_perfect_number(num :: integer) :: boolean
  def check_perfect_number(1), do: false
  def check_perfect_number(num), do: do_check_perfect_number(num, floor(:math.sqrt(num)), 2, 1)

  defp do_check_perfect_number(num, limit, i, acc) when i <= limit do
   acc = if rem(num, i) == 0, do: acc + i + div(num,i), else: acc
   acc <= num && do_check_perfect_number(num, limit, i+1, acc)
  end
  defp do_check_perfect_number(num, _, _, acc), do: num == acc
end
```