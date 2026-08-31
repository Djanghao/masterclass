# Beats 100% | JAVA, C++, JAVASCRIPT, C | Less Code | Not medium its Easy !!✅✅

**Author:** Ikapoor123
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4816919/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4816919/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 **sumEvenGrandparent Method:**
This method takes the root node of a binary tree as input and returns the sum of the values of nodes that have even-valued grandparents.

# Approach
- If the root is null (meaning the tree is empty), there are no nodes, so the sum is 0. The method returns this value.
- If the root node has an even value (root.val % 2 == 0):
Calculate Sum for Children (Even Grandparent):
We call sum(root.left) and sum(root.right) to calculate the sum of the values of the root's children (nodes with the even-valued grandparent, which is root).
- Call sumEvenGrandparent(root.left) and sumEvenGrandparent(root.right) to recursively find the sum of nodes with even-valued grandparents in the left and right subtrees (regardless of the root node's value).
- Return Total Sum:
The method returns the sum of:
The sums of the root's children (if root has an even value)
The sums found recursively in the left and right subtrees
- If the root node has an odd value, it cannot have children with even-valued grandparents. In this case, the method simply calls sumEvenGrandparent(root.left) and sumEvenGrandparent(root.right) recursively to find the sums in the subtrees (regardless of the root node's value) and returns 0 to avoid adding the root's children.

**Still having doubt ? comment below**

# Please Upvote \u2705\u2705
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` java []
class Solution {
    int sum(TreeNode root){
        if(root == null)    return 0;
        int ans = 0;
        if(root.left!=null) ans+= root.left.val;
        if(root.right!=null)    ans+= root.right.val;

        return ans;
    }
    public int sumEvenGrandparent(TreeNode root) {
        if(root == null)    return 0;
        if(root.val%2 == 0)     return sum(root.left) + sum(root.right) +sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
        return 0 + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
    }
}
```
```javascript []
 function sum(root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  if (root.left !== null) {
    sum += root.left.val;
  }
  if (root.right !== null) {
    sum += root.right.val;
  }
  return sum;
}

var sumEvenGrandparent = function(root) {
    if (root === null) {
    return 0;
  }
  if (root.val % 2 === 0) {
    return sum(root.left) + sum(root.right) + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
  }
  return sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
};
```
```C++ []
class Solution {
public:
    int sum(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        int sum = 0;
        if (root->left != nullptr) {
            sum += root->left->val;
        }
        if (root->right != nullptr) {
            sum += root->right->val;
        }
        return sum;
    }

    int sumEvenGrandparent(TreeNode* root) {
         if (root == nullptr) {
        return 0;
    }
    if (root->val % 2 == 0) {
        return sum(root->left) + sum(root->right) + sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);
    }
    return sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);

    }
};
```
```C []

 int sum( struct TreeNode* root) {
        if (root == NULL) {
            return 0;
        }
        int sum = 0;
        if (root->left != NULL) {
            sum += root->left->val;
        }
        if (root->right != NULL) {
            sum += root->right->val;
        }
        return sum;
    }
int sumEvenGrandparent(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }
    if (root->val % 2 == 0) {
        return sum(root->left) + sum(root->right) + sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);
    }
    return sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);

    
}
```
