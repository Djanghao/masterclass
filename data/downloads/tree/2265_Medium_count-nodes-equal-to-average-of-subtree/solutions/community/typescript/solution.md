# 2265. Count Nodes Equal to Average of Subtree

**Author:** aftabmk
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4238375/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4238375/)

---

# Complexity
- Time complexity: `O(N)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(H)`

H is height of tree
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
// Alias for a pair of integers, representing the sum and count.
typedef pair<int, int> Pair;

class Solution {
public:
    int count; // Counter to keep track of nodes with values equal to the average.

    int averageOfSubtree(TreeNode* root) {
        dfs(root); // Start the depth-first traversal.
        return count; // Return the count of nodes with values equal to the average.
    }

    Pair dfs(TreeNode* node) {
        if (node == nullptr)
            return Pair(0, 0); // Base case: return (0, 0) for a null node.

        // Recursively explore the left and right subtrees.
        Pair left = dfs(node->left);
        Pair right = dfs(node->right);

        // Calculate the sum and count of the current node and its subtrees.
        int nodeSum = node->val + left.first + right.first;
        int nodeCount = 1 + left.second + right.second;

        // Check if the current node's value is equal to the average of its subtree.
        if (node->val == nodeSum / nodeCount) {
            count++;
        }

        // Return the Pair with the sum and count for the current subtree.
        return Pair(nodeSum, nodeCount);
    }
};

```
```Java []
public class Solution {
    int count;

    public int averageOfSubtree(TreeNode root) {
        dfs(root);
        return count;
    }

    Pair<Integer, Integer> dfs(TreeNode node) {
        if (node == null)
            return new Pair<>(0, 0);

        Pair<Integer, Integer> left = dfs(node.left);
        Pair<Integer, Integer> right = dfs(node.right);

        int nodeSum = node.val + left.getKey() + right.getKey();
        int nodeCount = 1 + left.getValue() + right.getValue();

        if (node.val == nodeSum / nodeCount) {
            count++;
        }

        return new Pair<>(nodeSum, nodeCount);
    }
}

```
```Typescript []
function averageOfSubtree(root: TreeNode | null): number {
    this.count = 0;
    dfs(root);
    return this.count;
}
function dfs(node : TreeNode | null) : [number,number] {
    if(node == null) return [0, 0]
    
    let left  : [number,number] = dfs(node.left),
        right : [number,number] = dfs(node.right);
    
    let nodeSum :   number = right[1] + left[1] + node.val,
        nodeCount : number = left[0] + right[0] + 1;
    
    if (node.val == ~~(nodeSum / nodeCount)) this.count++;
    return [nodeCount,nodeSum,]
}
```