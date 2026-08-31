# Official Solution

**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solution/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solution/)

---

[TOC]

## Solution

---

### Overview

The problem requires modifying the binary search tree rooted at the `root` so that each node has a new value equal to the sum of all original tree values that are greater than or equal to `node.val`. The tree contains between 0 and 100 unique nodes.

Check out the example below to understand how the root value gets replaced by adding greater values:

![figB](../Figures/1038/visual1.png)

---

### Approach 1: In-order Traversal (Brute-Force)

#### Intuition

In a binary search tree, all nodes in the left subtree of a node have values less than the node, and all nodes in the right subtree have values greater. During an in-order traversal, we move from the left subtree to the root node, then to the right subtree. Thus, in a binary search tree, in-order traversal yields node values in ascending order.

Given that the number of nodes is small, we can consider using a brute-force approach to solve the problem.

We can store all node values in an array as we traverse the tree using in-order traversal. Now, we can traverse the tree again and modify each node's value by incrementing the original value with the sum of all the greater values in the array.

Since the array is sorted in ascending order, we can start iterating from the end of the array. If we reach any value in the array less than the current node value, we can break the iteration to further optimize this approach.

#### Algorithm

**Main function - `bstToGst(root)`**

1. Initialize an integer array `inorderTraversal`.
2. Call `inorder(root)`.
3. Reverse the `inorderTraversal` array.
4. Call `replaceValues(root)`.
5. Return `root`.

**`inorder(root)`**

1. If the root is `null`, return.
2. Make a call to `inorder(root->left)`.
3. Store the value of the current node in the `inorderTraversal` array.
4. Make a call to `inorder(root->right)`.

**`replaceValues(root)`**

1. If the root is `null`, return.
2. Make calls to the left and right child, i.e. call the `replaceValues(root->left)` and `replaceValues(root->right)`.
3. Initialize `nodeSum` with 0.
4. Iterate through the `inorderTraversal` array:
    - If the current value is greater than `root->val`:
        - Add this value to the `nodeSum`.
