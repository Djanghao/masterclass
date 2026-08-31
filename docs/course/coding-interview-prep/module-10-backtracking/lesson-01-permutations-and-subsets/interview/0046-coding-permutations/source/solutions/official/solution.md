# Official Solution

**Link:** [https://leetcode.com/problems/permutations/solution/](https://leetcode.com/problems/permutations/solution/)

---

[TOC]

## Solution

---

### Approach: Backtracking

**Intuition**

We are given that `n <= 6`. Typically, problems that ask you to find **all** of something with low bounds can be solved with backtracking.

In backtracking, we generate all solutions one element at a time. This problem is asking us to generate all possible permutations, so we will generate permutations one element at a time.

To generate a permutation one element at a time, we will use an array `curr` that represents the current permutation we are building. To start, we add the first element in `nums`. We have `curr = [nums[0]]`. We are **locking** in this first value and we will now find all permutations that start with `nums[0]`.

To find all permutations that start with `nums[0]`, we start by adding the next element, which is `nums[1]`. We now have `curr = [nums[0], nums[1]]`. We are **locking** in this second element and we will now find all permutations that start with `nums[0], nums[1]`.

This continues until we use all elements, i.e. `curr.length == nums.length`. Let's say that we have finished finding all permutations that start with `[nums[0], nums[1]]`. Now what? We **backtrack** by removing the `nums[1]`, and we have `curr = [nums[0]]` again. Now, we add the second element that comes after `nums[0]`, which is `nums[2]`. We have `curr = [nums[0], nums[2]]`, and now we need to find all permutations that start with `[nums[0], nums[2]]`.

Once we find all the permutations that start with `[nums[0]]`, we backtrack by removing `nums[0]` from `curr` and adding the next element. We have `curr = [nums[1]]`, and now we need to find all permutations that start with `nums[1]`.

This process is very recursive in nature. Each time we add an element, we solve a new version of the problem (find all permutations that start with `curr`). The initial version of the problem is to find all permutations that start with `[]`, which represents all possible permutations.

> To summarize: try all numbers in the first position. For each number in the first position, try all other numbers in the second position. For each pair of numbers in the first and second positions, try all other numbers in the third position, and so on.

**Trees**

The best way to think about the backtracking process is by modeling it as a tree. You can imagine the solution space as a tree, with each node representing a version of `curr`. Label each node with a number that represents the last number in `curr`. Moving to a child is like adding the child's label to `curr`.

A permutation uses each element exactly once. A node should only have children with labels representing elements that haven't been used yet in the current path.

Given `nums = [1, 2, 3]`, here is the backtracking tree:

<img src="../Figures/46/1.png" width="960"> <br>

The root node represents an empty `curr` `[]`. From the root, every node's `curr` represents the path taken from the root. The nodes at depth `nums.length` represent the answer permutations (the leaf nodes).

Solving this problem is equivalent to "traversing" this tree. The easiest way to perform the traversal is by using recursion and passing `curr` as an argument.

Think of each call to the recursive function as being a node in the tree. In each call, we need to iterate over the numbers that haven't been used yet (not currently in `curr`).

For each `num` that isn't already in `curr`, we add it to `curr` and then make a recursive call passing `curr`. Modifying `curr` and making a recursive call is equivalent to "traversing" to a child node in the tree.

When we return from a function call, it's equivalent to moving back up the tree (exactly like in a DFS). When we moved from a parent to a child, we added an element to `curr`. When we move from a child back to its parent, we need to remove the element we added from `curr`. This is the "backtracking" step.

**Algorithm**

1. Initialize an answer array `ans` and an array `curr` to build permutations with.
2. Create a `backtrack` function that takes `curr` as an argument:
    - If `curr.length == nums.length`, add a copy of `curr` to `ans` and return.
    - Iterate over `nums`. For each `num`, if `num` is not in `curr`, do the following:
        - Add `num` to `curr` and call `backtrack(curr)`, then remove `num` from `curr`.
3. Call `backtrack` with an initially empty `curr`.
4. Return `ans`.

> Note that we are essentially implementing a DFS traversal of an imaginary tree. The children of a node are all the numbers that haven't been used yet.

**Implementation**


<iframe src="https://leetcode.com/playground/m7HbK8DJ/shared" frameBorder="0" width="100%" height="500" name="m7HbK8DJ"></iframe>

**Complexity Analysis**

> Note: most backtracking problems, including this one, have extremely difficult time complexities to derive. Don't be discouraged if you can't derive it on your own - most of the time, the analysis requires an esoteric understanding of math.

Given $$n$$ as the length of `nums`,

* Time complexity, **what you should say in an interview:** $$O(n \cdot n!)$$

    Finding permutations is a [well-studied problem in combinatorics](https://en.wikipedia.org/wiki/Permutation). Given a set of length `n`, the number of permutations is $$n!$$ (n factorial). There are $$n$$ options for the first number, $$n - 1$$ for the second, and so on.

    For each of the $$n!$$ permutations, we need $$O(n)$$ work to copy `curr` into the answer. This gives us $$O(n \cdot n!)$$ work.

* Time complexity, **better approximation:** $$O(n^2 \cdot (e \cdot \Gamma (n + 1, 1) - n!))$$

    **The analysis used to derive this time complexity is way out of the scope of an interview. We have included it for the sake of completeness. In an interview, you can use the explanation above while explaining that it is an approximation, and then mention that the true time complexity would involve calculating the number of nodes in the tree, which is very difficult to do analytically.**

    What about the work required to perform the traversal? First, let's determine how many nodes are in the tree. A [k-permutation of n](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n) is a permutation that doesn't use all $$n$$ elements. The first level in the tree holds all 1-permutations, the second level holds all 2-permutations, and so on.

    Thus, the number of nodes in the tree is equal to the sum of the number of k-permutations, where k is in the range [1, n]. The number of k-permutations can be calculated as:

    $\Large{\frac{n!}{(n - k)!}}$

    The number of the nodes in the tree is therefore:

    $\Large{\sum_{k=1}^{n}{\frac{n!}{(n - k)!}}}$

    This sum is difficult to compute and requires higher-level mathematics. It is equal to:

    $\Large{e \cdot \Gamma (n + 1, 1) - 1}$ where $\Large{\Gamma}$ is the [incomplete gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function).

    Using this function, we can empirically determine that the number of nodes in the tree grows faster than $$n!$$ but slower than $$n \cdot n!$$.

    | n | n! |  $e \cdot \Gamma (n + 1, 1) - 1$ |  n * n!
    |:---:|:---:|:--------:|:-----------:|
    |  1  | 1  | 1 | 1 |
    |  2  |  2  | 4 | 4 |
    |  3  | 6  | 15 | 18 |
    |  4  | 24  | 64 | 96 |
    |  5  | 120 | 325 | 600 |
    |  6  |  720  | 1956 | 4320 |
    |  7  |  5040   | 13,699 | 35,280 |
    |  8  |  40,320  | 109,600 | 322,560 |
    |  9  |   362,880  | 986,409 | 3,265,920 |
    |  10  |  3,628,800   | 9,864,100 | 36,288,000 |

    <br>

    You may be thinking: it grows slower than $$n \cdot n!$$, that's great! The work required to copy `curr` into `ans` would dominate it. Unfortunately, this is not true because the work done at each node is not constant. We have a for loop over `nums`, and each iteration of the loop checks if an element is in `curr`. As such, the work done at each node is approximately $$O(n^2)$$. Because the number of nodes grows faster than $$n!$$, the work done for the traversal grows faster than $$n^2 \cdot n!$$, and it becomes the dominating term.

    Wait a second, the $$n^2$$ work is not done for the final level (the n-permutations) because we immediately return from the function after adding `curr` to the answer. There are $$n!$$ nodes in the final level, so the number of nodes that go through the $$n^2$$ work is $$e \cdot \Gamma (n + 1, 1) - 1 - n!$$.

    The work done for the traversal is therefore approximately $$n^2 \cdot (e \cdot \Gamma (n + 1, 1) - n!)$$. Using a script, we can empirically determine that this function grows much faster than $$n \cdot n!$$, and thus the work for the traversal is the dominating term. This is the "official" time complexity of the approach.

    > Notice that we haven't been wrapping the terms in Big O. In terms of big O, the number of nodes would be $$O(\Gamma (n + 1, 1))$$ because the $$e$$ drops as a constant. We also determined that the number of nodes grows faster than $$n!$$, so we would drop the $$- n!$$ as well using normal big O rules, and the result would be $$O(n^2 \cdot \Gamma (n + 1, 1))$$ for the traversal.
    >
    > There is some nuance here. First of all, notice that $$\Gamma (n + 1, 1) \approx n!$$. When making comparisons, the $$e$$ term is significant. In fact, dropping the $$e$$ term leads $$\Gamma (n + 1, 1) - n!$$ to be negative for many values of $$n$$. Second, it is too much of a simplification to say the work done at each node is $$O(n^2)$$ since the cost of checking if a number is in `curr` is a function of the depth.
    >
    > The truth is, all this analysis is undoubtedly flawed mathematically as we are making assumptions and not strictly following the rules of Big O. However, it still makes for an interesting analysis that helps us understand the nature of the problem better.

    We're already come this far, let's delve deeper! What if we used a set as well, so we had `backtrack(curr, used)` where `used` is a set of the elements in `curr`. Then, we can reduce the work done at each node by a factor of $$n$$. In that case, the work for the traversal would be approximate $$n \cdot (e \cdot \Gamma (n + 1, 1) - n!)$$.

    Believe it or not, this function appears to grow at the **exact same rate** as $$n \cdot n!$$. For $$n > 5$$, we have:

    $$\Large{\frac{n \cdot n!}{n \cdot (e \cdot \Gamma (n + 1, 1) - n!)}} \approx 0.582$$

    In which case all the analysis we just did was pointless because the work done to add `curr` to the answer would be enough to determine the time complexity.

* Space complexity: $$O(n)$$

    We don't count the answer as part of the space complexity. The extra space we use here is for `curr` and the recursion call stack. The depth of the call stack is equal to the length of `curr`, which is limited to $$n$$.

    Fortunately, this analysis was simpler than the time complexity one.

<br/>

---