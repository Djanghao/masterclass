# Official Solution

**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solution/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solution/)

---

[TOC]

## Solution

---

### Approach 1: Monotonic Stack

**Intuition**

In a preorder traversal, a node is handled before its children. This makes our lives a lot easier - if we instead had to verify a postorder or inorder traversal, it would be more challenging.

Because a node is handled before its children, we can essentially iterate over the sequence `preorder` and decide what subtree each subsequent value should be in. For example, let's say we have `preorder = [5, 2, 1, 3, 6]`. The first value `5` must be the root. We then compare it with the next value `2`. Because `2 < 5`, the `2` must be in the left subtree, so we can "walk" left. The next value `1` is less than `2`, so it must be in the left subtree of `2` - we can "walk" left again.

The next value is `3`, which is greater than `1`. You may think: we should put `3` in the right subtree of `1`. This is wrong because we are currently in the left subtree of `2`, and the BST rule is that all nodes in the left subtree of `2` must be less than `2`. As such, we need to backtrack to put the `3` in the right subtree of `2` instead.

<img src="../Figures/255/1.png" width="960"> <br>

When we perform a standard DFS on a binary tree with recursion, we traverse as far down the left branch as possible. Once we reach a leaf node, we backtrack up the tree by returning from the DFS function. Under the hood, the computer implements this by using a call stack. We can create our own stack to emulate this functionality.

<img src="../Figures/255/2.png" width="960"> <br>

When we encounter a sequence of decreasing numbers, we're happy to continuously "walk" left. For example, let's say we had `preorder = [10, 9, 8, 7, 6, 5]`. The `10` is the root. The `9` is the left child of `10`. The `8` is the left child of `9`. The `7` is the left child of `8`, and so on. The issue arises when we find a larger value, because it must be a right child, and we need to identify which node should be its parent.

Let's call this node with a large value `x`. We need to identify which node will have `x` as its right child. As we saw above in the images, we can't just immediately "walk" right as we might violate the BST property due to an ancestor that's higher up the tree.

<img src="../Figures/255/3.png" width="960"> <br>

We need to find the ancestor with the greatest value that is less than `x`. The value needs to be less than `x` because `x` is going to be its right child. We need to find the greatest value, otherwise, there would be some other node that would break the BST property.

<img src="../Figures/255/4.png" width="960"> <br>

<img src="../Figures/255/5.png" width="960"> <br>

We have established two things so far:

1. We need to use a stack to emulate "moving" back up the tree, just like how recursion is implemented under the hood.
2. When we have decreasing values, we can continuously walk left.

<details><summary><b>A monotonic stack is perfect for this problem. If you aren't familiar with monotonic stacks, click here.</b></summary>

A monotonic stack is a stack whose elements are always sorted. In our case, we want a monotonic **decreasing** stack, i.e. the elements in the stack are always sorted in descending order.

To maintain this monotonic stack, we need to make sure that whenever we push a new element, it is the smallest value in the stack. Before we push an element `num`, we check the top of the stack. If the top of the stack is less than `num`, we pop from it. Since there may be many elements less than `num` in the stack, we need to use a while loop to "clean" the stack before pushing `num`.

Only once there are no elements in the stack less than `num` will we push `num`.

</details>

<br>

At any given moment, the node at the top of the stack is the current node we are at in the tree. For each node `num` we encounter, if the top of the stack is greater than `num`, we can just push it onto the stack. If the top of the stack is less than `num`, we will need to backtrack up the tree by popping from the stack.

<img src="../Figures/255/6.png" width="960"> <br>

After we clean the stack to ensure monotonic order, we can push `num` to the stack. The interesting thing here is that the entire left subtree of the parent is now irrelevant. In a preorder traversal, a node's left subtree is visited completely before any node in the right subtree is visited. Because we are now in the right subtree, we can completely forget about the left subtree.

> If you're having trouble understanding the "node at the top of the stack is the current node we are at in the tree" concept, think about it like this:
>
> In any binary tree problem, we typically use a function like `dfs` that takes an argument `node` to traverse the tree. At any given moment, there will be one "active" function call to `dfs` (wherever the computer is currently at during execution). Whatever `node` was passed to this call is the current node we are visiting in the tree.
>
> The top of the stack is analogous to the current function call we are at. As you can see in the above image, we can move back up the tree by popping from the stack.

