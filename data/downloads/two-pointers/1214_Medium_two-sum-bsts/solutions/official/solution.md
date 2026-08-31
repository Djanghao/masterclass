# Official Solution

**Link:** [https://leetcode.com/problems/two-sum-bsts/solution/](https://leetcode.com/problems/two-sum-bsts/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition   

Start with the brute force approach, we just want to find all the values in the two trees and try every combination. To implement it, we can perform a traversal on each tree and add the values to the respective lists `node_list1` and `node_list2`. We then iterate through the two lists using a nested loop and check if the sum of any two elements `value1 + value2` equals the target. If it does, we can return true.


Suppose we perform a preorder traversal of `root1`.


![img](../Figures/1214/1.png)

Similarly, we can store the value of each node of `root2` in `node_list2`.

![img](../Figures/1214/2.png)

Now we need to try every pair of values from `node_list1` and `node_list2`. It requires a nested iteration.


#### Algorithm

1) Create two empty lists `node_list1` and `node_list2`.

2) Perform a DFS over `root1` and add the value of each node to `node_list1`, perform a DFS over `root2` and add the value of each node to `node_list2`.


3) Iterate over elements in `node_list1`, for each element `value1`, we iterate over `node_list2` and look for `target - value2`.
    - If `target - value1` is in `node_list2`, return `True`.

    - Otherwise, move on to the next element of `node_list1`.

4) If we finish the nested iteration without finding a valid pair, return `False`.

#### Implementation

<iframe src="https://leetcode.com/playground/CereQGT9/shared" frameBorder="0" width="100%" height="500" name="CereQGT9"></iframe>


#### Complexity Analysis

Let $$m$$, $$n$$ be the number of nodes in the two trees.

* Time complexity: $$O(m \cdot n)$$

    - We need to visit every node in both trees to collect the value of each node into two lists `node_list1` and `node_list2`, this takes $$O(m + n)$$ as each node will be visited once.
    - Then we iterate through both lists using a nested loop. The time complexity of the nested loop is $$O(m\cdot n)$$ in the worst-case scenario.
    

* Space complexity: $$O(m + n)$$

    - We save the value of each node in two lists `node_list1` and `node_list2`.

<br/>

---

### Approach 2: Binary Search

#### Intuition   

The previous solution does not take advantage of the nature of a binary search tree:

- The left subtree of a node contains only nodes with values less than the node's value.
- The right subtree contains only nodes with values greater than the node's value.

Therefore, instead of nested loops, we can traverse all nodes of the `root1` and for each value `value1`. For each value `value1`, we have to find the node with a value of `target - value1` on the another tree `root2`, which can be implemented using binary search:

- If `node.val == target - value1`, it means that we find a valid pair. Return `true`.
- If `node.val < target - value1`, it means that `target - value1` might be in the right subtree of `node`, so we move on to its right child.
- If `node.val > target - value1`, it means that `target - value1` might be in the left subtree of `node`, so we move on to its left child.

![img](../Figures/1214/b1.png)

If we can't find `target - value1`, we will move on to the next node in `root1` and repeat the binary search.

![img](../Figures/1214/b2.png)


<br>

#### Algorithm

1) Traverse over `root1` using DFS.

2) For each node of `root1`, we search on `root2` for the node with a value of `target - value1`. For each node `node2` on `root2`:
    - If `node2.val = target - value1`, it means we find a pair, return `True`.
    - If `node2.val < target - value1`, we move on to the left subtree of `node2`.
    - If `node2.val > target - value1`, we move on to the right subtree of `node2`.

    If we can't find `target - value1` on `root2`, move on to the next node of `root1`. 

3) If we can't find a valid pair after the nested iteration, return `False`.


#### Implementation

<iframe src="https://leetcode.com/playground/QZ9XV8iz/shared" frameBorder="0" width="100%" height="500" name="QZ9XV8iz"></iframe>


#### Complexity Analysis

Let $$m$$, $$n$$ be the number of nodes in the two trees.

* Time complexity: $$O(m \cdot\log n)$$

    - Each node in `root1` is visited once.
    - For each `value1`, we search for `target - value1` in `root2`, the average steps it takes is $$O(h)$$ where $$h$$ is the height of the tree. Assume that both trees are balanced, the height of `root1` and `root2` is $$O(\log m)$$ and $$O(\log n)$$, respectively.
    

* Space complexity: $$O(\log m + \log n)$$
    - The space complexity of DFS over a binary tree is $$O(h)$$, where $$h$$ is the tree's height. This is because the DFS algorithm uses a call stack to keep track of the nodes it has visited, and the maximum size of the call stack is proportional to the height of the DFS tree. Assume that both trees are balanced, then the height of `root1` and `root2` is $$O(\log m)$$ and $$O(\log n)$$, respectively.

<br/>


---

### Approach 3: Hash Set

#### Intuition   

Recall from approach 1 where we save the values of the two trees in two lists. If we need to find `target - value1` in `node_list2`, we may traverse the entire list, which takes $$O(n)$$ time.


However, if we save the values of `root2` in a hash set `node_set2`, we can determine if `node_set2` contains `target - value1` in $$O(1)$$ time.

