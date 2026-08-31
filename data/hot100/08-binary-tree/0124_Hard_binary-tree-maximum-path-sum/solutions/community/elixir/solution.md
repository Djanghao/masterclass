# Elixir Approach and Solution

**Author:** bpfaust
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2899281/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2899281/)

---

# Intuition and Approach
For a given node, the maximum path sum may occur as either of the following conditions: 
- The value of the node alone - `val`; 
- The value of the node plus a chain down the left child - `val + lval`; 
- The value of the node plus a chain down the right child - `val + rval`; 
- The chain formed in combining the node with chains down each child - `val + lval + rval`; 

As we visit each node, it is possible the maximum path sum may have already been visited in another part of the tree - stored as `max` - or may exist within the structure below either child. 

As we visit each node in DFS fashion, return a tuple representing the most maximum chain formed by the node and either (or none) of its children, and the maximum chain value observed in the operation thus far. When all nodes have been visited, roll up the results and return the `max` observed. 

If the provided `root` is just a single element, its value alone is the maximum path sum. 

When first initiating the recursive operation, prime the function by setting the maximum path yet observed to `-1001`, a value below the limits specified in the constraints for a given node value. This to ensure some other maximum path sum is found along the way and returned. 

# Complexity
- Time complexity: $$O(n)$$, given the recursive operation will touch upon every node in the tree. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: I believe $$O(h)$$, wherein $$h$$ represents the height of the tree. This in understanding the recursive operation will unfold down each path along the branches of the tree. Please correct me on this if I am wrong. 
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
  @spec max_path_sum(root :: TreeNode.t | nil) :: integer
  def max_path_sum(%TreeNode{val: val, left: nil, right: nil}), do: val
  def max_path_sum(root) do
    max_path(root, -1001) |> elem(1)
  end

  def max_path(%TreeNode{val: val, left: left, right: right}, max) do
    {lval, lmax} = max_path(left, max)
    {rval, rmax} = max_path(right, max)

    {
      [(lval + val), (rval + val), val] |> Enum.max(), 
      [max, val, val + lval, val + rval, val + lval + rval, lmax, rmax] |> Enum.max()
    }
  end
  def max_path(nil, max), do: {0, max}
end
```