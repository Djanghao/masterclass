# Simple

**Author:** glimmerfors
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/5068198/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/5068198/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec find_duplicates(nums :: [integer]) :: [integer]
  def find_duplicates(nums) do
    nums -- Enum.to_list(1..length(nums))
  end
end
```