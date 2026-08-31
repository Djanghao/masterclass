# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2011017/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2011017/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        int left = minDepth(root.left);
        int right = minDepth(root.right);
        return (left == 0 || right == 0) ? left + right + 1: Math.min(left,right) + 1;
       
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    int level = 0;
    int minDepth(TreeNode* root) {
        if(!root){ return 0;}
        
        queue<TreeNode*> q;
        int level = 0;
        
        q.push(root);
        while(!q.empty()){
            int breadth = q.size();
            level++;
            for(int i=0; i<breadth; i++){
                TreeNode* parent = q.front(); 
                q.pop();
                
                if(parent->left) q.push(parent->left);
                if(parent->right) q.push(parent->right);
                
                if(!parent->left && !parent->right) return level; //leaf node
            }
        }
        
        return level;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
def minDepth(self, root):
    if not root:
        return 0
    queue = collections.deque([(root, 1)])
    while queue:
        node, level = queue.popleft()
        if node:
            if not node.left and not node.right:
                return level
            else:
                queue.append((node.left, level+1))
                queue.append((node.right, level+1))
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1;
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
fun minDepth(root: TreeNode?): Int {
        var level = 1
        val queue: Queue<TreeNode> = ArrayDeque()
        root?.let { queue += root }
        while (queue.isNotEmpty()) {
            repeat (queue.size) {
                val node = queue.remove()
                if (node.left == null && node.right == null) return level
                node.left?.let { queue += it }
                node.right?.let { queue += it }
            }
            level++
        }     
        return 0
    }
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(n), where n is the number of nodes in the binary tree.

    func minDepth(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        
        var queue: [TreeNode] = [root]
        var index = 1
        
        loop:
        while queue.count > 0 {
            var level: [TreeNode] = []
            for node in queue {
                if node.left == nil && node.right == nil { break loop }
                if let left = node.left { level.append(left) }
                if let right = node.right { level.append(right) }
            }
            queue = level
            index += 1
        }
        
        return index
    }
    
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