5. Increment `root->val` by `nodeSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/oQyR8Jh9/shared" frameBorder="0" width="100%" height="500" name="oQyR8Jh9"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree rooted at `root`.

- Time complexity: $O(n^2)$

    The `inorder` function traverses all the nodes exactly once. All other operations in `inorder` are constant time. Therefore, the time complexity for this function is $O(n)$.
 
    The `replaceValues` function iterates all the values in `inorderTraversal` of size `n` in each iteration. It iterates all the nodes exactly once. Therefore, the time complexity for this function is $O(n^2)$.

    The time complexity for the main function is given by $O(n^2)$.

- Space complexity: $O(n)$

    While traversing the tree, the recursion stack in both functions stores exactly `n` nodes in the worst case. Also, the size of the `inorderTraversal` array is `n`. Therefore, the space complexity is $O(n)$.

---

### Approach 2: Reverse In-order Traversal

#### Intuition

Traversing the right subtree before the left subtree during an in-order traversal means we can visit the greater values before the smaller ones. This approach will traverse the tree so that all the nodes are visited in descending order. An example of this reverse in-order traversal is shown below:

![figA](../Figures/1038/Slide1.PNG)

We use recursion to visit the right subtree first, reaching the rightmost node with the maximum value. During traversal, each node's value is updated with a running sum of all previously visited nodes. This approach works because visiting nodes in descending order allows us to accumulate and update the sum progressively.

Next, we move to the left subtree and repeat the process, using the call stack to return to nodes with smaller values.

#### Algorithm

**Main function**

1. Initialize an integer `nodeSum` with 0.
2. Call `bstToGstHelper(root)`.
3. Return the value of `root`.

**Helper function - `bstToGstHelper(TreeNode root,int nodeSum)`**

1. If the `root` is null:
    - Return the `root` without any changes.
2. Recursively call the right subtree of root.
3. Increment `nodeSum` by the value of the current node and replace current node's value with `nodeSum`.
4. Recursively call the left subtree of the root.
5. Return `root`.

!?!../Documents/1038/slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/P4NiS6sq/shared" frameBorder="0" width="100%" height="446" name="P4NiS6sq"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree rooted at `root`.

- Time complexity: $O(n)$

    The recursive function is called for every node exactly once. All the operations performed in the `bstToGst` function are constant time. Therefore, the time complexity is $O(n)$.

- Space complexity: $O(n)$

    The recursive function is called exactly `n` times. In the worst case where the binary search tree is skewed such that all the nodes only have the right children, the call stack size will grow up to `n`. Therefore, the space complexity is $O(n)$.

---

### Approach 3: Iterative Reverse In-order Traversal

#### Intuition

We can perform a reverse in-order traversal by emulating the recursion call stack iteratively using a stack. 

We can iterate the nodes of the tree, and push them in the stack until we reach the rightmost node of the tree, similar to the recursive process. 

We need to maintain the sum while traversing in decreasing order and increment the value of the top node of the stack by this sum. Similarly, we can repeat this process for the left subtree of the current node.

#### Algorithm

1. Initialize integer `nodeSum` with 0 and a stack `st` to store the nodes of the tree. Create a copy of the `root` in `node`.
2. Iterate until `st` is not empty or `node` is not `null`:
    - While `node` is not null:
        - Push the current node in `st`.
        - Replace `node` with the right child of `node`.
    - Store the top element of `st` in `node` and pop `st`.
    - Increment `nodeSum` with the value of `node`.
    - Replace the value of `node` with this value.
    - Replace `node` with the left child of `node`.
3. Return `root`.

!?!../Documents/1038/slideshow2.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/7ecgLZtM/shared" frameBorder="0" width="100%" height="500" name="7ecgLZtM"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree rooted at `root`.

- Time complexity: $O(n)$

 Every node is pushed into the stack and popped from the stack exactly once. All the other operations performed in the loop are constant time. Therefore, the time complexity is $O(n)$.

- Space complexity: $O(n)$

 The recursive function is called exactly `n` times. In the worst case where the binary search tree is skewed such that all the nodes only have the right children, the call stack size will grow up to `n`. Therefore, the space complexity is $O(n)$.

---

### Approach 4: Morris Traversal

#### Intuition

> This approach is very advanced and would not be expected in an interview. We have included it for completeness.

We will continue using the same idea from the previous approach. Is there a way for us to perform the inorder traversal without using any space, including the recursion call stack?

Morris Traversal is an efficient algorithm used to perform in-order tree traversal without using any extra space for recursion or a stack, which is typically required in conventional tree traversal methods. The algorithm uses the concept of threaded binary trees, temporarily modifying the tree structure during traversal to avoid additional memory usage.

Before diving into Morris traversal, it's crucial to understand threaded binary trees:

1. In a threaded binary tree, "null" right pointers are replaced with pointers to the in-order successor of the node.
2. This threading allows for efficient traversal without recursion or a stack.


**Note:** If you are new to the concept of Morris traversal, we recommend you first read [Threaded Binary Trees](https://en.wikipedia.org/wiki/Threaded_binary_tree) and [Working of the Morris traversal algorithm](https://stackoverflow.com/a/5506601). You can also understand the implementation of the algorithm [here](https://leetcode.com/problems/binary-tree-inorder-traversal/editorial/#approach-3-morris-traversal).

To apply the reverse in-order traversal using Morris traversal, we can swap all `left` and `right` pointer references to the BST. This would return all the nodes in the descending order of their values. 

Check out the example given below to understand the conversion process:

!?!../Documents/1038/slideshow3.json:960,540!?!

In the final tree obtained, if there is no right subtree, then we can visit this node and continue traversing left. If there is a right subtree, then there is at least one node that has a greater value than the current one. Therefore, we must traverse that subtree first before the current node which would help us to traverse all the node values in decreasing order.

#### Algorithm

**Main function - `bstToGst(root)`**

1. Initialize an integer `sum` with 0 and a dummy node `node` with root.
2. Iterate while node's value is not `null`:
    - If node's right child is not `null`:
      - Increment `sum` with node's value.
      - Replace node's value with this sum and move to the left child.
    - Otherwise, if the right child is `null`:
      - Store the in-order successor of `node` in `succ`, calculated using `getSuccessor(node)`.
        - If left child of `succ` is `null`:
          - Store `node` as the left child of `succ`.
          - Move towards the right child of `node`.
        - Otherwise, if the left child isn't `null`:
          - Set left child of `succ` as null.
          - Increment `sum` with node's value.
          - Replace node's value with this sum and move to the left child.
3. Return `root`.  

**`getSuccessor(node)`**

1. Initialize `succ` with right child of `node`.
2. Return the left-most child of `succ`.
> Note: While this approach is space-efficient, it modifies the tree structure during traversal, which might not be suitable in all scenarios, especially if the tree is being accessed concurrently by other processes. The constant modification and restoration of tree links may have a slight impact on performance compared to straightforward recursive approaches, especially for smaller trees.

#### Implementation

<iframe src="https://leetcode.com/playground/5Uz6xMNm/shared" frameBorder="0" width="100%" height="500" name="5Uz6xMNm"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree rooted at `root`.

- Time complexity: $O(n)$

    Note that `getSuccessor` is called at most twice per node. On the first invocation, the temporary link back to the node in question is created, and on the second invocation, the temporary link is erased. 
    
    Then, the algorithm steps into the left subtree with no way to return to the node. Therefore, each edge can only be traversed 3 times: once when we move the node pointer, and once for each of the two calls to getSuccessor.

    Therefore, the time complexity is $O(n)$.

- Space complexity: $O(1)$

    Because we only manipulate pointers that already exist, the Morris traversal uses constant space.

---