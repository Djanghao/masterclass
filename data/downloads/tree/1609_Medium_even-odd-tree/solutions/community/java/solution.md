# Easy solution with explanation in c++/java/python3/javaScript 💯 💯

**Author:** AmanSRawat
**Votes:** 34
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4797189/](https://leetcode.com/problems/even-odd-tree/solutions/4797189/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First thought that came in mind by seeing tree questions are bfs or dfs .Then as we have to checke a strictly increasing or decreasing order in levels so breadth first search would be a good approach to start .After that make an approach and implement it.

# Approach
<!-- Describe your approach to solving the problem. -->
Here's the explanation of the code:

1-Breadth-First Search (BFS): The code uses BFS to traverse the tree level by level. It utilizes a queue to keep track of the nodes at each level.

  2-  Flag for Alternating Levels: It uses a boolean flag flag to determine whether the current level should have odd or even values.

3-Conditions Checking: Inside the BFS loop, the code checks the following conditions for each node:

4-        If the current level is odd (flag is true), then the node value should be odd, and it should be strictly greater than the previous node's value.

5-      If the current level is even (flag is false), then the node value should be even, and it should be strictly less than the previous node's value.

6-   If any of these conditions are not met, the function returns false immediately.

 7-  Updating Queue: The code enqueues the left and right children of each node (if they exist) into the queue for the next level.

8- Updating Previous Value: The variable prev is updated with the value of the current node, ensuring it's used in the next iteration for comparison.

  9- Alternating Levels: After processing each level, the flag is toggled to switch between odd and even levels.

  10-  Returning Result: If the BFS completes without encountering any violation of conditions, the function returns true, indicating that the tree is an Even-Odd Tree.

# Complexity
- Time complexity:0(n) because each node traversed once
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:0(n)because of queue
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` c++ []


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
``` c++ []
class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
        if(root==NULL){
            return true;
        }
        queue<TreeNode*>q;
        bool flag=true;
      
        q.push(root);
        while(!q.empty()){
            int x = q.size() ;
            int prev = flag ? INT_MIN : INT_MAX;
            for(int i=0; i< x; i++){
                TreeNode* frontNode = q.front();
                q.pop();  
                if(flag){
                    if(frontNode->val %2==0 || frontNode->val <=  prev){
                     return false;
                    }
                }
                else{
                    if(frontNode->val %2!=0  || frontNode->val  >= prev){
            
                        return false;
                    }
                }

                if(frontNode->left){
                    q.push(frontNode->left);
                }
                if(frontNode->right){
                    q.push(frontNode->right);
                }
                prev= frontNode->val;
            }
            flag=!flag;
        }
        return true;
    }
};
```
``` python3 []
from typing import Optional

class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        queue = [root]
        level = 0
        while queue:
            prev = float('-inf') if level % 2 == 0 else float('inf')
            for _ in range(len(queue)):
                node = queue.pop(0)
                if (level % 2 == 0 and (node.val % 2 == 0 or node.val <= prev)) or (level % 2 != 0 and (node.val % 2 != 0 or node.val >= prev)):
                    return False
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                prev = node.val
            level += 1
        return True


```
``` java []
class Solution {
    public boolean isEvenOddTree(TreeNode root) {
        if (root == null) {
            return true;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        boolean flag = true;
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            int prev = flag ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (flag) {
                    if (node.val % 2 == 0 || node.val <= prev) {
                        return false;
                    }
                } else {
                    if (node.val % 2 != 0 || node.val >= prev) {
                        return false;
                    }
                }
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
                prev = node.val;
            }
            flag = !flag;
        }
        return true;
    }
}


```
``` javascript []
var isEvenOddTree = function(root) {
    if (root === null) {
        return true;
    }
    let queue = [root];
    let flag = true;
    while (queue.length > 0) {
        let size = queue.length;
        let prev = flag ? -Infinity : Infinity;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (flag) {
                if (node.val % 2 === 0 || node.val <= prev) {
                    return false;
                }
            } else {
                if (node.val % 2 !== 0 || node.val >= prev) {
                    return false;
                }
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            prev = node.val;
        }
        flag = !flag;
    }
    return true;
};

```