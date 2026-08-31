# Official Solution

**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solution/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solution/)

---

[TOC]

## Solution

---

### Overview

The N-ary tree is a generalization of a binary tree where each node can have more than two children. In postorder traversal, the traversal order is as follows:

1. Visit all the children of a node from left to right.
2. After all the children have been visited, visit the node itself.

The problem provides the tree in a level-order traversal format, where children of a node are grouped and separated by a null value.

If you are completely unfamiliar with N-ary trees, check out this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/n-ary-tree/) for an in-depth discussion.
    
---

### Approach 1: Recursive

#### Intuition

Before we explore the solution, let's visualize the postorder traversal in this slideshow:

!?!../Documents/590/slideshow.json:934,902!?!

Let's walk through the process using a recursive function `traversePostorder`. This function will call itself for each child of the current node, effectively breaking down the traversal into smaller, manageable subproblems. The key idea here is that recursion allows us to naturally explore the entire depth of each subtree before moving on to the next sibling subtree.

1. Base Case: If the node has no children (i.e., it's a leaf node), the function simply adds the node's value to the result list.
2. Recursive Step: For a non-leaf node, the function iterates over all its children, recursively calling `traversePostorder` on each one. After all children have been processed, the function adds the current node's value to the result list.

For example, consider an n-ary tree where the root has three children. The function will:
- Traverse all the subtrees rooted at the first child.
- After finishing with the first subtree, it moves to the second child and repeats the process.
- Finally, after all subtrees have been traversed, the function adds the root node’s value to the result list.

The result list now contains the nodes' values in the correct postorder sequence.

This approach effectively mimics the natural recursive nature of postorder traversal, where the exploration of each subtree is completed before moving to the next.

#### Algorithm

Main method `postorder`:

- Initialize a list `result` to store the postorder traversal of the nodes' values.
- If the input `root` node is `null`, return the empty `result` list immediately. 
- Invoke the helper method `traversePostorder` to perform the postorder traversal.
- Return `result` as our answer.

Helper method `traversePostorder`:

- Define a method `traversePostorder` with parameters: `currentNode` and the `postorderList` to store the result.
- If `currentNode` is `null`, return.
- Loop over each `childNode` of `currentNode`:
  - Recursively call `traversePostorder` on each `childNode`.
- Add the value of `currentNode` to `postorderList`.

#### Implementation

<iframe src="https://leetcode.com/playground/U4oRxsP8/shared" frameBorder="0" width="100%" height="500" name="U4oRxsP8"></iframe>

#### Complexity Analysis

Let $m$ be the number of nodes in the tree.

- Time complexity: $O(m)$

    The method `traversePostorder` visits each node in the tree exactly once. Thus, the time complexity of the algorithm is $O(m)$.

- Space complexity: $O(m)$

    The `traversePostorder` method uses recursion, and the maximum depth of the recursion is the height of the tree, which is $O(m)$ in the worst case (for a skewed tree).  

    Thus, the space complexity of the algorithm is also $O(m)$.

---

### Approach 2: Iterative (Explicit Reversal)

#### Intuition

In contrast to the recursive method, implementing an iterative approach for postorder traversal in an n-ary tree presents a challenge. The recursive method naturally processes nodes in a bottom-up manner, but this behavior doesn't translate directly to an iterative stack-based approach, since a stack processes elements in a last-in-first-out (LIFO) order.

To achieve postorder traversal iteratively, we can adopt a method that initially resembles preorder traversal but with some modifications.

1. Simulate Preorder with Stack: We start by pushing the root node onto the stack. As long as the stack isn’t empty, we pop the top element, add it to the result list, and then push all its children onto the stack from left to right.
   
   - This order means that when children are popped from the stack for further evaluation, they come out in the reverse order (right to left). Thus, at this point, our traversal order is root -> right-to-left children.

2. Reverse the Result: After the entire tree has been processed, and the stack is empty, the result list will reflect the reverse of what we want. By reversing this result list, we obtain the correct postorder traversal, where each node’s children are fully processed before the node itself.

This approach leverages the stack to mimic the recursive behavior, but because of the LIFO nature of the stack, we reverse the result at the end to achieve the desired postorder sequence. Although this method doesn't traverse the tree in a strict postorder manner, it remains a valid solution since the problem only requires the correct order in the final result.

#### Algorithm
 
- Create a list `result` to store the postorder traversal of the nodes' values.
- If the input `root` node is `null`, return the empty result list immediately.
- Initialize a `stack` and push the root node onto it. This stack will be used to traverse the tree.
- While the `stack` is not empty:
  - Pop a node from `stack` and assign it to a variable `currentNode`.
  - Add the value of `currentNode` to `result`.
  - Iterate through the `children` of `currentNode`. For each `child` node:
    - Push `child` onto the `stack`.
- Reverse the `result` list.
- Return `result` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/LAiQ7Az3/shared" frameBorder="0" width="100%" height="497" name="LAiQ7Az3"></iframe>

#### Complexity Analysis

Let $m$ be the number of nodes in the tree.

* Time complexity: $O(m)$

    The main loop iterates over every node in the tree, taking $O(m)$ time. Each stack operation inside the loop takes constant time. Reversing the `result` list takes an additional linear time.

    Thus, the overall time complexity of the algorithm is $O(m)$.

* Space complexity: $O(m)$

    In the worst case, if the tree is highly unbalanced (e.g., a skewed tree), the stack can grow to store all nodes at once, contributing $O(m)$ to the space complexity. No other additional data structures are used. 

    Thus, the space complexity of the algorithm is $O(m)$.
---

### Approach 3: Iterative (Two Stacks)

#### Intuition

This approach refines the iterative method by utilizing two stacks to better manage the order in which nodes are processed, ultimately eliminating the need to reverse the result at the end. 

In this method, we use two stacks: `nodeStack` for the main traversal and `reverseStack` to temporarily hold the nodes in reverse order before they are added to the final result. 

We start by pushing the `root` node onto the `nodeStack`. As long as `nodeStack` is not empty, we proceed with the following steps.
   
We pop the top node from `nodeStack`. Instead of adding it directly to the result list (as its children haven't been processed yet), we push it onto `reverseStack`. This postpones the addition of the node to the final result, allowing us to process its children first.

Now we iterate over the children of the current node from left to right, pushing each child onto `nodeStack`. Due to the LIFO nature of stacks, these children will be popped and processed in the reverse order (right to left). As a result, the nodes in `reverseStack` will eventually be ordered such that when we pop them, we get the correct postorder sequence: children from left to right, followed by their parent node.

After processing all nodes, `reverseStack` will contain the nodes in postorder, but in reverse order. We then simply pop elements from `reverseStack` one by one and add them to our result list. This ensures that the final list is in the correct postorder sequence.

#### Algorithm
 
- Initialize a list `result` to store the postorder traversal of the nodes' values.
- If the input `root` node is `null`, return the empty `result` list immediately.
- Initialize two stacks: `nodeStack` for traversal and `reverseStack` to store nodes in reverse order.
- Push `root` onto the `nodeStack` to start the traversal.
- While `nodeStack` is not empty:
  - Pop a node `currentNode` from the `nodeStack`.
  - Push `currentNode` onto `reverseStack`.
  - Iterate through the `children` of `currentNode`. For each node `child`:
    - Push each `child` onto `nodeStack` to ensure they are processed in the subsequent iterations.
- While `reverseStack` is not empty:
  - Pop a node from `reverseStack` and assign it to `currentNode`.
  - Add the value of `currentNode` to `result`.
- Return the `result` list.

#### Implementation

<iframe src="https://leetcode.com/playground/29SXBMBk/shared" frameBorder="0" width="100%" height="500" name="29SXBMBk"></iframe>

#### Complexity Analysis

Let $m$ be the number of nodes in the tree.

* Time complexity: $O(m)$

    The first loop iterates over each node in the tree exactly once. Each node is pushed onto `nodeStack` and then moved to `reverseStack`. Since each node is processed exactly once, the time complexity for this loop is $O(m)$.

    The second loop also processes each node exactly once, adding their values to the `result` list. This loop has a time complexity of $O(m)$.

    Thus, the overall time complexity of the algorithm is $O(m) + O(m) = O(m)$.

* Space complexity: $O(m)$

    The `nodeStack` and `reverseStack` can each hold up to $m$ nodes in the worst case. This makes the space complexity of the algorithm $O(m)$.

---

### Approach 4: Iterative (Without Reverse)

#### Intuition

In this approach, we aim to closely mimic the natural flow of recursion using a single stack, avoiding the need to reverse the final result by carefully managing when nodes are added to the result list.

To replicate the recursive process, we need to simulate the behavior where each node is visited twice: first when we encounter it initially and later after all its children have been processed. The key idea here is to use a flag to track whether a node has been visited once before adding it to the result list.

We start by pushing the root node onto the stack with a `visited` flag set to `false`. This flag indicates whether the node has been fully processed (i.e., whether its children have been visited).

As we iterate, we pop the top element from the stack and check its `visited` flag:
   - First Encounter (`visited` = `false`): If this is the first time we're seeing this node, we update its flag to `true` and push it back onto the stack. Then, we push all its children onto the stack from right to left. This ensures that when we revisit these nodes, they will be processed in left-to-right order.
   
   - Second Encounter (`visited` = `true`): When the node is encountered again (after its children have been processed), we add it to the result list. This step corresponds to the natural postorder sequence, where a node is added to the result after all its children have been visited.

By the time the stack is empty, all nodes will have been processed in the correct postorder sequence, and the result list will reflect the correct traversal without the need for any additional reversal.

#### Algorithm
 
- Create a list `result` to store the postorder traversal of the nodes' values.
- If the input `root` node is `null`, return the empty `result` list immediately.
- Create a stack `nodeStack` of type `NodeVisitPair` that will hold pairs of nodes and their visit status.
- Push the `root` node onto the stack with `isVisited` set to `false`, indicating that the node has not yet been fully processed.
- While `nodeStack` is not empty:
  - Pop a pair from the `nodeStack` and assign it to `currentPair`.
  - If `currentPair.isVisited` is `true`, add the node's value to `result`.
  - Else, set `currentPair.isVisited` to `true` and push `currentPair` back onto the stack.
  - Retrieve the children of the current node and set it to a list `children`.
  - Iterate over `children` in reverse order and push each child onto the stack.
- Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/nW2cReWj/shared" frameBorder="0" width="100%" height="500" name="nW2cReWj"></iframe>

#### Complexity Analysis

Let $m$ be the number of nodes in the tree.

* Time complexity: $O(m)$

    Each node is pushed onto the stack twice: once with `isVisited = false` and once with `isVisited = true`. Consequently, each node is popped from the stack twice. Overall, this makes the time complexity of the algorithm $O(4 \cdot m) = O(m)$.

* Space complexity: $O(m)$

    The `nodeStack` will, in the worst case (for a skewed tree), contain all `m` nodes of the tree. Each entry in the stack takes constant space. 

    Thus, the space complexity of the algorithm is $O(m)$.

---