# Pattern Matching

**Author:** nickstalter
**Votes:** 2
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2854093/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2854093/)

---

# Intuition
Being passed in a struct was a little weird compared to the example passing in a list. 

# Approach
Pattern match the different inputs to return false with the last pattern doing the summation. Might not be the most efficient but it does work.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
  @spec check_tree(root :: TreeNode.t | nil) :: boolean
  def check_tree(nil), do: false
  def check_tree(%TreeNode{left: nil}), do: false
  def check_tree(%TreeNode{right: nil}), do: false
  def check_tree(%TreeNode{val: total, left: left, right: right}) do
    left.val + right.val == total
  end
end
```