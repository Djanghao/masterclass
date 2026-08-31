# Elixir, sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4613003/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4613003/)

---

# Approach
Sort the candies in descending. Iterate, add the first two candies to cost and skip the third free candy.

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec minimum_cost(cost :: [integer]) :: integer
  def minimum_cost(cost), do: Enum.sort(cost, :desc) |> do_minimum_cost(0)

  defp do_minimum_cost([c1, c2, _free | tl], acc), do: do_minimum_cost(tl, acc + c1 + c2)
  defp do_minimum_cost([], acc), do: acc
  defp do_minimum_cost(candies, acc), do: acc + Enum.sum(candies)
end
```