![img](../Figures/1214/3.png)

Therefore, we collect the value of each node in `root1` in `node_set1` and collect the value of each node in `root2` in `node_set2`. Then we iterate over each element in `node_set1` and find out if `value1` is in this hash set. 

#### Algorithm

1) Create two empty hash sets `node_set1` and `node_set2`.

2) Traverse over `root1` and add the value of each node to `node_set1`, traverse over `root2` and add the value of each node to `node_set2`.

3) Iterate over elements in `node_set1`, for each element `value1`, check if `target - value1` is in `node_set2`.
    - If `target - values` in `node_set2`, return `True`.
    - Otherwise, move on to the next element of `node_set1`.

4) If we finish the iteration without finding a valid pair, return `False`.


#### Implementation

<iframe src="https://leetcode.com/playground/jEvh4rwH/shared" frameBorder="0" width="100%" height="500" name="jEvh4rwH"></iframe>


#### Complexity Analysis

Let $$m$$, $$n$$ be the number of nodes in the two trees.

* Time complexity: $$O(m + n)$$

    - We need to visit every node in both trees to collect the value of each node into two lists `node_set1` and `node_set2`, which takes $$O(m + n)$$ as each node will be visited once, and an add operation takes $$O(1)$$ time on a hash set.
    - We iterate over elements in `node_set1` which contains $$O(m)$$ steps, checking if `target - value1` in `node_set2` at each step takes $$O(1)$$ time.
    

* Space complexity: $$O(m + n)$$

    - We save the value of each node in two hash sets `node_set1` and `node_set2`.

<br/>
---

### Approach 4: Two Pointers


#### Intuition   

In a binary search tree, an inorder traversal visits the nodes in sorted order. This is because we go left (smaller values) until we can't anymore. We only go right (larger values) once we're done with the left subtree.



It implies that we can inorder traverse over `root1` and `root2`, and collect the value of each node in `node_list1` and `node_list2`, so both lists are already sorted.


In order to find a valid pair whose sum is `target`, we can assign two pointers `pointer1` and `pointer2`, which point to the first (the smallest) element of `node_list1` and the last (the largest) element  of `node_list2`, respectively.

![img](../Figures/1214/sorted_edit.png)

Then we keep comparing the sum of `value1 = node_list1[pointer1]` and `value2 = node_list2[pointer2]` with `target`:

- If `value1 + value2 = target`, it means that there exists a pair whose sum is `target`.


- If `value1 + value2 < target`, we need a larger `value1` or a larger `value2`. However, we traverse `node_list2` backward in descending order, which means that we have already tried all values larger than `value2`, there are no possible candidates in `node_list2`, so we have to try a larger `value1` by incrementing `pointer1` by 1.


- If `value1 + value2 > target`, we need a smaller `value1` or a smaller `value2`. Similarly, since we traverse `node_list1` in ascending order, we have already tried all values smaller than `value1`, so we can only try a smaller `value2` by decrementing `pointer2` by 1.



<br>

#### Algorithm

1) Create two empty lists `node_list1` and `node_list2`.

2) Perform an inorder traversal over `root1` and add the value of each node to `node_list1`, and perform an inorder traversal over `root2` then add the value of each node to `node_list2`.


3) Initialize two pointers `pointer1 = 0` and `pointer2 = len(node_list2) - 1` that point to the first element of `node_list1` and the last element of `node_list2`, respectively.

4) While `pointer1 < len(node_list1)` and `pointer2 >= 0`, we compare `node_list1[pointer1] + node_list2[pointer2]` with `target`:
    - If `node_list1[pointer1] + node_list2[pointer2] = target`, return `True`.
    - If `node_list1[pointer1] + node_list2[pointer2] < target`, increment `pointer1` by 1.
    - If `node_list1[pointer1] + node_list2[pointer2] > target`, decrement `pointer2` by 1.

5) If we can't find a valid pair after the iteration, return `False`. 

#### Implementation

<iframe src="https://leetcode.com/playground/m2trK5B6/shared" frameBorder="0" width="100%" height="500" name="m2trK5B6"></iframe>


#### Complexity Analysis

Let $$m$$, $$n$$ be the number of nodes in the two trees.

* Time complexity: $$O(m + n)$$

    - We need to visit every node in both trees to collect the value of each node into two lists `node_list1` and `node_list2`, this takes $$O(m + n)$$ as each node will be visited once.
    - In the while loop, both pointers only move in one direction, each element is visited only once, thus this iteration takes $$O(m + n)$$ time.
    

* Space complexity: $$O(m + n)$$

    - We save the value of each node in two lists `node_list1` and `node_list2`.

<br/>






---

### Approach 5: Morris Traversal

> This approach is very advanced and more of an extension that you wouldn't be expected to come up with in an interview. We have included it for completeness.


#### Intuition   

Recall the DFS solutions which have $O(h)$ space complexity ($$h$$ is the height of the tree), let's think about why we need that much space:

Imagine we are in the middle of an inorder traversal, and the current root node `root` has left and right subtrees. As we finish visiting the last node `pre` of the left subtree, we would like to continue visiting `root` and the right subtree of `root`, but how?


