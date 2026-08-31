# Simple recursive solution

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/6043558/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/6043558/)

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
```elixir []
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec sorted_array_to_bst(nums :: [integer]) :: TreeNode.t | nil
  def sorted_array_to_bst(nums) do
    if [] === nums do
      nil
    else
      nums = :array.from_list(nums)
      len = :array.size(nums)
      do_sorted_array_to_bst(nums, 0, len - 1)
    end
  end

  defp do_sorted_array_to_bst(_nums, left, right) when left > right do
    nil
  end

  defp do_sorted_array_to_bst(nums, left, right) do
    mid = div(left + right, 2)

    %TreeNode{
      val: :array.get(mid, nums),
      left: do_sorted_array_to_bst(nums, left, mid - 1),
      right: do_sorted_array_to_bst(nums, mid + 1, right)
    }
  end
end
```