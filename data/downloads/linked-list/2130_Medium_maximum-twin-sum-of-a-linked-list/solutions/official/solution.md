# Official Solution

**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solution/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solution/)

---

[TOC]

## Solution

---

### Overview

We are given the `head` of a linked list with even length.

The problem mentions that the $i^{th}$ node (0-indexed) of the linked list is known as the twin of the $(n - 1 - i)^{th}$ node, if `0 <= i <= (n / 2) - 1`.

Our task is to return the maximum sum of a node and its twin among all the node and twin pairs.

---

### Approach 1: Using List Of Integers

#### Intuition

We can see that the $i^{th}$ node from the start is the twin of the $i^{th}$ node from the end. The first node is the twin of the last node, the second node is the twin of the second last node, and so on. Because we are guaranteed an even number of nodes in the linked list, each node in the first half has a twin in the second half.

An intuitive solution is to iterate over the entire linked list and push the value of each node into a list of integers. The list of integers is then iterated over using two pointers, `i` and `j`. The pointer `i` points to the beginning of the list, while `j` points to the end.

To get the twin sum of the pair under consideration, we add the values indicated by the pointers. To get the next pair of twins, we increment `i` and decrement `j` and try to update the answer wherever we can with the twin sum. We repeat this process until we have covered all of the twin pairs, i.e., until `i >= j`.

#### Algorithm

1. Create a `ListNode` pointer `current`. Initialize it to `head`.
2. Create an empty list of integers `values` to store the node values in the given linked list.
3. Iterate while `current` is not `null`:
    - Push `current.val` into `values`.
    - Update `current` to `current.next`.
4. Create two integer variables `i = 0` and `j = values.size() - 1` that will help us to get all the twin sums.
5. Create an answer variable `maximumSum` to keep track of the maximum sum of a node and its twin. Initialize it to `0`.
6. While `i < j`:
    - Update `maximumSum` if the current twin sum is greater than the previous one, i.e., `maximumSum = max(maximumSum, values[i] + values[j])`.
    - Increment `i` by `1`.
    - Decrement `j` by `1`.
7. Return `maximumSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/g8iECWU6/shared" frameBorder="0" width="100%" height="429" name="g8iECWU6"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes in the linked list.

* Time complexity: $O(n)$

    - Iterating over the entire linked list and pushing all the node values in `values` takes $O(n)$ time.
    - We iterate over the first half of the linked list to find the maximum twin sum, which also takes $O(n)$ time.

* Space complexity: $O(n)$

    - The `values` list takes $O(n)$ space as we push $n$ elements into it.

---

### Approach 2: Using Stack

#### Intuition

As you may have guessed, we require a method to obtain the values of the nodes in the second half of the linked list in reverse order. Getting the values of the nodes is simple. We can do so by using `head`, which points to the first node in the list and then using `next` we can get all the next nodes, the same way we did in the previous approach.

We can use a stack to get the values of the second half nodes in reverse order. We iterate over the linked list, pushing all of the node values into the stack.

To compute the twin sums, we iterate from the beginning of the list with `head` and get the values of the nodes from the end using the stack. We find the first half nodes using `next` pointers and pop from the top of the stack to get the second half nodes.

#### Algorithm

1. Create a `ListNode` pointer `current`. Initialize it equal to `head`.
2. Initialize an integer stack `st` to store the node values in the given linked list.
3. Iterate while `current` is not `null`:
    - Push `current.val` into `st`.
    - Update `current` to `current.next`.
4. Update `current` to `head` to iterate the list again from the start.
5. To begin counting the number of twin pairs, create two integers `size = st.size()` and `count`. To cover all the twin pairs, we start counting from `1` and go until `st.size() / 2`.
6. Create an answer variable `maximumSum` to keep track of the maximum sum of a node and its twin. Initialize it to `0`.
7. While `count <= size/2`:
    - Update `maximumSum` if the current twin sum is greater than the previous one, i.e.,`maximumSum = max(maximumSum, current.val + st.top())`.
    - Update `current` to `current.next`.
    - Pop the top element out of the stack.
    - Increment `count` by 1.
8. Return `maximumSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/DUrt9BXr/shared" frameBorder="0" width="100%" height="463" name="DUrt9BXr"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes in the linked list.

