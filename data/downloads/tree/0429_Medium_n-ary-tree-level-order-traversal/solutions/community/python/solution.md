# 🔥 [LeetCode The Hard Way]🔥 Easy BFS Explained Line By Line

**Author:** tr1nity
**Votes:** 50
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532297/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532297/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. I'll explain my solution line by line daily. 
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

You may check out my recent BFS solutions on other problems.

https://leetcode.com/problems/average-of-levels-in-binary-tree/discuss/2516577/leetcode-the-hard-way-bfs-explained-line-by-line
https://leetcode.com/problems/numbers-with-same-consecutive-differences/discuss/2521519/leetcode-the-hard-way-easy-bfs-100-explained-line-by-line

**Someone keeps downvoting my posts recently for no reason. Instead of just downvoting, please leave a useful comment to let me know what I could make better. Thanks.**

**C++**

```cpp
// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(M): where M is the maximum number in the tree at any level
class Solution {
public:
    // The idea is to use BFS, which is a common way to traverse the tree level by level
    // For a standard BFS, we can use queue to push the first root node into a queue
    // Then remove the front of the queue, add its children to back of the queue
    // Do the above steps until the queue is empty
    // In this question, we need to extra thing which is to push the each value of the nodes level by level
    // We can simply use `level` to store the values of the nodes at current level, 
    // and add it back to `ans` once we've processed all nodes at that level
    vector<vector<int>> levelOrder(Node* root) {
        // the total number of nodes is between [0, 10 ^ 4]
        // check if root is nullptr to cover 0 node case
        if(!root)  return {};
        // init ans
        vector<vector<int>> ans;
        // standard bfs approach
        queue<Node*> q;
        // start with the root node
        q.push(root); 
        // do the following logic when the queue is not empty
        while(!q.empty()) {
            // get the queue size
            int n = q.size(); 
            // level is used to store all the node values at the current level
            vector<int> level;
            // for each element in the current queue
            for(int i = 0; i < n; i++){
                //get the first node from the queue
                Node* node = q.front();
                // pop it
                q.pop();
                // add it to level
                level.push_back(node->val);
                // this node may include other nodes, we add them all to the queue
                for(auto n : node->children) q.push(n); 
            }
            // we've processed this level, add it to ans
            ans.push_back(level);
        }
        // return final ans
        return ans;
    }
};
```

**Python**

```py
# Time Complexity: O(N) where N is the number of nodes in the tree
# Space Complexity: O(M): where M is the maximum number in the tree at any level
class Solution:
    # The idea is to use BFS, which is a common way to traverse the tree level by level
    # For a standard BFS, we can use queue to push the first root node into a queue
    # Then remove the front of the queue, add its children to back of the queue
    # Do the above steps until the queue is empty
    # In this question, we need to extra thing which is to push the each value of the nodes level by level
    # We can simply use `level` to store the values of the nodes at current level, 
    # and add it back to `ans` once we've processed all nodes at that level
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        # the total number of nodes is between [0, 10 ^ 4]
        # check if root is None to cover 0 node case
        if not root: return []
        # init ans
        ans = []
        # standard bfs approach
        # start with the root node
        q = deque([root])
        # do the following logic when the queue is not empty
        while q:
            # level is used to store all the node values at the current level
            level = []
            # for each element in the current queue
            for _ in range(len(q)):
                # get the first node from the queue and pop it
                node = q.popleft()
                # add it to level
                level += [node.val]
                # this node may include other nodes, we add them all to the queue
                for n in node.children: q.append(n)
            # we've processed this level, add it to ans
            ans += [level]
        # return final ans
        return ans
```