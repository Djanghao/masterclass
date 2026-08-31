# Very simple and understandable Ruby solution (DFS)

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/417532/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/417532/)

---

```
def sum_root_to_leaf(root)
  @sum = 0
  traverse(root, "")
  @sum
end

def traverse(node, curr)
  return if node.nil?
  curr += "#{node.val}"
  @sum += curr.to_i(2) if node.left.nil? && node.right.nil?
  traverse(node.left, curr)
  traverse(node.right, curr)
  curr.chop
end
```