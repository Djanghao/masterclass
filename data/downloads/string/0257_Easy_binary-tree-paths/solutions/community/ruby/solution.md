# Very simple and easy ruby solution using stack beats 100%

**Author:** divyad25
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/432674/](https://leetcode.com/problems/binary-tree-paths/solutions/432674/)

---

```
def binary_tree_paths(root)
  @stack = []
  @result = []
  preorder(root)
  @result
end

def preorder(node)
  return if node.nil?
  @stack.push(node.val)
  preorder(node.left)
  preorder(node.right)
  @result << @stack.join("->") if !node.left && !node.right
  @stack.pop
end
```