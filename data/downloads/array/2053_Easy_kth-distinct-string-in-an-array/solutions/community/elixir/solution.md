# Elixir - Not Optimal Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588337/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588337/)

---

# Complexity
- Time complexity: $$O(n \\log n)$$
- Space complexity: $$O(n)$$

# Code
```Elixir
defmodule Solution do
  @spec kth_distinct(arr :: [String.t], k :: integer) :: String.t
  def kth_distinct(arr, k) do
    uniq_chars =
      arr
      |> Enum.frequencies()
      |> Enum.filter(&elem(&1, 1) == 1)
      |> Enum.map(&elem(&1, 0))

    Enum.at(arr -- arr -- uniq_chars, k - 1) || ""
  end
end
```