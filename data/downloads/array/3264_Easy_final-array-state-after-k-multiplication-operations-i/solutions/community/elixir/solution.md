# Simple solution with Elixir

**Author:** Kawa-git
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5743364/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5743364/)

---

# Approach
In order to solve this problem you need:
1. The position and the value of the minimum element in the given list. In my case I used a list comprehension with the help of *Enum.with_index* and *Enum.min*.
2. You need to replace the value in the original list with the new value * multiplier. *List.replace_at* allows you to do that.
3. You have to do the same thing k times. *Recursion* in the simplest solution. 

# Complexity
- Time complexity should be around O(n * k)

# Code
```elixir []
defmodule Solution do
  @spec get_final_state(nums :: [integer], k :: integer, multiplier :: integer) :: [integer]
  def get_final_state(nums, k, multiplier) do
    get_result(nums, k, multiplier)
  end

  def get_result(nums, 0, multiplier) do
    nums
  end

  def get_result(nums, k, multiplier) do 
    {min_val, min_index} = List.first for {el, i} <- Enum.with_index(nums), el == Enum.min(nums), do: {el, i}
    nums = List.replace_at(nums, min_index, min_val * multiplier)
    get_result(nums, k-1, multiplier)
  end

end
```