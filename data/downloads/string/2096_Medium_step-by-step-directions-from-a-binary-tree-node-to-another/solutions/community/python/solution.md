# ✅💯🔥Explanations No One Will Give You🎓🧠2 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 98
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5484090/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5484090/)

---

<blockquote>
        <p>
            <b>
                To know how much there is to know is the beginning of learning to live.
            </b>        
        </p>
        <p>
            --- Dorothy West ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a root of the binary tree and values of two nodes in this tree. You want to find path from one node to another and descibe it as string as this:
- "U" - you go to parent of this node
- "R" - you go to right child of this node
- "L" - you go to left child of this node

## \uD83D\uDCE5\u2935\uFE0F Input:
- TreeNode object `root`
- Value of the node you're starting at `startValue`
- Value of the node you want to reach `destValue`

## \uD83D\uDCE4\u2934\uFE0F Output:
Path from start node to destination as string

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach 1: Graph Converting and BFS

# \uD83E\uDD14 Intuition
- The problem becomes very easy if this would be graph, isn't it? So can we just convert this binary tree to graph adding some information about every child's parent so we can go through them easily?
- We can do so and solve this problem in four steps:
    1. We're given only values of start and destination, but to run any graph search algorithm we do need the node itself, so first of all we will find start node
    2. Then for every child node we want to remember its parent so we can move up easily
    3. We want to run BFS (or DFS) starting from `start_node` and as soon as we reached destination node we want to end searching
    4. We need to construct path in such a way it was asked in the problem
- In fact, this logic is enough for you to write the code for this approach, but let's look at some short dry run (Hide it to details as I made it quite big)

<details>
  <summary>Dry Run example (Click here if you want see Dry Run)</summary>

### Example Input:
- Binary Tree: 
```
       5
      / \\
     1   2
        / \\
       3   4
```
- `startValue` = 1
- `destValue` = 4

### Dry Run

| Step | Current Node | Queue (q) | Start Node | Nodes Parents | Tracked Path | Visited | Result Path | Comment |
|------|---------------|-----------|------------|----------------|---------------|----------|--------------|---------|
| 1 | 5 | [5] | - | {} | {} | {} | - | Initializing queue with root node |
| 2 | 5 | [] | - | {} | {} | {} | - | Pop root node from queue |
| 3 | 5 | [1, 2] | - | {} | {} | {} | - | Append left and right children of 5 to queue |
| 4 | 2 | [1] | - | {} | {} | {} | - | Pop 2 from queue |
| 5 | 2 | [1, 3, 4] | - | {} | {} | {} | - | Append left and right children of 2 to queue |
| 6 | 4 | [1, 3] | - | {} | {} | {} | - | Pop 4 from queue |
| 7 | 1 | [3] | 1 | {} | {} | {} | - | Pop 1 from queue; Found start node (1) |
| 8 | - | [] | - | {} | {} | {} | - | Finished finding start node |
| 9 | 5 | [5] | 1 | {} | {} | {} | - | Re-initialize queue with root node |
| 10 | 5 | [] | 1 | {1: 5, 2: 5} | {} | {} | - | Pop 5, map its children to parents |
| 11 | 2 | [1, 2] | 1 | {1: 5, 2: 5} | {} | {} | - | Pop 2, map its children to parents |
| 12 | 3 | [1, 3, 4] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {} | {} | - | Pop 3, map its children to parents |
| 13 | 4 | [1, 3] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {} | {} | - | Pop 4, map its children to parents |
| 14 | - | [] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {} | {} | - | Finished mapping parents |
| 15 | 1 | [1] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {} | {} | - | Initialize queue with start node (1) |
| 16 | 1 | [] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {5: (1, "U")} | {1} | - | Pop 1, add parent 5 with direction "U" |
| 17 | 5 | [5] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {2: (5, "R"), 1: (5, "L")} | {1, 5} | - | Pop 5, add child 2 with direction "R" and child 1 with direction "L" |
| 18 | 2 | [2] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {3: (2, "L"), 4: (2, "R")} | {1, 5, 2} | - | Pop 2, add child 3 with direction "L" and child 4 with direction "R" |
| 19 | 4 | [] | 1 | {1: 5, 2: 5, 3: 2, 4: 2} | {5: (1, "U"), 2: (5, "R"), 3: (2, "L"), 4: (2, "R")} | {1, 5, 2, 4} | - | Reached destination node (4) |
| 20 | 4 | - | 1 | - | - | - | ["R"] | Start constructing path: 4 -> 2 with direction "R" |
| 21 | 2 | - | 1 | - | - | - | ["R", "R"] | Continue constructing path: 2 -> 5 with direction "R" |
| 22 | 5 | - | 1 | - | - | - | ["R", "R", "U"] | Continue constructing path: 5 -> 1 with direction "U" |
| 23 | 1 | - | 1 | - | - | - | ["U", "R", "R"] | Reverse the path to get the correct order |

