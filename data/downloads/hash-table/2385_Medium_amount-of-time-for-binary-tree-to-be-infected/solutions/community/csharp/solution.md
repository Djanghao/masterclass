# (O(N)⏱️) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 C++🦾 C##️⃣ Binary Tree🌳

**Author:** VishnuThangaraj
**Votes:** 15
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538708/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538708/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A

# Intuition\uD83E\uDDE0
<!-- Describe your first thoughts on how to solve this problem. -->
To calculate the amount of time to Infect Binary Tree, Perform `Depth-First Search`. Calculate the depths from the childrens of the current node, and update the result based on the infected node present in the subtree of the current or not. 


# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
1. Initialize the `result` variable outside the function which holds the time taken to infect the tree.
2. Make a **Depth-First Search** .
    - In every recursive call find the depth of the **Left** and **Right** childrens of the **current Node**.
3. If the **infected Node** is found.
    - Make the `result` to hold the max Depth of **Right** and **Left** Children.
    - Return with `-1` to represent the infected tree is found.
4. If the **infected node** is not found under the subtree of the current node, return the max Depth of **Right** and **Left** Children `+ 1`. Which includes the current node.
5. If the **infected node** is found under the subtree of the current node:
    - Update the `result` with max of result and **absolute difference** between the `leftDepth` and `rightDepth` from the current node, and return Minimum depth `-1`.
    - **-1** is to calculate depth in negative values. which helps to specifiy the infected node is present in subtree and use `abs(leftDepth-rightDepth)` which converts negative values to positive values to get the total depth for updating `result`.
6. Return the `result` variable.

# Complexity\u231B
- Time complexity: `O(n)`, where **n** is the number of nodes in the Binary Search Tree.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(h)`, where **h** is the height of the tree. This complexity arises from the call stack that holds the recursive calls during the search process.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java\u2615 []
class Solution {
    private int result;

    public int amountOfTime(TreeNode root, int start) {
        DFS(root, start);
        return result;
    }

    private int DFS(TreeNode node, int start){
        if(node == null) return 0;

        int leftDepth = DFS(node.left, start);
        int rightDepth = DFS(node.right, start);

        if(node.val == start){
            result = Math.max(leftDepth, rightDepth);
            return -1;
        }
        else if(leftDepth >= 0 && rightDepth >= 0)
            return Math.max(leftDepth, rightDepth)+1;
        
        result = Math.max(result, Math.abs(leftDepth - rightDepth));
        return Math.min(leftDepth, rightDepth) - 1;
    }
}
```
``` Python\uD83D\uDC0D []
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        result = 0

        def DFS(node, start):
            if node == None:
                return 0

            leftDepth = DFS(node.left, start)
            rightDepth = DFS(node.right, start)

            if node.val == start:
                Solution.result = max(leftDepth, rightDepth)
                return -1
            
            elif leftDepth >= 0 and rightDepth >= 0:
                return max(leftDepth, rightDepth)+1
            
            Solution.result = max(Solution.result, abs(leftDepth - rightDepth))
            return min(leftDepth, rightDepth) - 1

        DFS(root, start)
        return Solution.result
```
``` Javascript\uD83D\uDC9B []
var amountOfTime = function(root, start) {
    let result = 0;

    const DFS = function(node, start){
        if(node == null) return 0;

        let leftDepth = DFS(node.left, start);
        let rightDepth = DFS(node.right, start);

        if(node.val == start){
            result = Math.max(leftDepth, rightDepth);
            return -1;
        }
        else if(leftDepth >= 0 && rightDepth >= 0)
            return Math.max(leftDepth, rightDepth)+1;
        
        result = Math.max(result, Math.abs(leftDepth - rightDepth));
        return Math.min(leftDepth, rightDepth) - 1;
    };

    DFS(root, start);
    return result;
};
```
``` Typecript\uD83D\uDD37 []
function amountOfTime(root: TreeNode | null, start: number): number {
    let result = 0;

    const DFS = function(node, start){
        if(node == null) return 0;

        let leftDepth = DFS(node.left, start);
        let rightDepth = DFS(node.right, start);

        if(node.val == start){
            result = Math.max(leftDepth, rightDepth);
            return -1;
        }
        else if(leftDepth >= 0 && rightDepth >= 0)
            return Math.max(leftDepth, rightDepth)+1;
        
        result = Math.max(result, Math.abs(leftDepth - rightDepth));
        return Math.min(leftDepth, rightDepth) - 1;
    };

    DFS(root, start);
    return result;
};
```
``` C++\uD83E\uDDBE []
class Solution {
public:
    int result;

    int amountOfTime(TreeNode* root, int start) {
        DFS(root, start);
        return result;
    }

    int DFS(TreeNode* node, int start){
        if(node == NULL) return 0;

        int leftDepth = DFS(node->left, start);
        int rightDepth = DFS(node->right, start);

        if(node->val == start){
            result = std::max(leftDepth, rightDepth);
            return -1;
        }
        else if(leftDepth >= 0 && rightDepth >= 0)
            return std::max(leftDepth, rightDepth)+1;
        
        result = std::max(result, std::abs(leftDepth - rightDepth));
        return std::min(leftDepth, rightDepth) - 1;
    }
};
```
``` C##\uFE0F\u20E3 []
public class Solution {
    private int result;
    public int AmountOfTime(TreeNode root, int start) {
        DFS(root, start);
        return result;
    }

    private int DFS(TreeNode node, int start){
        if(node == null) return 0;

        int leftDepth = DFS(node.left, start);
        int rightDepth = DFS(node.right, start);

        if(node.val == start){
            result = Math.Max(leftDepth, rightDepth);
            return -1;
        }
        else if(leftDepth >= 0 && rightDepth >= 0)
            return Math.Max(leftDepth, rightDepth)+1;
        
        result = Math.Max(result, Math.Abs(leftDepth - rightDepth));
        return Math.Min(leftDepth, rightDepth) - 1;
    }
}
```