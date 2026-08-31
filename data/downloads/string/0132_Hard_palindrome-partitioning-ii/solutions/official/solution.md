# Official Solution

**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solution/](https://leetcode.com/problems/palindrome-partitioning-ii/solution/)

---

[TOC]

## Solution

---
### Overview

The problem is to partition the given string `s` into palindromic substrings such that the number of partitions is _minimum_.

Now, how can we achieve this?
Generate all possible substrings of the string `s` that are palindromes and find the number of cuts. In the end, you will find the partitioning scheme with the minimum number of cuts.

If you have solved similar problems before like [Palindrome Partitioning I](https://leetcode.com/problems/palindrome-partitioning/), you know that this can be implemented using backtracking. But there is more to it. It is interesting to see how this problem touches various algorithm concepts as we move forward towards more optimized solutions.

It is recommended for the reader to be patient and read through all the approaches as it will help in understanding how a naive solution can be iteratively optimized into an efficient solution. So stay tuned!!

---
### Approach 1: Backtracking

**Intuition**

In this approach, we will partition the given string `s` in all possible ways such that, each substring is a palindrome. In the end, we can find the partitioning scheme with the minimum cut.

Consider string `s = aab`. Let's take a pen and paper and find the palindromic partitioning of this string.

_First Iteration_

    string = "aab", Number of cuts = 0

Pick the first substring beginning with the start of the string: `a`. (**a**ab)

   As `a` is a palindrome, place a cut after the first `a` and move ahead towards the remaining substring.

![img](../Figures/132/Approach1_iteration1_1.png)

    string = `ab`, Number of cuts = 1

   Again, `a` is a palindrome. (a**a**b) Place a cut after 2nd `a` and move towards the remaining substring.

![img](../Figures/132/Approach1_iteration1_2.png)

    string = `b`, Number of cuts = 2

  The next substring `b`(aa**b**) is also a palindrome. With this, we have reached the end of the string. We have found our first palindrome partitioning scheme wherein each substring is a palindrome.

![img](../Figures/132/Approach1_iteration1_finalConfig.png)

Now, we will go back to `string = b` and `number of cuts = 1`  and choose the next substring `ab` (a**ab**), but since it is not a palindrome, we will not explore this choice.

Let's go back to the original substring again and find out other possible ways to partition the string.

_Second Iteration_

    string = `aab`, Number of cuts = 0

In the previous iteration, we picked up the first substring `a` and found a partitioning scheme. Let's move ahead to pick the next
substring `aa` (**aa**b)

    string = `b`, Number of cuts = 1

![img](../Figures/132/Approach1_iteration2.png)

The next substring `b`(aa**b**) is a palindrome. With this, we have reached the end of the string and we found our 2nd palindrome partitioning scheme.

![img](../Figures/132/Approach1_iteration2_finalConfig.png)

_Third Iteration_

    string = `aab`, Number of cuts = 0

In this iteration, we would pick the next substring `aab` (**aab**). It is not a palindrome. As we have reached the end of the string, we terminate our search.

We can conclude that we found 2 possible partitioning schemes such that each substring is a palindrome and the minimum cut obtained is `1`.

![img](../Figures/132/Approach1_bestSolution.png)

What are we doing here?

We are breaking the string `aab`  into all possible substrings, starting with `a`, then `aa`, then `aab`, and so on. If any of the substrings is a palindrome, we are placing a cut at that position and continuing the same process for the remaining string.

That's exactly how [Backtracking]( https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/) works!! It incrementally builds the candidates for the solution and discards the candidates (backtrack) if it doesn't satisfy the condition.

In the Backtracking algorithm we must identify following parameters:

_Choose Candidates_: The potential candidates are all substrings that can be generated from the given string.

_Define Constraint_: We will explore a potential candidate if and only if it is a _palindrome_.

_Identify Terminating Condition_: The search will terminate when we reach the end of the string.

Let's understand how we can implement this approach.

**Algorithm**

1. The backtracking algorithm is implemented by recursively exploring the candidate substrings. We define a recursive method `findMinimumCut` that will find the minimum number of cuts for a substring starting at index `start` and ending at index `end`.

    To find the minimum cuts, we must also know the minimum cuts seen so far for other palindrome partitions. This information is tracked in the variable `minimumCut`.

   The initial value of `minimumCut` would be the maximum possible number of cuts in a string which is equal to the length of string _minus_ 1 (i.e. cut in between each character).

2. Now, that we know the `start` and `end` indices, we must generate all possible substrings beginning at the `start` index. For this, we will keep the `start` index constant. The `currentEndIndex` marks the end of the current substring.

    If the current substring is a palindrome, we will place a cut after `currentEndIndex` and recursively find the minimum cut for the remaining string.

  The minimum cut will be calculated as,

     Minimum( minimum cut seen so far, 1 + minimum cuts for the remaining substring )

The following figure illustrates how the recursive backtracking process works:

![img](../Figures/132/Approach1_Recursion_tree.png)

**Implementation**

<iframe src="https://leetcode.com/playground/5V5cAESy/shared" frameBorder="0" width="100%" height="500" name="5V5cAESy"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N \cdot 2^N)$$, where `N` is the length of string `s`.

   Let's understand the time complexity of the backtracking method call `findMinimumCut` given by `T(N)`.

   For a string of size `N` the recursive method `findMinimumCut` will recur for substrings of size `N-1`, `N-2`, `N-3` and so on. This can be written as,

   $$T(N) = T(N-1) + T(N-2) + ... + T(1)$$.   

   Similarly, T(N - 1) can be written as,

   $$T(N - 1) = T(N-2) + T(N-3) + ... + T(1)$$

   Subtracting the above 2 expressions and solving the expression, we get,

   $$T(N) = 2T(N-1)$$   

   The time complexity of above recurrence relation is given by,

    $$T(N) = O(2 ^ N)$$

    >  $$T(N) = 2T(N-1)$$          ... _Equation 1_  
    >  
    > Substituting N = N - 1 in _Equation 1_
    >
    >  $$T(N - 1) = 2T(N-2)$$    ... _Equation 2_  
    >   
    > Putting the value of _Equation 2_ in _Equation 1_
    >
    > $$T(N) = 2 \cdot [2T(N-2)]$$
    >
    > $$T(N) = 4T(N-2)$$    ... _Equation 3_  
    >
    > Substituting N = N - 2 in _Equation 1_
    >
    >  $$T(N - 2) = 2T(N- 3)$$    ... _Equation 4_
    >
    > Putting the value of _Equation 4_ in _Equation 3_
    >
    > $$T(N) = 4 \cdot [2T(N- 3)]$$    
    >
    > $$T(N) = 8T(N- 3) = 2^KT(N- K)$$  ... _Equation 5_
    >
    > Substituting K = N in _Equation 5_
    >
    > $$T(N) = 2^NT(N- N)$$
    >
    > $$T(N) = 2^N = O(2 ^ N)$$


   Thus, we can say that for a given string of size $$N$$, the worst-case time complexity of the recursive method call `findMinimumCut` would be $$O(2 ^ N)$$.
Additionally, to check if a substring is a palindrome or not we must iterate $$O(N/2)$$ times within each recursive call.

   This gives us total time complexity of $$O(2 ^ N) \cdot O(N/2) = O(2 ^ N \cdot N)$$.

   This approach is exhaustive and results in _Time Limit Exceeded(TLE)_.

* Space Complexity: $$O(n)$$. The recursive method uses an internal call stack. In this case, if we place a cut after every character in the string `(a|a|b)`, the size of the internal stack would be at most `n`.

---
### Approach 2: Dynamic Programming - Top Down (Recursion, Memoization)

**Intuition**

We found that the Backtracking approach is exhaustive. What do we observe?

In the above recursion tree, the result of substring `b` for `s = aab` is calculated twice. For larger substrings, there would be many such substrings for which the results would be unnecessarily computed again and again. In fact, for every repeated computation the results would be always the same.

> How about if our algorithm remembers the result for a subproblem when it is computed the first time and reuses the stored result every other time.

If you have learned the basics of [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming), you know that if a recursive problem computes and solves the same subproblem multiple times, it has an _Overlapping Subproblem_ property. Such problems can be optimized using a dynamic programming technique called Memoization.

In this approach, the result after computing minimum cuts for a substring is stored. The subsequent calls can look at these stored results before going ahead and computing the minimum number of cuts for a substring.
Moreover, we can observe that the same optimization can be also applied to determine if a substring is a palindrome.

The following figure illustrates the recursive tree for s = `aaab` and how we can use memoization to optimize the approach.

![img](../Figures/132/Approach2_Recursion_tree.png)

> Fact: The recursion plus memoization approach starts with the larger problem and recursively breaks it into smaller subproblems. Hence it is also called Top-Down Dynamic Programming.

**Algorithm**

-  To record the results of computation on every substring, we must store the substring and its result.

   Now, instead of storing the substring, we can just store its `start` and `end` index. We will use a 2-dimensional array `memoCuts`, where the value of  `memoCuts[start][end]` would give the minimum number of cuts for a substring starting at index start and ending at index `end`.

   Similarly, we need another 2-dimensional array `memoPalindrome` to store the results for palindrome computations.

   The implementation is the same as in _Approach 1_ with the following differences in each recursive call:

- In `findMinimumCut`, check if `memoCuts` has the result for the current substring. If so, return the result, otherwise, proceed with the next steps to compute the result.

- After computing the result, store the result in `memoCuts[start][end]`.

- A similar approach is followed in `isPalindrome` to store the results of palindrome computations.

**Implementation**

<iframe src="https://leetcode.com/playground/3fmHf7Lk/shared" frameBorder="0" width="100%" height="500" name="3fmHf7Lk"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2 \cdot N)$$, where `N` is the length of string `s`.

   In the recursive method `findMinimumCut`, we are calculating the results for any substring only once. We know that a string size $$N$$ has $$N^2$$ possible substrings. Thus, the worst-case time complexity of the recursive method `findMinimumCut` is $$O(N^2)$$.

   Additionally, within each recursive call, we are also checking if a substring is palindrome or not. The worst-case time complexity for method `isPalindrome` is $$O(N/2)$$.

   This gives us total time complexity as, $$O(N ^ 2) \cdot O(N/2) = O(N ^ 2 \cdot N)$$

