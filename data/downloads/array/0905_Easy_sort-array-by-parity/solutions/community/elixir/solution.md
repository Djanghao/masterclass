# Elixir - Simple solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/4098327/](https://leetcode.com/problems/sort-array-by-parity/solutions/4098327/)

---

Nothing to say.

```
defmodule Solution do
  import Bitwise

  @spec sort_array_by_parity(nums :: [integer]) :: [integer]
  def sort_array_by_parity(nums) do
    Enum.sort_by(nums, & &1 &&& 1)
  end
end
```