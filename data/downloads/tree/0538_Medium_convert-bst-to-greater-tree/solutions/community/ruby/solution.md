# Simple ruby solution using recursion

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/400351/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/400351/)

---

```
def convert_bst(root)
  @sum = 0
  generate_gt(root)
end

def generate_gt(node)
  return nil if node.nil?
  generate_gt(node.right)
  @sum += node.val
  node.val = @sum
  generate_gt(node.left)
  node
end
```