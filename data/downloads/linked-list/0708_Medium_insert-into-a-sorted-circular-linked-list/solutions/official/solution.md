# Official Solution

**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solution/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solution/)

---

[TOC]

## Solution

---
### Approach 1: Two-Pointers Iteration

**Intuition**

As simple as the problem might seem to be, it is actually not trivial to write a solution that covers all cases. 

>Often the case for the problems with linked list, one could apply the approach of **Two-Pointers Iteration**, where one uses two pointers as surrogate to traverse the linked list.

One of reasons of having two pointers rather than one is that in singly-linked list one does not have a reference to the precedent node, therefore we keep an additional pointer which points to the precedent node.

>For this problem, we iterate through the cyclic list using two pointers, namely `prev` and `curr`. When we find a suitable place to insert the new value, we insert it between the `prev` and `curr` nodes. 

![pic](../Figures/708/708_two_pointers.png)


**Algorithm**

First of all, let us define the skeleton of two-pointers iteration algorithm as follows:

- As we mentioned in the intuition, we *loop over* the linked list with two pointers (_i.e._ `prev` and `curr`) step by step. The termination condition of the loop is that we get back to the starting point of the two pointers (_i.e._ `prev == head`) 

- During the loop, at each step, we check if the current place bounded by the two pointers is the right place to insert the new value.

- If not, we move both pointers one step forwards.

Now, the tricky part of this problem is to sort out different cases that our algorithm should deal with within the loop, and then design a *concise* logic to handle them sound and properly. Here we break it down into _three_ general cases.

>**Case 1).** The value of new node sits between the minimal and maximal values of the current list. As a result, it should be inserted within the list.

![pic](../Figures/708/708_case_1.png)

As we can see from the above example, the new value (`6`) sits between the minimal and maximal values of the list (_i.e._ `1` and `9`). No matter where we start from (in this example we start from the node `{3}`), the new node would end up being inserted between the nodes `{5}` and `{7}`.

_The condition is to find the place that meets the constraint of `{prev.val <= insertVal <= curr.val}`._

>**Case 2).** The value of new node goes beyond the minimal and maximal values of the current list, either less than the minimal value or greater than the maximal value. In either case, the new node should be added right after the _tail_ node (_i.e._ the node with the maximal value of the list).

Here are the examples with the same input list as in the previous example.

![pic](../Figures/708/708_case_2_1.png)

![pic](../Figures/708/708_case_2_2.png)

Firstly, we should locate the position of the **tail** node, by finding a descending order between the adjacent, _i.e._ the condition of `{prev.val > curr.val}`, since the nodes are sorted in ascending order, the tail node would have the greatest value of all nodes.

Furthermore, we check if the new value goes beyond the values of tail and head nodes, which are pointed by the `prev` and `curr` pointers respectively.

The Case 2.1 corresponds to the condition where the value to be inserted is _greater than or equal to_ the one of tail node, _i.e._ `{insertVal >= prev.val}`.

The Case 2.2 corresponds to the condition where the value to be inserted is _less than or equal to_ the head node, _i.e._ `{insertVal <= curr.val}`. 

Once we locate the tail and head nodes, we basically **_extend_** the original list by inserting the value in between the tail and head nodes, _i.e._ in between the `prev` and `curr` pointers, the same operation as in the Case 1.

>Case 3). Finally, there is one case that does not fall into any of the above two cases. This is the case where the list contains uniform values.

Though not explicitly stated in the problem description, our sorted list can contain some duplicate values. And in the extreme case, the entire list has only one single unique value.

![pic](../Figures/708/708_case_3.png)

In this case, we would end up looping through the list and getting back to the starting point.

_The followup action is just to add the new node after any node in the list, regardless the value to be inserted._ Since we are back to the starting point, we might as well add the new node right after the starting point (our entrance node).

Note that, we cannot skip the iteration though, since we have to iterate through the list to determine if our list contains a single unique value.

>The above three cases cover the scenarios within and after our iteration loop. There is however one minor **corner** case we still need to deal with, where we have an **empty** list. This, we could easily handle before the loop.

<iframe src="https://leetcode.com/playground/hBvAqQWf/shared" frameBorder="0" width="100%" height="500" name="hBvAqQWf"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the size of list. In the worst case, we would iterate through the entire list.

- Space Complexity: $$\mathcal{O}(1)$$. It is a constant space solution.
<br/>
<br/>