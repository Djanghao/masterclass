# Official Solution

**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solution/](https://leetcode.com/problems/split-linked-list-in-parts/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a linked list `head` and an integer `k`. We want to split `head` evenly into `k` equally sized parts and return an array of the `k` parts. If `head` cannot be split evenly, the sizes of the `k` parts can differ by at most 1, with the larger parts appearing before the smaller ones.

### Approach 1: Create New Parts

### Intuition

We can split the linked list into `k` parts by considering two scenarios: when the list can be split evenly and when it cannot.

- **Even Split**: If the list's size `size` is divisible by `k`, each part will have exactly `size / k` nodes.
- **Uneven Split**: If `size` is not divisible by `k`, a remainder of `size % k` nodes will remain after dividing `size / k` nodes among the parts. To handle this, we add one extra node to the first `size % k` parts, making their size `size / k + 1`. The rest of the parts will have `size / k` nodes.

In short, each part will have at least `size / k` nodes. If the list doesn't split evenly, the first `size % k` parts will have one extra node.

To create these parts, we determine each part's size `currentSize`, then use a pointer to traverse the list. We visit the next `currentSize` nodes for each part and build a new linked list. Once the nodes for that part are processed, we assign the new list to the corresponding element in our array. We repeat this process for all `k` parts.

### Algorithm

1. Initialize `ans` array to store the `k` parts.
2. Initialize `size = 0` and pointer `current = head`. 
3. Iterate through `head` via `current` and increment `size` at each step to find the total size of `head`.
4. Now that `size` has the total size of the linked list, we can calculate the minimum size for the `k` parts: `splitSize = size / k`.
5. We can also calculate how many remaining nodes we have: `numRemainingParts = size % k`. 
6. Reset `current` back to `head` so we can iterate through the linked list again to create our `k` parts.
7. For `i` where `0 < i < k`:
    * Initialize the head of the new part `newPart` to a dummy node and initialize a new pointer `tail` to keep track of the end of `newPart` for efficient appending
    * Calculate the current size `currentSize` of the current part:
        * Initialize `currentSize = splitSize`
        * If there are any remaining parts (`numRemainingParts > 0`), then increment `currentSize` and decrement `numRemainingParts` to assign the remaining nodes to the first `size % k` parts
    * Initialize a counter `j = 0`.
    * While `j < currentSize`:
        * Copy the current node and append it to `newPart` by performing `tail.next = new ListNode(current.val)`.
        * Advance `tail` since a new node just got added to the end
        * Advance `current` to move on to the next node
        * Increment `j`
    * Now that `newPart` is fully built, we can assign it in our array: `ans[i] = newPart.next`
8. Return `ans`

### Implementation

<iframe src="https://leetcode.com/playground/S29dXQKK/shared" frameBorder="0" width="100%" height="500" name="S29dXQKK"></iframe>

### Complexity Analysis 

Let $N$ be the size of the linked list `head.`

* Time Complexity: $O(N)$

    We traverse the entire linked list `head` twice, where each time takes $O(N)$ time. Thus, the total time complexity is $O(N)$.

* Space Complexity: $O(N)$

    There are $N$ new nodes created. This results in a space complexity of $O(N)$. We ignore the $O(K)$ space needed for `ans` since the array is required for the question. 

### Approach 2: Modify Linked List

### Intuition

In the previous approach, we required extra space because we created new nodes for the `k` parts, resulting in a space complexity of $O(N)$. In our second approach, we can modify the input linked list `head` to form the `k` parts directly, eliminating the need for extra space and reducing the space complexity to $O(1)$.

As before, we iterate through the linked list, processing the next `currentSize` nodes for each part. However, this time, when we reach the last node of a part, we set its `next` field to `null`, effectively dividing the linked list in place without creating new nodes.

> Before presenting this approach to the interviewer, check if modifications are allowed. Some interviewers permit changes, while others do not.

### Algorithm 

1. Repeat steps 1-6 from Approach 1 to calculate the total size of the linked list, as well as the minimum size of the `k` parts and the number of remainder nodes.
2. Initialize a pointer `prev = current` to keep track of the node preceding `current`
3. For `i` where `0 < i < k`:
    * Initialize `newPart` to `current`, which will be the head of part `i`.
    * Calculate the current size `currentSize` of the current part using the same logic in Approach 1
    * Initialize a counter `j = 0`.
    * While `j < currentSize`:
        * Update `prev` to `current`
        * Advance `current` to next node
        * Increment `j`
    * Now, `prev` is pointing to the last node of part `i`, and `current` is pointing to the head of part `i+1`. To cut off the rest of the linked list for part `i`, we reassign `prev.next` to null.
    * Set `ans[i] = newPart`.
4. Return `ans`

### Implementation

<iframe src="https://leetcode.com/playground/69vsAB8a/shared" frameBorder="0" width="100%" height="500" name="69vsAB8a"></iframe>

### Complexity Analysis

Let $N$ be the size of the linked list `head.`

* Time Complexity: $O(N)$

    `head` is traversed twice, which takes $O(N)$ time.

* Space Complexity: $O(1)$

    In contrast to Approach 1, no new nodes are created and the input is modified to create `k` parts. Thus, the space complexity is a constant $O(1)$.