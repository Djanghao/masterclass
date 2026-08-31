# ✅C++ | ✅Use DFS |  ✅Class-Object | ✅Simple & Efficient Solution

**Author:** Yash2arma
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/2162388/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/2162388/)

---

**TC: O(N) - DFS Traversal
SC: O(N) - Auxiliary recursion stack space**

**Code:**
```
class NodeValue {
public: 
    int minNode, maxNode, maxSum;
    
    NodeValue(int minNode, int maxNode, int maxSum)
    {
        this->minNode = minNode;
        this->maxNode = maxNode;
        this->maxSum = maxSum;
    }
};

class Solution {
    
private:
    NodeValue maxSumBSTHelper(TreeNode* root)
    {
        if(!root) return NodeValue(INT_MAX, INT_MIN, 0);
        
        auto left = maxSumBSTHelper(root->left);
        auto right = maxSumBSTHelper(root->right);
        
        if(left.maxNode < root->val && root->val < right.minNode)
        {
            //if BT is BST
            sum = max(sum, root->val + left.maxSum + right.maxSum);
            
            return NodeValue(min(root->val, left.minNode), max(root->val, right.maxNode), root->val + left.maxSum + right.maxSum);
            
        }
        
        return NodeValue(INT_MIN, INT_MAX, max(left.maxSum, right.maxSum));   
    }
    
public:
    int sum=0;
    int maxSumBST(TreeNode* root) 
    {
        maxSumBSTHelper(root);
        return sum>0 ? sum : 0;
        
    }
};
```

**Please upvote if it helps :)**