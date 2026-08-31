# Elixir, uses temp list

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/4373170/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/4373170/)

---

# Approach
Uses Enum.reverse to reverse the prices in the list. Iterate each price in the reversed prices and keep track of the previous min prices in another list. Keep popping values in the prev min prices list until you find the next smallest price. Add current price - next smallest price in the result list, add current price to prev min list and move on until the end. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec final_prices(prices :: [integer]) :: [integer]
  def final_prices(prices), do: do_final_prices(Enum.reverse(prices), [], [])

  defp do_final_prices([hd | tl], prev_min_price_list, res) do
    {min, prev_min_price_list} = pop_prev_min(prev_min_price_list, hd)
    do_final_prices(tl, prev_min_price_list, [hd - min | res])
  end
  defp do_final_prices([], _, res), do: res

  defp pop_prev_min([hd | tl] = prev_min_price_list, num) do
    if hd <= num, do: {hd, [num | prev_min_price_list]}, else: pop_prev_min(tl, num)
  end
  defp pop_prev_min([], num), do: {0, [num]} 
end
```