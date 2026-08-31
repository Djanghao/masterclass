# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 295
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302159/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To construct a binary tree from inorder and postorder traversal arrays, we first need to understand what each of these traversals represents.
Inorder traversal visits the nodes in ascending order of their values, i.e., left child, parent, and right child. On the other hand, postorder traversal visits the nodes in the order left child, right child, and parent.
Knowing this, we can say that the last element in the postorder array is the root node, and its index in the inorder array divides the tree into left and right subtrees. We can recursively apply this logic to construct the entire binary tree.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Start with the last element of the postorder array as the root node.
2. Find the index of the root node in the inorder array.
3. Divide the inorder array into left and right subtrees based on the index of the root node.
4. Divide the postorder array into left and right subtrees based on the number of elements
in the left and right subtrees of the inorder array.
5. Recursively construct the left and right subtrees.





# Complexity
- Time complexity:
The time complexity of this algorithm is O(n), where n is the number of nodes in the tree. We visit each node only once.

- Space complexity:
The space complexity of this algorithm is O(n). We create a hashmap to store the indices of the inorder traversal, which takes O(n) space. Additionally, the recursive call stack can go up to O(n) in the worst case if the binary tree is skewed.




![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
lass Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        // Call the recursive function with full arrays and return the result
        return buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
    }
    
    private TreeNode buildTree(int[] inorder, int inStart, int inEnd, int[] postorder, int postStart, int postEnd) {
        // Base case
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }
        
        // Find the root node from the last element of postorder traversal
        int rootVal = postorder[postEnd];
        TreeNode root = new TreeNode(rootVal);
        
        // Find the index of the root node in inorder traversal
        int rootIndex = 0;
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == rootVal) {
                rootIndex = i;
                break;
            }
        }
        
        // Recursively build the left and right subtrees
        int leftSize = rootIndex - inStart;
        int rightSize = inEnd - rootIndex;
        root.left = buildTree(inorder, inStart, rootIndex - 1, postorder, postStart, postStart + leftSize - 1);
        root.right = buildTree(inorder, rootIndex + 1, inEnd, postorder, postEnd - rightSize, postEnd - 1);
        
        return root;
    }
}


```
```Python []
class Solution(object):
    def buildTree(self, inorder, postorder):
        """
        :type inorder: List[int]
        :type postorder: List[int]
        :rtype: TreeNode
        """
        # Base case
        if not inorder:
            return None
        
        # The last element of postorder list is the root
        root_val = postorder.pop()
        root = TreeNode(root_val)
        
        # Find the position of the root in the inorder list
        inorder_index = inorder.index(root_val)
        
        # Recursively build the left and right subtrees
        root.right = self.buildTree(inorder[inorder_index+1:], postorder)
        root.left = self.buildTree(inorder[:inorder_index], postorder)
        
        return root

```
```C++ []
class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        unordered_map<int, int> index;
        for (int i = 0; i < inorder.size(); i++) {
            index[inorder[i]] = i;
        }
        return buildTreeHelper(inorder, postorder, 0, inorder.size() - 1, 0, postorder.size() - 1, index);
    }
    
    TreeNode* buildTreeHelper(vector<int>& inorder, vector<int>& postorder, int inorderStart, int inorderEnd, int postorderStart, int postorderEnd, unordered_map<int, int>& index) {
        if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
            return nullptr;
        }
        int rootVal = postorder[postorderEnd];
        TreeNode* root = new TreeNode(rootVal);
        int inorderRootIndex = index[rootVal];
        int leftSubtreeSize = inorderRootIndex - inorderStart;
        root->left = buildTreeHelper(inorder, postorder, inorderStart, inorderRootIndex - 1, postorderStart, postorderStart + leftSubtreeSize - 1, index);
        root->right = buildTreeHelper(inorder, postorder, inorderRootIndex + 1, inorderEnd, postorderStart + leftSubtreeSize, postorderEnd - 1, index);
        return root;
    }
};


```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```