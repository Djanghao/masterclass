# Elixir, one pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/4550942/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/4550942/)

---

# Approach
Iterate the numbers and keep track of the past two previous numbers. Whenever a decreasing number is found, remove either the decreasing number or the previous number. Return true if there is no decreasing number after the removal. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec can_be_increasing(nums :: [integer]) :: boolean
  def can_be_increasing([hd | tl]), do: do_can_be_increasing(tl, hd, -1, false)
  
  defp do_can_be_increasing([hd | tl], prev, prev_2, decreasing?) do
    cond do
      hd > prev -> do_can_be_increasing(tl, hd, prev, decreasing?)
      decreasing? -> false
      hd > prev_2 -> do_can_be_increasing(tl, hd, prev_2, true)
      true -> do_can_be_increasing(tl, prev, prev_2, true)
    end
  end 
  defp do_can_be_increasing(_, _, _, _), do: true
end
```