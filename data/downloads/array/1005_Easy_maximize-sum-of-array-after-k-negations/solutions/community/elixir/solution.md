# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4305573/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4305573/)

---

# Approach
Extract the negative numbers list, negative numbers count, positive numbers sum, largest negative number and smallest positive number by in a single pass iteration of the nums. Based on the negative number count and k, calculate the maximum output sum.

# Complexity
- Time complexity:
O(nlog(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec largest_sum_after_k_negations(nums :: [integer], k :: integer) :: integer
  def largest_sum_after_k_negations(nums, k) do
    {neg_nums, neg_count, pos_sum, neg_max, pos_min} = get_stats(nums, [], 0, 0, -101, 101)
    cond do
      neg_count > k -> {neg_k, neg_tl} = Enum.sort(neg_nums) |> Enum.split(k)
                       Enum.reduce(neg_k, 0, fn x, acc -> acc + abs(x) end) + Enum.sum(neg_tl) + pos_sum
      true -> Enum.reduce(neg_nums, 0, fn x, acc -> acc + abs(x) end) + pos_sum -
              (if rem(k - neg_count, 2) == 0, do: 0, else: 2 * min(pos_min, abs(neg_max)))
    end 
  end

  defp get_stats([hd | tl], neg_nums, neg_count, pos_sum, neg_max, pos_min) do
    if hd < 0 do
      get_stats(tl, [hd | neg_nums], neg_count + 1, pos_sum, max(neg_max, hd), pos_min)
    else
      get_stats(tl, neg_nums, neg_count, pos_sum + hd, neg_max, min(pos_min, hd))
    end
  end
  defp get_stats([], neg_nums, neg_count, pos_sum, neg_max, pos_min), do: {neg_nums, neg_count, pos_sum, neg_max, pos_min}
end
```