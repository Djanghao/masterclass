# Elixir - Most Brutal Brute Force

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098415/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098415/)

---

Just brute force without any optimization. Doesn't even do early return.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec check_if_exist(arr :: [integer]) :: boolean
  def check_if_exist(arr) do
    for {a, i} <- Enum.with_index(arr),
        {b, j} <- Enum.with_index(arr),
        i != j,
        a == b * 2,
        reduce: false,
        do: (_ -> true)
  end
end
```