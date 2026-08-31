# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solution/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we are given the root of a binary tree. We want to find the maximum path sum of this tree.

Before we delve into the solution, let's first understand a few terms. A *path* is a continuous sequence of nodes connected to each other. There will always be at least one node in a path. In a path, except for the starting and ending nodes, every node is connected to two other nodes in the sequence. These two nodes could either be the node's children, or one of them could be a child, and the other could be the parent node. In other words, no node can have more than two connections in this sequence. Each node contains a value, which could be negative, zero, or positive.

![Some examples of valid paths](../Figures/124/124_valid_path_examples.png)

![Some examples of invalid paths](../Figures/124/124_invalid_path_examples.png)

A *path sum* is the sum of the values of all the nodes in a path. Because the values could be negative or positive, a path sum could also be negative or positive. Every combination of two nodes in a tree can form a path by using the sequence of all nodes between them. In fact, every node in itself can also be considered a path (a path needs at least one node). We can see that the number of paths could be pretty large, and there would be as many path sums as the number of paths. In this problem, we need to find the maximum path sum.

![An example of maximum path sum in a binary tree](../Figures/124/124_example.png)

We must traverse the entire tree to find the maximum path sum. We are interested in a set of nodes that form a continuous sequence (path). When traversing trees, we prefer DFS over BFS because it can examine each path before moving on to the next.

---

### Approach: Post Order DFS

#### Intuition

One way to find the maximum path sum would be to look at all possible paths, calculate their path sums, and then find the maximum path sum. However, this would be a "brute force" approach. If there are $n$ nodes in the tree, creating all the paths and computing their path sums would take $O(n ^ 2)$ time. We can do better than this.

Consider a scenario where the path with the highest sum passes through the tree's root.

There could be four possibilities.

1. The path starts at the root and goes down through the root's left child. We don't know how long the path is, but it could extend to the bottom of the left subtree.
2. The path starts at the root and goes down through the root's right child. Very similar to the previous case, but the direction is toward the right.
3. The path involves both the left and the right child.
4. The path doesn't involve any child. The root itself is the only element of the path with maximum sum.

!?!../Documents/124/max-path-with-root-node.json:960,540!?!

We know that the path contains the root. Therefore, in the beginning, we can assume that the path sum is the root node's value. To find the maximum path sum, we determine if there is a viable path leading down through the left or the right subtree. Please remember that a node can have negative or positive values. So a path sum contributed by a subtree could also be negative or positive. It would make sense to consider a path sum contributed by a subtree only if it is positive. If not, we can safely ignore it. In other words, the path goes down the left or the right subtree only if we see a gain in the path sum.

This means we must first determine the gain in the path sum contributed by the left and the right subtree. Once we have both, we decide whether to include their contribution. We can see that we need to process the children before we process a node. This indicates that we need to perform a **post-order traversal** of the tree because, in post-order, children are processed before the parent.

To implement post-order traversal, we implement a recursive function. This function takes the root of the subtree as the input. The function returns the path sum gain contributed by the subtree. To calculate the path sum gain, the function calls itself recursively on the subtree's left and right child.

We have considered the scenario where the maximum sum path passes through the root. But what if it doesn't?

![When root is not a part of the maximum path sum](../Figures/124/124_example_2.png)

<br />

We slightly tweak our algorithm to include the case when the path sum doesn't pass through the root. Now, in addition to returning the path sum gain contributed by the subtree, the recursive function also keeps track of the maximum path sum. We update the maximum path sum whenever we find a new maximum.

Let's put this formally now. Let's name our recursive function `gain_from_subtree`. It takes the root of a subtree as the input. The function has two responsibilities.

1. The function returns the path sum gain contributed by the subtree.

    The path sum gain contributed by the subtree can be derived from a path that includes at most one child of the root. You may wonder, why can't we include both children? If we include both children in the path, the path would have to make a fork at the root. The root is already connected to its parent. Now, if we include both children as well, with three connections, it wouldn't be a valid path anymore. Therefore, we can say that the path would consist of at most one child of the root.

    The recursive function compares `left_gain` and `right_gain` and adds the maximum of the two to the value of the root. The sum, `gain_from_subtree` is then returned to the caller.

    ```
    left_gain = max(gain_from_left_subtree, 0)
    right_gain = max(gain_from_right_subtree, 0)
    gain_from_subtree = max(left_gain, right_gain) + root.val
    ```

    We use `max(gain_from_left_subtree, 0)` because we want to consider the gain only if it is positive. If it is negative, we ignore it or consider it as zero.

2. The function keeps track of the maximum path sum.

    Assuming that the maximum path sum passes through the root of the subtree, as explained earlier, we consider all four possibilities - (1) The path goes through the left subtree (2) The path goes through the right subtree (3) The path goes through both left and right subtrees (4) The path doesn't involve left or right subtrees. So we include the left and right gain if they are positive and the value of the root node. We compare this sum with the current maximum path sum and update it if necessary. The following code segment takes care of all four possibilities.

    ```
    max_path_sum = max(max_path_sum, left_gain + right_gain + root.val)
    ```

#### Algorithm

##### Main function body

1. Initialize a global variable `max_sum` to `-Infinity`.
2. Call the function `gain_from_subtree` on the tree's root.
3. Return the value of `max_sum`.

##### Body of the recursive function `gain_from_subtree`. It accepts `root` of the subtree as the input.

1. If the root is `null`, return `0`. This is the base case. If a node doesn't have a left or right child, then the path sum contributed by the respective subtree is `0`.
2. Call the function recursively on the left and right child of the root. Store the results in `gain_from_left` and `gain_from_right`, respectively.
3. If either is negative, set it to `0`. This is because we don't want to include a path sum contributed by a subtree if it is negative.
4. Update the maximum path sum (`max_sum`) seen so far. To do so, compare `max_sum` with the sum of the following, and update it if it is smaller.
    - The value of the root itself.
    - `gain_from_left` (`0` if negative)
    - `gain_from_right` (`0` if negative)
5. Return the path sum gain contributed by the subtree. This is the maximum of the following two values.
    - The value of the root plus `gain_from_left`.
    - The value of the root plus `gain_from_right`.

##### A note on the base case

Let's say our recursive algorithm reaches a node with no left child. Because there is no left child, our path cannot go toward the left subtree. In other words, the gain from the left subtree is $0$. So, when the function is called on the non-existent child of the node, it returns $0$. This would be true for a non-existent right child as well. Therefore, we can safely say that the base case is when the root is `null`.

!?!../Documents/124/124_full_simulation.json:960,540!?!

<br />

#### Implementation

<iframe src="https://leetcode.com/playground/EdgcdHU7/shared" frameBorder="0" width="100%" height="500" name="EdgcdHU7"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time complexity: $O(n)$

    Each node in the tree is visited only once. During a visit, we perform constant time operations, including two recursive calls and calculating the max path sum for the current node. So the time complexity is $O(n)$.

* Space complexity: $O(n)$

    We don't use any auxiliary data structure, but the recursive call stack can go as deep as the tree's height. In the worst case, the tree is a linked list, so the height is $n$. Therefore, the space complexity is $O(n)$.