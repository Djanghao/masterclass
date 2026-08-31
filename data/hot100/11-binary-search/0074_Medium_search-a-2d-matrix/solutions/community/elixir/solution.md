# easy soulation

**Author:** 2Dg3FKm0sn
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/5634977/](https://leetcode.com/problems/search-a-2d-matrix/solutions/5634977/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec search_matrix(matrix :: [[integer]], target :: integer) :: boolean
  def search_matrix(matrix, target) do
    flat_mat = List.flatten(matrix)
    binary_search(flat_mat, target, 0, length(flat_mat) - 1)
  end

  def binary_search(row, target, first, last) do
    mid = div(first + last, 2)
    mid_value = Enum.at(row, mid)

    cond do
        mid_value == target -> true
        first >= last -> false
        mid_value > target -> binary_search(row, target, first, mid - 1)
        mid_value < target -> binary_search(row, target, mid + 1, last)
    end
  end
end
```