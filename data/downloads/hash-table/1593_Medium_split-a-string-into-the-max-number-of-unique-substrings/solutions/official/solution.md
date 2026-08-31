# Official Solution

**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solution/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solution/)

---

[TOC]

## Solution

--- 

### Overview

There are many patterns that can be recognized when solving data structures and algorithms (DSA) questions. Identifying these patterns by reading can help you solve problems more efficiently within your limited time. Over time and with practice, people start recognizing these patterns.

So this time before diving into the answer, let’s understand a few general patterns that you can use in your future journey:

Sorted Input:
- Apply binary search for efficient element lookup.
- Use the two-pointer technique for problems involving pairs or segments.

Unsorted Input:
- Apply dynamic programming for questions related to counting ways or optimizing values.
- Use backtracking for problems that ask for all possibilities or combinations (this is also a suitable fallback if dynamic programming isn’t going to work).
- Use a Trie for prefix matching and string-building scenarios.
- Use a hash map or set to find specific elements quickly.
- Implement a monotonic stack or sliding window technique for managing elements while continuously finding maximum or minimum values.

Input is a Graph or Tree:
- Use DFS to explore all paths or when the question does not require finding the shortest path.
- Use BFS when the question asks for the shortest path or fewest steps.
- For binary trees, use DFS if the problem involves exploring specific depths or levels.

Linked List Input:
- Use techniques involving slow and fast pointers or "prev" and "dummy" pointers to facilitate certain operations if you are unsure how to achieve a specific outcome.

> Note: There's so much more to this pattern! We just wanted to give you a glimpse of what pattern recognition boils down to in its simplest form. Feel free to add your own flair and create a detailed chart!

![gist](../Figures/1593/1593_mintotal.png)

</br>

In the context of this problem, many of you might initially assume that a DP approach would yield the correct solution, but it doesn’t work well here.

Suppose we’re currently examining the substring starting at `start` (our current index). Our goal is to split the remaining substring from `start` to `s.size() - 1` into smaller substrings such that:

- Each substring is non-empty.
- Each substring is unique, meaning it doesn’t match any substring we’ve already taken.

To solve this, we:
- Consider each possible substring starting from `start`, such as `s[start:start+1]`, `s[start:start+2]`, and so on, up to `s[start:s.size()]`.
- Attempt to add each of these substrings to our `seen` set and then recursively continue with the remaining characters.
- Only proceed if the substring, let’s call it `substring`, does not already exist in `seen`.

This is where we run into a limitation with DP: finding whether `substring` exists in the set of substrings from `0` to `start-1` is challenging. There are numerous ways to partition those characters into unique substrings, and the results vary depending on how those partitions are made. This makes the DP approach ineffective here, as the uniqueness constraint depends on the precise configuration of substrings.
 
Looking at the constraints, we can see that DFS combined with backtracking tends to have exponential complexity.

Specifically when the constraints are like this $1 < n \leq 16$. The expected time complexity likely involves $O(2^n)$. Any higher base, such as $20$ or a factorial, will be too slow (for instance, $3^{20} \approx 3.5$ billion, and $20!$ is significantly larger). An $O(2^n)$ complexity usually implies that, given a collection of elements, you are considering all subsets or subsequences—meaning for each element, you have two choices: either take it or leave it.

Since this bound is quite small, most algorithms will be efficient enough. Therefore, consider backtracking and recursion in these types of cases.

---

### Approach 1: Backtracking

#### Intuition

We start at the beginning of the string and generate substrings one by one. Each substring is checked against a set of previously seen substrings to ensure it is unique.

We initialize a set called `seen` to track the substrings we have already included in our current split. Then we can begin by checking if we have reached the end of the string. If we have, we return 0, indicating that no further substrings can be added.

Next to hold the maximum number of unique substrings we can form we will set a variable `maxCount` to zero. We then enter a loop, generating substrings by extending the endpoint from the current starting position. For each possible endpoint, we extract a substring and check if it is in the `seen` set.

If the substring is not present in the set, we add it to the `seen` set. We then make a recursive call, moving the starting point to the end of the current substring, to explore further splits from this new position. After the recursive call, we remove the substring from the `seen` set to backtrack and explore other potential substrings. 

By the end of the loop, we return the highest count of unique substrings we found during the exploration.

#### Algorithm

- Initialize an empty unordered set `seen` to track unique substrings encountered.

- Call the `backtrack` function starting from index `0` with the empty `seen` set.

- In the `backtrack` function:
  - If `start` equals the size of the string `s`, return `0` (base case: no more substrings to add).

  - Initialize `maxCount` to `0` to track the maximum number of unique substrings.

  - Use a loop to iterate over all possible substrings starting from index `start`:
    - For each `end` from `start + 1` to the size of `s`, extract the substring `s.substr(start, end - start)`.
    - If the substring is unique (i.e., not found in `seen`):
      - Insert the substring into the `seen` set.
      - Recursively call `backtrack` for the next position (`end`) and update `maxCount` with the maximum of its current value and `1 + backtrack(s, end, seen)` (including the current substring).
      - Backtrack by removing the substring from the `seen` set to explore other possibilities.

