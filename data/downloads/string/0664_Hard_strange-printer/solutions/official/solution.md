# Official Solution

**Link:** [https://leetcode.com/problems/strange-printer/solution/](https://leetcode.com/problems/strange-printer/solution/)

---

[TOC]

## Solution

---

### Overview  

We have a printer designed to produce a string of lowercase English characters and we want to return the least number of turns it would take to print a given string. Normally, you would think the number of turns would be the number of characters in the string, but this printer has some bonus features that will let us reduce the number of turns. Instead of counting each key stroke as a turn, we count each time we change the character we are printing as a turn, and we can go back over what we've already typed.

The wording of the problem description, "The printer can **only** print a sequence of the same character each time.", makes it sound like a weird restriction, but it's really a loophole that will let us reduce the number of turns it takes to print the string when we combine it with the override feature. 

The second bullet point from the problem description is basically saying that we can go back and write over characters we have already printed in previous steps. You could think about it like using an old school typewriter: it always moves left to right, you have unlimited white-out, and for some reason you want to switch keys as few times as possible. 

As people have pointed out, no one wants to use this printer but we'll have to work with what we have. 

For example, consider the string `s` = `aba`. We can print it in two ways:

Method 1:
- Turn 1: Print `a`.
- Turn 2: Print `b` after `a`.
- Turn 3: Print `a` after `b`.

Method 2:
- Turn 1: Print `aaa`.
- Turn 2: Print `b` in the middle.

In this case, we'll return `2` as the least number of steps required.

Our clue to use dynamic programming is the requirement to find the least number of turns to achieve a goal. This suggests both optimal substructure and overlapping subproblems, where finding the minimum turns for different parts of the string often requires repeated calculations. Defining a state to represent the minimum turns needed to print a substring enables us to efficiently build the solution.

This is a difficult problem to solve, even after we understand what it's asking, so don't worry if it takes time to understand how to solve it. If you're not familiar with dynamic programming concepts, we recommend exploring the LeetCode Dynamic Programming [Explore Card](https://leetcode.com/explore/learn/card/dynamic-programming/630/an-introduction-to-dynamic-programming/4034/) and solving some beginner level problems before returning to this editorial. 

---

### Approach 1: Top Down Dynamic Programming (Memoization)

#### Intuition

Instead of analyzing the string from left to right, we want to consider the entire string and identify segments we can print in one turn. If the character at the end of one segment matches the start of the next, you can potentially print them in one turn and then override the middle character(s) in a later turn. We can see this done in Example 2 of the problem description. We'll explore all possible ways to split the string and find the combination that requires the fewest turns.

This decision-making process suggests a recursive structure for our solution. The recursive function will break down the string into smaller substrings and determine the minimum number of turns required for each substring. We will consider different ways of breaking the string and choose the most efficient option. For example:

```
s = "cabad"
Two possible ways to split this string are:
1. "c" + "aba" + "d"
2. "cab" + "ad"
In option (1), the "c" and "d" each take 1 turn to print, while "aba" takes 2 turns (as previously explained), resulting in a total of 4 turns.
In option (2), "cab" takes 3 turns, and "ad" takes 2 turns, totaling 5 turns.
Thus, the recursive function will prefer the first option.
```

With this understanding, we develop our algorithm step by step. To optimize runtime, we first remove consecutive duplicate characters in the input string. This reduction doesn't change the minimum number of turns needed but can significantly decrease the problem size. For example, it only takes one turn to print "a" when printing "aaabbb" since consecutive identical characters can be printed in a single turn.

We define a function `minimumTurns` that calculates the minimum number of turns needed to print the substring from index `start` to `end`. The recursive relation is as follows:

- **Base Case**: If `start` > `end`, the substring is empty and requires 0 turns.
- **Initial Case**: Start with the worst-case scenario: `1 + minimumTurns(start + 1, end)`. This means printing the first character separately and then printing the rest with no optimization applied. We initially set `minTurns` to this result.
- **Optimization Case**: To optimize, we look for matching characters. We break down the substring into two parts. If the first and last characters of the first part match, we can use the printer’s first property to save one turn by printing them together. If this approach results in fewer turns than `minTurns`, we update `minTurns`. Finally, `minTurns` will reflect the minimum turns required for the substring between `start` and `end`.

Check out this slideshow to visualize how matching first and last characters helps us save 1 turn:

!?!../Documents/664_re/slideshow.json:1022,782!?!

While the recursive solution alone has exponential time complexity, dynamic programming can optimize this approach. We avoid redundant computations by storing the results of sub-problems in a cache (a technique known as memoization).

```
s = "leetcode"
Two possible ways to split s are:
"le"|"et"|"co"|"de" and "l"|"eet"|"co"|"de"
Notice that "co"|"de" is common in both cases, indicating an overlapping subproblem.
```

We use a 2-D array `memo`, where `memo[start][end]` stores the minimum turns for the substring from `start` to `end`. This ensures that previously evaluated sub-problems are quickly accessed from the cache, saving computation time.

Finally, we call `minimumTurns` with the endpoints of the input string `s`, providing the required minimum number of turns to print the string.

#### Algorithm

Main method `strangePrinter`:

- Call the `removeDuplicates` method to remove consecutive duplicate characters from the string `s`.
- Set a variable `n` to the length of `s`.
- Initialize a 2-D array `memo` to store the minimum number of turns required to print substrings of `s`.
- Call the `minimumTurns` recursive method with arguments `start` = `0` and `end` = `n - 1`. Return the result.

Helper method `minimumTurns`:

- Define a method `minimumTurns` with parameters: `start`, `end`, the string `s`, and 2-D dp array `memo`.
- Check if the `start` index is greater than the `end` index. If true, return `0`.
- Check if `memo[start][end]` already contains a result. If so, return the result.
- Initialize a variable `minTurns` to to `1 + minimumTurns(start + 1, end)`, which is the worst-case scenario.
- Iterate through the substring from `start + 1` to `end`. For each index `k`:
  - Check if the character `s[k]` matches the character at `s[start]`. If so:
    - Calculate `turnsWithMatch` as the sum of `minimumTurns(start, k - 1)` and `minimumTurns(k + 1, end)`.
    - Update `minTurns` to be the minimum of its current value and `turnsWithMatch`.
- Store the computed `minTurns` value in `memo[start][end]`.
- Return `minTurns`.

Helper method `removeDuplicates`:

- Define a method `removeDuplicates` with the string `s` as a parameter.
- Create a string `uniqueChars` to store characters without consecutive duplicates.
- Iterate each character of `s`. For each index `i`:
  - Add the `currentChar` to `uniqueChars`.
  - Increment `i` till `s[i]` is not equal to `currentChar`.
- Return `uniqueChars`.

#### Implementation

<iframe src="https://leetcode.com/playground/5fu8xCML/shared" frameBorder="0" width="100%" height="500" name="5fu8xCML"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`. 

- Time complexity: $O(n^3)$

    The `removeDuplicates` method iterates through the string once, resulting in a time complexity of $O(n)$. However, the main complexity arises from the recursive `minimumTurns` function. 

    In the worst case, the algorithm considers all possible substrings of the input string. For a string of length $n$, there are $\frac{n(n+1)}{2}$ possible substrings. For each substring, the algorithm iterates through it once to find matching characters, which is $O(n)$. Thus, the overall time complexity is $O\left(n \cdot \frac{n(n+1)}{2}\right)$, which simplifies to $O(n^3)$.

    Therefore, the total time complexity of the algorithm is $O(n) + O(n^3) = O(n^3)$.

- Space complexity: $O(n^2)$

    The 2-D array `minTurns` has dimensions $n \times n$, requiring $O(n^2)$ space. Additionally, in the worst case, the depth of the recursive call stack can reach up to $n$.

    Hence, the overall space complexity of the algorithm is $O(n^2) + O(n) = O(n^2)$.

---

### Approach 2: Bottom Up Dynamic Programming (Tabulation)

#### Intuition

In our previous approach, we used a top down recursive solution with memoization, which, while effective, can lead to stack overflow issues with very large inputs due to deep recursion. To optimize further, we’ll switch to a bottom up dynamic programming approach to eliminate recursion.

Instead of solving the problem from the top down (starting with the entire string and recursively breaking it into smaller parts), we will build our solution from the bottom up. This involves solving the smallest sub-problems first and progressively combining their solutions to address larger sub-problems until we solve the full problem.

We’ll use a 2-D array `minTurns` of size `n x n`, where `minTurns[i][j]` represents the minimum number of turns needed to print the substring from index `i` to `j` (inclusive).

First, we set up the base case: substrings of length 1 require 1 turn to print a single character.

Next, we address substrings of all possible lengths from 2 to `n`. For each length, we examine all possible starting positions for substrings of that length. We explore all possible ways to split each substring to determine the minimum number of turns required.

When considering a split, if the character at the split matches the character at the end of the substring, we can reduce the number of turns needed by printing these characters together. The minimum number of turns required for each substring is derived from the smallest value obtained across all possible splits.

After populating the table, the minimum number of turns needed to print the entire input string `s` will be stored in `minTurns[0][n-1]`.

#### Algorithm

Main method `strangePrinter`:

- Call the `removeDuplicates` method to remove consecutive duplicate characters from the string `s`.
- Set a variable `n` to the length of the `s`.
- Initialize a 2-D array `minTurns` to store the minimum number of turns required to print substrings of `s`.
- To set the base case, iterate `i` from `0` to `n`:
  - Set `minTurns[i][i]` to `1`.
- Use a loop to iterate over increasing lengths of substrings, starting from `2` and going up to `n`:
  - For each substring `length`, iterate over possible starting indices `start` from `0` to `n - length + 1`:
    - Calculate the ending index `end` as `start + length - 1`.
    - Set `minTurns[start][end]` to `length`, assuming the worst case where each character is printed separately.
    - Try all splits of the substring between `0` to `length-2`:
      - Initialize `totalTurns` as the sum of `minTurns[start][start + split]` and`minTurns[start + split + 1][end]`.
      - If the character at the split position `s[start + split]` matches the character at the end `s[end]`, reduce `totalTurns` by `1`.
      - Update `minTurns[start][end]` to be the minimum of its current value and `totalTurns`.
- Return `minTurns[0][n - 1]` as our answer.

Helper method `removeDuplicates`:

- Define a method `removeDuplicates` with the input string `s` as a parameter.
- Initialize a string `uniqueChars` to store characters without consecutive duplicates.
- Loop through each character of `s`. For each index `i`:
  - Add the `currentChar` to `uniqueChars`.
  - Increment `i` till `s[i]` is not equal to `currentChar`.
- Return `uniqueChars`.

#### Implementation

<iframe src="https://leetcode.com/playground/ivdnsqVH/shared" frameBorder="0" width="100%" height="500" name="ivdnsqVH"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`.

* Time complexity: $O(n^3)$

    The initialization of the `minTurns` 2-D array and setting up base cases both take $O(n)$ time. Filling the DP table involves three nested loops:

    1. The outer loop iterates over substring lengths from 2 to $n$, running $n−1$ times.
    2. The second loop iterates over possible starting indices for each substring, running up to $n$ times.
    3. The innermost loop iterates over possible split points, also running up to $n$ times.

    As a result, the time complexity for filling the DP table is $O((n-1) \cdot n \cdot n)$, which simplifies to $O(n^3)$. Additionally, the `removeDuplicates` method, which iterates through the string `s` once, has a linear complexity of $O(n)$. 

    Therefore, the overall time complexity of the algorithm is $2 \cdot O(n) + O(n^3) = O(n^3)$.

* Space complexity: $O(n^2)$

    The `minTurns` 2-D array, with dimensions $n \times n$, requires $O(n^2)$ space. The processed string `s` (after removing duplicates) takes up $O(n)$ space. 

    Consequently, the overall space complexity of the algorithm is $O(n^2) + O(n) = O(n^2)$.

---