**Function output: `"URR"`** 

</details>



# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize a queue `q` with the root node.
- Perform BFS to find the node with value `startValue`.
- Initialize a dictionary `nodes_parents` to store each child's parent node.
- Perform BFS to populate `nodes_parents` with parent-child relationships.
- Initialize a set `visited` and a queue `q` with the start node.
- Use a dictionary `tracked_path` to store the path directions.
- Perform BFS to find the node with value `destValue`.
- Record the directions to each node from its source in `tracked_path`.
- Initialize an empty list `result_path`.
- Construct the path from `destination_node` to `start_node` using `tracked_path`.
- Reverse the `result_path` list to get the correct order.
- Join the directions in `result_path` into a string and return it.

# \uD83D\uDCD5 Complexity Analysis
- \u23F0 Time complexity: O(n), since we only traverse binary tree several times which is O(n)
- \uD83E\uDDFA Space complexity: O(n), since we use additional memory with `tracked_path`, `q`, `nodes_parents` etc

# \uD83D\uDCBB Code
``` python []
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        q: list[TreeNode] = [root]
        while q:
            cur_node: TreeNode = q.pop()
            if cur_node.val == startValue:
                start_node = cur_node  # here we're setting up the start node
                break

            if cur_node.left:
                q.append(cur_node.left)
            if cur_node.right:
                q.append(cur_node.right)

        # child node value -> TreeNode object which is parent to node with this value
        nodes_parents: dict[int, TreeNode] = {}
        q = [root]
        while q:
            cur_node = q.pop()
            if cur_node.left:
                nodes_parents[cur_node.left.val] = cur_node
                q.append(cur_node.left)
            if cur_node.right:
                nodes_parents[cur_node.right.val] = cur_node
                q.append(cur_node.right)

        visited = set()
        q = [start_node]
        # key is the destination node to which we travel - value is a tuple with 2 elements - (source_node, direction)
        tracked_path: dict[TreeNode, tuple(TreeNode, str)] = {}

        while q:
            cur_node = q.pop()
            visited.add(cur_node)

            if cur_node.val == destValue:
                destination_node = cur_node
                break  # we've reached the target node

            if cur_node.val in nodes_parents and nodes_parents[cur_node.val] not in visited:
                parent = nodes_parents[cur_node.val]
                q.append(parent)
                tracked_path[parent] = (cur_node, "U")  # this is parent node, we go up

            if cur_node.left and cur_node.left not in visited:
                q.append(cur_node.left)
                tracked_path[cur_node.left] = (cur_node, "L")

            if cur_node.right and cur_node.right not in visited:
                q.append(cur_node.right)
                tracked_path[cur_node.right] = (cur_node, "R")

        # Now we need to construct path in a string from tracked_path we have
        result_path: list[str] = []
        cur_node = destination_node

        while cur_node != start_node:
            source_node, direction = tracked_path[cur_node]
            result_path.append(direction)  # directions will be in reversed order
            cur_node = source_node

        result_path.reverse()
        return "".join(result_path)
```
``` C++ []
class Solution {
public:
    string getDirections(TreeNode* root, int startValue, int destValue) {
        queue<TreeNode*> q;
        q.push(root);
        TreeNode* start_node = nullptr;

        while (!q.empty()) {
            TreeNode* cur_node = q.front();
            q.pop();

            if (cur_node->val == startValue) {
                start_node = cur_node;
                break;
            }

            if (cur_node->left) {
                q.push(cur_node->left);
            }
            if (cur_node->right) {
                q.push(cur_node->right);
            }
        }

        unordered_map<int, TreeNode*> nodes_parents;
        q.push(root);

        while (!q.empty()) {
            TreeNode* cur_node = q.front();
            q.pop();

            if (cur_node->left) {
                nodes_parents[cur_node->left->val] = cur_node;
                q.push(cur_node->left);
            }
            if (cur_node->right) {
                nodes_parents[cur_node->right->val] = cur_node;
                q.push(cur_node->right);
            }
        }

        unordered_set<TreeNode*> visited;
        q.push(start_node);
        unordered_map<TreeNode*, pair<TreeNode*, char>> tracked_path;

        TreeNode* destination_node = nullptr;

        while (!q.empty()) {
            TreeNode* cur_node = q.front();
            q.pop();
            visited.insert(cur_node);

            if (cur_node->val == destValue) {
                destination_node = cur_node;
                break;
            }

            if (nodes_parents.find(cur_node->val) != nodes_parents.end() && visited.find(nodes_parents[cur_node->val]) == visited.end()) {
                TreeNode* parent = nodes_parents[cur_node->val];
                q.push(parent);
                tracked_path[parent] = make_pair(cur_node, 'U'); 
            }

            if (cur_node->left && visited.find(cur_node->left) == visited.end()) {
                q.push(cur_node->left);
                tracked_path[cur_node->left] = make_pair(cur_node, 'L'); 
            }

            if (cur_node->right && visited.find(cur_node->right) == visited.end()) {
                q.push(cur_node->right);
                tracked_path[cur_node->right] = make_pair(cur_node, 'R'); 
            }
        }

        stack<char> result_path;
        TreeNode* cur_node = destination_node;

        while (cur_node != start_node) {
            auto it = tracked_path.find(cur_node);
            if (it != tracked_path.end()) {
                result_path.push(it->second.second); 
                cur_node = it->second.first;
            }
        }

        string res;
        while (!result_path.empty()) {
            res += result_path.top();
            result_path.pop();
        }

        return res;
    }
};
```
``` JavaScript []
var getDirections = function(root, startValue, destValue) {
    let startNode = null;
    const findStartNode = (node) => {
        if (!node) return false;
        if (node.val === startValue) {
            startNode = node;
            return true;
        }
        return findStartNode(node.left) || findStartNode(node.right);
    };

    findStartNode(root);

    const nodesParents = {};
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node.left) {
            nodesParents[node.left.val] = node;
            queue.push(node.left);
        }
        if (node.right) {
            nodesParents[node.right.val] = node;
            queue.push(node.right);
        }
    }

    const visited = new Set();
    const trackedPath = {};
    let destinationNode = null;
    const bfs = (start) => {
        const queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            const node = queue.shift();

            if (node.val === destValue) {
                destinationNode = node;
                break;
            }

            if (nodesParents[node.val] && !visited.has(nodesParents[node.val].val)) {
                const parent = nodesParents[node.val];
                queue.push(parent);
                trackedPath[parent.val] = [node, "U"];
                visited.add(parent.val);
            }

            if (node.left && !visited.has(node.left.val)) {
                queue.push(node.left);
                trackedPath[node.left.val] = [node, "L"];
                visited.add(node.left.val);
            }

            if (node.right && !visited.has(node.right.val)) {
                queue.push(node.right);
                trackedPath[node.right.val] = [node, "R"];
                visited.add(node.right.val);
            }
        }
    };

    bfs(startNode);

    const resultPath = [];
    let curNode = destinationNode;

    while (curNode !== startNode) {
        const [sourceNode, direction] = trackedPath[curNode.val];
        resultPath.push(direction);
        curNode = sourceNode;
    }

    resultPath.reverse();
    return resultPath.join("");
};

```
``` Java []
class Solution {
    public String getDirections(TreeNode root, int startValue, int destValue) {
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        TreeNode startNode = null;

        while (!q.isEmpty()) {
            TreeNode curNode = q.poll();

            if (curNode.val == startValue) {
                startNode = curNode;
                break;
            }

            if (curNode.left != null) {
                q.offer(curNode.left);
            }
            if (curNode.right != null) {
                q.offer(curNode.right);
            }
        }

        Map<Integer, TreeNode> nodesParents = new HashMap<>();
        q.offer(root);

        while (!q.isEmpty()) {
            TreeNode curNode = q.poll();

            if (curNode.left != null) {
                nodesParents.put(curNode.left.val, curNode);
                q.offer(curNode.left);
            }
            if (curNode.right != null) {
                nodesParents.put(curNode.right.val, curNode);
                q.offer(curNode.right);
            }
        }

        Set<TreeNode> visited = new HashSet<>();
        q.offer(startNode);
        Map<TreeNode, Pair<TreeNode, String>> trackedPath = new HashMap<>();
        TreeNode destinationNode = null;

        while (!q.isEmpty()) {
            TreeNode curNode = q.poll();
            visited.add(curNode);

            if (curNode.val == destValue) {
                destinationNode = curNode;
                break;
            }

            if (nodesParents.containsKey(curNode.val) && !visited.contains(nodesParents.get(curNode.val))) {
                TreeNode parent = nodesParents.get(curNode.val);
                q.offer(parent);
                trackedPath.put(parent, new Pair<>(curNode, "U"));
            }

            if (curNode.left != null && !visited.contains(curNode.left)) {
                q.offer(curNode.left);
                trackedPath.put(curNode.left, new Pair<>(curNode, "L"));
            }

            if (curNode.right != null && !visited.contains(curNode.right)) {
                q.offer(curNode.right);
                trackedPath.put(curNode.right, new Pair<>(curNode, "R"));
            }
        }

        List<String> resultPath = new ArrayList<>();
        TreeNode curNode = destinationNode;

        while (curNode != startNode) {
            Pair<TreeNode, String> sourceAndDirection = trackedPath.get(curNode);
            resultPath.add(sourceAndDirection.getValue());
            curNode = sourceAndDirection.getKey();
        }

        Collections.reverse(resultPath);
        return String.join("", resultPath);
    }
}
```


