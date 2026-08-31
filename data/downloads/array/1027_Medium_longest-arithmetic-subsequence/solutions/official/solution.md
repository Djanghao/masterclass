# Official Solution

**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solution/](https://leetcode.com/problems/longest-arithmetic-subsequence/solution/)

---

[TOC]

## Solution

--- 

### Overview

Let's explain with the example provided in the problem. We found several sequences from the array and their common differences `diff`. 

![img](../Figures/1027/intro.png)

---

### Approach: Dynamic Programming

#### Intuition   

We can start with a brute-force approach. Since each arithmetic sequence always has a length greater than or equal to `2`, we can try to find each pair of elements `nums[left]` and `nums[right]` that form **the first two elements** of an arithmetic sequence by a nested iteration over `nums`.

For each pair of indices `(left, right)`, we can determine the common difference `diff = nums[right] - nums[left]` of the sequence they represent, and continue to traverse the array to the right of `right` to find if there exists following elements. For example:

- based on the `nums[right]` and `diff`, we can find whether there exists a third element `nums[right] + diff` to the right of `nums[right]`.

However, the time complexity of this approach is too expensive. For an array of length $$n$$, there are $$O(n^2)$$ possible pairs of starting elements, and for each pair, we may need to traverse the remaining $$O(n)$$ elements. Therefore, the time complexity of this approach is $$O(n^3)$$, which is likely to exceed the time limit.


![img](../Figures/1027/1.png)

<br>

Instead of treating `nums[left]` and `nums[right]` as the starting elements of a sequence, we can consider them as the last two elements of a sequence. Assuming that we have chosen indices `left` and `right`, how can we determine the length of the sequence that ends with `nums[left]` and `nums[right]`? Do we need to search backward from `left` as in the previous brute-force approach? Not necessarily.


![img](../Figures/1027/2.png)

Instead, we can keep track of all possible arithmetic sequences that end with each element in the array, along with their common difference and length. 

Assume we already know which arrays end at `left` and what their common difference and length are. Then, we need to search among these arrays to find if there is an array with a common difference `diff = nums[right] - nums[left]` and what its length is! If there is, we can extend it to a new arithmetic sequence by appending `nums[right]` and updating the length of the longest arithmetic sequence seen so far. The problem only requires us to find the longest sequence, so we don't need to record the specific sequence but only need to record their length and common differences.





![img](../Figures/1027/3.png)

As shown in the picture below, if we have recorded that there is an arithmetic sequence (**1, 3**) ending at `nums[left]` with a common difference of `2`, then we can just extend the sequence by adding `nums[right]` to it as (**1, 3, 5**). 

![img](../Figures/1027/4.png)

<br>

This method is called dynamic programming (DP). We can use a 2D array `dp` to record the length of the longest arithmetic sequence that ends with each element, as well as the common difference and the previous element of each longest arithmetic sequence. Specifically, let `dp[right][diff]` represent the length of the longest arithmetic sequence that ends with the element at index `right` and has a common difference of `diff`. The state transition equation is:


`dp[right][diff] = dp[left][diff] + 1` 
Where `(left < right, diff = nums[right] - nums[left])`



The final answer is the maximum value in `dp`.

<br>

As shown in the picture below, when we are at the index `right = 1`, we can save `dp[1][-19] = 2`, which means the longest arithmetic subsequence ending at index `i` and with a common difference of `-19` has a length of `2`.


![img](../Figures/1027/5.png)


<br>

Let's take the following slides as a detailed example:

!?!../Documents/1027/s1.json:601,301!?!



<br>

#### Algorithm

1) Initialize `dp` as memory to store the maximum length of subsequence that ends at `right` and with a common difference of `diff`.

2) Iterate over the last index `right`, for each index:
    - Iterate over the second last index `left`, where `left < right`:

    - The common difference is `nums[right] - nums[left]`.
    - Take `dp[left][diff]`, the length of the longest subsequence ending at `left` and with the same common difference. If there exists such a subsequence, `dp[right][diff] = dp[left][diff] + 1`, if there is no such subsequence, initialize `dp[right][diff] = 2`.

3) Return the maximum value in `dp`.

#### Implementation

<iframe src="https://leetcode.com/playground/N7PJbZhc/shared" frameBorder="0" width="100%" height="310" name="N7PJbZhc"></iframe>


#### Complexity Analysis

Let $$n$$ be the length of the input array `nums`.

* Time complexity: $$O(n^2)$$

    We have a nested iteration over `nums`, for each last index `right`, we iterate over every second last index `left`. 
    

* Space complexity: $$O(n^2)$$

    We create `dp` as memory where `dp[right][diff]` stores the length of the longest subsequence ending at index `right` and with a common difference of `diff`. 
    
    - If `right = 1`, it has 1 `left` to its left, so as the maximum number of unique `diff = nums[right] - nums[left]`.
    - If `right = 2`, it has 2 `left` indices to its left, so as the maximum number of unique `diff`.
    ...
    
    The maximum number of unique `diff` for an index `right` is `right`. Thus there might be at most $$O(n^2)$$ distinct status `(right, diff)`, so `dp` stores at most $$O(n^2)$$ lengths.

<br/>