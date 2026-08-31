# Day 48 || C++ || O(n) time and O(h) space || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 70
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195253/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195253/)

---

# Intuition of this Problem:
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize minDiff to INT_MAX and prevVal to -1.
2. Call the inorderTraversal function with the root node, prevVal, and minDiff.
3. In the inorderTraversal function:
    - a. If the node argument is null, return.
    - b. Recursively call the inorderTraversal function with the node.left node, prevVal, and minDiff.
    - c. If prevVal is not -1 (i.e., we have a previous node), calculate the difference between the current node's value (node.val) and the previous node's value (prevVal), and update minDiff if this difference is smaller than the current minimum.
    - d. Set prevVal to the current node's value.
    - e. Recursively call the inorderTraversal function with the node.right node, prevVal, and minDiff.
1. Return minDiff.
<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
// O(n) time and O(h) space
class Solution {
public:
    void helper(TreeNode* root, int& minDiff, int& prevVal) {
        if (root == nullptr)
            return;
        helper(root -> left, minDiff, prevVal);
        if (prevVal != -1) {
            minDiff = min(minDiff, root -> val - prevVal);
        }
        prevVal = root -> val;
        helper(root -> right, minDiff, prevVal);
        
    }
    int minDiffInBST(TreeNode* root) {
        int minDiff = INT_MAX;
        int prevVal = -1;
        helper(root, minDiff, prevVal);
        return minDiff;
    }
};
```
```C++ []
//O(n) time and O(n) space
class Solution {
public:
    void helper(TreeNode* root, vector<int>& storeNodeVal) {
        if(root == nullptr)
            return;
        helper(root -> left, storeNodeVal);
        storeNodeVal.push_back(root -> val);
        helper(root -> right, storeNodeVal);
    }
    int minDiffInBST(TreeNode* root) {
        vector<int> storeNodeVal;
        helper(root, storeNodeVal);
        int minDiff = INT_MAX;
        for (int i = 0; i < storeNodeVal.size()-1; i++) {
            minDiff = min(minDiff, storeNodeVal[i+1] - storeNodeVal[i]);
        }
        return minDiff;
    }
};
```

# Time Complexity and Space Complexity:
- Time complexity: **O(n)**, where n is the number of nodes in the tree. This is because we need to visit every node in the tree once in order to calculate the minimum difference.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(h)**, where h is the height of the tree. This is because the recursive algorithm uses a call stack to keep track of the function calls, and the maximum depth of the call stack is the height of the tree. In the worst case, the tree could be unbalanced and have a height of n, which would result in a space complexity of O(n). However, in a balanced BST, the height is O(log n), so the space complexity would be O(log n).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->