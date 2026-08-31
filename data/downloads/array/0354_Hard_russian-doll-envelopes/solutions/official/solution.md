# Official Solution

**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solution/](https://leetcode.com/problems/russian-doll-envelopes/solution/)

---

[TOC]

## Solution

---

#### Intuition

The problem boils down to a two dimensional version of the longest increasing subsequence problem (LIS).

We must find the longest sequence `seq` such that the elements in `seq[i+1]` are greater than the corresponding elements in `seq[i]` (this means that `seq[i]` can fit into `seq[i+1]`).

The problem we run into is that the items we are given come in arbitrary order - we can't just run a standard LIS algorithm because we're allowed to rearrange our data. How can we order our data in a way such that our LIS algorithm will always find the best answer?

**Notes on the LIS algorithm**

You can find the longest increasing subsequence problem with a solution [here](https://leetcode.com/problems/longest-increasing-subsequence/). If you're not familiar with the $$O(N \log N)$$ algorithm please go visit that question as it's a prerequisite for this one.

For the sake of completeness here's a brief explanation on how the LIS algorithm used below works:

`dp` is an array such that `dp[i]` is the smallest element that ends an increasing subsequence of length `i + 1`. Whenever we encounter a new element `e`, we binary search inside `dp` to find the largest index `i` such that `e` can end that subsequence. We then update `dp[i]` with `e`.

The length of the LIS is the same as the length of `dp`, as if `dp` has an index `i`, then it must have a subsequence of length `i+1`.

---

### Approach 1: Sort + Longest Increasing Subsequence

**Algorithm**

We answer the question from the intuition by sorting. Let's pretend that we found the best arrangement of envelopes. We know that each envelope must be increasing in `w`, thus our best arrangement has to be a subsequence of all our envelopes sorted on `w`.

After we sort our envelopes, we can simply find the length of the longest increasing subsequence on the second dimension (`h`). Note that we use a clever trick to solve some edge cases:

Consider an input `[[1, 3], [1, 4], [1, 5], [2, 3]]`.
If we simply sort and extract the second dimension we get `[3, 4, 5, 3]`, which implies that we can fit three envelopes (3, 4, 5). The problem is that we can only fit one envelope, since envelopes that are equal in the first dimension can't be put into each other.

In order fix this, we don't just sort increasing in the first dimension - we also sort _decreasing_ on the second dimension, so two envelopes that are equal in the first dimension can never be in the same increasing subsequence.

Now when we sort and extract the second element from the input we get `[5, 4, 3, 3]`, which correctly reflects an LIS of one.

**Implementation**
<iframe src="https://leetcode.com/playground/MA9T3pJd/shared" frameBorder="0" width="100%" height="500" name="MA9T3pJd"></iframe>


**Complexity Analysis**

* Time complexity : $$O(N \log N)$$, where $$N$$ is the length of the input. Both sorting the array and finding the LIS happen in $$O(N \log N)$$

* Space complexity : $$O(N)$$. Our `lis` function requires an array `dp` which goes up to size $$N$$. Also the sorting algorithm we use may also take additional space.