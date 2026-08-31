# [Elixir] || Enum Module || Linear Time || Maths

**Author:** KettelBear
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4502100/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4502100/)

---

# Approach

Mathematically speaking, the fewest number of operations is as many removals of 3 elements as possible while still being able to remove the last 2 or 4 elements. 

And that is the key; if the remainder of the count is only 1, then we must save 4 elements to remove with the "remove 2" operation twice.

What must be known is that any number can be created by 2x + 3y beyond the number 1. Therefore, the only time to return -1 is if we find an element with a frequency of 1.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec min_operations(nums :: [integer]) :: integer
  def min_operations(nums) do
    nums
    |> Enum.frequencies()
    |> Enum.reduce_while(0, fn {_, count}, ops ->
      if count == 1 do
        {:halt, -1}
      else
        case rem(count, 3) do
          0 -> {:cont, ops + div(count, 3)}
          1 -> {:cont, ops + div(count - 4, 3) + 2}
          2 -> {:cont, ops + div(count - 2, 3) + 1}
        end
      end
    end)
  end
end
```