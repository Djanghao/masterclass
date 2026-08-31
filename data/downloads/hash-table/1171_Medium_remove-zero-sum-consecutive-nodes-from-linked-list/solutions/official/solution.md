# Official Solution

**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solution/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solution/)

---

[TOC]

## Solution

---

### Overview

The task is to delete consecutive sequences of nodes that sum to zero from the given linked list.

If all of the nodes in a given consecutive sequence are negative, or they are all positive, there is not a zero-sum consecutive sequence. If a consecutive sequence of nodes has mixed signs, as in both positive and negative values, there may be a zero-sum consecutive sequence.

One case of nodes that sum to zero is additive inverses, or opposites, such as `-3 ⟶ 3`. Other consecutive sequences that sum to zero may have multiple nodes such as `1 ⟶ -3 ⟶ 2`.

We can break this problem up into two main tasks: 

1. Identifying consecutive sequences of zero-sum nodes.
2. Removing those consecutive sequences.

---

### Approach 1: Prefix Sum for Each Consecutive Sequence

#### Intuition

We may need to remove the `head` of the given linked list if it is part of a sequence of zero-sum consecutive nodes. We will save a ListNode `front` with any arbitrary value whose `next` field points to `head`. If `head` is deleted, `front.next` will be updated to the next remaining node, so we still have a reference to the front of the final linked list.

**1. How do we identify consecutive sequences of zero-sum nodes?**

