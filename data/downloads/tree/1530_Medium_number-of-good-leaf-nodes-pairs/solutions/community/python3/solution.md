# 💯✅🔥Detailed Easy Java ,Python3 ,C++ Solution|| 189 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 90
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493689/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5493689/)

---

Intuition:
The code is designed to count the number of pairs of leaf nodes in a binary tree that have a distance less than or equal to a given value. The distance between two leaf nodes is defined as the number of nodes in the shortest path between them.

---

# Approach:
The code uses a depth-first search (DFS) to traverse the binary tree and find all leaf nodes. It then uses a map to store the path from the root to each leaf node. For each pair of leaf nodes, it calculates the distance between them by comparing the paths stored in the map. If the distance is less than or equal to the given value, it increments the result.

---
There were some errors in previous time and space complexity which were addressed to me by `Jyoshnavi372`
# Time Complexity

The time complexity is O(hN^2), where `h` is the height of the tree and `N` is the number of nodes.

The key points are:

1. The `findLeaves` function is called for each node, and it performs constant-time operations per node. Therefore, the time complexity of `findLeaves` is O(N).

2. The nested loops in the `countPairs` function iterate over the leaf nodes. In the worst case, the number of leaf nodes is proportional to the number of nodes, which is `N`. Additionally, the number of iterations in the inner loop is proportional to the height of the tree, `h`, as the length of the `list_i` and `list_j` lists is at most `h`. Therefore, the time complexity of the nested loops is O(hN^2).

The overall time complexity is the sum of the time complexities of these two operations, which is O(N) + O(hN^2) = O(hN^2).

---

# Space Complexity

The space complexity is O(Nh), where `h` is the height of the tree and `N` is the number of nodes.

The key points are:

1. The `map` and `leaves` data structures store information about each node, and in the worst case, the size of these data structures is proportional to the number of nodes, which is `N`.

2. The recursive call stack in the `findLeaves` function has a depth proportional to the height of the tree, which is `h`.

Therefore, the overall space complexity is O(Nh).

In summary, the time complexity of the given code is O(hN^2), and the space complexity is O(Nh), where `h` is the height of the tree and `N` is the number of nodes.

   ---
# Step By Step Explanation

Let's go through the step-by-step explanation using the binary tree `[1,2,3,null,4]`.

```plaintext
          1
         / \\
        2   3
           \\
            4
```

## `countPairs` Function

1. **Initialization**:
   - `root` is the root of the binary tree: `1`.
   - `distance` is the maximum distance between two leaves: `3`.

2. **Finding Leaves**:
   - The `findLeaves` function is called to populate the `map` and `leaves` vectors.

## `findLeaves` Function

1. **Initialization**:
   - `node` is the current node.
   - `trail` is the path from the root to the current node.
   - `leaves` is the vector to store all leaf nodes.
   - `map` is the unordered map to store the paths from each leaf node to the root.

2. **Base Case**:
   - If `node` is `nullptr`, return without doing anything.

3. **Recursive Step**:
   - Create a temporary `vector` `tmp` and initialize it with the `trail`.
   - Append the current `node` to the `tmp` vector.
   - If the current `node` is a leaf node (i.e., it has no left or right child), store the `tmp` vector in the `map` using the `node` as the key and add the `node` to the `leaves` vector.
   - If the current `node` is not a leaf node, recursively call `findLeaves` on the left and right children, passing the `tmp` vector as the trail.

### Example Steps

1. **Initial Call**:
   - `findLeaves(1, {}, leaves, map)`

2. **Recursive Step 1**:
   - `findLeaves(2, {1}, leaves, map)`
   - `findLeaves(3, {1}, leaves, map)`

3. **Recursive Step 2**:
   - `findLeaves(4, {1, 3}, leaves, map)`

### Final Result

- `map` contains the paths from each leaf node to the root:
  - `map = {{1, 2}}`
  - `map = {{1, 3}}`
  - `map = {{1, 3, 4}}`
- `leaves` contains all the leaf nodes:
  - `leaves = {2, 3, 4}`

## `countPairs` Function (Continued)

1. **Initialization**:
   - `res` is initialized to 0.

2. **Pairwise Comparison**:
   - Iterate through all pairs of leaf nodes.
   - For each pair, find the common ancestor by iterating through the paths stored in the `map`.
   - Calculate the distance between the pair by summing the distances from each leaf node to the common ancestor.
   - If the distance is less than or equal to the given `distance`, increment the `res` variable.

### Example Steps (Continued)

