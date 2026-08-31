# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/4652956/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/4652956/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec calculate_tax(brackets :: [[integer]], income :: integer) :: float
  def calculate_tax(brackets, income), do: do_calculate_tax(brackets, income, 0, 0)

  defp do_calculate_tax([[upper, percent] | tl], income, prev_upper, tax) when income > 0 do
    cur_brac_inc = upper - prev_upper
    tax = tax + min(income, cur_brac_inc) * percent/100
    do_calculate_tax(tl, income - cur_brac_inc, upper, tax)
  end
  defp do_calculate_tax(_, _, _, tax), do: tax
end
```