Problems that require sequences of elements to meet certain criteria are often efficiently solved with [prefix sum](https://leetcode.com/tag/prefix-sum/). A prefix sum is the sum of prefixes, or running total, of the input sequence. 

> **Prefix Sum Example**
>
> Linked List: `1 ⟶ 4 ⟶ -3`    
> - The prefix sum of node `1` is $1$. 
> - The prefix sum of node `4` is $1 + 4 = 5$. 
> - The prefix sum of node `-3` is $1 + 4 - 3 = 2$. 
>

We can calculate the prefix sum for every sequence of consecutive nodes. We loop through nodes in the linked list with `start`, which is the node before the start of each sequence, and `end`, which is the end of each sequence. We calculate the prefix sum of the nodes between `start` (exclusive) and `end` (inclusive). 

![Example A1](../Figures/1171/1171ExampleA1.png)

When the prefix sum of the last element in a consecutive sequence is `0`, we know we need to remove nodes. In this case, the consecutive zero-sum sequence is `3 ⟶ -3`, so we need to remove those nodes. The remaining list should be `1 ⟶ 4 ⟶ 5 ⟶ 6`.

**2. How do we delete the consecutive zero-sum nodes?**

To delete the nodes, we need to add a connection from node `4` to node `5`, which will skip the zero-sum nodes in the linked list.

![Example A2](../Figures/1171/1171ExampleA2.png)

When we encounter a prefix sum of `0`, we can "delete" the zero-sum consecutive sequence by setting `start.next` to `end.next`.

#### Algorithm

1. Initialize a new ListNode `front` with the value `0` whose `next` field points to `head` and a node `start` to `front`.

2. Process all of the nodes in the linked list, while `start != null`:

    - Initialize a variable `prefixSum` to `0` and a ListNode `end` to `start.next`.

    - Process the rest of the nodes in the linked list, while `end != null`:
    
        - Add `end`'s value to `prefixSum`.

        - If `prefixSum` equals `0`, make a connection from `start` to the last node after the zero-sum consecutive sequence by setting `start.next` to `end.next`

        - Set `end` to `end.next`.

    - Set `start` to `start.next`.

3. Return `front.next`. The `front` points to the head of the final linked list.


#### Implementation

<iframe src="https://leetcode.com/playground/7M3XSFku/shared" frameBorder="0" width="100%" height="497" name="7M3XSFku"></iframe>

#### Complexity Analysis

Let $n$ be the length of the original linked list.

* Time complexity: $O(n^2)$

    We use nested `while` loops to process the list. The outer while loop will run $n$ times since there are $n$ nodes in the list. With each iteration of the outer while loop, there will be one fewer node remaining in the linked list. 
    
    The inner while loop will run $n$ times then, $n - 1$ times, then $n -2$, etc. until the $n^{th}$ iteration of the outer while loop, where the inner while loop will run $1$ time. The total number of times the inner while loop runs is the sum $n + (n - 1) + (n - 2) + \dots + (n - (n - 1))$. This can be calculated by the formula $\frac{n(n + 1)}{2}$, which we can simplify to $O(n^2)$.

* Space complexity: $O(1)$

    We use a handful of variables and no extra space that grows with input size, so the space complexity is constant, i.e. $O(1)$.

---

### Approach 2: Prefix Sum Hash Table

#### Intuition

We will use a dummy node `front` similar to the above approach.

**1. How do we identify consecutive sequences of zero-sum nodes?**

The above approach has a quadratic time complexity, which is not very efficient. We need a way to identify consecutive sequences of zero-sum nodes without calculating the prefix sum for every possible consecutive sequence. Let's look at an example of the prefix sum of each node from the front of the linked list.

![prefix_sum Example A3](../Figures/1171/1171ExampleA3.png)

How can we use the prefix sum to determine zero-sum consecutive sequences? Let's examine the above example to determine what patterns we notice in the prefix sum when there is a zero-sum consecutive sequence. One pattern we notice is that the prefix sum increases when the node has a positive value, and decreases when the node has a negative value. 

The zero-sum consecutive sequence in the example is `3 ⟶ -3`. What do we notice about the prefix sum? The prefix sum at the end of this consecutive sequence, $5$, is the same as the prefix sum before the sequence.

This makes sense; a zero-sum consecutive sequence will have a prefix sum of zero. The prefix sum before and at the end of the sequence will be the same. When we encounter a prefix sum that we have seen before, we have discovered a zero-sum consecutive sequence.

> The crucial insight is that the prefix sum from the `front` node to node `A` will be equal to the sum from the `front` node to node `B` if and only if the sum from node `A.next` to node `B` is `0`.

To determine when to remove nodes, we need to be able to store and reference the prefix sums found so far. A [hash table](https://leetcode.com/explore/learn/card/hash-table/) is an efficient way to do this. 

We will use a hash table to store the prefix sum. The key will be the prefix sum, and the value will be the node that has that prefix sum. 

We will process the linked list, calculating the prefix sum for each node, `current`, and saving it in the hash table `prefixSumToNode`.

**2. How do we remove the consecutive zero-sum nodes?**

Let's look at this example:  

![Example B1](../Figures/1171/1171ExampleB1.png)

When we encounter a prefix sum we have seen before, we know we need to remove nodes. In this case, we need to remove nodes `-3`, `1`, and `2`. The remaining list should be `1 ⟶ 4 ⟶ 5 ⟶ 6`.

To delete the nodes, we need to add a connection from node `4` to node `5`, which will skip the zero-sum nodes in the linked list. In the example, node `4` is A, and node 2 is `B`.

Let's start by making our hash table.

!?!../Documents/1171/1171_slideshow.json: 960,540!?!

Notice that there is only one entry for the prefix sum 5. First, the corresponding node is node 4, then it is node 2. A duplicate prefix sum means there is a zero-sum consecutive sequence. Recall that the hash table does not store duplicate keys, so only the last occurrence of a given prefix sum is stored in the hash table. This is node `B`. All nodes between the first occurrence of a prefix sum through node `B` need to be deleted because they are part of a zero-sum consecutive sequence.
 
To find the first occurrence of a prefix sum, we can traverse through the linked list again, recalculating the prefix sums. 

![Example B2](../Figures/1171/1171ExampleB2.png)

We can connect `A`, the last node before the zero-sum consecutive sequence, to `B.next`, the first node after. This will eliminate the zero-sum nodes `A.next` through `B`.

We can find `B.next` with `prefixSumToNode[prefixSum].next`.

When there is no zero-sum consecutive sequence, `A` and `B` are essentially the same node. Hence, by assigning `A.next` to `B.next`, we aren't changing the linked list.

After removing zero-sum nodes, we return `front.next`. The `front` points to the head of the final linked list.

#### Algorithm

1. Initialization:

    - Initialize a new ListNode `front` with the value `0` whose `next` field points to `head` and a node `current` to `front`.

    - Initialize a variable `prefixSum` to `0` and a hashmap `prefixSumToNode`, which stores integer, ListNode pairs. The key is the prefix sum, and the value is the corresponding ListNode. Add `front` to the hashmap.

2. Process all of the nodes in the linked list, while `current != null`:

    - Add `current`'s value to `prefixSum`.

    - Add the prefix sum and node pair to the `prefixSumToNode` hashmap.

    - Set `current` to `current.next`.

3. Reset `prefixSum` to `0` and `current` to `front`.

4. Process all of the nodes in the linked list, while `current != null`:

    - Add `current`'s value to `prefixSum`.

    - Make a connection from `current` to the last node after the zero-sum consecutive sequence by setting `current.next` to `prefixSumToNode[prefixSum].next`.

    - Set `current` to `current.next`.

5. Return `front.next`. The `front` points to the head of the final linked list.

#### Implementation

<iframe src="https://leetcode.com/playground/8bqe42aa/shared" frameBorder="0" width="100%" height="500" name="8bqe42aa"></iframe>

The above implementation visited each node in the linked list twice. Can we form a one-pass solution? 

We can implement a solution using aspects of both previous solutions. Like the above approach, it uses a prefix sum hash table to identify consecutive zero-sum sequences, but like the first approach, it traverses the linked list with a nested while loop.
 
When we encounter a prefix sum we have seen before, we know we need to remove a sequence of consecutive zero-sum nodes. We can connect node `A`, the first node before the sequence, to `B.next`, the node after the zero-sum consecutive sequence. We need to delete the hash table entries of the nodes in the zero-sum sequence so we don't incorrectly delete any following nodes that have the same prefix sum as a node in this zero-sum consecutive sequence. We iterate through the nodes between `A` and `B`, removing each one from the hash table.

In this implementation, we do not necessarily visit every node twice, but we do visit nodes that are part of zero-sum consecutive sequences twice to delete them from the hash table. 

<iframe src="https://leetcode.com/playground/7cheg7sP/shared" frameBorder="0" width="100%" height="500" name="7cheg7sP"></iframe>

Although we use a nested while loop, the inner loop deletes nodes that are part of zero-sum sequences, and once a node is deleted, it will not be re-visited. We handle each node of the linked list *at most twice*, once to add it to the hash table and once to delete it. In the previous implementation, we were visiting each node *exactly twice*.

#### Complexity Analysis

Let $n$ be the length of the original linked list.

* Time complexity: $O(n)$

    We traverse through the linked list twice, once to calculate the prefix sums, and once to delete nodes, so the time complexity is $O(2n)$, which we can simplify to $O(n)$.


* Space complexity: $O(n)$

    We initialize the hash table `prefixSumToNode`, which is size $O(e)$ where $e$ is the number of distinct prefix sums calculated from in `nums`. At worst, when there are no zero-sum consecutive sequences, there can be $n$ distinct prefix sums, so the space complexity is $O(n)$.

---