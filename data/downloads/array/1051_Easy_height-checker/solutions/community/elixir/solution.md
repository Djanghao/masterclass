# Elixir - Compare with sorted list

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-checker/solutions/5291246/](https://leetcode.com/problems/height-checker/solutions/5291246/)

---

# Approach
Sort the list and count the numbers that do not match.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec height_checker(heights :: [integer]) :: integer
  def height_checker(heights) do
    heights
    |> Enum.sort()
    |> Enum.zip(heights)
    |> Enum.reduce(0, fn x, acc ->
      {x, y} = x
      if x == y, do: acc, else: acc + 1
    end)
  end
end
```