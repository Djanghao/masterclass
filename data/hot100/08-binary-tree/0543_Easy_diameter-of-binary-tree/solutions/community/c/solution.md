# ✔️✔️Beat 100% |  Simple Explanation | C++/Java/Python | TC-O(N)

**Author:** Inam_28_06
**Votes:** 88
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787437/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787437/)

---

Please **upvote** if you find the solution helpful.  
![image](./images/0.png)
## Explanation
**Diameter definition:** The diameter of a binary tree is the number of nodes on the longest path between any two leaf nodes.
The code finds the **longest path** (diameter) in a **binary tree**, considering:


Sure, let's break it down further:

1. **Define Helper Function:**
   - Create a function named `help` that takes a node as input.  

2. **Base Case:**
   - In the `helper` function, check if the current node is null (empty). If it is, return 0. 

3. **Recursive Calls:**
   - Recursively call the `help` function on the left and right child nodes of the current node.
4. **Update Diameter:**
   - Update the global variable `diameter` with the maximum value between itself and the sum of the heights of the left and right subtrees. `diameter = max(diameter, left + right);`

5. **Return Height:**
   - Return the maximum height of the left and right subtrees plus 1 (to account for the current node). `return max(left, right) + 1; `

6. **Main Function:**
   - Call the `help` function with the root node of the binary tree.
   - Initialize the `diameter` variable to 0.

7. **Return Diameter:**
   - After calling the helper function, return the value stored in the `diameter`.



**Complexity:**
* **Time complexity: O(n)** `visiting each node once.`
* **Space complexity: O(h)** `due to recursive calls, where h is the tree's height.`


```
class Solution {
    int help(TreeNode* root, int& diameter) {
        if (root == NULL) return 0;                         // Base case: NULL node has height 0
        int left = help(root->left, diameter);             // Height of left subtree
        int right = help(root->right, diameter);          // Height of right subtree
        diameter = max(diameter, left + right);          // Update diameter
        return max(left, right) + 1;                    // Return current subtree height
    }

public:
    int diameterOfBinaryTree(TreeNode* root) {
        int diameter = 0;                            // Initialize diameter to 0
        help(root, diameter);                       // Call helper function
        return diameter;                           // Return final diameter
    }
};
```
**Python**
```
class Solution(object):
    def diameterOfBinaryTree(self, root):
        diameter = [0]
        
        def helper(node):
            if not node:
                return 0
            
            left = helper(node.left)
            right = helper(node.right)
            diameter[0] = max(diameter[0], left + right)
            
            return max(left, right) + 1
        
        helper(root)
        return diameter[0]
```
```
public class Solution {
    int diameter;

    public int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        helper(root);
        return diameter;
    }

    private int helper(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int left = helper(root.left);
        int right = helper(root.right);
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
    }
}
```
![image](./images/1.jpeg)