# Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/619365/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/619365/)

---

```
def inorderSuccessor(node)
    return nil if node.nil?
    
    @next = nil
    @target = node.val
    
    find_lower_sucessor(node.right)
    find_parent_successor(node.parent)
    
    @next
end

def find_lower_sucessor(node)
    return if node.nil?
    
    @next = node
    find_lower_sucessor(node.left)
end

def find_parent_successor(node)
    return if node.nil? || @next
    
    @next = node if node.val > @target
    find_parent_successor(node.parent)
end
```