- After evaluating all substrings, return `maxCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/5jz6Euc3/shared" frameBorder="0" width="100%" height="500" name="5jz6Euc3"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string $s$.

- Time Complexity: $O(n^2 \cdot 2^n)$

    The function recursively explores all possible substrings of the input string. For each starting index `start`, it iterates over every possible end index `end`, which can be up to $n$, creating a nested loop structure that takes $O(n^2)$ per recursive depth due to the substring creation operation.

    Specifically, the substring operation $s[start:end]$ takes $O(k)$ time where $k$ is the length of the substring. Over all recursive calls, this results in $O(n^2)$ for each split due to the cumulative cost of substring operations at each level.

    In the worst case, there are $2^n$ possible ways to partition the string, as each character can either start a new substring or continue the previous one, forming an exponential number of combinations. Thus, the recursion branches exponentially, contributing an additional $O(2^n)$ factor.

    Combining these, we get a total time complexity of $O(n^2 \cdot 2^n)$. The $O(n^2)$ factor accounts for the cost of generating substrings within each partition, and the $O(2^n)$ factor represents the exponential number of partitioning combinations.

- Space complexity: $O(n)$

    The maximum depth of the recursion can go up to $n$ (in the worst case, where we split every single character into its own substring). Therefore, the call stack contributes $O(n)$.

    The unordered set `seen` can store at most $n$ unique substrings. In the worst case, this could also be $O(n)$, though in practice, the number of unique substrings is likely less than $n$ due to repetitions.

---

### Approach 2: Backtracking with Pruning

#### Intuition

We can build upon the first approach by adding a pruning mechanism to improve efficiency. We still begin with the same initial setup, using a set to keep track of unique substrings and a variable to store the maximum count of unique substrings found.

As with approach 1, we check if we have reached the end of the string. If we have, we update our maximum count if the current count of unique substrings exceeds it. However, In optimization problems like this, the usual trick of pruning is not to do further work if you can't improve the current answer.

We check whether the current count of unique substrings, combined with the remaining characters in the string, can yield a higher count than what we have already found. If this total cannot exceed our maximum count, we return immediately, skipping unnecessary calculations. This step significantly reduces the number of recursive calls, especially for longer strings.

More technically: If we're currently at `start`, and we've counted `count` unique substrings so far (stored in the `seen` set), and we take `s[start:end]` as a new unique substring, then there are at most `s.size() - end` unique substrings possible from `end` to the end of `s`.

This gives us a total of `count + 1 + (s.size() - end)` as the best possible result for the current choice of `s[start:end]`. For this to potentially improve our maximum so far, it must be greater than `maxCount`. If it’s not, we would be wasting work by exploring options that can, at best, only match the current `maxCount`.

So this let us:
- Return early from recursive calls if we can’t improve on the current best.
- When iterating over `end`, use the condition `if (count + (s.size() - start) <= maxCount) return;` to determine an upper bound for `end`, dynamically limiting the range and avoiding unnecessary recursion.

Next, we proceed to generate substrings just as in the backtracking approach. For each substring, we verify its uniqueness against the `seen` set. If it is unique, we add it to the set and continue exploring the remaining string by making a recursive call with the updated starting position and count of unique substrings. After the recursive call, we backtrack by removing the substring from the set.

In the end, return the maximum count of unique substrings found.

#### Algorithm

- Initialize an empty unordered set `seen` to keep track of unique substrings and set `maxCount` to `0`.
- Call the `backtrack` function starting from index `0`:
  - Pass the string `s`, current starting index `0`, the `seen` set, the current count of unique substrings `0`, and the reference to `maxCount`.
- In the `backtrack` function:
  - Prune: If the current count plus the number of remaining characters cannot exceed `maxCount`, return immediately to avoid unnecessary computations.
  - Base case: If the `start` index reaches the end of the string, update `maxCount` to be a maximum of `maxCount` and `count`.
  - Iterate through all possible substrings starting from the current `start` index:
    - For each ending index `end`, extract the substring from `s[start:end]`.
    - If the substring is unique (not found in `seen`):
      - Add the substring to the `seen` set.
      - Recursively call `backtrack` to explore further unique substrings from the next position `end` with an incremented count.
      - Backtrack by removing the substring from the `seen` set to explore other possibilities.

- After evaluating all substrings, return `maxCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/ScvnCEKu/shared" frameBorder="0" width="100%" height="500" name="ScvnCEKu"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `times` array.

- Time complexity: $O(n^2 \cdot 2^n)$
  
    The algorithm uses backtracking to explore all possible unique substrings. In the worst case, it may try every substring starting from each position in the string, which is exponential.

    Specifically, the substring operation $s[start:end]$ takes $O(k)$ time where $k$ is the length of the substring. Over all recursive calls, this results in $O(n^2)$ for each split due to the cumulative cost of substring operations at each level.

    In the worst case, there are $2^n$ possible ways to partition the string, as each character can either start a new substring or continue the previous one, forming an exponential number of combinations. Thus, the recursion branches exponentially, contributing an additional $O(2^n)$ factor.

    Combining these, we get a total time complexity of $O(n^2 \cdot 2^n)$. We might generate up to $2^n$ unique combinations of substrings, so the impact on the overall time complexity is encompassed in the $O(n^2 \cdot 2^n)$ term.

- Space complexity: $O(n)$

    The space complexity is largely determined by the `seen`, which can store up to $n$ unique substrings in the worst case. This contributes $O(n)$ to the space complexity.

    The maximum depth of the recursive call stack can also go up to $n$ in the worst case if the string is such that we keep making recursive calls without hitting the base case quickly. This also contributes $O(n)$ to the space complexity.

    Thus, the overall space complexity remains $O(n)$.

---