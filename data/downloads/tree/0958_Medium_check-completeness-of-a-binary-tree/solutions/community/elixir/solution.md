# Elixir solution using Breadth-First Traversal

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3299888/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3299888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we traverse a tree by level order (BFS), we can see that if we find any node after seeing a null node, then one of the following applies:
- some of the non-last levels is not completely filled
- last level nodes are not as far left as possible

Thus, the given tree is not a valid complete tree.

# Approach
<!-- Describe your approach to solving the problem. -->
Start by adding a root node to a queue and with `seen_nil` as false. Then take one node from a queue and:
- if a node is nil, loop further with a remaining queue (without the taken node) and `seen_nil` as true
- if `seen_nil` is true, just return false as described in *Intuition* section (we've already checked if a node value is nil, so there's no need to check again that it is not nil)
- else add left and right childs of this node to a queue and loop further

If queue gets empty (all nodes are traversed) and no node was found after the first null node, then the given tree is complete.

I've used a simple list as queue, prepending new elements for `enqueue` and removing from its end for `dequeue` operations respectively.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - traversing every node

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - storing nodes in a queue

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
    @spec is_complete_tree(root :: TreeNode.t | nil) :: boolean
    def is_complete_tree(root) do
        queue = enqueue([], root)
        bfs(queue, false)
    end

    defp bfs([], _seen_nil), do: true

    defp bfs(queue, seen_nil) do
        {node, queue} = dequeue(queue)
        cond do
            node == nil -> bfs(queue, true)
            seen_nil -> false
            true -> queue 
                    |> enqueue(node.left)
                    |> enqueue(node.right)
                    |> bfs(seen_nil)
        end
    end

    defp enqueue(queue, item) do
        [item | queue]
    end

    def dequeue(queue) when length(queue) <= 2 do
        [item | tail] = Enum.reverse(queue)
        {item, tail}
    end

    def dequeue(queue) do 
        {Enum.at(queue, -1), Enum.drop(queue, -1)}
    end
end
```
**Please, consider upwoting if you found my solution helpful!**