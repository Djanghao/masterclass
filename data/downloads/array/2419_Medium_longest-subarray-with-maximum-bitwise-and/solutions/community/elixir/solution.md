# Elixir: O(n) with tail-call recursion

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5789181/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5789181/)

---

# Intuition
The problem definition is just **a mind trap**. The solution has **nothing do do with conjugating integers with AND**.

**Rationale:**
If you evaluate `i1 AND i2`, the result will be smaller than either of them, unless they are equal.   

Therefore: To solve the problem, we just need to **look for the longest streak of the biggest value**. That can easily be done with tail-call recursion in linear time.

**We can't do shorter than linear time**, since a single bigger value would outweigh a long streak of another smaller value, so we have to check all values.

# Approach
Simple tail-call recursion, tracking the biggest number, its current streak and the longest streak

# Complexity
- Time complexity: **O(n)**; we visit every element exactly once

- Space complexity: **O(0)**

# Code
```elixir []
defmodule Solution do
  @spec longest_subarray(nums :: [integer]) :: integer
  def longest_subarray(nums), do: max_streak_of_biggest(nums)

  defp max_streak_of_biggest(nums, biggest \\\\ 0, current_streak \\\\ 0, max_streak \\\\ 0)
  defp max_streak_of_biggest([num | nums], biggest, _current_streak, _max_streak)
    when num > biggest,
    do: max_streak_of_biggest(nums, num, 1, 0)
  defp max_streak_of_biggest([biggest | nums], biggest, current_streak, max_streak),
    do: max_streak_of_biggest(nums, biggest, current_streak + 1, max_streak)
  defp max_streak_of_biggest([_too_small | nums], biggest, current_streak, max_streak),
    do: max_streak_of_biggest(nums, biggest, 0, max(current_streak, max_streak))
  defp max_streak_of_biggest([], _biggest, current_streak, max_streak), 
    do: max(current_streak, max_streak)  

end
```