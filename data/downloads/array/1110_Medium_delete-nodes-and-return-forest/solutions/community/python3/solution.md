# ✅💯🔥Explanations No One Will Give You🎓🧠2 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 79
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5489867/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5489867/)

---

<blockquote>
        <p>
            <b>
                People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\u2019re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.
            </b>        
        </p>
        <p>
            --- Carrie Ann Moss ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a root of a binary tree `root` and an array of integers `to_delete`. You task is to delete every node with value in `to_delete` and then return every root of the forest which was created.

## \uD83D\uDCE5\u2935\uFE0F Input:
- Root of a binary tree `root`.
- Integer array `to_delete`

## \uD83D\uDCE4\u2934\uFE0F Output:
The array with every root in the forest in any order

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach 1: Recursion

# \uD83E\uDD14 Intuition
The first way to solve problem I've came up with - recursion, let's look at this approach
- First of all, general for every approach it's good to convert `to_delete` into hashset (set) because we are going to check for every node if its value is in `to_delete` and looking for this value in array would be `O(n)` which will be in total `O(n * m)` where n - number of nodes and m - number of nodes to delete, so we convert `to_delete` in the set to have ability to search for element in O(1) time.
- Let's imagine that we've hidden every node in tree except current node, its parent and children. Let's think about logic we want to apply for every single node - this is a key to solve almost any recursion problem.
- For every node we want to do so:
    - In any case we have to delete this node or not we want to continue our recursion - so we will call recursive function on both our children.
    - In general this is all we want to do in case this node will be saved. Now let's think what we need to do in case when we need to delete this node:
        - First of all we want to disconnect this node from its parent (so we'll pass as parameters to our function parent node and whether current node is left child of parent)
        - Then, we know that after deleting both our children will be roots for two trees if they exist, but here's a problem - what if we already deleted parent node and now looking at child we want to delete too? We just need to delete this node as root from result and add its children - all is simple.
- In fact, this is whole logic for recursion approach, it's not hard to come up with, let's make a quick dry run and move on to the code.

<details>
    <summary>For Dry Run Click Here</summary>

### Input
```
       1
      / \\
     2   3
    / \\   \\
   4   5   6
```

And `to_delete` = [3, 5]

### Dry Run Table

| Step | Node | Action | Parent | isLeft | Resulting Trees (res) | Notes |
|------|------|--------|--------|--------|-----------------------|-------|
| 1    | 1    | Visit  | None   | False  | {1: Node(1)}          | Start recursion from root |
| 2    | 2    | Visit  | 1      | True   | {1: Node(1)}          | Recurse to left child of 1 |
| 3    | 4    | Visit  | 2      | True   | {1: Node(1)}          | Recurse to left child of 2 |
| 4    | None | Return | 4      | True   | {1: Node(1)}          | Left child of 4 is None |
| 5    | None | Return | 4      | False  | {1: Node(1)}          | Right child of 4 is None |
| 6    | 4    | Done   | 2      | True   | {1: Node(1)}          | 4 is not in to_delete |
| 7    | 5    | Visit  | 2      | False  | {1: Node(1)}          | Recurse to right child of 2 |
| 8    | None | Return | 5      | True   | {1: Node(1)}          | Left child of 5 is None |
| 9    | None | Return | 5      | False  | {1: Node(1)}          | Right child of 5 is None |
| 10   | 5    | Delete | 2      | False  | {1: Node(1)}          | Remove 5 from the tree, 5 is in to_delete |
| 11   | 2    | Done   | 1      | True   | {1: Node(1)}          | 2 is not in to_delete |
| 12   | 3    | Visit  | 1      | False  | {1: Node(1)}          | Recurse to right child of 1 |
| 13   | None | Return | 3      | True   | {1: Node(1)}          | Left child of 3 is None |
| 14   | 6    | Visit  | 3      | False  | {1: Node(1)}          | Recurse to right child of 3 |
| 15   | None | Return | 6      | True   | {1: Node(1)}          | Left child of 6 is None |
| 16   | None | Return | 6      | False  | {1: Node(1)}          | Right child of 6 is None |
| 17   | 6    | Done   | 3      | False  | {1: Node(1)} | 6 is not in to_delete, return to parent |
| 18   | 3    | Delete | 1      | False  | {1: Node(1), 6: Node(6)} | Remove 3 from the tree, 3 is in to_delete and add 6 as new root |
| 19   | 1    | Done   | None   | False  | {1: Node(1), 6: Node(6)} | 1 is not in to_delete, end recursion |

### Final Result
The resulting forest after deleting the nodes [3, 5] would be:
```
       1       6
      /                 
     2                   
    /
   4
```

**Resulting roots:** `[1, 6]`
</details>

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Convert `to_delete` list to a set for `O(1)` lookup time.
- Define a recursive function `recursion` that traverses the tree.
    - If the current node is `None`, return immediately.
    - Recurse on the left and right children of the current node.
    - If the current node's value is in `to_delete`:
        - If the current node is in `res`, delete it from `res`.
        - Disconnect the current node from its parent.
        - If the current node has children, add them as new roots to `res`.
- Start the recursion with the root node.
- Return the values of `res` which represent the roots of the resulting forest.

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(n), since we go through each node exactly once
- \uD83E\uDDFA Space complexity: O(n), since we use recursion (function call stack) and hashmap `res`

# \uD83D\uDCBB Code
``` python []
class Solution:
    def delNodes(self, root: Optional[TreeNode], to_delete: list[int]) -> list[TreeNode]:
        res: dict[int, TreeNode] = {root.val: root}
        to_delete: set[int] = set(to_delete)

        def recursion(parent: TreeNode | None, cur_node: TreeNode | None, isleft: bool) -> None:
            nonlocal res
            if cur_node is None:
                return

            recursion(cur_node, cur_node.left, True)
            recursion(cur_node, cur_node.right, False)

            if cur_node.val in to_delete:
                if cur_node.val in res:
                    del res[cur_node.val]

                if parent:
                    if isleft:
                        parent.left = None
                    else:
                        parent.right = None

                if cur_node.left:
                    res[cur_node.left.val] = cur_node.left
                if cur_node.right:
                    res[cur_node.right.val] = cur_node.right

        recursion(None, root, False)
        return res.values()
```
``` C++ []

class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        unordered_map<int, TreeNode*> res;
        unordered_set<int> to_delete_set(to_delete.begin(), to_delete.end());
        res[root->val] = root;

        function<void(TreeNode*, TreeNode*, bool)> recursion = [&](TreeNode* parent, TreeNode* cur_node, bool isleft) {
            if (cur_node == nullptr) return;

            recursion(cur_node, cur_node->left, true);
            recursion(cur_node, cur_node->right, false);

            if (to_delete_set.find(cur_node->val) != to_delete_set.end()) {
                if (res.find(cur_node->val) != res.end()) {
                    res.erase(cur_node->val);
                }

                if (parent) {
                    if (isleft) {
                        parent->left = nullptr;
                    } else {
                        parent->right = nullptr;
                    }
                }

                if (cur_node->left) {
                    res[cur_node->left->val] = cur_node->left;
                }
                if (cur_node->right) {
                    res[cur_node->right->val] = cur_node->right;
                }
            }
        };

        recursion(nullptr, root, false);
        
        vector<TreeNode*> result;
        for (auto& pair : res) {
            result.push_back(pair.second);
        }
        
        return result;
    }
};
```
``` JavaScript []
var delNodes = function(root, to_delete) {
    let res = {};
    let to_delete_set = new Set(to_delete);
    res[root.val] = root;

    function recursion(parent, cur_node, isleft) {
        if (cur_node === null) return;

        recursion(cur_node, cur_node.left, true);
        recursion(cur_node, cur_node.right, false);

        if (to_delete_set.has(cur_node.val)) {
            delete res[cur_node.val];

            if (parent !== null) {
                if (isleft) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }

            if (cur_node.left !== null) {
                res[cur_node.left.val] = cur_node.left;
            }
            if (cur_node.right !== null) {
                res[cur_node.right.val] = cur_node.right;
            }
        }
    }

    recursion(null, root, false);

    return Object.values(res);
};
```
``` Java []
class Solution {
    public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
        Map<Integer, TreeNode> res = new HashMap<>();
        Set<Integer> to_delete_set = new HashSet<>();
        for (int val : to_delete) {
            to_delete_set.add(val);
        }
        res.put(root.val, root);

        recursion(null, root, false, res, to_delete_set);

        return new ArrayList<>(res.values());
    }

    private void recursion(TreeNode parent, TreeNode cur_node, boolean isleft, Map<Integer, TreeNode> res, Set<Integer> to_delete_set) {
        if (cur_node == null) return;

        recursion(cur_node, cur_node.left, true, res, to_delete_set);
        recursion(cur_node, cur_node.right, false, res, to_delete_set);

        if (to_delete_set.contains(cur_node.val)) {
            res.remove(cur_node.val);

            if (parent != null) {
                if (isleft) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }

            if (cur_node.left != null) {
                res.put(cur_node.left.val, cur_node.left);
            }
            if (cur_node.right != null) {
                res.put(cur_node.right.val, cur_node.right);
            }
        }
    }
}
```


# 2\uFE0F\u20E3\uD83D\uDE0E Approach 2: Iterative BFS

# \uD83E\uDD14 Intuition
- This approach is following quite the same logic as previous, but it's a little cleaner. Here is a trick - we won't add node at res at all if we know we will delete it after.
- If we go from top to bottom then with logic above we can not think about `res` at all - all added nodes will be valid roots.
- Considering the model we want to follow we will use BFS to traverse the tree, other logic is the same as it was in Approach 1, but let's make the same dry run but with this approach.

<details>
    <summary>For Dry Run Click Here</summary>

### Input
```
       1
      / \\
     2   3
    / \\   \\
   4   5   6
```

And `to_delete` = [3, 5]

### Dry Run Table

| Step | Node | Action | Queue          | Resulting Trees (res) | Notes |
|------|------|--------|----------------|-----------------------|-------|
| 1    | Init | Init   | [1]            | [1]                   | Initialize `res` with root if not in `to_delete` |
| 2    | 1    | Visit  | []             | [1]                   | Dequeue 1 |
| 3    | 1    | Check  | [2]            | [1]                   | Append left child 2 to queue |
| 4    | 1    | Check  | [2, 3]         | [1]                   | Append right child 3 to queue |
| 5    | 1    | Disconnect | [2, 3]     | [1]                   | 3 is in `to_delete`, disconnect 3 |
| 6    | 2    | Visit  | [3]            | [1]                   | Dequeue 2 |
| 7    | 2    | Check  | [3, 4]         | [1]                   | Append left child 4 to queue |
| 8    | 2    | Check  | [3, 4, 5]      | [1]                   | Append right child 5 to queue |
| 9    | 2    | Disconnect | [3, 4]     | [1]                   | 5 is in `to_delete`, disconnect 5 |
| 10   | 3    | Visit  | [4]            | [1]                   | Dequeue 3 |
| 11   | 3    | Check  | [4, 6]         | [1]                   | Append right child 6 to queue |
| 12   | 3    | Delete | [4, 6]         | [1, 6]                | 3 is in `to_delete`, add 6 as new root |
| 13   | 4    | Visit  | [6]            | [1, 6]                | Dequeue 4 |
| 14   | 4    | Check  | [6]            | [1, 6]                | 4 has no children |
| 15   | 5    | Visit  | []             | [1, 6]                | Dequeue 6 |
| 16   | 6    | Check  | []             | [1, 6]                | 6 has no children |

### Final Result
The resulting forest after deleting the nodes [3, 5] would be:
```
       1       6
      /                 
     2                   
    /
   4
```

**Resulting roots:** `[1, 6]`
</details>

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Convert `to_delete` list to a set for `O(1)` lookup time.
- Initialize `res` with the root if it is not in `to_delete`, otherwise an empty list.
- Use a queue for level-order traversal (BFS).
- While the queue is not empty, process each node:
  - Dequeue the current node.
  - If the current node has a left child:
    - Append it to the queue.
    - Disconnect it if its value is in `to_delete`.
  - If the current node has a right child:
    - Append it to the queue.
    - Disconnect it if its value is in `to_delete`.
  - If the current node's value is in `to_delete`:
    - Add its non-deleted children to `res`.
- Return the list of remaining tree roots `res`.

# \uD83D\uDCD7 Complexity Analysis
- \u23F0 Time complexity: O(n), since we go through each node exactly once
- \uD83E\uDDFA Space complexity: O(n) since we use additional queue `queue`

# \uD83D\uDCBB Code
``` python []
class Solution:
    def delNodes(self, root: Optional[TreeNode], to_delete: list[int]) -> list[TreeNode]:
        if not root:
            return

        to_delete: set[int] = set(to_delete)
        res: list[TreeNode] = [root] if not root.val in to_delete else []
        queue: deque[TreeNode] = deque([root])

        while queue:
            cur_node: TreeNode = queue.popleft()

            if cur_node.left:
                queue.append(cur_node.left)

                if cur_node.left.val in to_delete:
                    cur_node.left = None  # disconnect left child if we will delete it

            if cur_node.right:
                queue.append(cur_node.right)

                if cur_node.right.val in to_delete:
                    cur_node.right = None

            if cur_node.val in to_delete:  # if we need to delete this node
                if cur_node.left is not None:  # It's None if we need to delete left child too
                    res.append(cur_node.left)
                if cur_node.right is not None:
                    res.append(cur_node.right)

        return res
```
``` C++ []
class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        if (!root) return {};

        unordered_set<int> to_delete_set(to_delete.begin(), to_delete.end());
        vector<TreeNode*> result;
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* cur_node = q.front();
            q.pop();

            if (cur_node->left) {
                q.push(cur_node->left);
                if (to_delete_set.count(cur_node->left->val)) {
                    cur_node->left = nullptr;
                }
            }

            if (cur_node->right) {
                q.push(cur_node->right);
                if (to_delete_set.count(cur_node->right->val)) {
                    cur_node->right = nullptr;
                }
            }

            if (to_delete_set.count(cur_node->val)) {
                if (cur_node->left) {
                    result.push_back(cur_node->left);
                }
                if (cur_node->right) {
                    result.push_back(cur_node->right);
                }
            } else if (result.empty()) {
                result.push_back(cur_node);
            }
        }

        return result;
    }
};
```
``` JavaScript []
var delNodes = function(root, to_delete) {
    if (!root) return [];

    let toDeleteSet = new Set(to_delete);
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let curNode = queue.shift();

        if (curNode.left) {
            queue.push(curNode.left);
            if (toDeleteSet.has(curNode.left.val)) {
                curNode.left = null;
            }
        }

        if (curNode.right) {
            queue.push(curNode.right);
            if (toDeleteSet.has(curNode.right.val)) {
                curNode.right = null;
            }
        }

        if (toDeleteSet.has(curNode.val)) {
            if (curNode.left) {
                result.push(curNode.left);
            }
            if (curNode.right) {
                result.push(curNode.right);
            }
        } else if (result.length === 0) {
            result.push(curNode);
        }
    }

    return result;
};
```
``` Java []
class Solution {
    public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
        List<TreeNode> result = new ArrayList<>();
        if (root == null) return result;

        Set<Integer> toDeleteSet = new HashSet<>();
        for (int val : to_delete) {
            toDeleteSet.add(val);
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            TreeNode curNode = queue.poll();

            if (curNode.left != null) {
                queue.offer(curNode.left);
                if (toDeleteSet.contains(curNode.left.val)) {
                    curNode.left = null;
                }
            }

            if (curNode.right != null) {
                queue.offer(curNode.right);
                if (toDeleteSet.contains(curNode.right.val)) {
                    curNode.right = null;
                }
            }

            if (toDeleteSet.contains(curNode.val)) {
                if (curNode.left != null) {
                    result.add(curNode.left);
                }
                if (curNode.right != null) {
                    result.add(curNode.right);
                }
            } else if (result.isEmpty()) {
                result.add(curNode);
            }
        }

        return result;
    }
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
