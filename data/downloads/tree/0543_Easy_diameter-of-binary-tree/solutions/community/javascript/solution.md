# Surpassing 97.93% 🚀 || Memory Magician: Excelling at 97.23% 🧠

**Author:** DevOgabek
**Votes:** 144
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787634/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787634/)

---

![31c8f335-9e52-45bd-8701-8f33260b84ad_1709165793.521128.png](./images/2.png)

![Screen Shot 2024-02-27 at 07.24.58.png](./images/1.png)

## Problem Exploration

**Problem Description:**
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

**Example:**
```
Input:

          1
         / \\
        2   3
       / \\
      4   5

Output: 3

Explanation:
The diameter of the binary tree is the path [4,2,1,3] or [5,2,1,3].
```

## Intuition

The problem requires finding the diameter of a binary tree, which is defined as the number of nodes along the longest path between any two nodes in the tree. Initially, consider traversing the tree recursively, calculating the length of the longest path passing through each node.

## Approach

The approach involves a recursive depth-first traversal of the binary tree. At each node, calculate the length of the longest path passing through that node (which is the sum of the heights of its left and right subtrees). Keep track of the maximum diameter encountered so far.

## Complexity Analysis

- **Time complexity**:
    - For both the `Python` and `JavaScript` implementations, the time complexity is $$O(n)$$, where n is the number of nodes in the binary tree.
    - For the `C++` implementation, the time complexity is also $$O(n)$$.
- **Space complexity**:
    - For all implementations, the space complexity is $$O(n)$$ due to the recursive function calls and the space required for the call stack.

## Additional Exploration

1. **Optimizing Space Complexity**: While the provided solution is efficient in terms of time complexity, it utilizes additional space for maintaining the maximum diameter encountered. One could explore ways to optimize space usage without sacrificing time complexity.

2. **Alternative Approaches**:
    - **DFS with Height Calculation**: Instead of directly calculating the diameter at each node, one could use a depth-first search (DFS) approach to calculate the height of each node's left and right subtrees separately. Then, the diameter passing through each node can be computed as the sum of the heights of its left and right subtrees.
    
    - **DFS with Diameter Calculation**: Another approach involves using DFS to calculate the diameter of each subtree rooted at every node. This approach computes the diameter in a bottom-up manner, starting from the leaf nodes and progressing towards the root.

3. **Breadth-First Search (BFS) Approach**: Although the provided solution uses depth-first traversal, BFS can also be utilized to solve this problem. By performing a level-order traversal of the binary tree, one can compute the diameter in a more iterative fashion.

4. **Handling Edge Cases**: It's essential to consider edge cases such as an empty tree, a tree with only one node, or a tree with unbalanced subtrees. Ensuring the algorithm handles these cases correctly adds robustness to the solution.

5. **Comparative Analysis**: Comparing the runtime performance of different approaches and implementations (e.g., recursive vs. iterative, DFS vs. BFS) can provide insights into the efficiency of each solution in terms of time and space complexity.

6. **Extensions and Variants**: Explore variants of the problem, such as finding the longest path between any two leaf nodes in the tree or considering weighted edges in the tree structure.

## Solution Performance:

- **Efficiency Champion (97.93%) \uD83D\uDE80**: This solution stands out for its exceptional efficiency, surpassing 97.93% of submissions. It demonstrates optimized algorithms and coding techniques to achieve superior performance.

- **Memory Magician (97.23%) \uD83E\uDDE0**: Excelling at 97.23%, this solution showcases remarkable memory management skills. By minimizing memory usage and optimizing data structures, it achieves outstanding results in terms of space efficiency.

## Code

```python []
class Solution(object):
    def diameterOfBinaryTree(self, root):
        # Define a recursive function to calculate the diameter
        def diameter(node, res):
            # Base case: if the node is None, return 0
            if not node:
                return 0
            
            # Recursively calculate the diameter of left and right subtrees
            left = diameter(node.left, res)
            right = diameter(node.right, res)

            # Update the maximum diameter encountered so far
            res[0] = max(res[0], left + right)
            
            # Return the depth of the current node
            return max(left, right) + 1
        
        # Initialize a list to hold the maximum diameter encountered
        res = [0]
        # Call the diameter function starting from the root
        diameter(root, res)
        # Return the maximum diameter encountered
        return res[0]
```

