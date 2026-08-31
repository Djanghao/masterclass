# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960810/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960810/)

---

![image.png](./images/0.png)

---

# Intuition
The problem asks to determine if two binary trees are equivalent either directly or by flipping their left and right children. We need to recursively check whether the subtrees are equal or flipped versions of each other. 

# Approach
1. Perform a recursive traversal of both trees.
2. For each pair of nodes (one from each tree):
   - If both nodes are null, they are equivalent.
   - If one node is null and the other is not, or their values differ, they are not equivalent.
   - Otherwise, check if their children are equivalent in two cases:
     - Without flipping: left subtrees match and right subtrees match.
     - With flipping: left subtree of one matches the right subtree of the other and vice versa.

# Complexity
- Time complexity:  
  $$O(n)$$ where n is the number of nodes in the smaller tree, because we traverse each node once.
  
- Space complexity:  
  $$O(h)$$ where h is the height of the tree, because of the recursion stack.

# Code

```dart []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

class Solution {
  bool flipEquiv(TreeNode? root1, TreeNode? root2) {
    return checker(root1, root2);
  }

  bool checker(TreeNode? node1, TreeNode? node2) {
    if (node1 == null && node2 == null) {
      return true;
    }
    if (node1 == null || node2 == null || node1.val != node2.val) {
      return false;
    }

    return (checker(node1.left, node2.left) || checker(node1.left, node2.right)) &&
           (checker(node1.right, node2.right) || checker(node1.right, node2.left));
  }
}
```


```python []
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:
        return self.checker(root1, root2)

    def checker(self, node1: TreeNode, node2: TreeNode) -> bool:
        if not node1 and not node2:
            return True
        if not node1 or not node2 or node1.val != node2.val:
            return False

        return (self.checker(node1.left, node2.left) and self.checker(node1.right, node2.right)) or \\
               (self.checker(node1.left, node2.right) and self.checker(node1.right, node2.left))
```

```cpp []
#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    bool flipEquiv(TreeNode* root1, TreeNode* root2) {
        return checker(root1, root2);
    }

    bool checker(TreeNode* node1, TreeNode* node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1->val != node2->val) return false;

        return (checker(node1->left, node2->left) && checker(node1->right, node2->right)) || 
               (checker(node1->left, node2->right) && checker(node1->right, node2->left));
    }
};
```

```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        return checker(root1, root2);
    }

    private boolean checker(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) return true;
        if (node1 == null || node2 == null || node1.val != node2.val) return false;

        return (checker(node1.left, node2.left) && checker(node1.right, node2.right)) || 
               (checker(node1.left, node2.right) && checker(node1.right, node2.left));
    }
}
```

```javascript []
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var flipEquiv = function(root1, root2) {
  return checker(root1, root2);
};

function checker(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.val !== node2.val) return false;

  return (checker(node1.left, node2.left) && checker(node1.right, node2.right)) ||
         (checker(node1.left, node2.right) && checker(node1.right, node2.left));
}
```

```csharp []
public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public bool FlipEquiv(TreeNode root1, TreeNode root2) {
        return Checker(root1, root2);
    }

    private bool Checker(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) return true;
        if (node1 == null || node2 == null || node1.val != node2.val) return false;

        return (Checker(node1.left, node2.left) && Checker(node1.right, node2.right)) || 
               (Checker(node1.left, node2.right) && Checker(node1.right, node2.left));
    }
}
```

```go []
package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func flipEquiv(root1 *TreeNode, root2 *TreeNode) bool {
	return checker(root1, root2)
}

func checker(node1 *TreeNode, node2 *TreeNode) bool {
	if node1 == nil && node2 == nil {
		return true
	}
	if node1 == nil || node2 == nil || node1.Val != node2.Val {
		return false
	}

	return (checker(node1.Left, node2.Left) && checker(node1.Right, node2.Right)) || 
	       (checker(node1.Left, node2.Right) && checker(node1.Right, node2.Left))
}
```
---

![image.png](./images/1.png) {:style='width:250px'}