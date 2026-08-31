# Ruby, Hash

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/5399639/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/5399639/)

---

# Code
```
def copy_random_binary_tree(root)
  def clone_node_copy_without_random(node, clone_map)
    return unless node

    clone_map[node] = NodeCopy.new(node.val, clone_node_copy_without_random(node.left, clone_map), clone_node_copy_without_random(node.right, clone_map))
  end

  def map_random_pointer(node, clone_map)
    return unless node

    new_node = clone_map[node]
    new_node.random = clone_map[node.random]

    map_random_pointer(node.left, clone_map)
    map_random_pointer(node.right, clone_map)
  end

  clone_map = {}
  clone_node_copy_without_random(root, clone_map)
  map_random_pointer(root, clone_map)
  clone_map[root]
end
```