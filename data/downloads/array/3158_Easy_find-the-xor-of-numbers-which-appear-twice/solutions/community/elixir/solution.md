# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5234333/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5234333/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 375ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.65MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec duplicate_numbers_xor(nums :: [integer]) :: integer
  def duplicate_numbers_xor(nums) do
    nums
    |>
      Enum.reduce(%{}, fn num, cnts ->
        Map.put(cnts, num, Map.get(cnts, num, 0) + 1)
      end)
    |> Map.filter(fn {_k, v} -> v == 2 end)
    |> Map.keys()
    |> Enum.reduce(0, fn k, ans-> Bitwise.bxor(ans, k) end)
  end
end

```