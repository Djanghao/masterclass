# [Elixir] LCA Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493871/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493871/)

---

# Intuition
At first, i think that i could solve this problem using Lowest Common Ancestor (LCA). I will count the distance between leaf and LCA, then sum the results between 2 leaves to determine if that pair is good or not.

# Approach
I am using DFS function to traverse from root until leaves. When the function reach the leaf, it will return [1] to mark that there's 1 leaf in that path. Then the return value used by the parent node to determine if the leaves in the parent node is good or not. Of course each time the function returned, it will increment the leaves array elements value to represent the distances. 

When checking any pair, the distance/leaves list should be sorted first to ease the checking. If the distance left + right greater than distance param, the function will be immediately returned because there's no need to check the remain elements.

# Complexity
- Time complexity:
Traversing nodes need $$O(n)$$, and leaves checking need $$O(n)$$ everytime we traversing node. So the whole program needs $$O(n^2)$$

- Space complexity:
$$O(n)$$, memory only used to store the distance from leaves to Lowest Common Ancestor (LCA)

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
  @spec traverse_leaves(root :: TreeNode.t | nil, distance :: integer) :: { integer, [integer] }
  defp traverse_leaves(nil, _), do: { 0, [] }
  defp traverse_leaves(%TreeNode{left: nil, right: nil}, _), do: { 0, [1] }
  defp traverse_leaves(root, distance) do
    { l_acc, l_dist } = traverse_leaves(root.left, distance)
    { r_acc, r_dist } = traverse_leaves(root.right, distance) 
    l_dist = l_dist |> Enum.sort(:asc)
    r_dist = r_dist |> Enum.sort(:asc)
    distances = l_dist ++ r_dist
    {l_acc + r_acc + check_good_pairs(l_dist, r_dist, distance), distances |> increment_list }
  end

  @spec increment_list(list :: [integer]) :: [integer]
  defp increment_list([]), do: []
  defp increment_list([h | t]), do: [h+1 | increment_list(t)]

  @spec check_good_pairs(left :: [integer], right :: [integer], dist :: integer) :: integer
  defp check_good_pairs([], _, _), do: 0
  defp check_good_pairs([h | t], right, dist), do: check_good_pair(h, right, dist) + check_good_pairs(t, right, dist)

  @spec check_good_pair(left :: integer, right :: [integer], dist :: integer) :: integer
  defp check_good_pair(_, [], _), do: 0
  defp check_good_pair(left, [h | _], dist) when left+h > dist, do: 0
  defp check_good_pair(left, [_ | t], dist), do: 1 + check_good_pair(left, t, dist)

  @spec count_pairs(root :: TreeNode.t | nil, distance :: integer) :: integer
  def count_pairs(root, distance) do
    {res, _} = traverse_leaves(root, distance)
    res
  end
end
```