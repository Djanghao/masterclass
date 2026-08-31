# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 10
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/2008761/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/2008761/)

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
public TreeNode buildTree(int[] preorder, int[] inorder) {
    Map<Integer, Integer> inMap = new HashMap<Integer, Integer>();
    
    for(int i = 0; i < inorder.length; i++) {
        inMap.put(inorder[i], i);
    }

    TreeNode root = buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);
    return root;
}

public TreeNode buildTree(int[] preorder, int preStart, int preEnd, int[] inorder, int inStart, int inEnd, Map<Integer, Integer> inMap) {
    if(preStart > preEnd || inStart > inEnd) return null;
    
    TreeNode root = new TreeNode(preorder[preStart]);
    int inRoot = inMap.get(root.val);
    int numsLeft = inRoot - inStart;
    
    root.left = buildTree(preorder, preStart + 1, preStart + numsLeft, inorder, inStart, inRoot - 1, inMap);
    root.right = buildTree(preorder, preStart + numsLeft + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);
    
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
int preInd=0;
TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder) {
    return createTree(preorder,inorder,0,inorder.size() - 1);
}
TreeNode* createTree(vector<int>& preorder, vector<int>& inorder,int start, int end){
    if(start > end){
        return NULL;
    }
    TreeNode* node=new TreeNode(preorder[preInd++]);
    int pos;
    for(int i=start;i<=end;i++){
        if(inorder[i]==node->val){
            pos=i;
            break;
        }
    }
    node->left =createTree(preorder, inorder,start,pos-1);
    node->right =createTree(preorder, inorder, pos+1,end);
    return node;
}
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
def buildTree(self, preorder, inorder):
    if inorder:
        ind = inorder.index(preorder.pop(0))
        root = TreeNode(inorder[ind])
        root.left = self.buildTree(preorder, inorder[0:ind])
        root.right = self.buildTree(preorder, inorder[ind+1:])
        return root
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var buildTree = function(preorder, inorder) {
    p = i = 0
    build = function(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
fun buildTree(
        preorder: IntArray, inorder: IntArray,
        preLeft: Int = 0, preRight: Int = preorder.size-1,
        inLeft: Int = 0, inRight: Int = inorder.size-1
    ): TreeNode? {
        if(inRight<inLeft || preRight<preLeft) return null;
        
        val node = TreeNode(preorder[preLeft])
        
        var nodeIndexInInOrder = inLeft
        while(node.`val` != inorder[nodeIndexInInOrder]) {
            nodeIndexInInOrder++
        }
        
        val sizeOfLeftInOrder = nodeIndexInInOrder-inLeft
        node.left = buildTree(
            preorder,inorder,
            preLeft+1,preLeft+sizeOfLeftInOrder,
            inLeft,nodeIndexInInOrder-1
        )
        node.right = buildTree(
            preorder,inorder,
            preLeft+sizeOfLeftInOrder+1,preRight,
            nodeIndexInInOrder+1,inRight
        )
        
        return node
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
    func buildTree(_ preorder: [Int], _ inorder: [Int]) -> TreeNode? {
        guard preorder.count > 0 else { return nil }
        
        let total\u0421ount = preorder.count
        let root = TreeNode(preorder[0])
        var rootIndex = -1
        
        for (i, val) in inorder.enumerated() {
            if val == root.val {
                rootIndex = i
                break
            } 
        }
        
        let leftCount = rootIndex
        let rightCount = total\u0421ount - leftCount - 1
        
        root.left = buildTree(Array(preorder[1..<1 + leftCount]), Array(inorder[0..<leftCount + 1]))
        root.right = buildTree(Array(preorder[1 + leftCount..<total\u0421ount]), Array(inorder[1 + leftCount..<total\u0421ount]))
        return root
    }
    
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***