* Space Complexity: $$O(N ^ 2)$$, as we are using two 2-dimensional arrays `memoCuts` and `memoPalindrome` of size $$N \cdot N$$.

   This gives us total space complexity as $$(N^2 + N^ 2) = N^2$$.

---
### Approach 3: Dynamic Programming - Top Down (Optimized Space Complexity)

**Intuition**

In _Approach 2_, we used a 2-dimensional array for `memoCuts`. On careful observation, we notice that when we update or access the stored values to or from `memoCuts`, the value of variable `end` always remains the same.

Thus, we only need to track and update the `start` index when finding the minimum number of cuts. The `memoCuts[start]` will determine the minimum number of cuts for a substring starting at index `start` and ending at index `length(s) - 1`.

**Algorithm**

The algorithm is similar as in _Approach 2_ with a minor difference:

- Store the results of a substring starting at index `start` in `memoCuts[start]`.

- Before calculating the result of any substring starting at index `start` and ending at index `end`, check if `memoCuts[start]` already contains the computed result.

**Implementation**

<iframe src="https://leetcode.com/playground/JPo5SP5i/shared" frameBorder="0" width="100%" height="500" name="JPo5SP5i"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2 \cdot N)$$, where `N` is the length of string `s`.

  The time complexity is the same as in _Approach 2_.

