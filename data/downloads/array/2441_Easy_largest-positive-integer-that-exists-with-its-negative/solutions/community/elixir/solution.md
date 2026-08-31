# Simple Elixir Solution without using any fancy MapSet

**Author:** Ayoush_Chourasia
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5100561/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5100561/)

---

# Intuition
Sort the list.Keep track of all the negative numbers that encounter and when we start iterating through positive integar just find out which larget positive integar has equivalant negative integer appearing in the list.

# Approach
Created a Map to track the appeated negative integar and the ans

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  
  def find_max_k(nums) do
    nums = Enum.sort(nums)
    result = %{ans: -1}
    ans = Enum.reduce(nums, result, fn(x, acc) ->
      if x > 0 do
        if Map.has_key?(acc, -(x)) do
          Map.put(acc, :ans, max(acc[:ans], x))
        else
          acc
        end
      else
        if Map.has_key?(acc, x) do
          acc
        else
          Map.put(acc, x, -(x))
        end
      end
    end)
    ans.ans
  end
end
```