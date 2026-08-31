# Javascript solution

**Author:** Saltant
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/369803/](https://leetcode.com/problems/longest-univalue-path/solutions/369803/)

---

```
var longestUnivaluePath = function(root) {
   let level = 0 
   function helper( parent, current) {
		if (current === null) return 0
		let left = helper(current.val, current.left)
		let right = helper(current.val, current.right)
		level = Math.max(level, left + right)
		return current.val === parent ? Math.max(left, right) + 1 : 0
    
   }
   if (root !== null) helper(root.val, root)
   return level
}
```