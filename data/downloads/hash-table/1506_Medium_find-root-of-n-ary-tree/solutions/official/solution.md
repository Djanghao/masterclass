# Official Solution

**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solution/](https://leetcode.com/problems/find-root-of-n-ary-tree/solution/)

---

[TOC]

## Solution

---
### Approach 1: Déjà-Vu (_O(N)_ Space)

**Intuition**

We are given a list of shuffled nodes from a N-ary tree.
And we are asked to find the root node, which would be located anywhere in the list.

Given a node, we can obtain references to the child nodes.
However, we do not have the reference to its parent node.

>One **characteristic** that distinguishes a root node from rest of the nodes, 
is that the root node does not have any parent node, _i.e._ the in-degree of the root node is zero, if we view the tree as a graph.

Based on the above insight, we could rephrase the problem as follows:
>Given a list of nodes, we are asked to find the node with **_in-degree_** of zero.

![graph](../Figures/1506/1506_graph_indegree.png)

To accomplish the above task, one of the most intuitive approaches would be that we _traverse_ each element in the list and for each element we visit each of its child nodes.

Any node that is __seen__ as a child node would have an in-degree of one, hence it cannot be the root node.

>In other words, if we visit all the nodes and all the _child nodes_, then the root node would be the only node that we would not be seen as a child node.

**Algorithm**

Given the above intuition, there are several ways to implement the idea.

Here we give one approach which has a space complexity of $$\mathcal{O}(N)$$ (where $$N$$ is the length of the input list).

We can use a Hashset (named as `seen`) to keep track of all the **child** nodes that we visit, then at the end the root would not be in this set.
We could find out the root node with __two iterations__ as follows:

- As the first iteration, we traverse the elements in the input list.
For each element, we put its child nodes into the hashset `seen`.
Since the value of each node is unique, we could either put the node itself or simply its value into the hashset.

- Then, we visit the list once again. 
This time, we have all the child nodes in the hashset.
Once we come across any node that is **NOT** in the hashset, then this is the root node that we are looking for.


<iframe src="https://leetcode.com/playground/bQmbxY67/shared" frameBorder="0" width="100%" height="446" name="bQmbxY67"></iframe>



**Complexity Analysis**

Let $$N$$ be the length of the input list, which is also the number of nodes in the N-ary tree.

- Time Complexity: $$\mathcal{O}(N)$$

    - In the first iteration, we visit each node as well as its child nodes.
    For the non-root node, it would be visited twice exactly.
    While for the root node, it would be visited exactly once.
    Therefore, the time complexity for this part is $$\mathcal{O}(N + N - 1) = \mathcal{O}(N)$$.

    - As to the second iteration, in the worst case, we would run through the entire list to find the root node.
    Hence the time complexity for this part is $$\mathcal{O}(N)$$.

    - To sum up, the overall time complexity of the algorithm is $$\mathcal{O}(N) + \mathcal{O}(N) = \mathcal{O}(N)$$.


- Space Complexity: $$\mathcal{O}(N)$$

    - We used a hashset to keep track of all the child nodes.
    Therefore, the number of elements contained in the set would be $$(N-1)$$ exactly.

    - As a result, the space complexity of the algorithm is $$\mathcal{O}(N)$$.


---
### Approach 2: YOLO (You Only Look Once)

**Intuition**

As a follow-up question, we are asked to solve the problem in **constant** space complexity and linear time complexity.

We have achieved the linear time complexity in the above approach but with a linear space complexity.

So now the question is how we can reduce the *space complexity* from linear to constant.

Actually, we could build upon the insight from the above approach, as follows:
>If we visit all the nodes and all the _child nodes_, then the root node would be the only node that we visit **once and once only**.
The rest of the nodes would be visited **twice**.

Based on the above insight, we could transform the problem into an equivalent problem as follows:
>Given a list of numbers where some of the numbers appear twice, we are asked to find the number that appear only once.

![list with duplicates](../Figures/1506/1506_list_with_duplicates.png)

Each number corresponds to the value of a node.
Each appearance of the number corresponds to a visit of the node.
The value of root value appears once while the values of other nodes appear twice.

**Algorithm**

Again, there are several approaches to implement the above idea.
Here we present a solution with the operations of addition and deduction.
One could replace the addition and deduction operations with the `XOR` operation, as one will see later.

>The idea is that we use an integer (`value_sum`) to keep track of the sum of node values.
More specifically, we add the value of each node to `value_sum` and we deduct the value of each _child node_ from the `value_sum`.
At the end, the `value_sum` would be the value of the root node.

The rational is that the values of non-root nodes are __cancelled out__ during the above addition and deduction operations, _i.e._ the value of a non-root node is added once as a parent node but deducted as a child node.

For this idea to work, an important **_condition_** is that the values of all nodes are unique, as specified in the problem.

Still, we could find the root node with two iterations:

- In the first iteration, we traverse each node in the list, we add the value of the node to the `value_sum`.
Moreover, we deduct the value of its child nodes from the `value_sum`.

- At the end of the first iteration, the `value_sum` would become the value of the root node, as we discussed before.

- Once we know the value of the root node, _i.e._ `value_sum`, we can run a second iteration on the list to find out the root node.

Here are some sample implementations which are inspired from the post of [Anonymouso](https://leetcode.com/problems/find-root-of-n-ary-tree/discuss/726453/Java-O(n)-time-with-O(n)-space-and-O(1)-space-follow-up) in the discussion forum.

<iframe src="https://leetcode.com/playground/LjW5bE4j/shared" frameBorder="0" width="100%" height="463" name="LjW5bE4j"></iframe>

Here are two characteristics about the `XOR` operator:
- `A XOR A = 0`
- `0 XOR A = A`

As one can see, these characteristics can serve as the same _cancelling-out_ effect as the addition and deduction operations.

Given a list of `[ABA]` where the root node is `B`, we can perform an accumulated XOR operation on each element to obtain the value of root node, _i.e._ `A XOR B XOR A = B`.


**Complexity Analysis**

Let $$N$$ be the length of the input list, which is also the number of nodes in the N-ary tree.

- Time Complexity: $$\mathcal{O}(N)$$

    - In the first iteration, we visit each node as well as its child nodes.
    Therefore, the time complexity for this part is $$\mathcal{O}(2 * N) = \mathcal{O}(N)$$.

    - As to the second iteration, in the worst case, we would run through the entire list to find the root node.
    Hence the time complexity for this part is $$\mathcal{O}(N)$$.

    - To sum up, the overall time complexity of the algorithm is $$\mathcal{O}(N) + \mathcal{O}(N) = \mathcal{O}(N)$$.


- Space Complexity: $$\mathcal{O}(1)$$

    - We used a variable (`value_sum`) which is of constant-space, regardless of the input.


---