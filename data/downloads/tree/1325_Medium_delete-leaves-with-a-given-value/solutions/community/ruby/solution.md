# Short Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/605896/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/605896/)

---

```
def remove_leaf_nodes(root, target)
    remove_target(root, target) ? [] : root    
end

def remove_target(root, target)
    return false if root.nil?
    
    root.left = nil if remove_target(root.left, target)  
    root.right = nil if remove_target(root.right, target)
    
    root.left.nil? && root.right.nil? && root.val == target  
end
```