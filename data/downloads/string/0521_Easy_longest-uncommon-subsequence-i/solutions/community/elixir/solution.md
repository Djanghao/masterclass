# Elixir, simple solution

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/4216759/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/4216759/)

---

# Approach
If the strings a and b are equal then the result is -1. Else the result is the maximum length of the two strings.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_lu_slength(a :: String.t, b :: String.t) :: integer
  def find_lu_slength(a, a), do: -1
  def find_lu_slength(a, b), do: max(byte_size(a), byte_size(b))
end
```