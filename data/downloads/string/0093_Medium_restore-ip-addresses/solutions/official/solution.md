# Official Solution

**Link:** [https://leetcode.com/problems/restore-ip-addresses/solution/](https://leetcode.com/problems/restore-ip-addresses/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Backtracking

#### Intuition


Since a valid IP address consists of 4 integers, that means we need to place 3 dots. We can try putting dots at all possible different positions using backtracking. If an invalid number is formed then we backtrack to try out another combination.

> Backtracking can be defined as a general algorithmic technique that considers searching every possible combination to solve a computational problem. It incrementally builds candidates to the solution and abandons a candidate ("backtracks") when it determines that the candidate cannot lead to the solution.

We will recursively enumerate all the possibilities and whenever we get a new integer because of a dot (or 2 integers for the last dot), we check whether the integer(s) is valid, i.e the integer cannot have leading 0s other than being 0 itself and it's no larger than 255.
There are 3 possibilities to add each dot, namely it can be added after 1, 2, or 3 digits from the last dot or the beginning of the string, so there are at most $3 ^ 3 = 27$ possibilities to add all 3 dots.

An optimization is to return an empty result if the input string's length is longer than 12 since each integer can have 3 digits at most (any more and it would either have leading zeroes or be greater than 255).

We can create a helper function `valid(s, start, length)` to check whether the substring from index `start` to `start + length` is a valid number from range 0-255. The logic is to check both the conditions (the caller guarantees that the length is in the range of [1, 3]):

1. If the substring's first character is `0` (i.e. `s[start]` is '0'), then `length` must be 1.
2. If `length` is `3`, the substring should no larger than "255" lexically. If the length is 1 or 2 and the first case was not triggered, then it will be in the acceptable range.

#### Algorithm

Create a function `helper` which takes the original string `s`, the processing index `startIndex` (i.e we only consider the substring starting from `startIndex` and the prefix part is already separated into valid integers.), a list of integers `dots` which saves distances for the dots we have added so far and a list of strings `ans` to save the answers.

1. Set `remainingLength` to `length of s - startIndex` which is the string length we want to process.
2. Set `remainingNumberOfIntegers` to `4 - dots.length`. This is how many integers we have left to form.
3. Return if `remainingLength` is larger than `remainingNumberOfIntegers * 3` or smaller than `remainingNumberOfIntegers`, since each integer has 1-3 digits. Also note that this catches the case where `s.length() > 12` since at the very beginning `remainingLength` is `s.length()` and `remainingNumberOfIntegers` is 4.
4. If `remainingNumberOfIntegers = 1`,
    * if the last integer `s.substring(startIndex, startIndex + remainingLength)` is valid
        * Create an empty string to save this answer using the following steps.
        * Set `last` to `0`.
        * Iterate over all elements `dot` in the list `dots`.
            * Append `s.substring(last, last + dot)` and a '.' into the answer string.
            * Increase `last` by `dot` and repeat these steps for each dot.
       * Append `s.substring(last, s.length)`. This is the final integer after the last dot.
       * Add the answer string into `ans`.
    * Return.
5. Iterate over `curPos` from `1` to `min(3, remainingLength)`. `curPos` is the number of digits we are including before placing a dot.
    * Place a dot by adding `curPos` into `dots`.
    * If the integer `s.substring(startIndex, startIndex + curPos)` is valid
        * Call helper(s, startIndex + curPos, dots, ans)
    * Remove the dot that we placed to backtrack.


#### Implementation

<iframe src="https://leetcode.com/playground/DYStKNxi/shared" frameBorder="0" width="100%" height="500" name="DYStKNxi"></iframe>


#### Complexity Analysis

Let's assume we need to separate the input string into $N$ integers, each integer is at most $M$ digits.

* Time complexity: $O(M ^ N \cdot N)$.

 There are at most $M ^ {N - 1}$ possibilities, and for each possibility checking whether all parts are valid takes $O(M \cdot N)$ time, so the final time complexity is $O(M ^ {N - 1}) \cdot O(M \cdot N)$ = $O(M ^ N \cdot N)$.

For this question, M = 3, N = 4, so the time complexity is $O(1)$.

* Space complexity: $O(M \cdot N)$.

  For each possibility, we save (N - 1) numbers (the number of digits before each dot) which takes $O(N)$ space. And we need temporary space to save a solution before putting it into the answer list. The length of each solution string is $M \cdot N + M - 1$ = $O(M \cdot N)$, so the total space complexity is $O(M \cdot N)$ if we don't take the output space into consideration.

For this question, M = 3, N = 4, so the space complexity is $O(1)$.


### Approach 2: Iterative

#### Intuition
We need to separate the input string into 4 integers, so we can enumerate the length of the first 3 integers, `len1`, `len2`, `len3`. We could iterate over `len1`, `len2`, `len3` with 3 nested loops and the last integer is the remaining part after separating out the first 3.

We can make the ranges of `len1`, `len2`, `len3` tighter:

* `len1` should be in the range `[max(1, s.length() - 9), min(3, s.length() - 3]` since we need to separate 3 more integers after it and the length of each integer is in [1..3].
* Similarly, `len2` should be in the range `[max(1, s.length() - len1 - 6, min(3, s.length() - len1 - 2]`
* `len3` should be in the range `[max(1, s.length() - len1 - len2 - 3), min(3, s.length() - len1 - len2 - 1]`

In this way, the last part's length is always in the range of `[1..3]`, then we can split each substring out based on the lengths and check whether they are valid. Each integer can be validated before starting the loop of the next part to prevent wasting time.


#### Algorithm

1. Initialize an array of strings `ans`.
2. Iterate over the range of `len1`, the length of the first integer.
    * If the first integer is valid, then we iterate over `len2`'s range. 
        * If the second integer is also valid, then we iterate over `len3`'s range.
           * If both third and fourth integers are valid, concatenate all four integers together with a character `'.'` between any 2 neighbors, and add the result string to `ans`.
3. Return `ans`.


#### Implementation

<iframe src="https://leetcode.com/playground/mcmi5hLS/shared" frameBorder="0" width="100%" height="500" name="mcmi5hLS"></iframe>


#### Complexity Analysis


Let's assume we need to separate the input string into $N$ integers, each integer is at most $M$ digits.

* Time complexity: $O(M ^ N \cdot N)$.

  We have $(N - 1)$ nested loops and each of them iterates at most $M$ times, so the total number of iterations is at most  $M ^ {N - 1}$ .

  In each iteration we split $N$ substrings out to check whether they are valid, each substring's length is at most $M$, so the time complexity to separate out all of them is $O(M \cdot N)$.

For this question, M = 3, N = 4, so the time complexity is $O(1)$.

* Space complexity: $O(M \cdot N)$.
 
The algorithm saves (N - 1) numbers (the number of digits before each dot) which takes $O(N)$ space. And we need temporary space to save a solution before putting it into the answer list. The length of each solution string is $M \cdot N + M - 1$ = $O(M \cdot N)$, so the total space complexity is $O(M \cdot N)$ if we don't take the output space into consideration.

For this question, M = 3, N = 4, so the space complexity is $O(1)$.

---