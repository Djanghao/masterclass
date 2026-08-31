# 🔥💯🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5950647/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5950647/)

---



# Intuition
The idea is to compute the sum of node values for each level of the binary tree, then retrieve the k-th largest level sum. We can perform a level-order traversal (BFS) to process each level separately. After calculating the sums, we can sort them and retrieve the k-th largest sum.

# Approach
1. Perform a level-order traversal (BFS) to compute the sum of node values for each level.
2. Store each level sum in a list.
3. Sort the list in descending order.
4. Return the k-th largest level sum if it exists; otherwise, return `-1`.

# Complexity
- Time complexity:  
  $$O(n \\log n)$$ \u2014 We visit every node (O(n)) and then sort the list of sums (O(log n)).
- Space complexity:  
  $$O(n)$$ \u2014 For storing the level sums.

# Code

```javascript []
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  kthLargestLevelSum(root, k) {
    let res = [];
    let queue = [root];

    while (queue.length > 0) {
      let size = queue.length;
      let sum = 0;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        sum += node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      res.push(sum);
    }

    if (k > res.length) return -1;

    res.sort((a, b) => b - a); // Sort in descending order
    return res[k - 1];
  }
}
```

```python []
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def kthLargestLevelSum(self, root: TreeNode, k: int) -> int:
        if not root:
            return -1

        queue = deque([root])
        level_sums = []

        while queue:
            level_size = len(queue)
            level_sum = 0
            for _ in range(level_size):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level_sums.append(level_sum)

        if k > len(level_sums):
            return -1

        level_sums.sort(reverse=True)
        return level_sums[k - 1]
```

```cpp []
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    long long kthLargestLevelSum(TreeNode* root, int k) {
        if (!root) return -1;

        vector<long long> levelSums;
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int size = q.size();
            long long levelSum = 0;
            for (int i = 0; i < size; i++) {
                TreeNode* node = q.front();
                q.pop();
                levelSum += node->val;
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            levelSums.push_back(levelSum);
        }

        if (k > levelSums.size()) return -1;

        sort(levelSums.rbegin(), levelSums.rend()); // Sort in descending order
        return levelSums[k - 1];
    }
};
```

```go []
package main

import (
	"container/list"
	"sort"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func kthLargestLevelSum(root *TreeNode, k int) int {
	if root == nil {
		return -1
	}

	var levelSums []int
	queue := list.New()
	queue.PushBack(root)

	for queue.Len() > 0 {
		levelSize := queue.Len()
		levelSum := 0
		for i := 0; i < levelSize; i++ {
			node := queue.Remove(queue.Front()).(*TreeNode)
			levelSum += node.Val
			if node.Left != nil {
				queue.PushBack(node.Left)
			}
			if node.Right != nil {
				queue.PushBack(node.Right)
			}
		}
		levelSums = append(levelSums, levelSum)
	}

	if k > len(levelSums) {
		return -1
	}

	sort.Sort(sort.Reverse(sort.IntSlice(levelSums)))
	return levelSums[k-1]
}
```

```dart []
class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode(this.val, {this.left, this.right});
}

class Solution {
  int kthLargestLevelSum(TreeNode root, int k) {
    List<int> levelSums = [];
    List<TreeNode> queue = [root];

    while (queue.isNotEmpty) {
      int size = queue.length;
      int sum = 0;
      for (int i = 0; i < size; i++) {
        TreeNode node = queue.removeAt(0);
        sum += node.val;
        if (node.left != null) queue.add(node.left!);
        if (node.right != null) queue.add(node.right!);
      }
      levelSums.add(sum);
    }

    if (k > levelSums.length) return -1;

    levelSums.sort((a, b) => b - a);
    return levelSums[k - 1];
  }
}
```

![image.png](./images/0.png) {:style='width:250px'}