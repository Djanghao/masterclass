# Official Solution

**Link:** [https://leetcode.com/problems/path-sum-iii/solution/](https://leetcode.com/problems/path-sum-iii/solution/)

---

[TOC]

## Solution

---

### Prefix Sum: What is it

In this article, we're going to discuss a simple but powerful [prefix sum technique](https://en.wikipedia.org/wiki/Prefix_sum): one pass + linear time complexity.

> _Prefix sum_ is a sum of the current value with all previous elements starting from the beginning of the structure. 

It could be defined for 1D arrays (sum the current value with all the previous integers),

![append](../Figures/437/prefix_qd.png)
*Figure 1. Prefix sum for 1D array.*


for 2D arrays (sum of the current value with the integers above or on the left)

![append](../Figures/437/2d_prefix.png)
*Figure 2. Prefix sum for 2D array.*


or for the binary trees (sum the values of the current node and all parent nodes),

![append](../Figures/437/tree2.png)
*Figure 3. Prefix sum for the binary tree.*


<br />
<br />


---

### Prefix Sum: How to Use: Number of Continuous Subarrays that Sum to Target

You might want to use the prefix sum technique for the problems like "Find a number of _continuous_ subarrays/submatrices/tree paths that sum to target". 

Before going to the current problem with the tree, let's check the idea on a simpler example [Find a number of continuous subarrays that sum to target](https://leetcode.com/problems/subarray-sum-equals-k/).

- Use a variable to track the current prefix sum and a hashmap "prefix sum -> how many times was it seen so far".

![append](../Figures/437/array1.png)
*Figure 4. Find a number of continuous subarrays that sum to the target.*


- Parse the input structure and count the requested subarrays/submatrices/tree paths along the way with the help of that hashmap. How to count? 

There could be two situations. In situation 1, the subarray with the target sum starts from the beginning of the array. That means that the current prefix sum is equal to the target sum, and we increase the counter by 1. 

![append](../Figures/437/situation11.png)
*Figure 5. Situation 1: The subarray starts from the beginning of the array.*


In situation 2, the subarray with the target sum starts somewhere in the middle. That means we should add to the counter the number of times we have seen the prefix sum `curr_sum - target` so far: `count += h[curr_sum - target]`.

The logic is simple: the current prefix sum is `curr_sum`, and some elements before the prefix sum was `curr_sum - target`. All the elements in between sum up to `curr_sum - (curr_sum - target) = target`.

![append](../Figures/437/situation24.png)
*Figure 6. Situation 2: The subarray starts somewhere in the middle.*


#### Solution for Number of Continuous Subarrays that Sum to Target

Here is an implementation of the solution for [Find a number of continuous subarrays that sum to target](https://leetcode.com/problems/subarray-sum-equals-k/).

<iframe src="https://leetcode.com/playground/2NpErn9r/shared" frameBorder="0" width="100%" height="500" name="2NpErn9r"></iframe>
<br />
<br />


---

### Approach 1: Prefix Sum

#### Intuition

Now let's reuse the same algorithm and the same code for the case of the binary tree. 

> There is just one thing that is particular for the binary tree. There are two ways to go forward - to the left and to the right. To keep parent->child direction, we shouldn't blend prefix sums from the left and right subtrees in one hashmap.

#### Algorithm

- Let's initialize tree paths counter `count = 0`, and the hashmap `h` "prefix sum -> how many times was it seen so far".

- One could parse the tree using [recursive preorder traversal](https://leetcode.com/articles/sum-root-to-leaf-numbers/): node -> left -> right: `preorder(node: TreeNode, curr_sum: int) -> None`. This function takes two arguments: a tree node and a prefix sum before that node. To start the recursion chain, one should call `preorder(root, 0)`.

    - The first thing is to update the current prefix sum by adding the value of the current node: `curr_sum += node.val`. 

    - Now one could update the counter. One should consider two situations. 

        In situation 1, the tree path with the target sum starts from the root. That means the current prefix sum is equal to the target sum `curr_sum == k`, so one should increase the counter by 1: `count += 1`. 
    
        In situation 2, the tree path with the target sum starts somewhere downwards. That means we should add to the counter the number of times we have seen the prefix sum `curr_sum - target` so far: `count += h[curr_sum - target]`.
    
        The logic is simple: the current prefix sum is `curr_sum`, and several elements before the prefix sum was `curr_sum - target`. All the elements in between sum up to `curr_sum - (curr_sum - target) = target`.

    - Now it's time to update the hashmap: `h[curr_sum] += 1`.
    
    - Let's parse left and right subtrees: `preorder(node.left, curr_sum)`, `preorder(node.right, curr_sum)`.
    
    - Now the current subtree is processed. It's time to remove the current prefix sum from the hashmap, in order not to blend the parallel subtrees: `h[curr_sum] -= 1`.
    
- Now the preorder traversal is done, and the counter is updated. Return it.

![append](../Figures/437/one_vs_two.png)
*Figure 7. Situation 1 vs Situation 2.*


#### Implementation

In the following example, the target sum is equal to 8.

!?!../Documents/437_LIS.json:1000,454!?!

<iframe src="https://leetcode.com/playground/5bYhPbsu/shared" frameBorder="0" width="100%" height="500" name="5bYhPbsu"></iframe>

#### Complexity Analysis

* Time complexity: $\mathcal{O}(N)$, where $N$ is a number of nodes. During preorder traversal, each node is visited once.

* Space complexity: up to $\mathcal{O}(N)$ to keep the hashmap of prefix sums, where $N$ is a number of nodes.