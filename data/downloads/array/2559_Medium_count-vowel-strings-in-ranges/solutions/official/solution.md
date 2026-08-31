# Official Solution

**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solution/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2D `queries` array where each query specifies a range `[l, r]` (inclusive). For each query, we need to count how many strings in the `words` array start and end with a vowel and have an index within the specified range. These strings are referred to as "vowel strings." In other words, for each query, we need to count the number of vowel strings within the subarray `words[l:r]`.  

We will go through a solution that can perform this count efficiently for all queries.

### Approach: Prefix Sum

#### Intuition

A brute force approach to calculate the answer for each query `[l, r]` would involve iterating through the subarray `words[l:r]` and counting how many vowel strings we find. We can use a set to containing all vowels (`a, e, i, o, u`) to quickly check if a string is a vowel string in constant time, $O(1)$.  

However, this approach is slow as it requires us to iterate through a portion of `words` for every query. If many queries contain a long range, this will be an expensive operation. Furthermore, a lot of work is repeated since many elements will be visited many times across queries.

For a more optimized approach, we can first perform some precomputations on `words`. Specifically, we can create a prefix sum array `prefixSum` to store the cumulative counts of vowel strings in `words`. `prefixSum[i]` would contain the total number of vowel strings from the first element of the array up to index `i` (the prefix array `words[0:i]`). Populating this `prefixSum` array would only take one linear scan across `words` as we maintain a cumulative sum while iterating through `words`. 

Having this `prefixSum` array will allow us to answer each query very quickly. The key insight here is that the number of vowel strings that fall between a query range `[l, r]` can be found by subtracting the cumulative sum up to index `l-1` from the cumulative sum up to index `r`: `prefixSum[r] - prefixSum[l - 1]`.

##### Why subtract `prefixSum[l - 1]`?

 Note that we look at the lower boundary `l - 1` instead of `l` because the range is inclusive. The prefix sum array represents the cumulative count of vowel strings up to each index. By subtracting `prefixSum[l - 1]`, we ignore all the vowel strings that have appeared before index `l` in our count and include only those within the range `[l, r]`.

Let's look at an example: 

- We have `prefixSum = [0, 1, 2, 2, 3, 3, 4]`.
- Our query range is `[1, 5]`.

Taking a look at `prefixSum`:
- The total number of vowel strings right before the start of the range is `prefixSum[0] = 0`
- The total number of vowel strings right at the end of the range (index 5) is `prefixSum[5] = 3`. 

This then means that `prefixSum[5] - prefixSum[0]` will give us the number of vowel strings that have appeared in the range `[1, 5]`, yielding an answer of 3 vowel strings.

#### Algorithm

- Declare our answer array `ans`.
- Initialize our set of vowels `vowels` to contain the vowel list `[a, e, i, o, u]`.
- Declare our prefix sum array `prefixSum` to store the cumulative sum of vowel words up to each index.
- To fill in `prefixSum`, loop through each word in `words`:
    - For each word, check if the first and last letter of `word` is in `vowels`. If so, we have found a new vowel string so we increment `sum++`.
    - Fill in the prefix count: `prefixSum[i] = sum`
- Loop through each query in `queries`:
        - Check if the left bound `queries[i][0]` is 0. If it is, then the answer is simply the cumulative count of vowel strings up to index `i`: `ans[i] = prefixSum[queries[i][1]]`
        - Otherwise, `ans[i] = prefixSum[queries[i][1]] - prefixSum[queries[i][0] - 1]`
- Return answer array `ans` containing answers for all queries.

#### Implementation

<iframe src="https://leetcode.com/playground/CRegyC38/shared" frameBorder="0" width="100%" height="500" name="CRegyC38"></iframe>

#### Complexity Analysis

Let $M$ be the size of `words` and $N$ be the size of `queries`.

* Time Complexity: $O(M + N)$

    Calculating `prefixSum` array involves iterating through `words` once, which takes $O(M)$ time. Answering each query takes $O(1)$ time, which means answering all queries takes $O(N)$ time. Thus, the total time complexity is $O(M + N)$

* Space Complexity: $O(M)$

    Our only auxiliary data structure is the `prefixSum` array, which has size $M$, so the total space complexity is $O(M)$.

---