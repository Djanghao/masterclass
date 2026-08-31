# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4850964/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4850964/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 507ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.58MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_the_prefix_common_array(a :: [integer], b :: [integer]) :: [integer]
  def find_the_prefix_common_array(a, b) do
    Enum.zip_reduce(a, b, {0, %{}, []}, fn a, b, {total, cnts, c} ->
      cnts = Map.put(cnts, a, Map.get(cnts, a, 0) + 1)
      total =
        if cnts[a] == 2 do
          total + 1
        else
          total
        end
      cnts = Map.put(cnts, b, Map.get(cnts, b, 0) + 1)
      total =
        if cnts[b] == 2 do
          total + 1
        else
          total
        end
      {total, cnts, [total] ++ c}
    end)
    |> elem(2)
    |> Enum.reverse()
  end
end

```