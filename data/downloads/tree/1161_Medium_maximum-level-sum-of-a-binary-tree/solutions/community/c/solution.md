# Easy Solution + Video| Java C++ Python

**Author:** jeevankumar159
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639045/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639045/)

---

# Intuition:
As the name indicates level order traversal is traversing the tree level by level.This can easily achieved with the use of a queue.
But there is an additional requirment that the sum of each level and the level itself has to be remembered. This can be achieved with slight modification to L.O.T i.e we get the size of the queue at the beginning of each loop and traverse all the elements in a for loop.

#Approach
1. Initialize a queue and add the root.
2. Initialize maxSum, ans and level.
3. while queue is not empty:
	4. Get the size of queue and store in levelSize.
	5. for i = 0 to level size remove all the elements from queue and add it to levelSum.
	6. if levelSum> maxSum change both maxSum and ans.
	7. level++

8. Return ans.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nHFygbXqhcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    public int maxLevelSum(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList();
        queue.add(root);
        int maxSum = root.val;
        int ans = 1;
        int level = 1;
        while (!queue.isEmpty()){
            int levelSize = queue.size();
            int levelSum = 0;
            for(int i = 0;i<levelSize;i++){
                TreeNode removed = queue.remove();
                levelSum+=removed.val;
                if(removed.left!=null)queue.add(removed.left);
                if(removed.right!=null) queue.add(removed.right);
            }
            if(levelSum>maxSum){
                maxSum = levelSum;
                ans = level;
            }
            level++;
        }
        return ans;
    }
}
```

```
class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        std::queue<TreeNode*> queue;
        queue.push(root);
        int maxSum = root->val;
        int ans = 1;
        int level = 1;
        while (!queue.empty()) {
            int levelSize = queue.size();
            int levelSum = 0;
            for (int i = 0; i < levelSize; i++) {
                TreeNode* removed = queue.front();
                queue.pop();
                levelSum += removed->val;
                if (removed->left != nullptr) queue.push(removed->left);
                if (removed->right != nullptr) queue.push(removed->right);
            }
            if (levelSum > maxSum) {
                maxSum = levelSum;
                ans = level;
            }
            level++;
        }
        return ans;
    }
};
```

```
class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        queue = deque()
        queue.append(root)
        maxSum = root.val
        ans = 1
        level = 1
        while queue:
            levelSize = len(queue)
            levelSum = 0
            for _ in range(levelSize):
                removed = queue.popleft()
                levelSum += removed.val
                if removed.left:
                    queue.append(removed.left)
                if removed.right:
                    queue.append(removed.right)
            if levelSum > maxSum:
                maxSum = levelSum
                ans = level
            level += 1
        return ans
```