* Space Complexity: $$O(N ^ 2)$$, as we are using one 1-dimensional array `memoCuts` of size $$N$$ and one 2-dimensional array `memoPalindrome` of size $$N \cdot N$$.
 This gives us a total space complexity of $$(N + N^ N) = N^2$$.

---
### Approach 4: Dynamic Programming - Bottom Up (Tabulation)

**Intuition**

There is yet another technique to implement Dynamic Programming problems. Here, we will use an iterative approach and store the result of subproblems in a bottom-up fashion, also known as Tabulation.

> Challenge: Can you try this on your own?

We must understand that the basic insight of dynamic programming: to compute the result of a problem, we must first compute the results of its subproblems. For example, to find the minimum number of cuts for the string `aab`, we must know the result for all the substrings `a`, `aa`, `ab`, and so on.

Memoization follows the top-down approach. We started by finding the result for the original string `aab` and recursively moved towards computing the result of smaller subproblems like `a`, `aa`, `ab`.

Tabulation solves it in a bottom-up manner. We must compute the results of all the subproblems before moving towards the larger problem. As the name suggests, the results of subproblems are stored in a table which can be referred to in the future for computing the result of a larger problem.

**Algorithm**

1. Bottom-up Dynamic Programming follows an iterative approach to solve the problem. We have to start by finding the minimum possible cuts in the smallest substring and move towards a larger substring.

    This can be implemented using a nested loop. The outer loop sets the upper bound for the substring index with variable `end`. The inner loop takes each substring between `start` and `end` and calculates the minimum number of cuts for substring from index 0 to `end`.

