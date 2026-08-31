# Ruby solution.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5493493/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5493493/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer[]} to_delete
# @return {TreeNode[]}
def del_nodes(root, to_delete)
    to_delete_set = to_delete.to_set
    forest = []

    root = process_node(root, to_delete_set, forest)

    # If the root is not deleted, add it to the forest
    forest << root if root

    forest
end

def process_node(node, to_delete_set, forest)
    return nil if node.nil?

    node.left = process_node(node.left, to_delete_set, forest)
    node.right = process_node(node.right, to_delete_set, forest)

    # Node Evaluation: Check if the current node needs to be deleted
    if to_delete_set.include?(node.val)
        # If the node has left or right children, add them to the forest
        forest << node.left if node.left
        forest << node.right if node.right
        # Delete the current node by returning nil to its parent
        return nil
    end

    node
end
```