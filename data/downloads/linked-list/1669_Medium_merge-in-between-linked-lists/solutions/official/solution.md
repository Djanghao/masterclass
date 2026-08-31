# Official Solution

**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solution/](https://leetcode.com/problems/merge-in-between-linked-lists/solution/)

---

[TOC]

## Solution

---

### Overview

The task is to replace the section of `list1` from the <code class="">a<sup>th</sup></code> node to the <code class="">b<sup>th</sup></code> node with `list2`. Note that `a` and `b` refer to the node's indices (0-indexed), not their values. 

The resultant linked list will have this format:

[`list1` from index `0` to `a - 1`] ⟶ [`list2`] ⟶ [`list1` index `b + 1` to `tail`]

---

### Approach 1: Merge Values in Array

#### Intuition

The linked list is 0-indexed, and we need to merge the linked lists based on their indices. We can traverse the linked lists, and use an array `mergeArray` to store the nodes' values in the correct order. 

> The `ListNode` implementation does not store the length of the linked list, so we cannot compute the required length of the `mergeArray`. We use a dynamic array implementation so we can add values as necessary. 

After adding the values to the array, we will build a new linked list using the values stored in the array.

First, we add the node values of `list1` before index `a` to the array.

Next, we add the node values of `list2` to the array.

Then, we add the node values of `list1` after index `b` to the array.

Finally, we iterate through the array, creating a new node for each value and adding it to the result linked list, which we return.

#### Algorithm

1. Initialize an array,  `mergeArray`.
2. Add `list1` node values from index `0` to `a - 1` to the array:
    - Initialize a variable `index` to `0` and a ListNode `current1` to `list1`.
    - While `index` is less than `a`, add `current1.val` to the `mergeArray`, set `current1` to `current1.next`, and increment `index`.
3. Add `list2` node values to the array:
    - Initialize a ListNode `current2` to `list2`.
    - While `current2` is not `null`, add `current2.val` to the `mergeArray` and set `current2` to `current2.next`.
4. Find the node at index `b + 1`. 
    - While `index` is less than `b + 1`, set `current1` to `current1.next`, and increment `index`.
5. Add `list1` node values from index `b + 1` to tail to the array. 
    - While `current1` is not `null`, add `current1.val` to the `mergeArray` and set `current1` to `current1.next`.
6. Build a new linked list by traversing the `mergeArray` in a reverse manner:
    - Initialize a ListNode `resultList` with `null`.
    - For each value in `mergeArray`, create a new node `newNode` with the value and set the `next` field to `resultList`. Then set `resultList` to `newnode`. This adds the new node to the front of `resultList`.
7. Return `resultList`, the front of the new linked list.

The algorithm is visualized below:

!?!../Documents/1669/1669_slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/LiRKLphS/shared" frameBorder="0" width="100%" height="500" name="LiRKLphS"></iframe>

#### Complexity Analysis

Let $n$ be the length of `list1` and $m$ be the length of `list2`.

* Time complexity: $O(n + m)$

    The algorithm traverses `list1` and `list2` to add the nodes to the array, taking $n + m$ computational steps.
    
    Then, the array is traversed once to create the resulting linked list. The size of the array will be at most $n + m$. 
    
    Therefore, the time complexity is $O(n + m)$. 

* Space complexity: $O(n + m)$

    We use `mergeArray`, which can contain the values of `list1` and `list2`. It can have at most $n + m$ elements. Therefore, the space complexity is $O(n + m)$. 

---

### Approach 2: Two Pointer

#### Intuition

The above approach used extra space to solve the problem. Because of the nature of linked lists, we can meet our goal by changing the pointers, which allows us to solve the problem with limited extra space.

The below image shows how to replace index `a` through `b` of `list1` with `list2` by modifying pointers with the following input:

**Input:** list1 = [1,1,1,1,1,1,1], a = 3, b = 4, list2 = [2,2,2]

![Example](../Figures/1669/image1.png)

The `next` of the node at index `a - 1` of `list1` points to the head of `list2`.    
The `next` of the tail of `list2` points to the node at index `b + 1` of `list1`.

To solve the problem, we will need to complete the following two steps:

**Step 1**    
- Find the node at index `a - 1` of `list1`, which we will call `start`.
- Set `start.next` to `list2`.

**Step 2**    
- Find the node at (original) index `b` of `list1`, which we will call `end`.
- Set the `next` of the tail of `list2` to `end.next`.

We can find the `start` node and the `end` node using a for loop with the iterator `index` where `index` is the index of the current node.

We traverse `list1` with the pointer `end`, which starts at the head of `list1` and is progressed using `end = end.next` until `end` points to the node at index `b` of `list1`. Inside the loop, we set `start` to `end` if `index = a - 1`.

After the loop, we set `start.next` to `list2`, then traverse `list2` until we find its tail. 

Next, we set the `next` of "tail of `list2`" to `end.next`. Moreover, we set `end.next` to `null` so there aren't multiple pointers to the node at (original) index `b + 1`. 

Finally, we return `list1`.

> **Note:** This approach modifies the input. The problem statement implies that the lists can be modified as they are merged.
>
> **Interview Tip: In-place Algorithms**
>
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems.
>
> Here are a couple of situations where an in-place algorithm might not be suitable.
>
> 1. The algorithm needs to run in a multi-threaded environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
>
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

#### Algorithm

1. Initialize two ListNodes, `start` to `null` and `end` to `list1`.
2. Find the nodes at index `a - 1` and `b` of `list1`. Traverse through `list1` using a `for` loop with the iterator `index` from `0` to `b - 1`:
    - If `index` equals `a - 1` set `start` to `end`.
    - Progress to the next node in `list1`  by setting `end` to `end.next`.
3. Set `start.next` to `list2`.
4. Find the tail of `list2` by traversing the list with `list2 = list2.next` until the last node is reached.
5. Set `list2.next` to `end.next` and set `end.next` to `null`. Note that the order of the statements is important.
6. Return `list1`, which points to the head of the resultant linked list.

The algorithm is visualized below:

!?!../Documents/1669/1669_slideshow2.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/4MXf743C/shared" frameBorder="0" width="100%" height="500" name="4MXf743C"></iframe>

**Note:** Setting `end.next` to `null` is not necessary to solve this problem, but is a good practice to prevent unpredictable behavior. This way, modifications made to the removed nodes won't affect the result linked list.

<details>

<summary>Click to see Recursive Implementation</summary>

<p>

We start by defining a recursive function, `findTail`, that takes a linked list as a parameter and returns the tail of that linked list.

Then we define a recursive function, `merge`, which takes all the same parameters as `mergeInBetween`, plus an integer `index` and two pointers `start` and `end`. This function works very similarly to the above implementation. If `index` is `a - 1`, we set `start` to `end`. The base case is when `index` is `b`: we connect the `start` node to `list2`; find the tail of `list2` and set it to `end.next`; and return `list1` as the merged list. Otherwise, the function recursively calls itself, with `index + 1` and `end.next`.

<iframe src="https://leetcode.com/playground/ZyiNF2fi/shared" frameBorder="0" width="100%" height="500" name="ZyiNF2fi"></iframe>
 
Both functions in the recursive implementation use tail recursion, which is an optimization technique used in functional programming to avoid the use of explicit loops and improve performance.

In a recursive function, each recursive call creates a new stack frame, which can lead to a stack overflow if the function is called too many times. Tail recursion reduces this problem by reusing the current stack frame instead of creating a new one. Functions that use tail recursion have the following properties: the last statement of the function is a recursive call, and the function has a base case that can be reached by the recursive call. The base case is used to stop the recursion and return a value.

> Note: The recursive implementation shown here illustrates how an algorithm can be implemented both iteratively and recursively. While the recursion-based solution is valid, the iterative implementation remains the most intuitive and optimized solution.

$\downarrow_{\text{Section after Recursive Implementation}}$

</p>

</details> 

#### Complexity Analysis

Let $n$ be the length of `list1` and $m$ be the length of `list2`.

* Time complexity: $O(n + m)$

    The algorithm traverses `list1` once to find the nodes `start` and `end`. Note that `list1` is not fully traversed for every input, but in the worst case, we may need to traverse at most $n$ nodes. `list2` is traversed once to find its tail. The other operations all take constant time. 
    
    Therefore, the time complexity is $O(n + m)$. 
    
    The recursive implementation has the same time complexity as the iterative implementation.

* Space complexity: $O(1)$

    We use a few variables and pointers, including `index`, `start`, and `end`, which use constant extra space. We don't use any data structures that grow with input size, so the space complexity of the iterative implementation is $O(1)$. 
    
    The recursive implementation may use up to $O(n + m)$ space for the recursive call stack, though this space may be reduced through the use of tail recursion, depending on the implementation language.

---