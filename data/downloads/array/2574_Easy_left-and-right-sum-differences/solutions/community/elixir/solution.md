# Elixir, linear

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/4730391/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/4730391/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec left_right_difference(nums :: [integer]) :: [integer]
  def left_right_difference(nums) do
    running_sum = for x <- nums, reduce: {0, []} do
      {prev_sum, acc} -> el = prev_sum + x 
                         {el, [el | acc]}
    end |> elem(1)
    do_left_right_diff(running_sum, hd(running_sum), [])
  end

  defp do_left_right_diff([hd, nxt | tl], right_most, acc) do
    el = abs(right_most - hd - nxt)
    do_left_right_diff([nxt | tl], right_most, [el | acc])
  end
  defp do_left_right_diff([last], right_most, acc), do: [right_most - last | acc]
end
```