# O(n) | Beats 100% | Java  | C++ | Python | JavaScript | Go |

**Author:** kartikdevsharma_
**Votes:** 29
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5488887/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5488887/)

---

```Java []

class Solution {
    private boolean[] toDelete = new boolean[1001];
    private List<TreeNode> forest = new ArrayList<>();

    public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
        for (int val : to_delete) {
            toDelete[val] = true;
        }

        dfs(root, true);

        return forest;
    }

    private TreeNode dfs(TreeNode node, boolean isRoot) {
        if (node == null) {
            return null;
        }

        boolean shouldDelete = toDelete[node.val];

        if (isRoot && !shouldDelete) {
            forest.add(node);
        }

        node.left = dfs(node.left, shouldDelete);
        node.right = dfs(node.right, shouldDelete);

        return shouldDelete ? null : node;
    }
}

```
```C++ []
class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        vector<bool> toDelete(1001, false);
        vector<TreeNode*> forest;
        
        for (int val : to_delete) {
            toDelete[val] = true;
        }
        
        dfs(root, true, toDelete, forest);
        
        return forest;
    }
    
private:
    TreeNode* dfs(TreeNode* node, bool isRoot, vector<bool>& toDelete, vector<TreeNode*>& forest) {
        if (!node) return nullptr;
        
        bool shouldDelete = toDelete[node->val];
        
        if (isRoot && !shouldDelete) {
            forest.push_back(node);
        }
        
        node->left = dfs(node->left, shouldDelete, toDelete, forest);
        node->right = dfs(node->right, shouldDelete, toDelete, forest);
        
        return shouldDelete ? nullptr : node;
    }
};


```
```Python []
class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        to_delete_set = set(to_delete)
        forest = []
        
        def dfs(node: TreeNode, is_root: bool) -> TreeNode:
            if not node:
                return None
            
            should_delete = node.val in to_delete_set
            
            if is_root and not should_delete:
                forest.append(node)
            
            node.left = dfs(node.left, should_delete)
            node.right = dfs(node.right, should_delete)
            
            return None if should_delete else node
        
        dfs(root, True)
        return forest


```
```Go []
func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
    toDelete := make([]bool, 1001)
    forest := []*TreeNode{}
    
    for _, val := range to_delete {
        toDelete[val] = true
    }
    
    var dfs func(*TreeNode, bool) *TreeNode
    dfs = func(node *TreeNode, isRoot bool) *TreeNode {
        if node == nil {
            return nil
        }
        
        shouldDelete := toDelete[node.Val]
        
        if isRoot && !shouldDelete {
            forest = append(forest, node)
        }
        
        node.Left = dfs(node.Left, shouldDelete)
        node.Right = dfs(node.Right, shouldDelete)
        
        if shouldDelete {
            return nil
        }
        return node
    }
    
    dfs(root, true)
    return forest
}


```

```JavaScript []
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const toDelete = new Array(1001).fill(false);
    const forest = [];
    
    for (const val of to_delete) {
        toDelete[val] = true;
    }
    
    const dfs = (node, isRoot) => {
        if (!node) return null;
        
        const shouldDelete = toDelete[node.val];
        
        if (isRoot && !shouldDelete) {
            forest.push(node);
        }
        
        node.left = dfs(node.left, shouldDelete);
        node.right = dfs(node.right, shouldDelete);
        
        return shouldDelete ? null : node;
    };
    
    dfs(root, true);
    return forest;
};


```