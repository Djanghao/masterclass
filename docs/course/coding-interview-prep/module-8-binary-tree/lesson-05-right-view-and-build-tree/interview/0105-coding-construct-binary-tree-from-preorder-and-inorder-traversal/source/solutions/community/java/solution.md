# Solution

**Author:** deleted_user
**Votes:** 482
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3169574/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3169574/)

---

```C++ []
class Solution {
public:
TreeNode* constructTree(vector < int > & preorder, int preStart, int preEnd, vector 
 < int > & inorder, int inStart, int inEnd, map < int, int > & mp) {
  if (preStart > preEnd || inStart > inEnd) return NULL;

  TreeNode* root = new TreeNode(preorder[preStart]);
  int elem = mp[root -> val];
  int nElem = elem - inStart;

  root -> left = constructTree(preorder, preStart + 1, preStart + nElem, inorder,
  inStart, elem - 1, mp);
  root -> right = constructTree(preorder, preStart + nElem + 1, preEnd, inorder, 
  elem + 1, inEnd, mp);

  return root;
}

TreeNode* buildTree(vector < int > & preorder, vector < int > & inorder) {
  int preStart = 0, preEnd = preorder.size() - 1;
  int inStart = 0, inEnd = inorder.size() - 1;

  map < int, int > mp;
  for (int i = inStart; i <= inEnd; i++) {
    mp[inorder[i]] = i;
  }

  return constructTree(preorder, preStart, preEnd, inorder, inStart, inEnd, mp);
}
};
```

```Python3 []
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        VAL_TO_INORDER_IDX = {inorder[i]: i for i in range(len(inorder))}

        def buildTreePartition(preorder, inorder_start, inorder_end):
            if not preorder or inorder_start < 0 or inorder_end > len(inorder):
                return None

            root_val = preorder[0]
            root_inorder_idx = VAL_TO_INORDER_IDX[root_val]
            if root_inorder_idx > inorder_end or root_inorder_idx < inorder_start:
                return None
            
            root = TreeNode(preorder.pop(0))
            root.left = buildTreePartition(preorder, inorder_start, root_inorder_idx - 1)
            root.right = buildTreePartition(preorder, root_inorder_idx + 1, inorder_end)

            return root

        return buildTreePartition(preorder, 0, len(inorder) - 1)
```

```Java []
class Solution {
    private int i = 0;
    private int p = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return build(preorder, inorder, Integer.MIN_VALUE);
    }

    private TreeNode build(int[] preorder, int[] inorder, int stop) {
        if (p >= preorder.length) {
            return null;
        }
        if (inorder[i] == stop) {
            ++i;
            return null;
        }

        TreeNode node = new TreeNode(preorder[p++]);
        node.left = build(preorder, inorder, node.val);
        node.right = build(preorder, inorder, stop);
        return node;
    }
}
```
