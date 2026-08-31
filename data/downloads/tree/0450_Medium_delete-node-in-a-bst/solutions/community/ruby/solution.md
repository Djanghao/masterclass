# Efficient Node Deletion in Binary Search Trees - Explanation included (Beats 100% Ruby runtimes)

**Author:** parispanda
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4358802/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4358802/)

---

# Intuition
In order to solve this challenge, we can leverage the properties of a BST: In any BST, for any given node, all nodes in the left subtree will always be smaller than the node itself, and any nodes in the right subtree will always be larger. With this in mind, we can begin searching for the node that needs to be deleted. Once the target node is found, handling its deletion carefully is crucial, especially if the node has children. The goal is to remove the node while maintaining the BST properties.
# Approach
- **Search for the Node:** Traverse the BST recursively. If the target key is less than the current node's value, move left; if greater, move right.
- **Node Deletion:**
    - **Leaf Node:** Directly remove it by returning nil.
    - **Single Child:** Replace the node with its only child.
    - **Two Children:** Replace the node's value with its in-order successor's (minimum value in the right subtree) and then delete the in-order successor.
- **Maintain Tree Structure:** Ensure that after the deletion, the tree still satisfies all BST properties.
# Complexity
- **Time complexity:**
The time complexity is **$$O(h)$$**, where **$$h$$** is the height of the BST. In the worst case (a skewed tree), it becomes **$$O(n)$$**, where **$$n$$** is the number of nodes.

- **Space complexity:**
The space complexity is also **$$O(h)$$** due to the recursion stack. In the worst case, it can be **$$O(n)$$** for a skewed tree.
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
# @param {Integer} key
# @return {TreeNode}
def delete_node(root, key)
  return unless root

  root.right = delete_node(root.right, key) if key > root.val
  root.left = delete_node(root.left, key) if key < root.val
  
  if key == root.val
    return root.right unless root.left
    return root.left unless root.right

    root.val = min_value(root.right)
    root.right = delete_node(root.right, root.val)
  end
  
  root
end

def min_value(node)
  current = node
  current = current.left while current.left
  current.val
end
```