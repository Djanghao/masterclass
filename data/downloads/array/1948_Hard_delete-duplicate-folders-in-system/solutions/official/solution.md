# Official Solution

**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solution/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solution/)

---

### Approach: Serialization-Based Representation of Subtrees

#### Intuition

We can approach this problem at an abstract level (without worrying about implementation details at first) in three main steps:

1. Build a tree representation of the file system using the input $\textit{paths}$. This tree is a multi-way tree rooted at /, where each non-root node represents a folder.

2. Traverse the tree starting from the root. As stated in the problem, if two nodes $x$ and $y$ contain subfolders with the same structure (i.e., the same nested arrangement of subfolders, recursively), then both $x$ and $y$ must be deleted. Therefore, to determine the structure of a node’s subtree, we must first traverse all its children and then backtrack to process the node itself. This corresponds to a post-order traversal of a multi-way tree.

While backtracking to a node, we serialize its structure and store it in a data structure for later comparison with other nodes.

3. Traverse the tree again from the root. When visiting a node $x$, if its serialized structure appears more than once in the data structure, it means a duplicate exists, and we delete $x$ (i.e., skip it). Otherwise, $x$ is unique, and we record the path from the root to $x$ in the final answer, then recursively visit its children.

After this second traversal, all duplicate folders will have been removed, and we will have collected the remaining unique folder paths.

#### Algorithm

Let’s now solve these three steps one by one:

**Step 1: Build the Tree**

We define a class to represent the nodes of the tree. We create a root node, and for each path in $\textit{paths}$, we insert its folders into the tree. If you're familiar with the Trie data structure, this step will feel familiar.

**Step 2: Serialize and Identify Duplicates**

The challenge here is not the post-order traversal itself, but rather how to represent the "structure" of a node in a way that can be used to compare nodes.

To do this, we adopt a serialization approach similar to what is used in ["297. Serialize and Deserialize Binary Tree"](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/). Let $\text{serial}(x)$ represent the serialized structure of node $x$. We define it as follows:
 
- If $x$ is a leaf node (i.e., has no children), then $\text{serial}(x)$ is an empty string `""`. For instance, in Example 1, the three leaf nodes `b`, `b`, and `a` all serialize to `""`.

- If $x$ has children $y_1, y_2, \dots, y_k$, then:

    $$
    \text{serial}(x) = y_1(\text{serial}(y_1))y_2(\text{serial}(y_2))\cdots y_k(\text{serial}(y_k))
    $$

    In words, we recursively serialize each child, attach its folder name in front of its serialization, and wrap its structure in parentheses. The result is a string representing the structure of $x$'s subtree.
    
    However, this naive approach can be order-sensitive. If $x_1$ and $x_2$ have the same children but in different orders, their serializations will differ, even though their structures are equivalent. To handle this, we sort the serialized representations of children before concatenating. This ensures consistent serialization for equivalent subtrees.
    
After a single post-order traversal of the tree, we can record all serializations in a hash map, where the key is the serialization and the value is its frequency.

**Step 3: Collect Unique Paths**

We now perform another DFS traversal from the root. We maintain a list path that tracks the current folder path. At each node:

- If the node’s serialization appears more than once in the map, it is a duplicate and should be skipped.
- Otherwise, the path to this node is added to the final answer, and we recursively traverse its children.

#### Implementation

> The C++ code below builds the tree, serializes it using post-order traversal, and collects the unique folder paths. Note: this version does **not free memory** after execution; in an interview, you may ask whether tree destruction is required.

<iframe src="https://leetcode.com/playground/74j7V8qy/shared" frameBorder="0" width="100%" height="500" name="74j7V8qy"></iframe>

#### Complexity analysis

We focus here on the time required to compute the serialization of all node structures and the space required to store them in a hash map. All other operations, whether time- or space-related, are asymptotically smaller and can therefore be ignored.

In the worst case, each node in the tree has a unique serialized structure. Thus, the time and space complexities are both proportional to the total length of all serialized strings. Our task is to find an upper bound on this total length.

To do this, we use an important and intuitive result from tree theory:

> Let $T$ be an unordered rooted tree. For a node $x$ in $T$, define:
> - $\textit{dist}[x]$: the number of nodes on the path from the root to $x$
> - $\textit{size}[x]$: the size of the subtree rooted at $x$
> Then:
>
> $$
> \sum_{x \in T} \textit{dist}[x] = \sum_{x \in T} \textit{size}[x]
> $$

**Why this holds:**
For any node $x'$, it contributes to the subtree size of each of its ancestors (including itself). Therefore, $x'$ appears once in the subtree size of every node along its path from the root. So the total number of appearances of all nodes across all subtree sizes equals the sum of all distances from the root.

Now, returning to our problem:

- The input array paths encodes the full paths from the root to each folder, and the total number of characters across all paths is bounded by $2 \times 10^5$.

- So $\sum \textit{dist}[x] \leq 2 \times 10^5$

- And therefore $\sum \textit{size}[x] \leq 2 \times 10^5$

For each node $x$, the length of its serialized string representation includes two components:

1. The sum of the lengths of the folder names of all its subfolders. Each subfolder name can have at most 10 characters, so this part is bounded by $10 \cdot \textit{size}[x]$.

2. The number of parentheses used for structural disambiguation. Each subfolder is wrapped in a pair of parentheses, contributing at most $2 \cdot \textit{size}[x]$ characters.

Thus, for any node $x$, the total serialization length is at most:

$$
12 \cdot \textit{size}[x]
$$

So the total length of all serialized strings across the entire tree is:

$$
12 \cdot \sum_{x \in T} \textit{size}[x] \leq 12 \cdot 2 \times 10^5 = 2.4 \times 10^6
$$

Hence, the space complexity is $\mathcal{O}(10^6)$ in the worst case.

As for the time complexity, even if we account for sorting the child structures (which adds an extra $\log$ factor), the total operations remain bounded by around $10^7$, which comfortably fits within the time limits.

It's worth noting that this upper-bound analysis assumes extremely pessimistic and adversarial cases. In practical scenarios, the actual runtime is significantly lower, and this method performs very efficiently.

---