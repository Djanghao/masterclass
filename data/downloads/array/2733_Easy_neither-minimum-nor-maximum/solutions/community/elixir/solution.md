# Elixir, O(1)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4761238/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4761238/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_non_min_or_max(nums :: [integer]) :: integer
  def find_non_min_or_max([_]), do: -1
  def find_non_min_or_max([_, _]), do: -1
  def find_non_min_or_max([n1, n2, n3 | tl]) do
    Enum.sort([n1, n2, n3]) |> Enum.at(1)
  end 
end
```