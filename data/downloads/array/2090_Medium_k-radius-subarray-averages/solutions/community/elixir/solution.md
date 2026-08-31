# Elixir - Sliding Window

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3661986/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3661986/)

---

# Complexity
- Time complexity:
$$O(n + k)$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec get_averages(nums :: [integer], k :: integer) :: [integer]
  def get_averages(nums, k) when length(nums) < k * 2 + 1 do
    Enum.map(nums, fn _ -> -1 end)
  end

  def get_averages(nums, k) do

    # Because lists in Elixir are linked lists,
    # meaning that getting element by index is slow,
    # I just convert the list to a tuple,
    # which is something similar to an array in other languages.
    nums = List.to_tuple(nums)

    diameter = k * 2 + 1
    s = 0  # starting index of the first window
    e = diameter - 1  # ending index of the first window

    first_sum =
      s..e
      |> Stream.map(&elem(nums, &1))
      |> Enum.sum()

    to_sums(nums, s, e, [first_sum])
    |> Enum.map(&div(&1, diameter))
    |> pad(k)
  end

  defp to_sums(nums, prev_s, prev_e, [prev_sum | _] = acc)
       when prev_e < tuple_size(nums) - 1 do
    curr_s = prev_s + 1
    curr_e = prev_e + 1
    curr_sum = prev_sum - elem(nums, prev_s) + elem(nums, curr_e)

    to_sums(nums, curr_s, curr_e, [curr_sum | acc])
  end

  defp to_sums(_nums, _prev_s, _prev_e, acc) do
    Enum.reverse(acc)
  end

  defp pad(list, k) do
    padding = List.duplicate(-1, k)

    padding ++ list ++ padding
  end
end
```