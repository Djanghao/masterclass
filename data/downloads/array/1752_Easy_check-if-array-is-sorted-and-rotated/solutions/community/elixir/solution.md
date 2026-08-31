# Elixir, O(n) single pass

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/4429837/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/4429837/)

---

# Approach
For a shifted sorted array all numbers must still be in increasing order except for one place, which is the last digit of the original array. That place divides the array into two halves. Check if the second half is sorted. Check if the rest of the numbers, i.e the first half is sorted and all numbers in the first half are not greater than the second half's first number.

[3, 4, 5, 1, 2] => true
second half = [3, 4, 5] which is sorted properly
first half = [1, 2] which is sorted properly and all numbers are less than or equal to the first number of the second half, 3

[5, 1, 2, 3, 4] => true
second half = [5] which is sorted properly
first half = [1, 2, 3, 4] which is sorted properly and all numbers are
less than or equal to the first number of the second half, 5

[2, 1, 3, 4] => false
second half = [2] which is sorted properly
first half = [1, 3, 4] which is sorted properly but not all numbers if the first half is less than equal to the first number of the second half, 2

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check(nums :: [integer]) :: boolean
  def check([hd | tl]) do
    case get_first_half(tl, hd) do
      [] -> true
      first_half -> first_half_sorted?(tl(first_half), hd(first_half), hd)
    end
  end

  defp first_half_sorted?([hd | tl], prev, second_half_first) do
    hd <= second_half_first and hd >= prev and first_half_sorted?(tl, hd, second_half_first)
  end
  defp first_half_sorted?(_, prev, second_half_first), do: prev <= second_half_first

  defp get_first_half([hd | tl], prev) when hd >= prev, do: get_first_half(tl, hd)
  defp get_first_half(first_half, _), do: first_half
end
```