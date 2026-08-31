# Official Solution

**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solution/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: In-order Traversal with List

**Intuition**

Let's try to solve a simpler problem first. Given a sorted array of integers, find the minimum difference between any two integers in the array. To solve this problem, we don't need to check every pair of integers; instead, checking the difference between every two consecutive integers would work. This is because the array is sorted; let's say the array is `{1, 3, 7, 8.....}` if we fix one integer, say `7`, then its closest element would either be the element on its left or right, i.e., `3` or `8`. Hence, for all elements (except the first one), we will check the difference with the element on its left and find the minimum of all such differences.

![fig](../Figures/783/783A.jpeg)

In the original problem, we have some integer values (i.e. node values), and we need to find the minimum difference between any two values; thus, the original problem is similar to the problem we discussed above if we keep those values in the sorted order.

We can easily convert the original problem into the above one. The in-order traversal of a binary search tree produces a sorted array. Therefore, we will generate the in-order array of the given tree and then find the minimum difference using the algorithm we just discussed.

**Algorithm**

1. Initialize the `minDistance` to `MAX_VALUE` possible; this is the variable to store the minimum difference.
2. Perform an in-order traversal of the given binary search tree and store the nodes in a list `inorderNodes`.
3. Iterate over `inorderNodes` starting from index `1`, and for each element at `i`, find the difference with the element at index `i - 1` and update the variable `minDistance` accordingly.
4. Return `minDistance`.

**Implementation**

<iframe src="https://leetcode.com/playground/YMpaS3ge/shared" frameBorder="0" width="100%" height="500" name="YMpaS3ge"></iframe>

**Complexity Analysis**

Here $N$ is the number of nodes in the given binary search tree.

* Time complexity: $$O(N)$$.

  We traverse the tree using in-order traversal; this takes $O(N)$ time. Then we iterate over the array of size $N$ elements to find the minimum difference. Therefore, the total time complexity equals $O(N)$.

* Space complexity: $$O(N)$$.

  The in-order traversal is recursive and would take some space to store the stack calls. The maximum number of active stack calls at a time would be the tree's height, in the worst case this space would be $O(N)$ when the tree is a straight line. We also need an array to store the $N$ tree nodes. Therefore, the total space complexity equals $O(N)$.
  <br/>

---

### Approach 2: In-order Traversal Without List

**Intuition**

As we can notice in the previous approach, we only need the immediate in-order predecessor of any node to calculate the minimum difference; the rest of the nodes will not be needed and are stored unnecessarily in the list.

Thus, we can avoid storing elements in a list if we can find the difference between consecutive nodes on the fly during in-order traversal.
For each node in the tree, we need the previous node we have traversed, and then we can find the difference. This can be done using another variable `prevValue` that will store the value of the node we traversed previously in the in-order traversal. This way, we don't have to store the elements in an array and, at the same time, don't have to re-iterate over the nodes again.

**Algorithm**

1. Initialize the `minDistance` to `MAX_VALUE` possible; this is the variable to store the minimum difference. Initialize `prevValue` to `null`, so we can check if we have already traversed any elements before or not.
2. Perform an in-order traversal of the given binary search tree. Each time we iterate over a node, check if `prevValue` is not `null` and if it is not, find its difference with the current node value and update `minDistance` accordingly.
3. After iterating over the current node, assign it to `prevValue`.
4. Return `minDistance` when the in-order traversal is finished.

**Implementation**

<iframe src="https://leetcode.com/playground/UeQ9gz2t/shared" frameBorder="0" width="100%" height="500" name="UeQ9gz2t"></iframe>

**Complexity Analysis**

Here $N$ is the number of nodes in the given binary search tree, and $H$ is the tree's height.

* Time complexity: $$O(N)$$.

  We traverse the tree using in-order traversal; this takes $O(N)$ time. Therefore, the total time complexity equals $O(N)$.

* Space complexity: $$O(H)$$.

  The in-order traversal is recursive and would take some space to store the stack calls. The maximum number of active stack calls at a time would be the tree's height and hence would take $O(H)$ space. Therefore, the total space complexity equals $O(H)$. Note that in the worst-case ($H = N - 1$), the order of height of the tree will be the same as the order of the number of nodes.
  <br/>

---