# Clean and fully Explained Code || ✅ Beats 100%🔥|| Using BFS & Sorting || Step by Step breakdown

**Author:** UK07
**Votes:** 97
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5949739/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5949739/)

---

# Intuition
The problem involves calculating the sum of node values at each level of a binary tree, then finding the k-th largest sum. Given that the binary tree can be processed level by level using breadth-first search (BFS), the key idea is to traverse the tree while keeping track of the sums for each level. Sorting these sums allows us to extract the k-th largest value.

# Approach
1. Perform a level-order traversal (BFS) of the binary tree. Use a queue to process each node level by level.
2. For each level, compute the sum of the node values.
3. Store the sums in a list. Once the entire tree is traversed, this list will contain the sum for each level.
4. Sort the list in descending order to get the sums from largest to smallest.
5. Return the k-th largest sum (considering that `k` is 1-based, so retrieve `res[k-1]`).
6. If `k` is larger than the number of levels, return `-1` as the tree doesn\u2019t have enough levels.

# Complexity
- Time complexity:  
  The BFS traversal takes $$O(N)$$, where $$N$$ is the number of nodes in the tree. Sorting the level sums takes $$O(LlogL)$$, where $$L$$ is the number of levels in the tree. Therefore, the overall time complexity is $$O(N + L \\log L)$$.

- Space complexity:  
  The space complexity is $$O(N)$$ because of the queue used for BFS and the list storing level sums.

# Code Breakdown:
1. **TreeNode Definition**: The `TreeNode` structure is used to represent each node in the binary tree. Each node contains an integer value, a pointer to the left child, and a pointer to the right child.
   
2. **Solution Class and kthLargestLevelSum Function**:
   - The function starts by initializing a queue for BFS traversal and a result vector `res` to store the sum of node values at each level.
   - Using a while-loop, the queue processes all nodes level by level. For each level, it calculates the sum of the node values and appends this sum to the `res` vector.
   - After the tree is processed, the vector `res` contains the sums of all levels. The function then checks if `k` is valid (i.e., smaller than or equal to the number of levels).
   - Finally, the function sorts the sums in descending order and returns the k-th largest value from the sorted list. If `k` is greater than the number of levels, it returns `-1`.


# Code
```cpp []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    long long kthLargestLevelSum(TreeNode* root, int k) {
        vector<long long> res;      // To store sum of each level
        queue<TreeNode*> q;         // Queue for level-order traversal (BFS)
        
        q.push(root);               // Start BFS from the root node
        while (!q.empty()) {
            int n = q.size();       // Number of nodes at the current level
            long long sum = 0;      // Sum of node values at the current level
            
            // Process all nodes at the current level
            while (n--) {
                TreeNode* node = q.front(); q.pop();   // Get the front node from the queue
                sum += (long long)node->val;           // Add node's value to the level sum
                
                // Push left and right children of the node to the queue (if they exist)
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            res.push_back(sum);     // Store the sum of the current level
        }

        // If k is greater than the number of levels, return -1
        if (k > res.size()) return -1;
        
        // Sort the level sums in descending order
        sort(res.begin(), res.end(), greater<long long>());
        
        // Return the k-th largest level sum (k-1 due to 0-based indexing)
        return res[k-1];
    }
};
```
```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public long kthLargestLevelSum(TreeNode root, int k) {
        List<Long> res = new ArrayList<>();  // To store sum of each level
        Queue<TreeNode> q = new LinkedList<>();  // Queue for level-order traversal
        q.add(root);  // Start BFS from the root node

        while (!q.isEmpty()) {
            int n = q.size();  // Number of nodes at the current level
            long sum = 0;  // Sum of node values at the current level
            
            for (int i = 0; i < n; i++) {
                TreeNode node = q.poll();
                sum += node.val;
                
                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }
            res.add(sum);  // Store the sum of the current level
        }

        if (k > res.size()) return -1;
        
        res.sort(Collections.reverseOrder());  // Sort level sums in descending order
        
        return res.get(k - 1);  // Return the k-th largest sum
    }
}
```
```python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: TreeNode, k: int) -> int:
        res = []  # To store sum of each level
        q = deque([root])  # Queue for level-order traversal (BFS)

        while q:
            n = len(q)  # Number of nodes at the current level
            level_sum = 0  # Sum of node values at the current level
            
            for _ in range(n):
                node = q.popleft()
                level_sum += node.val
                
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                    
            res.append(level_sum)  # Store the sum of the current level

        if k > len(res):
            return -1
        
        res.sort(reverse=True)  # Sort the level sums in descending order
        
        return res[k-1]  # Return the k-th largest sum
```
```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    if (!root) return -1;  // Edge case: if root is null, return -1

    let res = [];  // To store sum of each level
    let q = [root];  // Queue for level-order traversal (BFS)

    while (q.length > 0) {
        let n = q.length;  // Number of nodes at the current level
        let sum = 0;  // Sum of node values at the current level

        for (let i = 0; i < n; i++) {
            let node = q.shift();  // Get the front node from the queue
            sum += node.val;  // Add node's value to the level sum

            // Push left and right children of the node to the queue (if they exist)
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(sum);  // Store the sum of the current level
    }

    if (k > res.length) return -1;  // If k is greater than number of levels, return -1

    res.sort((a, b) => b - a);  // Sort the level sums in descending order

    return res[k - 1];  // Return the k-th largest level sum (k-1 due to 0-based indexing)
};
```
```golang []
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthLargestLevelSum(root *TreeNode, k int) int64 {
	if root == nil {
		return -1
	}

	var res []int
	q := list.New()
	q.PushBack(root)

	for q.Len() > 0 {
		n := q.Len()
		levelSum := 0

		for i := 0; i < n; i++ {
			node := q.Remove(q.Front()).(*TreeNode)
			levelSum += node.Val

			if node.Left != nil {
				q.PushBack(node.Left)
			}
			if node.Right != nil {
				q.PushBack(node.Right)
			}
		}
		res = append(res, levelSum)
	}

	if k > len(res) {
		return -1
	}

	sort.Sort(sort.Reverse(sort.IntSlice(res)))  // Sort the sums in descending order

	return res[k-1]  // Return the k-th largest sum
}
```
```rust []
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn kth_largest_level_sum(root: Option<Box<TreeNode>>, k: usize) -> i64 {
        if root.is_none() {
            return -1;
        }

        let mut res: Vec<i64> = Vec::new();
        let mut q = VecDeque::new();
        q.push_back(root);

        while !q.is_empty() {
            let n = q.len();
            let mut sum: i64 = 0;

            for _ in 0..n {
                if let Some(Some(node)) = q.pop_front() {
                    sum += node.val as i64;
                    
                    if node.left.is_some() {
                        q.push_back(node.left);
                    }
                    if node.right.is_some() {
                        q.push_back(node.right);
                    }
                }
            }
            res.push(sum);
        }

        if k > res.len() {
            return -1;
        }

        res.sort_by(|a, b| b.cmp(a));  // Sort sums in descending order

        res[k - 1]  // Return the k-th largest sum
    }
}
```

![image.png](./images/0.png)
