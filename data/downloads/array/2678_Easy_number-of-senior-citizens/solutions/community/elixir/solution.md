# 100% beats  just kill

**Author:** omsonekar4
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5599492/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5599492/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec extract_age(passengers :: [String.t]) :: integer
  defp extract_age(passengers) do
    {age, _} = passengers 
    |> String.slice(11..-3)
    |> Integer.parse
    age
  end 

  @spec count_seniors(details :: [String.t]) :: integer
  def count_seniors([]), do: 0
  def count_seniors([h | t]) do
    res = if extract_age(h) > 60, do: 1, else: 0
    res + count_seniors(t)
  end
end
```