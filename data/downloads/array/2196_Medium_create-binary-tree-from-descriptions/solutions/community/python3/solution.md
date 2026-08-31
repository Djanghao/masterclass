# ✅💯🔥Explanations No One Will Give You🎓🧠Very Detailed Approach🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 132
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479297/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479297/)

---


<blockquote>
        <p>
            <b>
                You just gotta keep going and fighting for everything, and one day you\u2019ll get to where you want.
            </b>        
        </p>
        <p>
            --- Naomi Osaka ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given an array of arrays `descriptions`, where:
    - `description[0]` is the value of parent node
    - `description[1]` is the value of child node
    - `description[2]` is either 0 or 1 representing whether the child node is left
You must construct binary tree from this descriptions

## \uD83D\uDCE5\u2935\uFE0F Input:
- An array of arrays `descriptions`, where:
    - `description[0]` is the value of parent node
    - `description[1]` is the value of child node
    - `description[2]` is either 0 or 1 representing whether the child node is left

## \uD83D\uDCE4\u2934\uFE0F Output:
The root of the created binary tree

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach: The Root Defining And Constructing With Recursion

# \uD83E\uDD14 Intuition
- Constructing binary tree with recursion is a simple task but we have a problem there - we can't start to create tree from random node.
- The easiest way to construct binary tree - from root node to the bottom.
- What we can say about root? How can we know for sure that exactly this node is the root? The answer is - root must appear in the `descriptions` at least once as parent (because if it's not, then binary tree is empty, there's no nodes at all). This is how we can find root node - it appears as parent but never appears as child.
- After defining root node we can easily create binary tree using recursion and for easy and fast access to children nodes values we'll use hashmap where keys are parent nodes and value is the array of two elements - one for left child node value and one for right.

## Dry Run

Today I'll not forget about dry run, so here it is:

```Input
descriptions = [
    [1, 2, 1],  # 1 is the parent of 2, and 2 is the left child of 1
    [1, 3, 0],  # 1 is the parent of 3, and 3 is the right child of 1
    [2, 4, 1],  # 2 is the parent of 4, and 4 is the left child of 2
    [3, 5, 0]   # 3 is the parent of 5, and 5 is the right child of 3
]
```

| Step | Description | Variable | Value |
|------|-------------|----------|-------|
| 1 | Initialize `children_set` and `children_hashmap` | `children_set` | `{}` |
| 1 | Initialize `children_set` and `children_hashmap` | `children_hashmap` | `{}` |
| 2 | Loop through `descriptions` | `parent=1, child=2, isleft=1` |  |
| 2.1 | Add `child` to `children_set` | `children_set` | `{2}` |
| 2.2 | Update `children_hashmap` | `children_hashmap` | `{1: [2, None]}` |
| 3 | Loop through `descriptions` | `parent=1, child=3, isleft=0` |  |
| 3.1 | Add `child` to `children_set` | `children_set` | `{2, 3}` |
| 3.2 | Update `children_hashmap` | `children_hashmap` | `{1: [2, 3]}` |
| 4 | Loop through `descriptions` | `parent=2, child=4, isleft=1` |  |
| 4.1 | Add `child` to `children_set` | `children_set` | `{2, 3, 4}` |
| 4.2 | Update `children_hashmap` | `children_hashmap` | `{1: [2, 3], 2: [4, None]}` |
| 5 | Loop through `descriptions` | `parent=3, child=5, isleft=0` |  |
| 5.1 | Add `child` to `children_set` | `children_set` | `{2, 3, 4, 5}` |
| 5.2 | Update `children_hashmap` | `children_hashmap` | `{1: [2, 3], 2: [4, None], 3: [None, 5]}` |
| 6 | Find root node | `parent=1` |  |
| 6.1 | Check if `parent` not in `children_set` | `head_node_val` | `1` |
| 7 | Construct tree | `construct_tree(1)` |  |
| 7.1 | Create new node | `new_node` | `TreeNode(1)` |
| 7.2 | Check left child of `1` |  |  |
| 7.3 | Construct left child | `construct_tree(2)` |  |
| 7.3.1 | Create new node | `new_node` | `TreeNode(2)` |
| 7.3.2 | Check left child of `2` |  |  |
| 7.3.3 | Construct left child | `construct_tree(4)` |  |
| 7.3.3.1 | Create new node | `new_node` | `TreeNode(4)` |
| 7.3.3.2 | Return node | `TreeNode(4)` |  |
| 7.3.4 | Set left child of `2` | `TreeNode(2).left` | `TreeNode(4)` |
| 7.3.5 | Check right child of `2` |  |  |
| 7.3.6 | Return node | `TreeNode(2)` |  |
| 7.4 | Set left child of `1` | `TreeNode(1).left` | `TreeNode(2)` |
| 7.5 | Check right child of `1` |  |  |
| 7.6 | Construct right child | `construct_tree(3)` |  |
| 7.6.1 | Create new node | `new_node` | `TreeNode(3)` |
| 7.6.2 | Check left child of `3` |  |  |
| 7.6.3 | Check right child of `3` |  |  |
| 7.6.4 | Construct right child | `construct_tree(5)` |  |
| 7.6.4.1 | Create new node | `new_node` | `TreeNode(5)` |
| 7.6.4.2 | Return node | `TreeNode(5)` |  |
| 7.6.5 | Set right child of `3` | `TreeNode(3).right` | `TreeNode(5)` |
| 7.6.6 | Return node | `TreeNode(3)` |  |
| 7.7 | Set right child of `1` | `TreeNode(1).right` | `TreeNode(3)` |
| 7.8 | Return root node | `TreeNode(1)` |  |