2. Build a one-dimensional array `cutsDp` to store the results of subproblems. `cutsDp[i]` stores the minimum number of cuts for a substring ending at index `i`.

3. Calculating the minimum number of cuts is similar to the Memoization approach.

   Initially, the `minimumCut` will be equal to the maximum possible cuts for a substring. So for a substring ending at index `end`, the `minimumCut` would be equal to the value of index `end`.

   The minimum cut for `s.substring(start, end)` can be calculated as,

       minimum(minimumCut, Minimum cuts for substring s(start, end))
       Minimum cuts for substring s(start, end) = 1 + Minimum cuts for substring s(0, start - 1)

   Minimum cuts for substring `s.substring(0, start - 1)` is equivalent to finding the result for substring ending at index `start - 1` which can be given by `cutsDp[start - 1]`. So, we can say that,

       Minimum cuts for s.substring(start, end) = 1 + cutsDp[start - 1]

   In the end, we will store the results of the current calculation at `cutsDp[end]` as every chosen substring ends at index `end`.

4. We are using a similar iterative approach to check if a substring is a palindrome or not. We will build the `palindromeDp` beforehand. While finding the minimum cuts will refer to the stored values in `palindromeDp` and proceed only if the current substring is a palindrome. Refer to Approach 2 in [Palindrome Partitioning Solution](https://leetcode.com/problems/palindrome-partitioning/solution/).

5. Return the minimum number of cuts for the original substring starting at index `0` and ending at `n - 1` which will be given by `cutsDp[n - 1]`.

**Implementation**

<iframe src="https://leetcode.com/playground/bdsVm93B/shared" frameBorder="0" width="100%" height="500" name="bdsVm93B"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where `N` is the length of string `s`.

   We are iterating $$N \cdot N$$ times to build the `palindromeDp` array and $$N \cdot N$$ times to find the minimum cuts in a nested for-loop. This gives us a total time complexity of $$ O(N \cdot N) + O(N \cdot N) = O(N \cdot N)$$.

* Space Complexity: $$O(N ^ 2)$$, as we are using a 2-dimensional arrays `palindromeDp` of size $$N \cdot N$$ and a 1-dimensional array `cutsDp` of size $$N$$. Thus, the space complexity can be given by, $$ O(N \cdot N) + O(N) = O(N \cdot N)$$.

---
### Approach 5: Optimized Tabulation Approach

**Intuition**

In Approach 4, we built the palindrome array beforehand. However, both the process of building the palindrome array and finding the minimum cuts iterate in a similar fashion.
There is no need to build the array beforehand. We can combine both processes into a single loop.
There is no need to build the matrix beforehand. We can combine both processes into a single loop.

**Algorithm**

- Iterate over the string and generate all possible substrings in a nested for loop as in _Approach 4_.

- Check if the substring is a palindrome using the previously calculated values in `palindromeDp`.
   If the substring is a palindrome, update the results in the `palindromeDp` array. Keep doing this to find the minimum cut for the substring ending at index `end` and save it in `cutsDp[end]`.

**Implementation**

<iframe src="https://leetcode.com/playground/oAV77T24/shared" frameBorder="0" width="100%" height="500" name="oAV77T24"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where `N` is the length of string `s`.

   We are iterating $$N \cdot N$$ times only once to find the minimum cuts.

* Space Complexity: $$O(N ^ 2)$$, as we are using two 2-dimensional arrays `palindromeDp` and  1-dimensional array `cutsDp` of size $$N \cdot N$$. Thus the space complexity can be given by, $$ O(N \cdot N) + O(N) = O(N \cdot N)$$ .
---

### Approach 6: Expand Around the Center

**Intuition**

This approach takes advantage of _Palindrome Property_. We know that a palindrome is a sequence of characters that reads the same backward and forward. If you cut any palindromic string at the center, the characters from the middle till the beginning of the string would be the same as the characters from the middle till the end.
In other words, the palindromic string mirrors around the center.

![img](../Figures/132/Approach5_figure1.png)

We will fix the middle index and expand the string in both directions,
1. The `start` index will begin at the middle index and expand to the left (towards the beginning of the string).
2. The `end` index will begin at the middle index and expand to the right (towards the end of the string).

This expansion will continue as long as `s[start] == s[end]`, making the substring a palindrome. Once we have found the boundaries of our current palindromic string, we will place a cut after the `end` index.

In this way, we will fix every index in the string as a middle index and find the palindrome around that index. We will also take the advantage of pre-calculated results using the dynamic programming technique (tabulation).

**Algorithm**

1. Build an array `cutsDp` to store the results of every computation. Initially, the value of `cutsDp[i]` would be the maximum possible number of cuts till index `i`, which is equivalent to `i`.

   As we progress, after every computation of minimum cuts for a substring ending at index `i`, the value of `cutsDp[i]` would be updated.

2. Start by fixing the middle index `mid` at every position beginning from index `0` till the index length to string `s`.

    We know from the above examples that, for even length palindromes, the middle index is between 2 characters (_Example: noon_) and for odd length palindromes the middle index is at 1 character. (_Example: madam_). To consider both scenarios, we will expand around the middle index twice.

   - First, check if there is an odd length palindrome around the middle index. The `start` and `end` index will begin iteration from the `mid` position.

    - Second, check if there is an even-length palindrome around the middle index. The `end` index will begin iteration from the `mid` position and the `start` index will begin from the `mid - 1` position.

![img](../Figures/132/Approach5_figure2.png)

3. The substring will be expanded i.e `start` index would be _incremented_ and `end` index _decremented_ until the characters at those indices are the same.

    As the expansion stops, we will place a cut after the `end` index. This can be calculated as,

        Minimum cuts at end = Minimum(Cuts calculated so far, 1 + Minimum cuts at (start - 1))

    The cuts calculated so far for substring ending at `end` index can be given by `cutsDp[end]` and minimum cuts for a substring ending at `start - 1` index can be given by `cutsDp[start - 1]`.

![img](../Figures/132/Approach5_figure3.png)

4. After every computation, update `cutsDp[end]` with a new minimum value.

5. At the end return `cutsDp[n - 1]` that has the value of the minimum number of cuts for the original string ending at index `n - 1`.


**Implementation**

<iframe src="https://leetcode.com/playground/ZhSvdkSc/shared" frameBorder="0" width="100%" height="500" name="ZhSvdkSc"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where `N` is the length of string `s`.

   The outer loop that fixes the middle index iterates $$N$$ times. The are 2 inner loops iterates for $$N/2$$ times each. This gives us time complexity as, $$O(N \cdot (N/2 + N/2)) = O(N ^ 2)$$.

* Space Complexity: $$O(N)$$, as we are using single 1 dimensional array `cutsDp` of size $$N$$.