![img](../Figures/1214/mor1.png)


This approach takes $$O(h)$$ space because we need to track all the previous root nodes so that we can always return to each root and visit its right subtree once we have finished visiting its left subtree! The stack holds $$h$$ nodes on the recursive path so that we can backtrack to the root node `root`.

We can modify the tree in place to avoid using this extra space. Note that the node `pre` always has no right child, so we can let `root` be its right child! Therefore, whenever we finished visiting `pre`, we can just visit its right child and return to `root`!

![img](../Figures/1214/mor2.png)


The node `pre` of node `current` is the rightmost node in the left subtree of `current`. Therefore, we can recursively find the `pre` node of `current`, and modify `pre`'s right pointer to `current`. Then move on to the left child of `current`.

![img](../Figures/1214/mor3.png)

In the following traversal, if we find that a node `pre` has a right child, it means that we have previously modified it and we can return to the node `current` by simply visiting `pre.right`. Then we reset the right pointer of `pre` to null.



We don't need an auxiliary stack to store the node on the recursive path, thus only $$O(1)$$ space is needed.

Take the following figure as an example of how we implement an inorder morris traversal.


![img](../Figures/1214/mor4.png)


<br>

> This solution involves modifying the original binary search trees, so it is not generally recommended. If you want to try this approach in an interview, it is best to determine in advance with the interviewer the requirements of the question.


<br>

Now that we have a method to traverse a binary tree by inorder morris traversal, we can use the two-pointers method similar to the one in approach 4, where we use two-pointers on two sorted lists. Specifically, let `pointer1` and `pointer2` point to the first element of `node_list1` and the last element of `node_list2`, respectively. Likewise, we create two iterators over `root1` and `root2` using inorder morris traversal:


- `iterator1` performs inorder morris traversal of `root1`, so that the values of the visited nodes are in ascending order.

- `iterator2` performs backward inorder morris traversal of `root2`, so that the values of the visited nodes are in descending order.



![img](../Figures/1214/mor5.png)


> To implement backward inorder morris traversal, we just traverse right before left instead of left before right, so it will yield the largest values first.




Now we can start comparing the sum of values of the two nodes being visited with `target`, which is similar to the solution of the previous approach where we compare the sum of values of the two pointers to `target`:
- If `value1 + value2 == target`, it means that we find a valid pair, return `True`.
- If `value1 + value2 < target`, we should look for a larger value in `root1`, so we move `iterator1` to the next node (with a larger value than `value1`).
- If `value1 + value2 > target`, we should look for a smaller value in `root2`, so we move `iterator2` to the next node (with a smaller value than `value2`).



<details>

<summary> There are some problems on LeetCode that can be solved by Morris Traversal, you can get practise on these problems! (click to show)</summary>

<br>

- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-Inorder-traversal/) 
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) 


</details>


<br>

#### Algorithm

1) Build two iterators `iterator1` and `iterator2` that perform inorder morris traversal over `root1` and backward inorder morris traversal over `root2`, respectively.


2) Start with the smallest element of `root1` and the largest element of `root2`.


3) While both iterators have non-empty values, we compare `value1 + value2` with `target`:
    - If `value1 + value2 = target`, return `True`.
    - If `value1 + value2 < target`, move on to the next node of `iterator1`.
    - If `value1 + value2 > target`, move on to the next node of `iterator2`.

5) If we can't find a valid pair after the iteration, return `False`. 

#### Implementation

<iframe src="https://leetcode.com/playground/QDmtubQd/shared" frameBorder="0" width="100%" height="500" name="QDmtubQd"></iframe>


> In Python, the keyword `yield` is used in the context of generators, which are a type of iterator. An iterator is an object that can be iterated (i.e., looped) upon and returns one value at a time. The advantage of iterator is that it allows us to process large amounts of data without having to store all of it in memory, which can be especially useful for this problem. 
>
>When we traverse both trees using inorder Morris Traversal, we only need the values of two current nodes at a time. By using the keyword `yield` in Morris Traversal allows us to return the nodes of the binary tree one at a time, without having to save all of the nodes in memory.
>
> You can refer to [yield-expression](https://docs.python.org/3/reference/expressions.html#yield-expressions) for more information.


#### Complexity Analysis

Let $$m$$, $$n$$ be the number of nodes in the two trees.

* Time complexity: $$O(m + n)$$

    - There are $n-1$ edges in a tree (by definition). Each edge is visited at most two times: first, when we find `last` and second when we traverse the nodes. We visited each node at most 2 times, which takes $O(n)$ time. Refer to the picture below, the colored edges stand for the revisited edges when finding the 'last' nodes.

    ![img](../Figures/1214/morris_time.png)
        
    When visiting each node, other than traversing edges we do $O(1)$ work, so the time complexity is $O(n)$. 

    - We build two iterators to traverse `root1` and `root2`.
    

* Space complexity: $$O(1)$$

    - In Morris traversal, we need to track two nodes `pre` and `current` which take constant space. Since we take advantage of the right child of some leaf nodes there is no need for extra space.

    - The same is true for the reversed Morris traversal.


<br/>