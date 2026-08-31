# Ruby solution

**Author:** piton4eg
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/288013/](https://leetcode.com/problems/print-binary-tree/solutions/288013/)

---

```
def print_tree(root)
    height = height(root)
    width = 2 ** height - 1
    
    tree = []
    height.times { tree += [[""] * width] }
    fill_values(tree, root, 0, 0, width - 1)
    
    tree
end

def fill_values(tree, node, row, left, right)
    return unless node
    mid = (left + right) / 2
    tree[row][mid] = node.val.to_s
    fill_values(tree, node.left, row + 1, left, mid - 1)
    fill_values(tree, node.right, row + 1, mid + 1, right)
end

def height(node)
    return 0 unless node
    1 + [height(node.left), height(node.right)].max
end
```