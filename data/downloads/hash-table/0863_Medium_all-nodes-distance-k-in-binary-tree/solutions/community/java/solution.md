# ✅Two BFS || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 138
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747835/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747835/)

---

# Intuition:
The Intuition is to perform two BFS traversals: one to build the parent-child relationship and another to find all nodes at a distance of k from the target node.

# Explanation:

1. Start a BFS from the root node of the binary tree. We will use a queue to perform the BFS traversal. Initialize an empty queue and push the root node into it.

2. While the queue is not empty, perform the following steps:
   - Get the current size of the queue (number of nodes at the current level).
   - Iterate through all the nodes at the current level.
   - For each node, check if it has a left child. If it does, store the parent-child relationship by mapping the left child's value to its parent node in an unordered_map called "parent".
   - Similarly, if the current node has a right child, store the parent-child relationship for the right child.
   - After processing the children of the current node, remove it from the queue.

3. After the BFS traversal, we will have the parent-child relationship stored in the "parent" unordered_map.

4. Now, we need to perform another BFS traversal to find all the nodes at a distance of k from the target node. Initialize another empty queue and push the target node into it.

5. While the value of k is greater than 0 and the queue is not empty, perform the following steps:
   - Get the current size of the queue (number of nodes at the current level).
   - Iterate through all the nodes at the current level.
   - Mark the current node as visited by adding its value to the "visited" unordered_map.
   - If the current node has a left child and it has not been visited yet, push it into the queue.
   - If the current node has a right child and it has not been visited yet, push it into the queue.
   - If the current node has a parent and the parent node has not been visited yet, push the parent node into the queue.
   - After processing the current node and its children/parent, remove it from the queue.

6. After the BFS traversal, we will have all the nodes at a distance of k from the target node stored in the queue.

7. Finally, we can extract the values of the nodes from the queue and store them in a vector called "ans". Return the "ans" vector as the result.

# Code
```C++ []
class Solution {
public:
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        vector<int> ans;
        unordered_map<int, TreeNode*> parent;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            int si = q.size();
            for(int i = 0; i < si; i++){
                auto top = q.front();
                q.pop();
                
                if(top -> left){
                    parent[top->left->val] = top;
                    q.push(top->left); 
                }

                if(top -> right){
                    parent[top->right->val] = top;
                    q.push(top->right); 
                }
            }
        }

        unordered_map<int, int> visited;
        q.push(target);
        while(k-- && !q.empty()){
            int size = q.size();

            for(int i = 0; i < size; i++){
                auto top = q.front();
                q.pop();

                visited[top -> val] = 1;

                if(top -> left && !visited[top->left->val]){
                    q.push(top -> left);
                }

                if(top -> right && !visited[top->right->val]){
                    q.push(top -> right);
                }

                if(parent[top->val] && !visited[parent[top->val] -> val]){
                    q.push(parent[top->val]);
                }

            }
        }

        while(!q.empty()){
            ans.push_back(q.front()->val);
            q.pop();
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        List<Integer> ans = new ArrayList<>();
        Map<Integer, TreeNode> parent = new HashMap<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode top = queue.poll();

                if (top.left != null) {
                    parent.put(top.left.val, top);
                    queue.offer(top.left);
                }

                if (top.right != null) {
                    parent.put(top.right.val, top);
                    queue.offer(top.right);
                }
            }
        }

        Map<Integer, Integer> visited = new HashMap<>();
        queue.offer(target);
        while (k > 0 && !queue.isEmpty()) {
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode top = queue.poll();

                visited.put(top.val, 1);

                if (top.left != null && !visited.containsKey(top.left.val)) {
                    queue.offer(top.left);
                }

                if (top.right != null && !visited.containsKey(top.right.val)) {
                    queue.offer(top.right);
                }

                if (parent.containsKey(top.val) && !visited.containsKey(parent.get(top.val).val)) {
                    queue.offer(parent.get(top.val));
                }
            }

            k--;
        }

        while (!queue.isEmpty()) {
            ans.add(queue.poll().val);
        }
        return ans;
    }
}
```
```Python3 []
class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        ans = []
        parent = {}
        queue = deque()
        queue.append(root)

        while queue:
            size = len(queue)
            for _ in range(size):
                top = queue.popleft()

                if top.left:
                    parent[top.left.val] = top
                    queue.append(top.left)

                if top.right:
                    parent[top.right.val] = top
                    queue.append(top.right)

        visited = {}
        queue.append(target)
        while k > 0 and queue:
            size = len(queue)

            for _ in range(size):
                top = queue.popleft()

                visited[top.val] = 1

                if top.left and top.left.val not in visited:
                    queue.append(top.left)

                if top.right and top.right.val not in visited:
                    queue.append(top.right)

                if top.val in parent and parent[top.val].val not in visited:
                    queue.append(parent[top.val])

            k -= 1

        while queue:
            ans.append(queue.popleft().val)

        return ans
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

