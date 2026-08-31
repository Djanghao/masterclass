# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/4735895/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/4735895/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec dist_money(money :: integer, children :: integer) :: integer
  def dist_money(money, children) when money  < children, do: -1
  def dist_money(money, children) do
    money = money - children
    res = div(money, 7)
    cond do
      res == children && rem(money, 7) == 0 -> children
      res >= children -> children - 1
      rem(money, 7) == 3 && res == children - 1 -> res - 1
      true -> res
    end
  end
end
```