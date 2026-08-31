# Beats 100% |Java| C++|Python

**Author:** raviparihar_
**Votes:** 61
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369677/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369677/)

---

Explanation:

balanceBST Method:
Initializes a vector sortedElements to store the sorted node values.
Calls inOrderTraversal to fill sortedElements with in-order traversal of the BST.
Calls buildBalancedBST to construct and return the balanced BST from sortedElements.

buildBalancedBST Method:
Recursively builds a balanced BST from the sorted node values by selecting the middle element as the root and recursively constructing the left and right subtrees.

inOrderTraversal Method:
Recursively traverses the BST in in-order and collects node values in sortedElements.
```
using namespace std;
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution {
public:
    TreeNode* balanceBST(TreeNode* root) {
        vector<int> sortedElements;
        inOrderTraversal(root, sortedElements);
        return buildBalancedBST(sortedElements, 0, sortedElements.size() - 1);
    }

private:
    void inOrderTraversal(TreeNode* node, vector<int>& sortedElements) {
        if (!node) {
            return;
        }
        inOrderTraversal(node->left, sortedElements);
        sortedElements.push_back(node->val);
        inOrderTraversal(node->right, sortedElements);
    }
    
    TreeNode* buildBalancedBST(const vector<int>& elements, int start, int end) {
        if (start > end) {
            return nullptr;
        }
        int mid = start + (end - start) / 2;
        TreeNode* node = new TreeNode(elements[mid]);
        node->left = buildBalancedBST(elements, start, mid - 1);
        node->right = buildBalancedBST(elements, mid + 1, end);
        return node;
    }
};

```
```
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        def in_order_traversal(node):
            if not node:
                return []

            return in_order_traversal(node.left) + [node.val] + in_order_traversal(node.right)

        def build_balanced_bst(elements):
            if not elements:
                return None
            mid = len(elements) // 2
            node = TreeNode(elements[mid])
            node.left = build_balanced_bst(elements[:mid])
            node.right = build_balanced_bst(elements[mid + 1:])
            return node

        sorted_elements = in_order_traversal(root)
        return build_balanced_bst(sorted_elements)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
```
class Solution {
    public TreeNode balanceBST(TreeNode root) {
        List<Integer> sortedElements = new ArrayList<>();
        inOrderTraversal(root, sortedElements);
        return buildBalancedBST(sortedElements, 0, sortedElements.size() - 1);
    }
    
    private void inOrderTraversal(TreeNode node, List<Integer> sortedElements) {
        if (node == null) {
            return;
        }
        inOrderTraversal(node.left, sortedElements);
        sortedElements.add(node.val);
        inOrderTraversal(node.right, sortedElements);
    }
    
    private TreeNode buildBalancedBST(List<Integer> elements, int start, int end) {
        if (start > end) {
            return null;
        }
        int mid = start + (end - start) / 2;
        TreeNode node = new TreeNode(elements.get(mid));
        node.left = buildBalancedBST(elements, start, mid - 1);
        node.right = buildBalancedBST(elements, mid + 1, end);
        return node;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```
![image](./images/0.jpeg)
