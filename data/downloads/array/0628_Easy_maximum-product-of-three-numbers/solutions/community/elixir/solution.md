# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/4233506/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/4233506/)

---

# Approach
Find the most three largest numbers and the most two smallest numbers. The result should be the maximum of the product of the most three largest numbers or the product of the most largest number and the two most smallest numbers.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_product(nums :: [integer]) :: integer
  def maximum_product(nums), do: do_maximum_product(nums, -1001, -1001, -1001, 1001, 1001)

  defp do_maximum_product([], max1, max2, max3, min1, min2), do: max(max1 * max2 * max3, max1 * min1 * min2)
  defp do_maximum_product([hd | tl], max1, max2, max3, min1, min2) do
    {max1, max2, max3} = cond do
      hd > max1 -> {hd, max1, max2}
      hd > max2 -> {max1, hd, max2}
      hd > max3 -> {max1, max2, hd}
      true -> {max1, max2, max3}
    end
    {min1, min2} = cond do
      hd < min1 -> {hd, min1}
      hd < min2 -> {min1, hd}
      true -> {min1, min2}
    end
    do_maximum_product(tl, max1, max2, max3, min1, min2)
  end
end
```