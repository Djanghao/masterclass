# Official Solution

**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solution/](https://leetcode.com/problems/nested-list-weight-sum-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is an extension of [Nested List Weight Sum](https://leetcode.com/problems/nested-list-weight-sum), where we need to find the sum of each integer multiplied by its `depth`. The slight change in this problem is that instead of multiplying each integer by its  `depth`, we will multiply each integer by its `weight` which is equal to `maxDepth - depth + 1`. Here `maxDepth` is the maximum depth of any **integer** in the list.

The input here is a list of user-defined type `nestedList`. Each of these `nestedList` elements in the list can either be an integer or a list of `nestedList` elements. To clarify further, the following nested list is an example of a valid list of `nestedList` elements.  

In the nested list `[1, 2, 3, 4, [6, 7, [8]]]`, the first four elements are integers and the last one is a list of `nestedList` whose first two elements are integers and the last element is a `nestedList` with a single integer as its element. 

Similarly, we can keep on increasing the nesting level by adding `nestedList` inside a `nestedList`.

Two things worth noting before we move on:
1. Input like `[1,[2,[3,[[]]]]]` is not valid because here one of the `nestedList` is empty (it does not contain an integer or a `nestedList`).
2. We will be working with the `NestedInteger` class for this problem. Accordingly, we must use the predefined functions `getList` and `getInteger` to access the data inside the given `nestedList`.

</br>

--- 

### Approach 1: Double Pass Depth-First Search (DFS)


**Intuition**

To calculate the weight (`maxDepth - depth + 1`) of any integer, we must first find the maximum depth of the given nested list. How can we do that? Whenever we need to work with a nested object, we should always consider recursively exploring the nested objects. This recursive exploration can be done in a depth-first or breadth-first manner. In this approach, we will choose to use depth-first search.

> If you are unfamiliar with depth-first search, you can learn about it in this [Explore Card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).

So to find the maximum depth, we can iterate over the elements in the given nested list, and the maximum depth of the list will be the maximum depth of any element inside the list. If the list only contains integers, then its depth is 1. However, if the list contains other nested lists, then its depth is 1 plus the maximum depth of these nested lists. Thus, we can recursively call our `findMaxDepth` function on any nested list to find the maximum depth.

Now that we know how to find the value of `maxDepth` we can use the insights from [Nested List Weight Sum](https://leetcode.com/problems/nested-list-weight-sum/solution/) by changing `depth` to `weight`. We perform DFS over the list of `nestedList` one by one, keeping track of the current depth `depth`. If the element in the list is an integer, `x`,  we add its product with the weight as  `x * (maxDepth - depth + 1)` to `answer`. If the nested integer is a list, we recursively follow the same process on the `nestedList` but with depth equal to `depth + 1`.

**Algorithm**

1. Find the value of `maxDepth`. The recursive function `findMaxDepth` traverses over the `NestedInteger` and recursively explores each nested list. The depth of the current nested list will be one (for the current level) plus the maximum depth among all of the nested lists that it contains. If a nested list only contains integers, then return 1.
2. Perform another depth-first search on the list. This time, keep track of the current depth, and for every integer, add the product of the integer and its weight (`maxDepth - depth + 1`) to the `answer`.

**Implementation**


<iframe src="https://leetcode.com/playground/6kNa2VR5/shared" frameBorder="0" width="100%" height="500" name="6kNa2VR5"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of nested elements in the input list. 

For example, the list `[[[[[1]]]], 2]` contains $$4$$ nested lists and $$2$$ nested integers ($$1$$ and $$2$$), so $$N$$ is $$6$$, for list `[[[[1, [2]]]], [3, [4]]]` there are $$6$$ nested list and $$4$$ integers, hence $$N$$ is $$10$$.

* Time complexity: $$O(N)$$
   
   We perform two depth-first searches: one to find the maximum depth and one to get the weighted sum of the nested list. In each DFS, we will visit every element exactly once. Hence the time complexity is $$O(N)$$.

* Space complexity: $$O(N)$$

   Space complexity is equal to the maximum number of active stack calls during the depth-first search.  In the worst case, such as `[[[[[[1]]]]]]`, the call stack will use $$O(N)$$ space. Hence the space complexity is $$O(N)$$.
    

<br/>

---

### Approach 2: Single Pass Depth-First Search (DFS)

**Intuition**

In the previous approach, we perform DFS twice. Can we do this in a single traversal? The reason for doing DFS two times is that we need `maxdepth` to find the integer's weight, hence we have to find the `maxdepth` in advance to calculate the `weight`. If we can somehow pull out the `maxDepth` from `weight` definition to an independent term, we can solve the problem in a single traversal.

We need to find the value of $$\sum_{i=1}^{N} a_{i} * weight$$. Where $$a_i$$'s are all the integers present in the list, `maxDepth` is the maximum depth of an integer in list and $$depth_i$$ is the depth of $$a_i$$. 

    $$\sum_{i=1}^{N} a_{i} * weight_{i}$$ 

    = $$\sum_{i=1}^{N} a_{i} * (maxDepth - depth_{i} + 1)$$ 

    = $$\sum_{i=1}^{N} (a_{i} * maxDepth - a_i * depth_{i}+ a_i)$$

    = $$\sum_{i=1}^{N} a_{i} * maxDepth$$ - $$\sum_{i=1}^{N} a_i * depth_{i}$$ + $$\sum_{i=1}^{N} a_{i} $$ 

    = $$maxDepth * \sum_{i=1}^{N} a_{i} $$ - $$\sum_{i=1}^{N} a_i * depth_{i}$$ + $$1 * \sum_{i=1}^{N} a_{i} $$

    = $$(maxDepth + 1) * \sum_{i=1}^{N} a_{i} $$ - $$\sum_{i=1}^{N} a_i * depth_{i}$$

    = $$(maxDepth + 1) * sumOfElements$$ - $$sumOfProducts$$

Notice that `maxDepth` is now outside of the summation. Thus, we do not need to use `maxDepth` until the last step in our calculation. Therefore we can find the `maxDepth` at the same time that we perform a depth-first traversal to find the sum of all $$a_{i}$$ values (`sumOfElements`) and the sum of all $$a_{i} * depth_{i}$$ values (`sumOfProducts`).

**Algorithm**

1. Perform DFS over `nestedInteger`. 
2. Add the product of integer and its `depth` into the `sumOfProducts`, this sum will be equal to $$\sum_{i=1}^{N} a_i * depth_{i}$$.
3. For every integer, compare the `depth` with `maxDepth` and update it accordingly.
4. Add the integer to the `sumOfElements`. This sum will be equal to $$\sum_{i=1}^{N} a_{i} $$.
5. Return the value of `(maxDepth + 1) * sumOfElements - sumOfProducts`.

**Implementation**

<iframe src="https://leetcode.com/playground/hrkmnqpY/shared" frameBorder="0" width="100%" height="500" name="hrkmnqpY"></iframe>


**Complexity Analysis**

Let $$N$$ be the total number of nested elements in the input list. 

For example, the list `[[[[[1]]]], 2]` contains $$4$$ nested lists and $$2$$ nested integers ($$1$$ and $$2$$), so $$N$$ is $$6$$, for list `[[[[1, [2]]]], [3, [4]]]` there are $$6$$ nested list and $$4$$ integers, hence $$N$$ is $$10$$.

* Time complexity: $$O(N)$$

    We perform only one depth-first search. In the DFS, we traverse every element (i.e., nested lists and integers) in the nested list once. Hence the time complexity is $$O(N)$$.


* Space complexity: $$O(N)$$

    Space complexity is equal to the maximum number of active stack calls during the depth-first search. In the worst case, such as `[[[[[[1]]]]]]`, the call stack will use $$O(N)$$ space. Hence the space complexity is $$O(N)$$.
    

<br/>

---

### Approach 3: Single Pass Breadth-First Search (BFS)

**Intuition**

In the previous approach, we traversed over all the elements of the `nestedList` in depth-first search manner. We can traverse over the elements in any manner we want as long as we can determine the current depth while traversing elements. Hence, in this approach, we will traverse over `nestedList` in a breadth-first search manner.

>  If you're not familiar with BFS, check out our [Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/)

We will use the previously defined equation `(maxDepth + 1) * sumOfElements - sumOfProducts` to find the answer iteratively. We will traverse over the lists, level by level as shown in the figure below.

![fig](../Figures/364/364A.png)

Similar to the previous approach we will find the values of `sumOfElements`, `maxDepth`, and `sumOfProducts` while performing a BFS over the integers.

**Algorithm**
1. Initialize the first level of the BFS tree by adding all the elements in the input `nestedList` to the queue.
2. For each level, pop out the front element from the queue.
3. If it is a list then add its elements into the queue. Otherwise, update the value of `sumOfElements`, `maxDepth` and `sumOfProducts`.
4. When the queue becomes empty, return the value of `(maxDepth + 1) * sumOfElements - sumOfProducts`.

**Implementation**


<iframe src="https://leetcode.com/playground/Nt4T2fk5/shared" frameBorder="0" width="100%" height="500" name="Nt4T2fk5"></iframe>


**Complexity Analysis**

Let $$N$$ be the total number of nested elements in the input list. 

For example, the list `[[[[[1]]]], 2]` contains $$4$$ nested lists and $$2$$ nested integers ($$1$$ and $$2$$), so $$N$$ is $$6$$, for list `[[[[1, [2]]]], [3, [4]]]` there are $$6$$ nested list and $$4$$ integers, hence $$N$$ is $$10$$.


* Time complexity: $$O(N)$$

  Each nested element is put in the queue and removed from the queue exactly once.

* Space complexity: $$O(N)$$

   The worst-case for space complexity in BFS occurs where the majority of elements are at the same depth, as all of the elements at that depth will be in the queue at the same time. Therefore worst-case space complexity is $$O(N)$$.
    

<br/>

---