* Time complexity: $O(n)$

    - Iterating over the linked list and pushing all the node values in `st` takes $O(n)$ time.
    - We iterate over the first half of the linked list to find the maximum twin sum, which also takes $O(n)$ time.

* Space complexity: $O(n)$

    - The `st` stack takes $O(n)$ space as we push $n$ elements into it.

---

### Approach 3: Reverse Second Half In Place

#### Intuition

Another method is to flip the second half of the linked list so that the last element points to the second last element, which points to the third last element, and so on until the middle element.

To reverse the second half of the linked list, we must first obtain the list's middle (from which the second half starts). To get to the middle of the list, we can use two pointers: `slow` and `fast`. We set their initial value to `head`.

We move `slow` to the next node after moving `fast` two nodes ahead. We perform this until `fast` or `fast.next` do not become `null`. Because `fast` moves at twice the speed of `slow`, we will have the required middle node at `slow`.

Reversing a linked list is a classic problem. We need three pointers: a) `nextNode`, to hold the next node so that when we reverse the `next` pointer of the previous node, we have access to the next node, b) `slow`, the node under consideration whose `next` must be set to the previous node, and c) `prev`, the previous node.

We first perform `nextNode = slow.next` so we can still reach the next node after modifying `slow.next`. Then we set the `next` pointer of `slow` to `prev`. 

To set up the variables for next iteration, we set `prev = slow` and `slow = nextNode`. We continue doing while till `slow` is not `null`.

Once we've reversed the second half of the list, `prev` will point to the first element of this reversed list. So we use `head` to iterate over the original list because the first half is unaffected, and `prev` to iterate over the reversed list. We add the corresponding node values, update the maximum twin sum with the current twin if possible, and then proceed to the next node in both lists.

Here's an example of how we reverse a linked list, with `prev` pointing to the first element of the reversed list at the end:

!?!../Documents/2130/2130-slides.json:601,301!?!

#### Algorithm

1. Create two `ListNode` pointers `slow` and `fast`. Initialize both of them to `head`.
2. To get the middle of the list, we move `fast` two steps ahead and `slow` one step ahead. We iterate until we can't move two steps ahead, i.e., while `fast` and `fast.next` are not `null`:
    - Update `fast` to two nodes ahead, i.e., `fast = fast.next.next`.
    - Update `slow` to `slow.next`.
3. The next step is to reverse the second half of the linked list. We create two pointers to `null`: `nextNode` and `prev` as mentioned above. While `slow` is not `null`, we do the following:
    - Update `nextNode` to `nextNode = slow.next`.
    - Set pointer of `slow` to `prev`.
    - Move `prev` to `slow`, as this will be the new previous node for the next iteration.
    - Move `slow` to `nextNode`, since `nextNode` is the node being considered for the next iteration.
4. Create an answer variable `maximumSum` to keep track of the maximum sum of a node and its twin. Initialize it to `0`.
5. Create another `ListNode` pointer `start = head` to iterate from the start of the linked list.
6. To obtain twin sums, we use the corresponding nodes of the given linked list and the reversed linked list. We iterate until we cover either of the lists, i.e., until `prev` is not `null`:
    - Update `maximumSum` if the current twin sum is greater than the previous one, i.e.,`maximumSum = max(maximumSum, start.val + prev.val)`.
    - Update `prev` to `prev.next` and `start` to `start.next`.
7. Return `maximumSum`.

#### Implementation

<iframe src="https://leetcode.com/playground/bZ2pqmLp/shared" frameBorder="0" width="100%" height="500" name="bZ2pqmLp"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes in the linked list.

* Time complexity: $O(n)$

    - It takes $O(n)$ time to iterate over the linked list to find the middle and then reverse the second half of the linked list.
    - We iterate over the half of the linked list to find the maximum twin sum, which also takes $O(n)$ time.

* Space complexity: $O(1)$

    - Except for a few pointers that take up constant space, we don't take up any space.