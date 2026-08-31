# Java simple DFS solution with comments -- 100% fast and 100% less space

**Author:** ialam
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/470308/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/470308/)

---

```
class Solution {
    public int maxDepth(Node root) {
        
        if(root == null) {
            return 0;
        }
        
        //already height is 1 if node is not null
        int height = 1;
        
        for(Node node : root.children) {
            
			//track max height.
            height = Math.max(height, 1+maxDepth(node)); //1+maxDepth(node) will calculate depth recursively.
        }
        
        return height;
        
    }
}
```
