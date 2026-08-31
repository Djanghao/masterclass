# C++ | Clean Solution with Explanation | Single inOrder traversal | O(1) 'extra' space | O(n) Time

**Author:** abhinav1602
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/1282304/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/1282304/)

---

Here are the BST properties which I have used in the below solution.
* `leftNode <= rootNode <= rightNode`
* Another point which some people miss to visualize using the above property is:
	`All nodes in left Subtree <= rootNode <= All nodes in right subtree`
* Using the above two properties, we can conclude that if there are duplicates in the tree, they will always be next to each other in the inOrder traversal of the tree. 
* Since inOrder traversal will always be in sorted order, so, we can easily keep track of frequency of elements by keeping a single variable and then resetting it once a new element is encountered.
* In the meantime, we need to keep a variable which will store the max frequency of any element till now.
* If at some point, there is an element whose frequency equals max frequency, we can include it in the answer as per the requirement of this questions.
* If the frequency of element is more than maxElement, clear the answer array and insert this new element into answer array.
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxTillNow = -1000000, curr = -1000000, prev = -1000000;
    
    void inOrder(TreeNode* root, vector<int> &ans) {        
        if(root == NULL)
            return;
        inOrder(root->left, ans);
		 
		// the last visited element will be inOrder predecessor so if it occurs more than once, it has to be same here because it is a BST
        if(root->val == prev)
            curr++;
        
        else if(prev != root->val)
            curr = 1;
                
        if(curr>maxTillNow) {
            ans.clear();
            ans.push_back(root->val);
            maxTillNow = curr;
        } 
        else if(curr == maxTillNow)
            ans.push_back(root->val);
        
        prev = root->val;
        inOrder(root->right, ans);
    }
    
    vector<int> findMode(TreeNode* root) {
        vector<int> ans;
        inOrder(root, ans);
        return ans;
    }
};
```