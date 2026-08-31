# Official Solution

**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solution/](https://leetcode.com/problems/remove-nodes-from-linked-list/solution/)

---

[TOC]

## Solution

---

### Overview

Given the head of a linked list, the task is to remove every node that has a node with a greater value anywhere on its right side. This means that after processing the linked list, every node will only have nodes with smaller values to their right, or the linked list should be in decreasing order.

**Key Observations**
1. The nodes in the linked list have positive values.
2. There may be duplicate values.
3. We manipulate the list by deleting values, not by sorting it.

---

### Approach 1: Stack

#### Intuition

A challenge associated with this problem is that, for a given node, we need to not only delete the node directly to the right if it has a larger value but also delete all other nodes to the right that have larger values. The brute force approach involves iterating through the linked list using nested loops, comparing the value of each node with the nodes that follow it, and deleting any nodes whose values are smaller than the following nodes. However, this approach is inefficient, with a quadratic time complexity.

The resultant linked list should be in decreasing order. We can leverage this fact to develop a more efficient solution.

A list in decreasing order, if reversed, is in increasing order.

If we reverse the list, the node values should be in increasing order after deleting nodes. We can delete any nodes whose values are smaller than the nodes before them. This strategy ensures efficient deletion of all nodes that have nodes with a greater value to their right (in the original order) without using nested loops.

The list we are given is a singly linked list, so we can't easily traverse it in reverse from tail to head.

Whenever a problem requires reversing a sequence, it is worth considering using a stack. 

Stacks are a First-In-Last-Out (FILO) data structure, meaning that the first items added to the stack are the last ones removed. Consequently, if you push a sequence of items into a stack and then remove them, the sequence will be reversed. Learn more about stacks by reading our [Stack Explore Card](https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/).

We start by adding all of the nodes to a stack.

Next, we create a new linked list to store the result. We keep track of the maximum node value encountered so far using the variable `maximum`.

Then, we pop each node from the stack. If the node's value is not smaller than the `maximum`, we create a new node with that value and add it to the `resultList`. Since the linked list is reversed, we build the `resultList` from back to front, continuously adding new nodes to the beginning.

#### Algorithm

1. Initialize an empty `stack` to be used for reversing the nodes.
2. Set a pointer `current` to `head`.
3. While `current` is not `Null`:
    - Add `current` to the `stack`.
    - Set `current` to `current.next`.
4. Pop the node from the top of the `stack` and set `current` to that node.
5. Initialize a variable `maximum` to `current.val`.
6. Create a new ListNode `resultList` with `maximum` as its value.
7. While the `stack` is not empty:
    - Pop the node from the top of the `stack` and set `current` to that node.
    - If `current.val` < `maximum`:
        - Continue; this node does not need to be added to the `resultList`.
    - Otherwise, add a new node to the front of the `resultList`:
        - Create a new ListNode `newNode` with `current.val` as its value.
        - Set `newNode.next` to `resultList`.
        - Set `resultList` to `newNode`.
        - Update `maximum` to `current.val`.
8. Return `resultList`.

The algorithm is visualized below:

!?!../Documents/2487/2487_slideshow2.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/2CTMtkxy/shared" frameBorder="0" width="100%" height="500" name="2CTMtkxy"></iframe>

#### Complexity Analysis

Let $n$ be the length of the original linked list.

* Time complexity: $O(n)$

    Adding the nodes from the original linked list to the stack takes $O(n)$.

    Removing nodes from the stack and adding them to the result takes $O(n)$, as each node is popped from the stack exactly once.

    Therefore, the time complexity is $O(2n)$, which simplifies to $O(n)$.

* Space complexity: $O(n)$

    We add each of the nodes from the original linked list to the `stack`, making its size $n$.
    
    We only use `resultList` to store the result, so it does not contribute to the space complexity.

    Therefore, the space complexity is $O(n)$.

---

### Approach 2: Recursion

#### Intuition

The nodes we retain in the linked list must meet the following criteria: Each node's value is not smaller than the values of the following nodes.

Linked lists are often manipulated using recursion. This problem is an excellent candidate for recursion because it can be broken down into subproblems that collectively solve the main problem.

Consider a node $B$ situated in the middle of the linked list, where all subsequent nodes have values less than or equal to $B$'s value. If node $B$ satisfies this criterion, its value is not smaller than the values of the following nodes. For the node $A$ directly preceding $B$, if $A$ is not smaller than $B$, then $A$ is also not smaller than any nodes following $B$. This holds due to the transitive property: if $a \geq b$ and $b \geq c$, then $a \geq c$.

This means that if we've solved the subproblem for nodes to the right of a given node in the linked list, we can efficiently solve the problem for that node.

Let`s begin by discussing the base cases:

1. The linked list is empty:
    - An empty list meets the criteria, so we return the `head`.

2. The linked list has only one node:
    - A list with one node also meets the criteria, because there are no following nodes. Again, we return the `head`.

We can develop a strategy for handling longer lists by thinking about handling a linked list with two nodes.

For a linked list with two nodes, there are two cases for the `head` node:

1. The `head` node's value is the same size or larger than the next node's value.
    - This linked list meets the criteria. Return the list.

2. The `head` node's value is smaller than the next node's value.
    - We need to delete `head`. Return the next node.

For linked lists with more than two nodes, the main adjustment we need to make is to check the rest of the linked list. 

The challenge we face is ensuring that `head.next` is set to the correct next node. Does the next node also need to be deleted? Are there other nodes later in the linked list that have values that are greater than `head`?

Instead of simply setting `head` to `head.next` to progress to the next node, we recursively call `removeNodes(head.next)`. This recursive function removes nodes with greater values anywhere to the right. This ensures that `head` is set to the correct node and that the rest of the linked list also meets the criteria.

#### Algorithm

1. Base Case: If `head` or `head.next` is `Null`, return `head`.
2. Recursive Call: Set `nextNode` to `removeNodes(head.next)`.
3. Comparison: If `head.val` is less than `nextNode.val`, we need to remove `head`. Return `nextNode`.
4. Otherwise, set `head` to `head.next` and then return `head`.

#### Implementation

<iframe src="https://leetcode.com/playground/L2EFsxaF/shared" frameBorder="0" width="100%" height="446" name="L2EFsxaF"></iframe>

#### Complexity Analysis

Let $n$ be the length of the original linked list.

* Time complexity: $O(n)$

    We call `removeNodes()` once for each node in the original linked list. The other operations inside the function all take constant time, so the time complexity is dominated by the recursive calls. Thus, the time complexity is $O(n)$.

* Space complexity: $O(n)$

    Since we make $n$ recursive calls to `removeNodes()`, the call stack can grow up to size $n$. Therefore, the space complexity is $O(n)$.

---

### Approach 3: Reverse Twice

#### Intuition

The first approach used a stack to reverse the linked list, resulting in linear auxiliary space. However, instead of using a stack, we can write a function to reverse the nodes in place, avoiding the need for auxiliary space. This task is explored in the problem [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/). The basic idea is to set each node's next field to point to the previous node.

After reversing the linked list, the node values will be in increasing order, allowing us to delete any nodes whose values are smaller than the nodes preceding them.

To facilitate this process, we maintain the maximum node value found so far using the variable `maximum`.

We traverse each node, `current`, in the reversed linked list and update the `maximum` value accordingly. If the value of the `current` node is smaller than the `maximum`, we delete `current`. Deleting nodes in place requires us to track the previous node so that we can correctly link it to the next node if we delete the `current` node.

Once we have traversed the linked list to delete the nodes, we have a linked list that is in increasing order.

However, since the desired result should be in decreasing order, we reverse the modified linked list and then return it.

> **Interview Tip: In-place Algorithms**
>
> This approach modifies the input. In-place algorithms overwrite the input to save space, but sometimes this can cause problems.
>
> Here are a couple of situations where an in-place algorithm might not be suitable.
>
> 1. The algorithm needs to run in a multi-threaded environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
>
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

#### Algorithm

1. Define a function `reverseList` that takes the head of a linked list as input and reverses it, returning the new head.
    - Initialize three pointers, `prev` to `null`, `current` to `head`, and `nextTemp` to `null`.
    - While `current` is not `null`:
        - Set `nextTemp` to `current.next`.
        - Reverse the order of the nodes by setting `current.next` to `prev`.
        - Progress both pointers by setting `prev` to `current` and `current` to `nextTemp`.
    - Return `prev`.
2. Reverse the original linked list using `reverseList(head)`. Set `head` to the reversed linked list.
3. Initialize a variable `maximum` to `0`.
4. Initialize two pointers, `prev` to `null` and `current` to `head`.
5. Delete the nodes that are smaller than the node before them. While `current` is not `null`:
    - Update `maximum` to the max between `maximum` and `current.val`.
    - If `current.val` is less than `maximum`, delete `current`.
        - Skip the current node by setting `prev.next` to `current.next`.
        - Set a pointer `deleted` to `current`.
        - Move `current` to `current.next` to progress to the next node.
        - Set `deleted.next` to `null` to remove any additional pointers to the new `current` node.
    - Otherwise, if `current.val` is not less than `maximum`, retain `current` and progress both pointers by setting `prev` to `current` and `current` to `current.next`.
6. Reverse and return the modified linked list using `reverseList(head)`.

The algorithm is visualized below:

!?!../Documents/2487/2487_slideshow3.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/aq46D8sp/shared" frameBorder="0" width="100%" height="500" name="aq46D8sp"></iframe>

#### Complexity Analysis

Let $n$ be the length of the original linked list.

* Time complexity: $O(n)$

    Reversing the original linked list takes $O(n)$.

    Traversing the reversed original linked list and removing nodes takes $O(n)$.

    Reversing the modified linked list takes an additional $O(n)$ time.

    Therefore, the total time complexity is $O(3n)$, which simplifies to $O(n)$.

* Space complexity: $O(1)$

    We use a few variables and pointers that use constant extra space. Since we don't use any data structures that grow with input size, the space complexity remains $O(1)$.

---