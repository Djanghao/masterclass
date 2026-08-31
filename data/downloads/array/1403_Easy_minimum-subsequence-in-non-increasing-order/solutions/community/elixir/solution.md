# Elixir, Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4359964/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/4359964/)

---

# Approach
Uses Enum.sort to sort the numbers in desccending order. Iterates the numbers in the sorted list and keeps track of the subsequence sum and the rest of the sum to return the answer.

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec min_subsequence(nums :: [integer]) :: [integer]
  def min_subsequence(nums), do: do_min_subsequence(Enum.sort(nums, :desc), Enum.sum(nums), 0, [])

  defp do_min_subsequence([hd | tl], tl_sum, res_sum, res) when res_sum <= tl_sum do
    do_min_subsequence(tl, tl_sum - hd, res_sum + hd, [hd | res])
  end
  defp do_min_subsequence(_, _, _, res), do: Enum.reverse(res)
end
```