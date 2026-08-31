# Official Solution

**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solution/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solution/)

---

[TOC]

## Solution

---
### Approach 1: DFS by Recursion

**Intuition**

People might ask themselves in which scenario that one would use such an awkward data structure. Well, one of the scenarios could be a simplified version of git branching. By flattening the multilevel list, one can think it as merging all git branches together, though it is not at all how the git merge works.

First of all, to clarify what is the desired result of the flatten operation, we illustrate with an example below.

![pic](../Figures/430/430_list_step_1.png)

In the above example, we distinguish nodes in different levels with different colors. We could flatten the list in two steps as follows:

![pic](../Figures/430/430_list_step_2.png)

![pic](../Figures/430/430_list_step_3.png)

>As we can see, by _flatten_, we basically **fold or embed** the sublist that is branched from the child pointer into its parent list.

This is one way to interpret the _flatten_ operation. However, as intuitive as the problem seems to be, one might stumble over the implementation. It is because the above intuition does not quite catch the true nature of the problem.

>Actually, if we turn the above list in 90 degrees around the clock, then suddenly a **binary tree** appear in front of us. And the flatten operation is basically what we call _**preorder DFS traversal**_ (Depth-First Search).

![pic](../Figures/430/430_dfs_tree.png)

Indeed, as shown in the above graph, we could consider the `child` pointer as the `left` pointer in binary tree which points to the left sub-tree (sublist). And similarly, the `next` pointer can be considered as the `right` pointer in binary tree. Then if we traverse the tree in preorder DFS, it would generate the same visiting sequence as the flatten operation in our problem. 


**Algorithm**

Now that we know the problem is basically asking us to do a _preorder DFS_ traversal over a disguised binary tree, we could use this intuition to guide the implementation.

As many of you would know that there are generally two manners to implement the DFS traversal: _recursion_ and _iteration_. We here start with the recursion, since many find it more intuitive.

Here it goes with the recursive DFS algorithm:

- First of all, we define our recursive function as `flatten_dfs(prev, curr)` which takes two pointers as input and returns the pointer of tail in the _flattened_ list. The `curr` pointer leads to the sub-list that we would like to flatten, and the `prev` pointer points to the element that should precede the `curr` element.
<br/>

- Within the recursive function `flatten_dfs(prev, curr)`, we first establish the double links between the `prev` and `curr` nodes, as in the _**preorder**_ DFS we take care of the **current state** first before looking into the children.
<br/>

- Further in the function `flatten_dfs(prev, curr)`, we then go ahead to flatten the **left subtree** (_i.e._ the sublist pointed by the `curr.child` pointer) with the call of `flatten_dfs(curr, curr.child)`, which returns the `tail` element to the flattened sublist. Then with the `tail` element of the previous sublist, we then further flatten the **right subtree** (_i.e._ the sublist pointed by the `curr.next` pointer), with the call of `flatten_dfs(tail, curr.next)`.
<br/>

- And voila, that is our core function. There are two additional important details that we should attend to, in order to obtain the correct result:
    - We should make a copy of the `curr.next` pointer before the first recursive call of `flatten_dfs(curr, curr.child)`, since the `curr.next` pointer might be altered within the function.
    - After we flatten the sublist pointed by the `curr.child` pointer, we should remove the child pointer since it is no longer needed in the final result.
<br/>

- Last by not the least, one would notice in the following implementation that we create a `pseudoHead` variable in the function. This is not absolutely necessary, but it would help us to make the solution more concise and elegant by **reducing the null pointer checks** (_e.g._ `if prev == null`). And with less branching tests, it certainly helps with the performance as well. Sometimes people might call it _**sentinel**_ node. As one might have seen before, this is a useful trick that one could apply to many problems related with linked lists (_e.g._ [LRU cache](https://leetcode.com/articles/lru-cache/)).

<iframe src="https://leetcode.com/playground/FgfQtH2B/shared" frameBorder="0" width="100%" height="500" name="FgfQtH2B"></iframe>


**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the list. The DFS algorithm traverses each node once and only once.
<br/>

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the number of nodes in the list. In the worst case, the binary tree might be extremely unbalanced (_i.e._ the tree leans to the left), which corresponds to the case where nodes are chained with each other only with the `child` pointers. In this case, the recursive calls would pile up, and it would take $$N$$ space in the function call stack. 
<br/>
<br/>

---

### Approach 2: DFS by Iteration

**Intuition**

Following the intuition of the above DFS preorder traversal approach, here we demonstrate how one can implement the solution via **_iteration_**. 

>The key is to use the data structure called _**stack**_, which is a container that follows the principle of _LIFO_ (_last in, first out_). The element that enters the stack at last would come out first, similar with the scenario of a packed elevator.

The stack data structure helps us to construct the iteration sequence as the one created by recursion. The stack here mimics the behavior of the function _call stack_, so that we could obtain the same result without resorting to recursion.

**Algorithm**

- First of all, we create a stack and then we push the head node to the stack. In addition, we create a variable called `prev` which would help us to track the precedent node at each step during the iteration.
<br/>

- Then we enter a loop to iterate the stack until the stack becomes empty.
<br/>

- Within the loop, at each step, we first pop out a node (named `curr`) from the stack. Then we establish the links between `prev` and `curr`. Then in the following steps, we take care of the nodes pointed by the `curr.next` and `curr.child` pointers respectively, and strictly in this order.

    - First, if the `curr.next` does exist (_i.e._ there exists a right subtree), we then push the node into the stack for the next iteration.

    - Secondly, if the `curr.child` does exist (_i.e._ there exists a left subtree), we then push the node into the stack. In addition, unlike the `child.next` pointer, we need to clean up the `curr.child` pointer since it should not be present in the final result.
<br/>

- And voila. Lastly, we also employ the `pseudoHead` node to render the algorithm more elegant, as we discussed in the previous approach.

To better illustrate how the algorithm works, we create an animation that shows the evolution of stack step by step, as follows:

!?!../Documents/430_LIS.json:1000,561!?!

Here are some sample implementations.

<iframe src="https://leetcode.com/playground/5HYfwiHm/shared" frameBorder="0" width="100%" height="500" name="5HYfwiHm"></iframe>



**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$. The iterative solution has the same time complexity as the recursive.
<br/>

- Space Complexity: $$\mathcal{O}(N)$$. Again, the iterative solution has the same space complexity as the recursive one.