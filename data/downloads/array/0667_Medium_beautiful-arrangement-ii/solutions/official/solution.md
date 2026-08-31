# Official Solution

**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solution/](https://leetcode.com/problems/beautiful-arrangement-ii/solution/)

---

[TOC]

## Solution

---
### Approach #1: Brute Force [Time Limit Exceeded]

#### Intuition

For each permutation of $$\text{[1, 2, ..., n]}$$, let's look at the set of differences of the adjacent elements.

#### Algorithm

For each permutation, we find the number of unique differences of adjacent elements. If it is the desired number, we'll return that permutation.

To enumerate each permutation without using library functions, we use a recursive algorithm, where `permute` is responsible for permuting the indexes of $$\text{nums}$$ in the interval $$\text{[start, nums.length)}$$.

<iframe src="https://leetcode.com/playground/W4qmyVMQ/shared" frameBorder="0" width="100%" height="500" name="W4qmyVMQ"></iframe>

#### Complexity Analysis

* Time Complexity: $$O(n!)$$ to generate every permutation in the outer loop, then $$O(n)$$ work to check differences. In total taking $$O(n* n!)$$ time.

* Space Complexity: $$O(n)$$. We use $$\text{seen}$$ to store whether we've seen the differences, and each generated permutation has a length equal to $$\text{n}$$.

---

### Approach #2: Construction [Accepted]

#### Intuition

When $$\text{k = n-1}$$, a valid construction is $$\text{[1, n, 2, n-1, 3, n-2, ....]}$$. One way to see this is that we need to have a difference of $$\text{n-1}$$, which means we need $$\text{1}$$ and $$\text{n}$$ adjacent; then, we need a difference of $$\text{n-2}$$, etc.

Also, when $$\text{k = 1}$$, a valid construction is $$\text{[1, 2, 3, ..., n]}$$. So we have a construction when $$\text{n-k}$$ is tiny, and when it is large.  This leads to the idea that we can stitch together these two constructions: we can put $$\text{[1, 2, ..., n-k-1]}$$ first so that $$\text{n}$$ is effectively $$\text{k+1}$$, and then finish the construction with the first $$\text{"k = n-1"}$$ method.

For example, when $$\text{n = 6}$$ and $$\text{k = 3}$$, we will construct the array as $$\text{[1, 2, 3, 6, 4, 5]}$$. This consists of two parts: a construction of $$\text{[1, 2]}$$ and a construction of $$\text{[1, 4, 2, 3]}$$ where every element had $$\text{2}$$ added to it (i.e. $$\text{[3, 6, 4, 5]}$$).

#### Algorithm

As before, write $$\text{[1, 2, ..., n-k-1]}$$ first.  The remaining $$\text{k+1}$$ elements to be written are $$\text{[n-k, n-k+1, ..., n]}$$, and we'll write them in alternating head and tail order.

When we are writing the $$i^{th}$$ element from the remaining $$\text{k+1}$$, every even $$i$$ is going to be chosen from the head, and will have value $$\text{n-k + i//2}$$.  Every odd $$i$$ is going to be chosen from the tail and will have value $$\text{n - i//2}$$.

<iframe src="https://leetcode.com/playground/5qFVzdoP/shared" frameBorder="0" width="100%" height="293" name="5qFVzdoP"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array to be constructed, and let $k$ be the number of distinct absolute differences required.

- Time complexity: $O(n)$

    The algorithm consists of two loops:
    1. The first loop runs for $(n - k - 1)$ iterations, assigning values from $1$ to $(n - k - 1)$ to the array.
    2. The second loop runs for $(k + 1)$ iterations, assigning values in a specific pattern to create $k$ distinct absolute differences.

    Since both loops run in linear time with respect to $n$, the overall time complexity is $O(n)$.

* Space complexity: $O(1)$
    
    The algorithm uses a constant amount of extra space, including variables like `c`, `v`, and `i`. No additional data structures are used that scale with $n$. Therefore, the space complexity is $O(1)$ (excluding the output array). 

---