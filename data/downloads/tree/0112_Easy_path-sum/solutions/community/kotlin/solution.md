# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 7
**Link:** [https://leetcode.com/problems/path-sum/solutions/2040038/](https://leetcode.com/problems/path-sum/solutions/2040038/)

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
public boolean hasPathSum(TreeNode root, int sum) {
    // iteration method
    if (root == null) {return false;}
    Stack<TreeNode> path = new Stack<>();
    Stack<Integer> sub = new Stack<>();
    path.push(root);
    sub.push(root.val);
    while (!path.isEmpty()) {
        TreeNode temp = path.pop();
        int tempVal = sub.pop();
        if (temp.left == null && temp.right == null) {if (tempVal == sum) return true;}
        else {
            if (temp.left != null) {
                path.push(temp.left);
                sub.push(temp.left.val + tempVal);
            }
            if (temp.right != null) {
                path.push(temp.right);
                sub.push(temp.right.val + tempVal);
            }
        }
    }
    return false;
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
    bool hasPathSum(TreeNode* root, int sum) {
        if(!root)return false;                                         //Terminating Condition
        sum=sum-root->val;                                             //Body
        if(sum==0&&!root->left&&!root->right)return true;              //body
        return hasPathSum(root->left,sum)||hasPathSum(root->right,sum);//Propagation
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
def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:

        def inorder(root, path_sum):
            if not root:
                return False
            
            path_sum+=root.val
            
            if not root.left and not root.right:
                return path_sum==targetSum
                
            return inorder(root.left, path_sum) or inorder(root.right, path_sum)
             
        return inorder(root, 0)
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum);
    // T.C: O(N)
    // S.C: O(H)
};

const dfs = (root, target) => {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return target - root.val === 0;
    }
    return dfs(root.left, target - root.val) || 
        dfs(root.right, target - root.val);
}
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun hasPathSum(root: TreeNode?, sum: Int): Boolean {
        if (root==null){
            return false
        }
        else if (root.left==null && root.right==null && root!!.`val`==sum){
            return true
        }
        return hasPathSum(root.left, sum-root!!.`val`) || hasPathSum(root.right, sum-root!!.`val`)
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func hasPathSum(_ root: TreeNode?, _ targetSum: Int) -> Bool {
        guard let root = root else {
            return false
        }
        
        if root.left == nil && root.right == nil {
            return root.val == targetSum
        }
        
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
