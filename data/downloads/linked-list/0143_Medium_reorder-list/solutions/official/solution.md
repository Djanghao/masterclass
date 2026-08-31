# Official Solution

**Link:** [https://leetcode.com/problems/reorder-list/solution/](https://leetcode.com/problems/reorder-list/solution/)

---

[TOC]

## Solution

---

### Solution Bricks

This problem is a combination of these three easy problems:

- [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list).

- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list).

- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists).

<br /> 
<br />


---
### Approach 1: Reverse the Second Part of the List and Merge Two Sorted Lists

**Overview**

- Find a middle node of the linked list. 
If there are two middle nodes, return the second middle node.
Example: for the list `1->2->3->4->5->6`, the middle element is `4`.

- Once a middle node has been found, reverse the second part of the list.
Example: convert `1->2->3->4->5->6` into `1->2->3->4` and `6->5->4`.

- Now merge the two sorted lists.
Example: merge `1->2->3->4` and `6->5->4` into `1->6->2->5->3->4`.

![append](../Figures/143/overview.png)

Now let's check each algorithm part in more detail.

**Find a Middle Node**

Let's use two pointers, `slow` and `fast`. While the slow pointer moves one step forward `slow = slow.next`, the fast pointer moves two steps forward `fast = fast.next.next`, _i.e._ `fast` traverses twice as fast as `slow`. When the fast pointer reaches the end of the list, the slow pointer should be in the middle.

![append](../Figures/143/slow_fast.png)

<iframe src="https://leetcode.com/playground/VzpjE7Du/shared" frameBorder="0" width="100%" height="174" name="VzpjE7Du"></iframe>

**Reverse the Second Part of the List**

Let's traverse the list starting from the middle node `slow` and its virtual predecessor `None`. For each current node, save its neighbors: the previous node `prev` and the next node `tmp = curr.next`.

While you're moving along the list, change the node's next pointer to point to the previous node: `curr.next = prev`, and shift the current node to the right for the next iteration: `prev = curr`, `curr = tmp`. 
 
![append](../Figures/143/reverse2.png)

<iframe src="https://leetcode.com/playground/G55RcLqX/shared" frameBorder="0" width="100%" height="242" name="G55RcLqX"></iframe>

There is a more elegant way to do it in Python:

<iframe src="https://leetcode.com/playground/CHbAGCRy/shared" frameBorder="0" width="100%" height="157" name="CHbAGCRy"></iframe>

**Merge Two Sorted Lists**

This algorithm is similar to the one for list reversal.

Let's pick the first node of each list - first and second, and save their successors. While you're traversing the list, set the first node's next pointer to point to the second node, and the second node's next pointer to point to the successor of the first node. For this iteration, the job is done, and for the next iteration, move to the previously saved nodes' successors.   

![append](../Figures/143/first_second.png)

<iframe src="https://leetcode.com/playground/NPoVdXP6/shared" frameBorder="0" width="100%" height="259" name="NPoVdXP6"></iframe>

Once again, there is a way to make things simple in Python

<iframe src="https://leetcode.com/playground/TJUJoyL2/shared" frameBorder="0" width="100%" height="157" name="TJUJoyL2"></iframe>

**Implementation**

Now it's time to put all the pieces together.

<iframe src="https://leetcode.com/playground/LUpSJdKy/shared" frameBorder="0" width="100%" height="500" name="LUpSJdKy"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$. There are three steps here. To identify the middle node takes $$\mathcal{O}(N)$$ time. To reverse the second part of the list, one needs $$N/2$$ operations. The final step, to merge two lists, requires $$N/2$$ operations as well. In total, that results in $$\mathcal{O}(N)$$ time complexity. 

* Space complexity: $$\mathcal{O}(1)$$, since we do not allocate any additional data structures.
  
<br /> 
<br />