We are missing one thing. What if we have `preorder = [5, 2, 6, 1, 3]`?

<img src="../Figures/255/7.png" width="960"> <br>

When we encounter the `6`, we must pop the `2` and `5` to maintain monotonic decreasing order. The next element to handle is `1`.

<img src="../Figures/255/8.png" width="960"> <br>

Because `1` is less than `6`, we would just push it onto the stack, which is equivalent to walking left. However, this is actually invalid because we are in the right subtree of `5`, and `1 < 5`.

We said above that in a preorder traversal, the entire left subtree of a node is visited before any node in the right subtree is visited. This means once we start visiting a node's right subtree, there is no way for us to get back to the left subtree. We have started visiting the right subtree of `5`, so **every value we encounter from now on** must be greater than `5`, since there is no way for us to get back to the left subtree.

We made the analogy between a recursive implementation of a `dfs` function and our stack - popping from the stack is like returning from a function call. When we return from a `node` and go back to the `parent`, we can **never** go back to the left subtree of `parent` again:

1. If `node = parent.left`, then we just finished traversing the left subtree of `parent` and will never come back to it.
2. If `node = parent.right`, we must have already traversed the left subtree of `parent` earlier, and will never come back to it.

We can combine these facts to make the following observation:

> When we return from a `node` (pop from the stack), every value we encounter from now on must be greater than `node`.

If we encountered a value `small` less than or equal to `node` in the future, it would mean that `small` belongs in the left subtree of `node`, but since we already "returned" from `node`, we have already visited all the nodes in the left subtree!

We can use an integer `minLimit` that we update every time we pop from the stack. We need to make sure every value we encounter as we iterate over the input is greater than `minLimit`, otherwise the sequence is invalid.

**Algorithm**

1. Declare an integer `minLimit` to a small value like negative infinity, and a `stack`.
2. Iterate over `preorder`. For each `num`:
    - Clean the stack. While the top of the stack is less than `num`, pop from it and update `minLimit`.
    - If `num <= minLimit`, return `false`.
    - Push `num` onto the stack.
3. Return `true` if we get through the whole input.

**Implementation**

<iframe src="https://leetcode.com/playground/SePSHkp8/shared" frameBorder="0" width="100%" height="429" name="SePSHkp8"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `preorder`,

* Time complexity: $$O(n)$$

    Despite the while loop, each iteration of the for loop is amortized $$O(1)$$. The while loop only runs $$O(n)$$ times across all iterations. This is because each element in `preorder` can only be pushed and popped from the stack at most once, giving us a maximum of $$2n$$ stack operations.

* Space complexity: $$O(n)$$

    The stack can grow to a size of $$O(n)$$, such as in the case where `preorder` is descending.
    
<br/>

---

### Approach 2: Constant Auxiliary Space

**Intuition**

We can implement the stack from the previous approach by modifying the input array.

> It is generally considered a bad practice to modify the input, especially arrays since they are passed by reference. You should always ask an interviewer if it's OK to do so first. The problem description has a follow-up that alludes to this approach, which is why we have included it.

This algorithm is identical to the previous one. The only difference is how we implement the stack. Let's use an integer `i` that represents the length of the stack. Then `preorder[i - 1]` holds the top of the stack at any given moment. If `i == 0`, the stack is empty.

To "add" an element `num` to the top of the stack, we can do `preorder[i] = num`, and then increment `i`. After incrementing `i`, `preorder[i - 1]` holds the element we just added (the top of the stack). Notice that `i` is the index where an element would end up after being pushed.

To "remove" an element from the stack, we simply decrement `i`. Before doing so, we should update `minLimit` with the top of the stack, which is `preorder[i - 1]`.

**Algorithm**

1. Declare an integer `minLimit` to a small value like negative infinity, and an integer `i = 0`.
2. Iterate over the elements of `preorder`. For each `num`:
    - Clean the "stack". While `preorder[i - 1]` is less than `num`, "pop" it by decrementing `i` while updating `minLimit`.
    - If `num <= minLimit`, return `false`.
    - "Push" `num` onto the stack by setting `preorder[i] = num` and incrementing `i`.
3. Return `true` if we get through the whole input.

**Implementation**

<iframe src="https://leetcode.com/playground/Zp2cniHi/shared" frameBorder="0" width="100%" height="446" name="Zp2cniHi"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `preorder`,

