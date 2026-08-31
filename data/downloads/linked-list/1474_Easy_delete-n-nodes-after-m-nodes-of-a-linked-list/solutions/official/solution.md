# Official Solution

**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solution/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solution/)

---

[TOC]

## Solution

---
### Overview

The problem is pretty straightforward. Given a singly linked list, we must traverse the linked list and delete $$m$$ nodes after every $$n$$ nodes. The list is a singly linked list, hence we must traverse the list nodes one by one, iterate over the first $$m$$ nodes followed by deleting $$n$$ nodes and continue the process until the entire list is traversed. Unlike arrays, linked lists are not stored as contiguous memory locations. Hence, the deletion of nodes can be done easily in-place by just changing the list node pointers.

Let's look at the algorithm in detail.

---

### Approach 1: Traverse Linked List and Delete In Place

**Intuition**

The singly linked list can be traversed linearly starting from the head node.
As we must delete $$n$$ nodes after every $$m$$ nodes, we must traverse the first $$m$$ nodes, store the $$m^{th}$$ node and then delete the next $$n$$ nodes. To delete the $$n$$ nodes, we must make the $$m^{th}$$ node point to the node next to the $$n^{th}$$ node.


**Algorithm**

1) Initialize the `currentNode` to the `head` of the linked list. `currentNode` is the pointer that will be used to traverse each node of the linked list linearly.

2) Iteratively delete $$n$$ nodes after $$m$$ node and continue until we reach the end of list.

    - Start by iterating $$m$$ nodes. As `currentNode` iterates over each node, we maintain a pointer `lastMNode` that points to the predecessor of `currentNode`. After $$m$$ iterations, the `lastMNode` points to the $$m^{th}$$ node.
    - Now, continue iterating over $$n$$ nodes. After $$n$$ iterations, we must delete nodes between `lastMNode` and `currentNode`
    - To delete $$n$$ nodes, we could simply modify the next pointer of `lastMNode` to point to the `currentNode`.

The algorithm can be illustrated with the following example

![img](../Figures/1474/delete_n_nodes_after_m.png)

**Implementation**

<iframe src="https://leetcode.com/playground/nGu4njP6/shared" frameBorder="0" width="100%" height="480" name="nGu4njP6"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(N)$$. Here, N is the length of the linked list pointed by `head`. We traverse over the linked list only once.
* Space Complexity: $$\mathcal{O}(1)$$. We use constant extra space to store pointers like `lastMNode` and `currentNode`.