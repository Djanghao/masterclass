# Breadth first search | Golang | C++ | Python

**Author:** codeart7
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639806/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639806/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have to traverse the tree in such a way that we can have the sum of current level so, that we can compare our curr_sum with max_sum_so_far. So, this statement clearly gives the sign of breadth first search, we are going to implement BFS here.

If you don't know BFS already!! [Read this](https://cp-algorithms.com/graph/breadth-first-search.html)

# Approach
<!-- Describe your approach to solving the problem. -->
prerequisite for the algorithm are
`int max_sum_so_far = INT_MIN`
`int lvl = 0` and
`int min_lvl_so_far = 0`

Now we, will put each level in a queue and pop them one by one by the size of the queue. This idea help us to traverse the tree by level.
Rest we just have to calculate the current sum and maintain the level.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where n is the number of nodes in the tree.

# Code
```Go []
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxLevelSum(root *TreeNode) int {
	lvl := 0
	min_lvl_so_far := 0
	max_sum_so_far := math.MinInt64
	q := []*TreeNode{root}

	for len(q) > 0 {
		lvl++
		currSum := 0
		n := len(q)

		for n > 0 {
			node := q[0]
			q = q[1:]
			currSum += node.Val

			if node.Left != nil {
				q = append(q, node.Left)
			}
			if node.Right != nil {
				q = append(q, node.Right)
			}

			n--
		}

		if max_sum_so_far < currSum {
			max_sum_so_far = currSum
			min_lvl_so_far = lvl
		}
	}

	return min_lvl_so_far
}

```
```C++ []
class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        int lvl = 0, min_level_so_far = 0, max_sum_so_far = INT_MIN;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()) {
            lvl ++;
            int curr_sum = 0;
            int n = q.size();

            while(n--) {
                TreeNode* node = q.front();
                q.pop();
                curr_sum += node->val;

                if(node->left) q.push(node->left);
                if(node->right) q.push(node->right);
            }

            if(max_sum_so_far < curr_sum) {
                max_sum_so_far = curr_sum;
                min_level_so_far = lvl;
            }
        }

        return min_level_so_far;
    }
};
```
```Python3 []
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        lvl, min_level_so_far, max_sum_so_far = 0, 0, float('-inf')        
        q = [root]

        while(len(q) > 0):
            n = len(q)
            curr_sum = 0
            lvl += 1

            while n > 0:
                n -= 1
                node = q.pop(0)
                curr_sum += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            if max_sum_so_far < curr_sum:
                min_level_so_far = lvl
                max_sum_so_far = curr_sum

        return min_level_so_far
```