The final binary tree structure is:

```
      1
     / \\
    2   3
   /     \\
  4       5
```

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
## Code Explanation

- **Define the helper function `construct_tree`**: This function recursively constructs the binary tree starting from a given node value.
  - **Create a new TreeNode**: Initialize a new tree node with the current node value.
  - **Check for children**: If the current node value has children in the `children_hashmap`:
    - **Assign left child**: If the left child exists, recursively call `construct_tree` to create the left subtree.
    - **Assign right child**: If the right child exists, recursively call `construct_tree` to create the right subtree.
  - **Return the new node**: Return the newly created node.

- **Initialize `children_set` and `children_hashmap`**:
  - `children_set`: A set to keep track of all child nodes.
  - `children_hashmap`: A dictionary to store the children for each parent node, where the key is the parent node value and the value is a list containing the left and right child node values.

- **Process each description in the input**:
  - **For each description**:
    - **Check and initialize parent in `children_hashmap`**: If the parent node is not already in the hashmap, add it with an initial value of `[None, None]` to represent the left and right children.
    - **Add the child to `children_set`**: Add the child node value to the `children_set`.
    - **Assign the child to the correct position**: Depending on whether the child is a left or right child, update the appropriate position in the parent's list in `children_hashmap`.

- **Identify the root node**:
  - **Find the root node**: Iterate over the keys in `children_hashmap` to find a node that is not present in `children_set`. This node is the root node (as described above).

- **Construct the tree**:
  - **Call `construct_tree` with the root node value**: Use the helper function to construct the entire tree starting from the root node.
  - **Return the constructed tree**: Return the root node of the constructed binary tree.

# \uD83D\uDCD2 Complexity Analysis
- \u23F0 Time complexity: O(n), since we go through each description once and then recursively creating binary tree visiting each node once -> O(n)
- \uD83E\uDDFA Space complexity: O(n), since we use hashmap `children_hashmap` and set `children_set` each size up to n -> O(n)
  