```python3 []
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Define a recursive function to calculate the diameter
        def diameter(node, res):
            # Base case: if the node is None, return 0
            if not node:
                return 0
            
            # Recursively calculate the diameter of left and right subtrees
            left = diameter(node.left, res)
            right = diameter(node.right, res)

            # Update the maximum diameter encountered so far
            res[0] = max(res[0], left + right)
            
            # Return the depth of the current node
            return max(left, right) + 1
        
        # Initialize a list to hold the maximum diameter encountered
        res = [0]
        # Call the diameter function starting from the root
        diameter(root, res)
        # Return the maximum diameter encountered
        return res[0]
```

```C++ []
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        // Define a helper function to calculate the diameter recursively
        int res = 0;
        diameter(root, res);
        return res;
    }

private:
    int diameter(TreeNode* curr, int& res){
        // Base case: if the current node is null, return 0
        if (!curr) return 0;
        
        // Recursively calculate the diameter of left and right subtrees
        int left = diameter(curr->left, res);
        int right = diameter(curr->right, res);

        // Update the maximum diameter encountered so far
        res = std::max(res, left + right);
        
        // Return the depth of the current node
        return std::max(left, right) + 1;
    }
};

```

```javascript []
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // Define a helper function to calculate the diameter recursively
    const diameter = (node, res) => {
        // Base case: if the current node is null, return 0
        if (!node) return 0;
        
        // Recursively calculate the diameter of left and right subtrees
        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        // Update the maximum diameter encountered so far
        res[0] = Math.max(res[0], left + right);
        
        // Return the depth of the current node
        return Math.max(left, right) + 1;
    }
    
    // Initialize a list to hold the maximum diameter encountered
    const res = [0];
    // Call the diameter function starting from the root
    diameter(root, res);
    // Return the maximum diameter encountered
    return res[0];
};

```
![31c8f335-9e52-45bd-8701-8f33260b84ad_1709165793.521128.png](./images/2.png)

## **My solutions**

\uD83D\uDFE2 - $$easy$$  
\uD83D\uDFE1 - $$medium$$ 
\uD83D\uDD34 - $$hard$$

\uD83D\uDFE1 [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/4845532/there-is-an-80-chance-of-being-in-the-interview-full-problem-explanation)
\uD83D\uDFE1 [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/solutions/4845742/simple-explanation-with-pictures)
\uD83D\uDFE1 [39. Combination Sum](https://leetcode.com/problems/combination-sum/solutions/4847482/beat-8292-full-explanation-with-pictures)
\uD83D\uDFE2 [2540. Minimum Common Value](https://leetcode.com/problems/minimum-common-value/solutions/4845076/beat-9759-full-explanation-with-pictures)
\uD83D\uDFE2 [3005. Count Elements With Maximum Frequency](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4839796/beat-8369-full-explanation-with-pictures)
\uD83D\uDFE2 [3028. Ant on the Boundary](https://leetcode.com/problems/ant-on-the-boundary/solutions/4837433/full-explanation-with-pictures)
\uD83D\uDFE2 [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/solutions/4834682/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [1750. Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4824224/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [948. Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/solutions/4818912/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/4813340/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE2 [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/4807704/square-sorter-python-python3-javascript-c)
\uD83D\uDFE2 [2864. Maximum Odd Binary Number](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802402/visual-max-odd-binary-solver-python-python3-javascript-c)
\uD83D\uDFE1 [1609. Even Odd Tree](https://leetcode.com/problems/even-odd-tree/solutions/4797529/even-odd-tree-validator-python-python3-javascript-c)
\uD83D\uDFE2 [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/4795373/why-not-1-line-of-code-python-python3-c-everyone-can-understand)
\uD83D\uDFE1 [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792022/binary-tree-explorer-mastered-javascript-python-python3-c-10000-efficiency-seeker)
\uD83D\uDFE2 [1. Two Sum](https://leetcode.com/problems/two-sum/solutions/4791305/5-methods-python-c-python3-from-easy-to-difficult)
\uD83D\uDFE2 [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787634/surpassing-9793-memory-magician-excelling-at-9723)
[More...](https://leetcode.com/DevOgabek/)