# 2\uFE0F\u20E3\uD83C\uDFC6 Approach 2: LCA Understanding And Path Cutting

# \uD83E\uDD14 Intuition
First of all, before I explain you this approach I recommend you solving first this problem to understand basic concept of the LCA: [problem](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)
- In the tree there's exactly one path from node to node and if we look at some examples here's pattern how we're reaching destination node
- This is pattern: we go up to LCA of the nodes given to us and then go from it to destination node, so "U" will never be at the end of the path if path contains anything except "U"
- But in fact we don't need to explicitly find LCA, all we want to do is to find paths from root to given nodes and then "cut" their common path 
- When we found the length from the root to LCA or the length of common paths to start node and destination node we want to first go up as disscussed above up to LCA so `length_from_root_to_start_node - length_from_root_to_LCA` "U" and then go to the right node which is just part of path that is not common between start_node and destination_node

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- **Define Helper Function**: `find_path_from_root` is defined to recursively find the path from the root to a specified target node (`target_value`). It appends "R" or "L" to `path_to_append` to denote right or left moves, respectively.
- **Calculate Paths**: Initialize `path_to_start` and `path_to_destination` as empty lists. Populate them using `find_path_from_root` with `startValue` and `destValue`, respectively.
- **Find Common Path Length**: Initialize `common_path_len` to determine the length of the shared path between `path_to_start` and `path_to_destination`. Iterate until paths differ or reach the end.
- **Construct Result**: 
  - Initialize `res` with "U" repeated for each step from `startValue` to the lowest common ancestor (LCA) with `destValue`.
  - Append the path from the LCA to `destValue` excluding the common path.
