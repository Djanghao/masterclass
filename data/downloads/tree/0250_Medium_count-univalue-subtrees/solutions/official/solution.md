# Official Solution

**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solution/](https://leetcode.com/problems/count-univalue-subtrees/solution/)

---

[TOC]

## Solution

---

### Overview

Given the `root` of a binary tree, return the number of **uni-value subtrees** where a **uni-value subtree** means all nodes of the subtree have the same value.

---

### Approach 1: Depth First Search

#### Intuition

Given a `node` in our tree, we know that it is a uni-value subtree if it meets the following criteria:

1. The children are also uni-value subtrees.
2. The children have the same value as `node`.

The preceding conditions automatically apply to a leaf node because a leaf node's subtree contains only that node.

We can recursively iterate through the `left` and `right` children of each `node` to see if the children form uni-value subtrees. If all of the children form uni-value subtrees, we can then check if each child has the same value as the value of `node`.

We can use a depth-first search to perform this recursive traversal.

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

We implement a `dfs` method that takes a `TreeNode node` as an argument and starts the traversal from there. We begin with `root`. The `dfs` method returns a boolean that indicates whether or not the subtree rooted at `node` is a uni-value subtree.

If `node` is null, we don't need to worry about it, but we also don't want it to affect the "parent" (the node we came from to get to null). Therefore, if `node == null`, we return `true`. Notice that for a leaf node, both children will be null, thus both children's call will return `true`, which is what we want.

We recursively perform DFS traversal over the `left` and `right` child to see if they create uni-value subtrees. We perform `isLeftUniValue = dfs(node.left)` and `isRightUniValue = dfs(node.right)`. 

If both children form uni-value subtrees, i.e., `isLeftUniValue && isRightUniValue` is `true`, we verify whether both children (if they exist) have the same value as `node`. If the `left` child exists and `node.left.val != node.val`, we return `false`. While the `left` child forms a uni-value subtree, its value differs from that of `node`, so the current `node`'s subtree cannot be a uni-value subtree. We apply the same logic for the `right` child.

If we do not return `false` in any of the preceding cases, it means that the children who exist have the same value as `node`, forming a uni-value subtree. As a result, we add `1` to our count variable and return `true`.

Otherwise, if any child does not form a uni-value subtree, i.e., `isLeftUniValue && isRightUniValue` returns `false`, the subtree rooted at `node` cannot be a uni-value subtree.

Here's a visual representation of how the approach works in the first example given in the problem description:

!?!../Documents/250/250-slides.json:1000,518!?!

#### Algorithm

1. Create an integer variable `count` to count the number of uni-value subtrees. We initialize it to `0`.
2. Perform the DFS traversal over the given binary tree. We perform `dfs(root)` where `dfs` is a recursive method that takes a `TreeNode node` as a parameter from which the traversal begins. It returns a boolean indicating whether the subtree rooted at `node` is a uni-value subtree or not. We perform the following in this method:
    - If `node` is `null`, return `true`.
    - Recursively check whether the `left` child forms a uni-value subtree. We perform `isLeftUniValue = dfs(node.left)`.
    - Recursively check whether the `right` child forms a uni-value subtree. We perform `isRightUniValue = dfs(node.right)`.
    - If both the children form uni-value subtrees, i.e, `isLeftUniValue && isRightUniValue` is `true`, we compare the values of the `node`'s children with `node`' value. If the `left` child exists and `node.left.val != node.val`, we return `false` as the values don't match and we don't have a uni-value subtree. Likewise, if the `right` child exists and `node.right.val != node.val`, we return `false`. Otherwise, we increment `count` by `1` and return `true`.
    - Otherwise, one or both of the children do not form a uni-value subtree, so the tree rooted at `node` cannot either. We return `false`.
3. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/GNWDitRm/shared" frameBorder="0" width="100%" height="500" name="GNWDitRm"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes in the given binary tree.

* Time complexity: $O(n)$.
    - We traverse once over each node of the tree using DFS traversal which takes $O(n)$ time.

* Space complexity: $O(n)$.
    - The DFS traversal is recursive and would take some space to store the stack calls. The maximum number of active stack calls at a time would be the tree's height, which in the worst case would be $O(n)$ when the tree is a straight line.

---

### Approach 2: Depth First Search Without Using The Global Variable

#### Intuition

In the previous approach we used a non-constant global variable `count` to count the number of uni-value subtrees. The non-constant global variables are evil because their value can be changed by any function. Using global variables reduces the modularity and flexibility of the program. It is always suggested not to use global variables and instead use local variables in the program.

To avoid using global variables, we alter the `dfs` method, which accepts a `TreeNode node` as an argument and returns a list of two values. The first value in the list provides a boolean indicating whether or not the subtree rooted at `node` is a uni-value subtree (exactly the same as in the previous approach), and the second value indicates the number of uni-value subtrees in the tree rooted at `node`.

Our answer would be `dfs(root)[1]`, i.e., the second element in the list which would give the number of uni-value subtrees in the tree rooted at `root`, which is what we want.

#### Algorithm

1. Perform the DFS traversal over the given binary tree. We implement a recursive `dfs` method that takes a `TreeNode node` as an argument from which the traversal begins. We perform the following in this method:
    - If `node` is `null`, we return `true` similar to the previous approach but also return `0` as an empty tree cannot have any uni-value subtrees. We return `{true, 0}`.
    - Recursively call `dfs` for the `left` child. We perform `left = dfs(node.left)`.
    - Recursively call `dfs` for the `right` child. We perform `right = dfs(node.right)`.
    - We create two boolean variables `isLeftUniValue = left.first` and `isRightUniValue = right.first`, to indicate whether the `left` and `right` subtrees constitute uni-value subtrees or not. We additionally keep a `count` of the number of uni-value subtrees in the `left` and `right` subtrees.
    - If both the children form uni-value subtrees, i.e, `isLeftUniValue && isRightUniValue` is `true`, we compare the values of the `node`'s children with `node`' value. If the `left` child exists and `node.left.val != node.val`, we return `{false, count}` as this is not a uni-value subtree and we have `count` number of uni-value subtrees in the tree rooted at `node`. Likewise, if the `right` child exists and `node.right.val != node.val`, we return `{false, count}`. Otherwise, the subtree rooted at `node` forms a uni-value subtree, so we return `{true, count + 1}`.
    - Otherwise, one or both of the children do not form a uni-value subtree, so the tree rooted at `node` cannot either. We return `{false, count}`.

#### Implementation

<iframe src="https://leetcode.com/playground/PiSvNsxd/shared" frameBorder="0" width="100%" height="500" name="PiSvNsxd"></iframe>

We used the global variable `count` in place of a local variable in the first approach to ensure that the same variable is updated every time a new uni-value subtree is discovered. If we had used a local variable `count` and simply passed it into the `dfs` method, each call would create a new duplicate of the integer. Incrementing this new copy of the integer would have had no effect on our initial local variable `count`.

We can use pass by reference to modify the same integer without creating a global variable. We pass an integer or an integer array with just one element to count the number of uni-valued subtrees in the given tree based on the language. We can use an integer variable `count = 0` and pass it by reference in `C++`. Because we cannot pass integers by reference in `Java` and `Python3`, we create an integer array `count` with only one element and use it for these languages.

It's worth noting that here we would need to initialize (expose) the `count` variable in the `countUnivalSubtrees` method, which wasn't necessary in the previous implementation of this approach, therefore the previous solution with multiple return values is better in terms of design.

You can take a look at the implementation using pass by reference below:

<iframe src="https://leetcode.com/playground/5otMd64V/shared" frameBorder="0" width="100%" height="500" name="5otMd64V"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes in the given binary tree.

* Time complexity: $O(n)$.
    - We traverse once over each node of the tree using DFS traversal which takes $O(n)$ time.

* Space complexity: $O(n)$.
    - The DFS traversal is recursive and would take some space to store the stack calls. The maximum number of active stack calls at a time would be the tree's height, which in the worst case would be $O(n)$ when the tree is a straight line.