1. **Pairwise Comparison 1**:
   - `leaves = 2`
   - `leaves = 3`
   - The distance between 2 and 3 is 2, which is less than or equal to `distance = 3`, so `res` is incremented by 1.

2. **Pairwise Comparison 2**:
   - `leaves = 2`
   - `leaves = 4`
   - The distance between 2 and 4 is 3, which is less than or equal to `distance = 3`, so `res` is incremented by 1.

3. **Pairwise Comparison 3**:
   - `leaves = 3`
   - `leaves = 4`
   - The distance between 3 and 4 is 2, which is less than or equal to `distance = 3`, so `res` is incremented by 1.

### Final Result (Continued)

- The final result is the count of valid pairs, which is 3.
---
Thank you for catching the typo `HimalayanLad` and `popivyurii
` . I've corrected it in the updated explanation. Please let me know if there are any other issues.
---

```java []
class Solution {
    public int countPairs(TreeNode root, int distance) {
        Map<TreeNode, List<TreeNode>> map = new HashMap<>();
        List<TreeNode> leaves = new ArrayList<>();
        findLeaves(root, new ArrayList<>(), leaves, map);
        int res = 0;
        for (int i = 0; i < leaves.size(); i++) {
            for (int j = i + 1; j < leaves.size(); j++) {
                List<TreeNode> list_i = map.get(leaves.get(i));
                List<TreeNode> list_j = map.get(leaves.get(j));
                for (int k = 0; k < Math.min(list_i.size(), list_j.size()); k++) {
                    if (list_i.get(k) != list_j.get(k)) {
                        int dist = list_i.size() - k + list_j.size() - k;
                        if (dist <= distance) res++;
                        break;
                    }
                }
            }
        }
        return res;
    }

    private void findLeaves(TreeNode node, List<TreeNode> trail, List<TreeNode> leaves, Map<TreeNode, List<TreeNode>> map) {
        if (node == null) return;
        List<TreeNode> tmp = new ArrayList<>(trail);
        tmp.add(node);
        if (node.left == null && node.right == null) {
            map.put(node, tmp);
            leaves.add(node);
            return;
        }
        findLeaves(node.left, tmp, leaves, map);
        findLeaves(node.right, tmp, leaves, map);
    }
}
```
```python3 []
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.map = {}
        self.leaves = []
        self.findLeaves(root, [], self.leaves, self.map)
        res = 0
        for i in range(len(self.leaves)):
            for j in range(i + 1, len(self.leaves)):
                list_i, list_j = self.map[self.leaves[i]], self.map[self.leaves[j]]
                for k in range(min(len(list_i), len(list_j))):
                    if list_i[k] != list_j[k]:
                        dist = len(list_i) - k + len(list_j) - k
                        if dist <= distance:
                            res += 1
                        break
        return res

    def findLeaves(self, node: TreeNode, trail: List[TreeNode], leaves: List[TreeNode], map: Dict[TreeNode, List[TreeNode]]):
        if not node:
            return
        tmp = trail[:]
        tmp.append(node)
        if not node.left and not node.right:
            map[node] = tmp
            leaves.append(node)
            return
        self.findLeaves(node.left, tmp, leaves, map)
        self.findLeaves(node.right, tmp, leaves, map)
```
```C++ []
class Solution {
public:
    int countPairs(TreeNode* root, int distance) {
        unordered_map<TreeNode*, vector<TreeNode*>> map;
        vector<TreeNode*> leaves;
        findLeaves(root, {}, leaves, map);
        int res = 0;
        for (int i = 0; i < leaves.size(); i++) {
            for (int j = i + 1; j < leaves.size(); j++) {
                vector<TreeNode*>& list_i = map[leaves[i]];
                vector<TreeNode*>& list_j = map[leaves[j]];
                for (int k = 0; k < min(list_i.size(), list_j.size()); k++) {
                    if (list_i[k] != list_j[k]) {
                        int dist = list_i.size() - k + list_j.size() - k;
                        if (dist <= distance) res++;
                        break;
                    }
                }
            }
        }
        return res;
    }

private:
    void findLeaves(TreeNode* node, vector<TreeNode*> trail, vector<TreeNode*>& leaves, unordered_map<TreeNode*, vector<TreeNode*>>& map) {
        if (!node) return;
        vector<TreeNode*> tmp(trail);
        tmp.push_back(node);
        if (!node->left && !node->right) {
            map[node] = tmp;
            leaves.push_back(node);
            return;
        }
        findLeaves(node->left, tmp, leaves, map);
        findLeaves(node->right, tmp, leaves, map);
    }
};
```
---

![upvote.png](./images/0.png)

---