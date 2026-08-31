# Simple ruby sol O(n)

**Author:** rajrishav0711
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/908133/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/908133/)

---

```
def find_leaves(root)
  @result = Array.new
  helper(root)
  @result
end
  

def helper(root)
  return 0 if !root
  
  left = helper(root.left)
  right = helper(root.right)
  
  level = [left,right].max + 1
  
  @result[level-1] ||= []
  @result[level-1] << root.val
  level
end
```