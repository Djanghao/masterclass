# Elixir, minimum 2 prices

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4756122/](https://leetcode.com/problems/buy-two-chocolates/solutions/4756122/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec buy_choco(prices :: [integer], money :: integer) :: integer
  def buy_choco(prices, money) do
    {min1, min2} = cheapest_2_prices(prices)
    result = money - (min1 + min2)
    if result < 0, do: money, else: result
  end

  defp cheapest_2_prices(prices) do
    for x <- prices, reduce: {nil, nil} do
      {min1, min2} -> cond do
        x <= min1 -> {x, min1}
        x < min2 ->  {min1, x}
        true -> {min1, min2}
      end  
    end
  end
end
```