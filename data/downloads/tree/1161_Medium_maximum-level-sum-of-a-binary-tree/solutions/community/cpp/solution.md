# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** volipoq
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3641496/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3641496/)

---

# An Upvote will be encouraging \uD83D\uDC4D


# Video Solution

# Search \uD83D\uDC49` Maximum Level Sum of a Binary Tree By Tech Wired`
# or
# Click the Link in my Profile


```Python []

class Solution:
    def maxLevelSum(self, root):
        if not root:
            return 0

        queue = [root]
        max_level = 1
        max_sum = float('-inf')
        level = 1

        while queue:
            level_sum = 0
            next_level = []

            for node in queue:
                level_sum += node.val

                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)

            if level_sum > max_sum:
                max_sum = level_sum
                max_level = level

            queue = next_level
            level += 1

        return max_level

```
```Java []

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    public int maxLevelSum(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int maxLevel = 1;
        int maxSum = Integer.MIN_VALUE;
        int level = 1;

        while (!queue.isEmpty()) {
            int levelSum = 0;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                levelSum += node.val;

                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }

            if (levelSum > maxSum) {
                maxSum = levelSum;
                maxLevel = level;
            }

            level++;
        }

        return maxLevel;
    }
}

```
```C++ []
class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }

        std::queue<TreeNode*> queue;
        queue.push(root);
        int maxLevel = 1;
        int maxSum = INT_MIN;
        int level = 1;

        while (!queue.empty()) {
            int levelSum = 0;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = queue.front();
                queue.pop();
                levelSum += node->val;

                if (node->left != nullptr) {
                    queue.push(node->left);
                }
                if (node->right != nullptr) {
                    queue.push(node->right);
                }
            }

            if (levelSum > maxSum) {
                maxSum = levelSum;
                maxLevel = level;
            }

            level++;
        }

        return maxLevel;
    }
};

```
# An Upvote will be encouraging \uD83D\uDC4D