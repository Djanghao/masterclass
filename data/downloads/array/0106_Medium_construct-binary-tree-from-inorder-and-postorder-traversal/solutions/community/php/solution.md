# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/2010085/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/2010085/)

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
public TreeNode buildTree(int[] inorder, int[] postorder) {
    if (inorder.length == 0 || postorder.length == 0) return null;
    int ip = inorder.length - 1;
    int pp = postorder.length - 1;
    
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode prev = null;
    TreeNode root = new TreeNode(postorder[pp]);
    stack.push(root);
    pp--;
    
    while (pp >= 0) {
        while (!stack.isEmpty() && stack.peek().val == inorder[ip]) {
            prev = stack.pop();
            ip--;
        }
        TreeNode newNode = new TreeNode(postorder[pp]);
        if (prev != null) {
            prev.left = newNode;
        } else if (!stack.isEmpty()) {
            TreeNode currTop = stack.peek();
            currTop.right = newNode;
        }
        stack.push(newNode);
        prev = null;
        pp--;
    }
    
    return root;
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
    TreeNode* rec(int l, int r) {
        if (l > r) return NULL;
        
        int i = 0;
        while (m_inorder[i] != m_postorder[m_curr]) {
            i++;
        }
        
        m_curr--;
        TreeNode* node = new TreeNode(m_inorder[i]);
        node->right = rec(i+1, r);
        node->left = rec(l, i-1);
        return node;
        
    }
    
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        m_postorder = postorder, m_inorder = inorder, m_curr = inorder.size()-1;
        return rec(0, postorder.size()-1);
    }
    
private:
    int m_curr;
    vector<int> m_postorder, m_inorder;
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param inorder, a list of integers
    # @param postorder, a list of integers
    # @return a tree node
    # 12:00
    def buildTree(self, inorder, postorder):
        if not inorder or not postorder:
            return None
        
        root = TreeNode(postorder.pop())
        inorderIndex = inorder.index(root.val)

        root.right = self.buildTree(inorder[inorderIndex+1:], postorder)
        root.left = self.buildTree(inorder[:inorderIndex], postorder)

        return root
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {    
    let hash = {};
    for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
    
    let recur = function(start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    
    return recur(0, inorder.length - 1);  
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    var index=0
    fun buildTree(inorder: IntArray, postorder: IntArray): TreeNode? {
        val h=inorder.size
        val map=HashMap<Int,Int>()
        for(i in inorder.indices){
            map[inorder[i]]=i
        }
        return dfs(0,h-1,map,postorder)
    }
    fun dfs(
        l :Int ,
        r:Int ,
        map:HashMap<Int,Int>,
        postorder: IntArray)
    :TreeNode?{
        if(l>r) return null
        val a=postorder[postorder.size-1 -index++]
        val root= TreeNode(a)
        val b=map.get(a)!!
        root.right=dfs(b+1,r,map,postorder)
        root.left=dfs(l,b-1,map,postorder)
        return root
        
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
    func buildTree(_ inorder: [Int], _ postorder: [Int]) -> TreeNode? {
        guard postorder.count > 0 else { return nil }
        
        let totalCount = postorder.count
        let root = TreeNode(postorder[totalCount - 1])
        var rootIndex = -1
        
        for (i, val) in inorder.enumerated() {
            if val == root.val {
                rootIndex = i
                break
            } 
        }
        
        let leftCount = rootIndex
        let rightCount = totalCount - leftCount - 1
        
        root.left = buildTree(Array(inorder[0..<leftCount]), Array(postorder[0..<leftCount]))
        root.right = buildTree(Array(inorder[1 + leftCount..<totalCount]), Array(postorder[leftCount..<totalCount - 1]))
        return root
    }
    
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
