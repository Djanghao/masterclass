# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4737473/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4737473/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec k_items_with_maximum_sum(num_ones :: integer, num_zeros :: integer, num_neg_ones :: integer, k :: integer) :: integer
  def k_items_with_maximum_sum(num_ones, num_zeros, num_neg_ones, k) do
    cond do
      num_ones >= k -> k
      num_ones + num_zeros >= k -> num_ones
      true -> num_ones - (k - (num_ones + num_zeros))
    end
  end
end
```