* Time complexity: $$O(n)$$

    The time complexity is identical to the previous approach for the same reasons.

* Space complexity: $$O(1)$$ auxiliary

    A common misconception is that modifying an input array for use in an algorithm leads to an $$O(1)$$ space complexity. In reality, you are still using $$O(n)$$ space, but $$O(1)$$ **auxiliary** space.

    Because we are modifying the input to directly use in the algorithm, we must count it as part of the space complexity. However, we are not using any auxiliary space other than a few integers.

    > The exception to this is in-place algorithms where the input is also returned as the output. For example: sorting algorithms.
    
<br/>

---

### Approach 3: Recursion

**Intuition**

> Note: this approach is unintuitive and difficult to implement. Typically, recursion is used to break problems into subproblems and you would expect the recursive function to return the answer to the subproblems.
>
> Unfortunately, there is no way easy way to solve this problem recursively in a way that the function returns something uniform. If you face this problem in an interview, we recommend approach 1 or 2. This approach has been added for the sake of completeness. As such, we will not explain the approach in detail.

This algorithm is similar to the one used to solve [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/). It is highly recommended that you solve that problem recursively before continuing with this approach.

The key idea in Validate Binary Search Tree is that we pass two parameters with each node that represent the range the node's value is allowed to be in. When we move to `node.left`, we update the max bound with `node.val` to make sure all nodes in the left subtree are less than `node.val`. Vice versa with `node.right` and the min bound.

We will use a similar idea here. Let's define a function `helper` that takes arguments `i, minLimit, maxLimit`. The limit variables are the same as the ones just mentioned. `i` will be an index variable that we will use to iterate over `preorder`.

The goal is to process all nodes `(i == preorder.length)`. If we can do that, then the sequence is valid. The previous two approaches had the same idea: if we found a node that broke the sequence, we returned `false`. If we could process all nodes without returning `false`, then we returned `true`.

The base case of `helper` will be to return `true` if `i == preorder.length`. If **any** call to `helper` returns `true`, then it means we have processed all nodes, and the sequence is valid.

> The thing that makes this solution very unintuitive is that `i` is shared between all function calls - i.e., it acts as a global variable. This is inconsistent with recursive solutions where each function call stores its own state.
>
> The reason for this is that we need to process the nodes of `preorder` in the same order that they appear in the input.

Now, the logic of the function. Let the value of the current node at index `i` be `root`. First, check the BST condition: if `root` is not between `minLimit` and `maxLimit`, return `false`.

Next, increment `i` as the current node has passed the test. We will now test the next element as both the left and right child. To treat it as the left child, call `helper` while modifying `maxLimit` to `root`. To treat it as the right child, call `helper` while modifying `minLimit` to `root`. If either of these calls return `true`, then it means we managed to process all elements, and we should return `true` as well.

If the sequence is invalid, all calls will eventually end up failing the BST condition check.

**Algorithm**

1. Create a function `helper` that takes arguments `i, minLimit, maxLimit`:
    - If `i == preorder.length`, return `true`.
    - Set `root = preorder[i]`.
    - If `root <= minLimit` or `root >= maxLimit`, return `false`. The BST condition is violated.
    - Increment `i`.
    - Call `helper` with `maxLimit` as `root`.
    - Call `helper` with `minLimit` as `root`.
    - If either call returns `true` return `true`. Otherwise, return `false`.
2. Call `helper` with `i = 0`, `minLimit = -infinity`, `maxLimit = infinity`.

> Note: because we want `i` to act as a global variable, we must pass it by reference. In Java and Python, we are using an array of length `1`. In C++, we pass the integer by reference.

**Implementation**

<iframe src="https://leetcode.com/playground/GpXwB2Mv/shared" frameBorder="0" width="100%" height="446" name="GpXwB2Mv"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `preorder`,

* Time complexity: $$O(n)$$

    For each `i`, two calls are made to calculate `left` and `right`. Once entering those calls, we either return `false` due to the BST condition being broken, or we increment `i`.

    Because `i` behaves as a global variable, after incrementing `i`, no more calls can be made from the previous value of `i`. As such, each value of `i` can only make two more calls, and `helper` is called at most $$2n$$ times. Everything else in the function runs in $$O(1)$$, so the time complexity is $$O(n)$$.

* Space complexity: $$O(n)$$

    The recursion call stack uses $$O(n)$$ space.
    
<br/>

---