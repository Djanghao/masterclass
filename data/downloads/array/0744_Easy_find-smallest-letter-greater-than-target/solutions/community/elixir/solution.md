# Elixir - Straightforward solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3615902/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3615902/)

---

# Intuition
Well, I know the best solution is binary search, but again, the input is a singly linked list, and binary search on a linked list is slow, very slow. So, the best solution is just a linear search.

I think the authors really need to think about the input data structure for functional programming languanges.

# Approach
Linear search.

# Complexity
- Time complexity:
$O(n)$

- Space complexity:
$O(1)$

# Code
```
defmodule Solution do
  @spec next_greatest_letter(letters :: [char], target :: char) :: char
  def next_greatest_letter(letters, target) do
    Enum.find(letters, hd(letters), & &1 > target)
  end
end
```