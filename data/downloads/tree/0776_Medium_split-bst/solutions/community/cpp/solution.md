# C++ 100% time & space (0ms) - Single Path - Lightning McQueen type beat

**Author:** regen45
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-bst/solutions/3757186/](https://leetcode.com/problems/split-bst/solutions/3757186/)

---

# splitBST Function
`target` isn't changed, so don't bother copying it. 
```
vector<TreeNode*> splitBST(TreeNode* root, int &target) {
```

Make C++ go as fast as Lightning McQueen at the 2006 Piston Cup
```
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
```

Initialise res to the base case since it will always occur once and only once. By default, `vector<TreeNode*>(n)` will be filled with `nullptr`.
The left node, res[0], will eventually be the tree with nodes less than or equal to target, and the right node, res[1], will be the tree with nodes greater than the target.
This vector will be reused by the helper function, so only a pointer is required.
```     
    vector<TreeNode*> res(2);
```

Traverse a single path with the helper function (only one node will be checked at each depth; although not every level will necessarily be tried), trying to find the node with the largest value less than or equal to the target, splitting the tree into two while returning through the call stack. When it returns, return the result.
```
    helper(res, root, target);
    return res;
} // end splitBST function started above
```


# helper Function
Reuse res on the way back up the call stack. Also reuse target, it doesn't need to be copied (not strictly necessary to use a pointer since it also requires memory).
```
void helper(vector<TreeNode*> &res, TreeNode* curr, int &target) {
```

For each node through the path, there are three possible cases:

## Case 0: Reached a null node
Start the traversal back up the call stack. 

If this is the first node, then both trees will be empty.

```
        if(curr == nullptr) return;
```

## Case 1: The node's value is less than or equal to the target
This node may have the largest value (if one exists, but it's slower to check a 4th case), or the largest value less than the target (meaning no node has a value equal to the target). 

However, there isn't enough information to say for sure yet, so assume there may be more nodes with a value between this one and the target value. 

As all nodes in the left subtree (by definition of a binary search tree) will be less than the current node's value, it doesn't make sense to search the left subtree, but the right subtree may contain nodes less than or equal to the target.

Continue traversing the right subtree until the base case, then when it returns, connect the node's right pointer to the left result tree (containing only nodes less than or equal to the target), and replace it in the result vector with the current node, which now incorporates all of the values that were there (if any).

Keep going up the call stack.
```
        if(curr->val <= target) {
            helper(res, curr->right, target);
            curr->right = res[0];
            res[0] = curr;
        }
```

### Case 2: By skipping cases 2 and 3, the node's value must be greater than the target
As all nodes in the right subtree (by definition of a binary search tree) will be greater than the current node's value, it doesn't make sense to search the left subtree, but the right subtree may contain nodes less than or equal to the target. There isn't enough information, without knowing the parent's value, to rule it out yet.

Continue traversing, and try to find the largest value less than or equal to the target in this node's left subtree, then when it returns, connect the node's left pointer to the right result tree (all the nodes with values greater than the target found in the left subtree), and replace it in the result vector with the current node, which now incorporates all of the values that were there (if any).

Keep going up the call stack.
```
    else {
        helper(res, curr->left, target);
        curr->left = res[1];
        res[1] = curr;
    }
} // end helper function started above
```

# Complexity
- Time complexity: $O(log(k))$ where $k$ is the number of depths traversed. In the worst case this algorithm will traverse to the deepest node.

- Space complexity: $O(log(k))$ where $k$ is the number of depths traversed. Just for the three pointers at each depth plus the single result vector.

# Complete code
```
class Solution {
public:
    vector<TreeNode*> splitBST(TreeNode* root, int &target) {
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        vector<TreeNode*> res(2);
        helper(res, root, target);
        return res;
    }
    void helper(vector<TreeNode*> &res, TreeNode* curr, int &target) {
        if(curr == nullptr) return;
        if(curr->val <= target) {
            helper(res, curr->right, target);
            curr->right = res[0];
            res[0] = curr;
        } else {
            helper(res, curr->left, target);
            curr->left = res[1];
            res[1] = curr;
        }
    }
};
```