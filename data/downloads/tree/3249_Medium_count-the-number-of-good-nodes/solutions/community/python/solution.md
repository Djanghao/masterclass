# Simple recursive solution (python)

**Author:** ragharao2001
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619482/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619482/)

---

# Explanation of the countGoodNodes Function

The `countGoodNodes` function is part of a class `Solution` and is designed to find the number of "good nodes" in a tree. A node is considered "good" if all the subtrees rooted at its children have the same size.

## Function Definition

```python
class Solution(object):
    def countGoodNodes(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: int
        """
```

- The function takes a single parameter `edges`, which is a list of lists. Each sub-list represents an edge in the tree, connecting two nodes.
- The function returns an integer representing the number of good nodes in the tree.

## Step 1: Build the Tree as an Adjacency List

```python
n = len(edges) + 1
tree = [[] for _ in range(n)]
exists = [False for _ in range(n)]
exists[0] = True
```

- **`n`**: This is the total number of nodes in the tree, calculated as the number of edges plus one. This is because a tree with `n` nodes has `n - 1` edges.
- **`tree`**: This is an adjacency list representing the tree. It is a list of lists, where each sub-list at index `i` contains the children of node `i`.
- **`exists`**: This list is used to keep track of which nodes have been included in the tree so far. It is initialized with all `False` values, except for the root node (node `0`), which is set to `True`.

```python
for a, b in edges:
    if a == 0:
        tree[a].append(b)
        exists[b] = True
    elif b == 0:
        tree[b].append(a)
        exists[a] = True
    elif exists[a]:
        tree[a].append(b)
        exists[b] = True
    else:
        tree[b].append(a)
        exists[a] = True
```

- This loop iterates through each edge in the `edges` list.
- If one of the nodes in the edge is `0` (the root node), the other node is added to the root's list of children, and marked as existing in the tree.
- If neither node is the root, the function checks which node already exists in the tree. It then appends the other node to the existing node's list of children and marks it as existing.
- This ensures that the tree is built correctly with all nodes properly connected.

## Step 2: Compute the Subtree Sizes

```python
subtree_size = [0] * n
```

- **`subtree_size`**: This array is used to store the size of the subtree rooted at each node.

```python
def compute_subtree_size(node, parent):
    size = 1
    for child in tree[node]:
        if child != parent:
            size += compute_subtree_size(child, node)
    subtree_size[node] = size
    return size
```

- `compute_subtree_size` is a helper function that recursively computes the size of the subtree for each node.
- It starts with a size of `1` for the current node.
- For each child of the current node, it recursively computes the size of the child's subtree, adding it to the current node's size.
- The function updates the `subtree_size` array with the computed size for each node and returns the size.

```python
compute_subtree_size(0, -1)
```

- This line initiates the computation of subtree sizes, starting from the root node (`0`). The parent of the root node is set to `-1` to indicate that it has no parent.

## Step 3: Count the Good Nodes

```python
good_nodes_count = 0
```

- **`good_nodes_count`**: This variable is used to keep track of the number of good nodes in the tree.

```python
def is_good_node(node):
    child_sizes = []
    for child in tree[node]:
        if subtree_size[child] > 0:
            child_sizes.append(subtree_size[child])
    return len(set(child_sizes)) <= 1
```

- `is_good_node` is a helper function that checks if a node is a good node.
- It collects the sizes of the subtrees of all the node's children into the `child_sizes` list.
- It then converts `child_sizes` to a set to remove duplicates.
- A node is considered good if the set of child subtree sizes has a length of `1` or less, meaning all children have subtrees of the same size.

```python
for node in range(n):
    if is_good_node(node):
        good_nodes_count += 1
```

- This loop iterates through all nodes in the tree.
- For each node, it checks if it is a good node using the `is_good_node` function.
- If the node is good, it increments the `good_nodes_count`.

```python
return good_nodes_count
```

- Finally, the function returns the total count of good nodes in the tree.

## Summary

The `countGoodNodes` function efficiently builds the tree, computes subtree sizes, and determines the number of good nodes by checking the uniformity of subtree sizes for each node's children. The approach ensures that the solution is optimized for trees, taking advantage of the tree's properties and recursive traversal.