# \uD83D\uDCBB Code
``` python []
class Solution:
    def createBinaryTree(self, descriptions: list[list[int]]) -> Optional[TreeNode]:
        def construct_tree(cur_node_val):
            new_node = TreeNode(cur_node_val)
            if cur_node_val in children_hashmap:
                if children_hashmap[cur_node_val][0] is not None:
                    new_node.left = construct_tree(children_hashmap[cur_node_val][0])
                if children_hashmap[cur_node_val][1] is not None:
                    new_node.right = construct_tree(children_hashmap[cur_node_val][1])
            return new_node

        children_set = set()
        children_hashmap: dict[int, list[int]] = {}

        for parent, child, isleft in descriptions:
            if not parent in children_hashmap:
                children_hashmap[parent] = [None, None]  # left and right
            children_set.add(child)
            target = 0 if isleft else 1
            children_hashmap[parent][target] = child

        for parent in children_hashmap:
            if parent not in children_set:
                head_node_val: int = parent
                break
        head = construct_tree(head_node_val)
        return head
```
``` C++ []
class Solution {
public:
    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {
        unordered_set<int> childrenSet;
        unordered_map<int, pair<int, int>> childrenHashmap;

        for (auto& desc : descriptions) {
            int parent = desc[0];
            int child = desc[1];
            bool isLeft = desc[2] == 1;

            if (childrenHashmap.find(parent) == childrenHashmap.end()) {
                childrenHashmap[parent] = { -1, -1 };
            }

            childrenSet.insert(child);
            if (isLeft) {
                childrenHashmap[parent].first = child;
            } else {
                childrenHashmap[parent].second = child;
            }
        }

        int headNodeVal;
        for (auto& [parent, children] : childrenHashmap) {
            if (childrenSet.find(parent) == childrenSet.end()) {
                headNodeVal = parent;
                break;
            }
        }

        return constructTree(headNodeVal, childrenHashmap);
    }

private:
    TreeNode* constructTree(int curNodeVal, unordered_map<int, pair<int, int>>& childrenHashmap) {
        TreeNode* newNode = new TreeNode(curNodeVal);
        if (childrenHashmap.find(curNodeVal) != childrenHashmap.end()) {
            auto& children = childrenHashmap[curNodeVal];
            if (children.first != -1) {
                newNode->left = constructTree(children.first, childrenHashmap);
            }
            if (children.second != -1) {
                newNode->right = constructTree(children.second, childrenHashmap);
            }
        }
        return newNode;
    }
};
```
``` JavaScript []
var createBinaryTree = function(descriptions) {
    let childrenSet = new Set();
    let childrenHashmap = new Map();

    for (let [parent, child, isLeft] of descriptions) {
        if (!childrenHashmap.has(parent)) {
            childrenHashmap.set(parent, [-1, -1]);
        }

        childrenSet.add(child);

        if (isLeft === 1) {
            childrenHashmap.get(parent)[0] = child;
        } else {
            childrenHashmap.get(parent)[1] = child;
        }
    }

    let headNodeVal;
    for (let parent of childrenHashmap.keys()) {
        if (!childrenSet.has(parent)) {
            headNodeVal = parent;
            break;
        }
    }

    return constructTree(headNodeVal, childrenHashmap);
};

function constructTree(curNodeVal, childrenHashmap) {
    let newNode = new TreeNode(curNodeVal);
    if (childrenHashmap.has(curNodeVal)) {
        let [left, right] = childrenHashmap.get(curNodeVal);
        if (left !== -1) {
            newNode.left = constructTree(left, childrenHashmap);
        }
        if (right !== -1) {
            newNode.right = constructTree(right, childrenHashmap);
        }
    }
    return newNode;
}
```
``` Java []
class Solution {
    public TreeNode createBinaryTree(int[][] descriptions) {
        Set<Integer> childrenSet = new HashSet<>();
        Map<Integer, int[]> childrenHashmap = new HashMap<>();

        for (int[] desc : descriptions) {
            int parent = desc[0];
            int child = desc[1];
            boolean isLeft = desc[2] == 1;

            childrenHashmap.putIfAbsent(parent, new int[]{-1, -1});
            childrenSet.add(child);

            if (isLeft) {
                childrenHashmap.get(parent)[0] = child;
            } else {
                childrenHashmap.get(parent)[1] = child;
            }
        }

        int headNodeVal = 0;
        for (int parent : childrenHashmap.keySet()) {
            if (!childrenSet.contains(parent)) {
                headNodeVal = parent;
                break;
            }
        }

        return constructTree(headNodeVal, childrenHashmap);
    }

    private TreeNode constructTree(int curNodeVal, Map<Integer, int[]> childrenHashmap) {
        TreeNode newNode = new TreeNode(curNodeVal);
        if (childrenHashmap.containsKey(curNodeVal)) {
            int[] children = childrenHashmap.get(curNodeVal);
            if (children[0] != -1) {
                newNode.left = constructTree(children[0], childrenHashmap);
            }
            if (children[1] != -1) {
                newNode.right = constructTree(children[1], childrenHashmap);
            }
        }
        return newNode;
    }
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
