# Official Solution

**Link:** [https://leetcode.com/problems/combinations/solution/](https://leetcode.com/problems/combinations/solution/)

---

[TOC]

## Solution

---
 
### Approach: Backtracking

**Intuition**

We are given that `n <= 20`. Typically, problems that ask you to find **all** of something with low bounds can be solved with backtracking.

In backtracking, we generate all solutions one element at a time. This problem is asking us to generate all possible combinations, so we will generate combinations one element at a time.

The range of elements we are working with is `[1, n]`. To generate a combination one element at a time, we will use an array `curr` that represents the current combination we are building.

To start, we add the first element `1`, so we have `curr = [1]`. We are **locking** in this `1` and we will now find all combinations that start with `1`.

To find all combinations that start with `1`, we start by adding the first element after `1`, which is `2`. We now have `curr = [1, 2]`. We are **locking** in this `2` and we will now find all combinations that start with `1, 2`.

This continues until we reach the target length `k`. Let's say that we have finished finding all combinations that start with `[1, 2]`. Now what? We **backtrack** by removing the `2`, and we have `curr = [1]` again. Now, we add the second element that comes after `1`, which is `3`. We have `curr = [1, 3]`, and now we need to find all combinations that start with `[1, 3]`.

Once we find all the combinations that start with `[1]`, we backtrack by removing the `1` from `curr` and adding the next element. We have `curr = [2]`, and now we need to find all combinations that start with `2`.

This process is very recursive in nature. Each time we add an element, we solve a new version of the problem (find all combinations that start with `curr`). The initial version of the problem is to find all combinations that start with `[]`, which represents all possible combinations.

**Trees**

The best way to think about the backtracking process is by modeling it as a tree. You can imagine the solution space as a tree, with each node representing a version of `curr`. Label each node with a number that represents the last number in `curr`. Moving to a child is like adding the child's label to `curr`.

To prevent duplicate combinations like `[1, 2]` and `[2, 1]`, a node only has children with labels greater than its own.

Given `n = 4` and `k = 2`, here is the backtracking tree:

<img src="../Figures/77/1.png" width="960"> <br>

The root node represents an empty `[]`. From the root, every node's `curr` represents the path taken from the root. The nodes at depth `k` represent the answer combinations (highlighted in green).

Solving this problem is equivalent to "traversing" this tree. The easiest way to perform the traversal is by using recursion and passing `curr` as an argument.

Think of each call to the recursive function as being a node in the tree. In each call, we need to iterate over the numbers greater than the label of the current node. We can pass an argument `firstNum` representing the first number we should start iterating from.

For each `num` in `[firstNum, n]`, we add it to `curr` and then make a recursive call passing `curr` and `num + 1` as `firstNum`. This ensures that we only consider numbers greater than the ones we have already added. Modifying `curr` and making a recursive call is equivalent to "traversing" to a child node in the tree.

When we return from a function call, it's equivalent to moving back up the tree (exactly like in a DFS). When we moved from a parent to a child, we added an element to `curr`. When we move from a child back to its parent, we need to remove the element we added from `curr`. This is the "backtracking" step.

The following is an implementation of this backtrack function, which is essentially performing a DFS on the solution space tree.

<iframe src="https://leetcode.com/playground/Hp9MnshW/shared" frameBorder="0" width="100%" height="361" name="Hp9MnshW"></iframe>


**An optimization step**

You may notice in the solution tree image above, we have a path that does not lead to any solutions (the `4` node).

This path doesn't lead to any solutions because there aren't enough elements after `4` to reach a path length of `k`. We should avoid paths like these as they are a waste of time. It would be better if our tree looked like this:

<img src="../Figures/77/2.png" width="960"> <br>

At each node, we have `curr.length` elements so far. We need to reach `k` elements. Therefore, we can calculate `need = k - curr.length` as the number of elements we still need to add.

The range of numbers we are considering in the subtree is `[firstNum, n]`. The size of this range is `remain = n - firstNum + 1`.

Finally, we can calculate `available = remain - need`. This value represents the count of numbers available to us as children. We should only consider children in the range `[firstNum, firstNum + available]` instead of the range `[firstNum, n]` like in the above code.

If we moved to a child outside of this range, like `firstNum + available + 1`, then we will run out of numbers to use before reaching a length of `k`.

**Algorithm**

1. Initialize an answer array `ans` and an array to build combinations with `curr`.
2. Create a `backtrack` function that takes `curr` as an argument as well as an integer `firstNum`:
    - if `curr.length == k`, add a copy of `curr` to `ans` and return.
    - Calculate `available`, the amount of numbers we can consider at the current node.
    - Iterate `num` from `firstNum` up to and including `firstNum + available`.
    - For each `num`, add it to `curr`, call `backtrack(curr, num + 1)`, and then remove `num` from `curr`.
3. Call `backtrack` with an initially empty `curr` and `firstNum = 1`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/VxkqY5me/shared" frameBorder="0" width="100%" height="500" name="VxkqY5me"></iframe>

**Complexity Analysis**

> Note: most backtracking problems, including this one, have extremely difficult time complexities to derive. Don't be discouraged if you can't derive it on your own - most of the time, the analysis requires an esoteric understanding of math. If you are asked this question in an interview, do your best to state an upper bound on the complexity by analyzing the number of nodes in the tree and the work done at each node.

* Time complexity: $$O(\dfrac{n!}{(k - 1)! \cdot (n-k)!})$$

    Finding combinations is a [well-studied problem in combinatorics](https://en.wikipedia.org/wiki/Combination). The number of combinations of length `k` from a set of `n` elements is equal to the [binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient), also known as "n choose k".

    $$\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$$

    How many nodes are in the tree?

    After applying the optimization, we only consider paths that lead to answers. This means that the number of leaf nodes is equal to the number of answers.

    Each path to a leaf has `k` nodes. However, there is a huge amount of overlap. It would be extremely difficult to calculate the exact number of nodes, but we know that it can't be greater than `k` times the number of leaves (which would occur if there was no overlap, i.e. every node had a maximum of 1 child, which is only possible for `n = k`). Therefore, an upper bound on the number of nodes is:

    $$\dfrac{k \cdot n!}{k!(n-k)!} = \dfrac{n!}{(k - 1)! \cdot (n-k)!}$$

    The fact that this is an upper bound is great news for us. Why? Because at each of the leaves, we need to perform $$O(k)$$ work to create a copy of `curr` to add to the answer. The work we perform to copy all the combinations is equal to the upper bound on the number of nodes. Therefore, the work done for the traversal will inevitably be dominated, and the fact that we can't calculate the exact number of nodes in the tree is irrelevant.

* Space complexity: $$O(k)$$

    We don't count the answer as part of the space complexity. The extra space we use here is for `curr` and the recursion call stack. The depth of the call stack is equal to the length of `curr`, which is limited to $$k$$.
    
<br/>

---