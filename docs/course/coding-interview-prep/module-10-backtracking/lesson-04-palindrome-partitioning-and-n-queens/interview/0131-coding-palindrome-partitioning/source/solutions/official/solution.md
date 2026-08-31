# Official Solution

**Link:** [https://leetcode.com/problems/palindrome-partitioning/solution/](https://leetcode.com/problems/palindrome-partitioning/solution/)

---

[TOC]

## Solution
---

### Overview

The aim is to partition the string into all possible palindrome combinations. To achieve this, we must generate all possible substrings of a string by partitioning at every index until we reach the end of the string. Example, `abba` can be partitioned as `["a","ab","abb","abba"]`. Each generated substring is considered as a potential candidate if it a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

Let's look at a few approaches to implement this idea.

---

### Approach 1: Backtracking

**Intuition**

The first idea is to generate all possible substrings of a given string and expand each possibility if it is a potential candidate. The first thing that comes to mind is [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search). In Depth First Search, we recursively expand potential candidates until the defined goal is achieved. After that, we backtrack to explore the next potential candidate.

[Backtracking](https://en.wikipedia.org/wiki/Backtracking) incrementally build the candidates for the solution and discards the candidates (backtrack) if they doesn't satisfy the condition.

The backtracking algorithms consists of the following steps:

- _Choose_: Choose the potential candidate. Here, our potential candidates are all substrings that could be generated from the given string.

- _Constraint_: Define a constraint that must be satisfied by the chosen candidate. In this case, the constraint is that the string must be a _palindrome_.

- _Goal_: We must define the goal that determines if have found the required solution and we must backtrack. Here, our goal is achieved if we have reached the end of the string.

**Algorithm**

In the backtracking algorithm, we recursively traverse over the string in depth-first search fashion. For each recursive call, the beginning index of the string is given as $$\text{start}$$.

1) Iteratively generate all possible substrings beginning at index $$\text{start}$$. The index $$\text{end}$$ increments from $$\text{start}$$ until the end of the string.

2) For each of the substrings generated, check if it is a palindrome.

3) If the substring is a palindrome, the substring is a potential candidate. Add the substring to the $$\text{currentList}$$ and perform a depth-first search on the remaining substring. If the current substring ends at index $$\text{end}$$, $$\text{end}+1$$ becomes the $$\text{start}$$ index for the next recursive call.

4) Backtrack if $$\text{start}$$ index is greater than or equal to the string length and add the $$\text{currentList}$$ to the result.


!?!../Documents/131_LIS.json:1772,888!?!

**Implementation**

<iframe src="https://leetcode.com/playground/FWW8Eqgj/shared" frameBorder="0" width="100%" height="500" name="FWW8Eqgj"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(N \cdot 2^{N})$$, where $$N$$ is the length of string $$s$$. This is the worst-case time complexity when all the possible substrings are palindrome.

Example, if s is `aaa`, the recursive tree can be illustrated as follows:

![img](../Figures/131/time_complexity.png)


Hence, there could be $$2^{N}$$ possible substrings in the worst case. For each substring, it takes $$\mathcal{O}(N)$$ time to generate the substring and determine if it is a palindrome or not. This gives us a time complexity of $$\mathcal{O}(N \cdot 2^{N})$$

- Space Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the length of the string $$s$$. This space will be used to store the recursion stack. For s = `aaa`, the maximum depth of the recursive call stack is 3 which is equivalent to $$N$$.

---

### Approach 2: Backtracking with Dynamic Programming

**Intuition**

This approach uses a similar backtracking algorithm as discussed in _Approach 1_. But, the previous approach performs one extra iteration to determine if a given substring is a palindrome or not. Here, we are repeatedly iterating over the same substring multiple times and the result is always the same. There are [overlapping subproblems](https://en.wikipedia.org/wiki/Overlapping_subproblems) and we could further optimize the approach by using dynamic programming to determine if a string is a palindrome in constant time. Let's understand the algorithm in detail.

**Algorithm**

A given string $$s$$ starting at index $$\text{start}$$ and ending at index $$\text{end}$$ is a palindrome if the following conditions are satisfied:
1) The characters at $$\text{start}$$ and $$\text{end}$$ indexes are equal.
2) The substring starting at index $$\text{start}+1$$ and ending at index $$\text{end}-1$$ is a palindrome.

![img](../Figures/131/palindrome_dp.png)

Let $$N$$ be the length of the string.
To determine if a substring starting at index $$\text{start}$$ and ending at index $$\text{end}$$ is a palindrome or not, we use a 2 Dimensional array $$\text{dp}$$ of size $$N \cdot N$$ where,

$$\text{dp[start][end]} = \text{true}$$, if the substring beginning at index $$\text{start}$$ and ending at index $$\text{end}$$ is a palindrome.

Otherwise, $$\text{dp[start][end] }== \text{false}$$.

Also, we must update the $$\text{dp}$$ array, if we find that the current string is a palindrome.  

**Implementation**

<iframe src="https://leetcode.com/playground/J9BcvQWt/shared" frameBorder="0" width="100%" height="500" name="J9BcvQWt"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(N \cdot 2^{N})$$, where $$N$$ is the length of the string $$s$$. In the worst case, there could be $$2^{N}$$ possible substrings and it will take $$\mathcal{O}(N)$$ to generate each substring using `substr` as in _Approach 1_. However, we are eliminating one additional iteration to check if the substring is a palindrome or not.

- Space Complexity: $$\mathcal{O}(N \cdot N)$$, where $$N$$ is the length of the string $$s$$. The recursive call stack would require $$N$$ space as in _Approach 1_. Additionally we also use 2 dimensional array $$\text{dp}$$ of size $$N \cdot N$$ .

This gives us a total space complexity of $$\mathcal{O}(N \cdot N)$$ + $$\mathcal{O}(N)$$ = $$\mathcal{O}(N \cdot N)$$