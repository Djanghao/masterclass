# 🌲 Binary Tree Explorer: Mastered JavaScript, Python, Python3, C++ | 100.00% Efficiency Seeker ⚡️

**Author:** DevOgabek
**Votes:** 118
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792022/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792022/)

---

## Show your appreciation by clicking the upvote button
![Screen Shot 2024-03-14 at 11.30.19.png](./images/2.png)


# Intuition
The code aims to find and return the leftmost value in the last level of a binary tree. The use of a deque and a level-order traversal suggests a breadth-first search (BFS) approach to efficiently traverse the tree level by level.

# Approach
1. Initialize a deque `queue` with the root node and a variable `leftmost_value` to None.
2. Perform a while loop while the queue is not empty:
   - Dequeue a node from the left of the deque.
   - Update `leftmost_value` with the value of the dequeued node.
   - Enqueue the right child if it exists.
   - Enqueue the left child if it exists.
3. Continue the process until all nodes at the last level are processed.
4. Return the `leftmost_value`.

![Copy of Untitled drawing.png](./images/1.png)

# Complexity
- Time complexity: $$O(n)$$, where $$n$$ is the number of nodes in the binary tree. Each node is processed once during the level-order traversal.
- Space complexity: $$O(m)$$, where $$m$$ is the maximum number of nodes at any level in the binary tree. In the worst case, the queue would store all nodes at the maximum level.

![Screen Shot 2024-03-14 at 11.30.19.png](./images/2.png)

```python []
class Solution(object):
    def findBottomLeftValue(self, root):
        queue = deque([root])
        leftmost_value = None

        while queue:
            node = queue.popleft()

            leftmost_value = node.val

            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)

        return leftmost_value
```
```python3 []
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        leftmost_value = None

        while queue:
            node = queue.popleft()

            leftmost_value = node.val

            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)

        return leftmost_value
```
```C++ []
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int leftmost_value;

        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();

            leftmost_value = node->val;

            if (node->right) {
                q.push(node->right);
            }
            if (node->left) {
                q.push(node->left);
            }
        }

        return leftmost_value;
    }
};
```
```JavaScript []
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {

    const queue = [root];
    let leftmostValue;

    while (queue.length > 0) {
        const node = queue.shift();

        leftmostValue = node.val;

        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }

    return leftmostValue;
};

```


![i_pixian_ai.png](./images/3.png)

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