- **Return Constructed String**: Join `res` into a single string and return it as the result.

# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n), this is still O(n) since we traverse through whole binary tree but this approach is faster in real-world situations due to the smaller coef in front of `n`
- \uD83E\uDDFA Space complexity: O(n), since we use two arrays to store the path

# \uD83D\uDCBB Code
``` python []
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        def find_path_from_root(cur_node, target_value, path_to_append):
            if cur_node is None:
                return False
            if cur_node.val == target_value:
                return True

            path_to_append.append("R")
            if find_path_from_root(cur_node.right, target_value, path_to_append):
                return True
            # If we haven't found target at right subtree delete it from path
            path_to_append.pop()

            path_to_append.append("L")
            if find_path_from_root(cur_node.left, target_value, path_to_append):
                return True
            path_to_append.pop()

            return False

        path_to_start = []
        find_path_from_root(root, startValue, path_to_start)
        path_to_destination = []
        find_path_from_root(root, destValue, path_to_destination)

        common_path_len = 0  # length of the path to LCA
        while (
            common_path_len < len(path_to_start)
            and common_path_len < len(path_to_destination)
            and path_to_start[common_path_len] == path_to_destination[common_path_len]
        ):
            common_path_len += 1

        # First we need to go up to the LCA
        res = ["U" for _ in range(len(path_to_start) - common_path_len)]
        # Then we just go through all the path to destination without common path
        res += path_to_destination[common_path_len:]

        return "".join(res)
```
``` C++ []
class Solution {
public:
    string getDirections(TreeNode* root, int startValue, int destValue) {
        vector<string> path_to_start, path_to_destination;
        find_path_from_root(root, startValue, path_to_start);
        find_path_from_root(root, destValue, path_to_destination);

        int common_path_len = 0;
        while (common_path_len < path_to_start.size() && common_path_len < path_to_destination.size() &&
               path_to_start[common_path_len] == path_to_destination[common_path_len]) {
            common_path_len++;
        }

        vector<string> res(path_to_start.size() - common_path_len, "U");
        res.insert(res.end(), path_to_destination.begin() + common_path_len, path_to_destination.end());

        string result;
        for (const auto& dir : res) {
            result += dir;
        }
        return result;
    }

private:
    bool find_path_from_root(TreeNode* cur_node, int target_value, vector<string>& path_to_append) {
        if (!cur_node) {
            return false;
        }
        if (cur_node->val == target_value) {
            return true;
        }

        path_to_append.push_back("R");
        if (find_path_from_root(cur_node->right, target_value, path_to_append)) {
            return true;
        }
        path_to_append.pop_back();

        path_to_append.push_back("L");
        if (find_path_from_root(cur_node->left, target_value, path_to_append)) {
            return true;
        }
        path_to_append.pop_back();

        return false;
    }
};
```
``` JavaScript []
var getDirections = function(root, startValue, destValue) {
    const findPathFromRoot = (curNode, targetValue, pathToAppend) => {
        if (!curNode) return false;
        if (curNode.val === targetValue) return true;

        pathToAppend.push("R");
        if (findPathFromRoot(curNode.right, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        pathToAppend.push("L");
        if (findPathFromRoot(curNode.left, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        return false;
    };

    const pathToStart = [];
    const pathToDestination = [];

    findPathFromRoot(root, startValue, pathToStart);
    findPathFromRoot(root, destValue, pathToDestination);

    let commonPathLen = 0;
    while (commonPathLen < pathToStart.length &&
           commonPathLen < pathToDestination.length &&
           pathToStart[commonPathLen] === pathToDestination[commonPathLen]) {
        commonPathLen++;
    }

    const res = [];
    for (let i = 0; i < pathToStart.length - commonPathLen; i++) {
        res.push("U");
    }
    res.push(...pathToDestination.slice(commonPathLen));

    return res.join("");
};
```
``` Java []
class Solution {
    public String getDirections(TreeNode root, int startValue, int destValue) {
        List<String> pathToStart = new ArrayList<>();
        List<String> pathToDestination = new ArrayList<>();
        findPathFromRoot(root, startValue, pathToStart);
        findPathFromRoot(root, destValue, pathToDestination);

        int commonPathLen = 0;
        while (commonPathLen < pathToStart.size() && commonPathLen < pathToDestination.size() &&
               pathToStart.get(commonPathLen).equals(pathToDestination.get(commonPathLen))) {
            commonPathLen++;
        }

        List<String> res = new ArrayList<>();
        for (int i = 0; i < pathToStart.size() - commonPathLen; i++) {
            res.add("U");
        }
        res.addAll(pathToDestination.subList(commonPathLen, pathToDestination.size()));

        return String.join("", res);
    }

    private boolean findPathFromRoot(TreeNode curNode, int targetValue, List<String> pathToAppend) {
        if (curNode == null) {
            return false;
        }
        if (curNode.val == targetValue) {
            return true;
        }

        pathToAppend.add("R");
        if (findPathFromRoot(curNode.right, targetValue, pathToAppend)) {
            return true;
        }
        pathToAppend.remove(pathToAppend.size() - 1);

        pathToAppend.add("L");
        if (findPathFromRoot(curNode.left, targetValue, pathToAppend)) {
            return true;
        }
        pathToAppend.remove(pathToAppend.size() - 1);

        return false;
    }
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
