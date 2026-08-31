# Elixir - Easy solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5527345/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5527345/)

---

# Complexity
- Time complexity: $$O(n \\log n)$$

- Space complexity: $$O(n)$$

# Code
```Elixir
defmodule Solution do
  @spec sort_jumbled(mapping :: [integer], nums :: [integer]) :: [integer]
  def sort_jumbled(mapping, nums) do
    mapping = List.to_tuple(mapping)

    Enum.sort_by(nums, fn n ->
      n
      |> Integer.digits()
      |> Enum.map(&elem(mapping, &1))
      |> Integer.undigits()
    end)
  end
end
```