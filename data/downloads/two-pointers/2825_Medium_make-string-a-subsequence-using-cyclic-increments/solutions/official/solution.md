# Official Solution

**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solution/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find if `str2` can be made a subsequence of `str1` by performing at most one cyclic increment operation on any character of `str1`.

Before diving into the approaches, let's first understand two key concepts: the definition of a subsequence and the cyclic nature of characters.

##### 1. Subsequence Definition

A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements. For example, `"ace"` is a subsequence of `"abcde"` because you can obtain `"ace"` by removing `'b'` and `'d'` from `"abcde"` while maintaining the order of the remaining characters.

##### 2. Cyclic Nature of Characters

The cyclic nature of characters refers to the wrap-around behavior in the alphabet. Specifically, when you increment a character, it moves to the next character in the alphabet. For example, `'a'` becomes `'b'`, `'b'` becomes `'c'`, and so on. However, when you reach `'z'`, the next character wraps around to `'a'`. This is important to consider because our problem allows for at most one cyclic increment on any character in `str1`.

---

### Approach 1: Brute Force (Time Limit Exceeded)

#### Intuition

If `str2` is already a subsequence of `str1` without any modifications, we can immediately return `true`. However, if `str2` is not a subsequence, we need to explore the possibility of transforming `str2` into a subsequence by incrementing certain characters in `str1`. A logical first solution would be to consider all possible combinations of characters in `str1` that could be incremented. For each character in `str1`, we have two options: either increment it or leave it unchanged.

To explore all combinations, we can use a bitmask where each bit represents whether a particular character in `str1` should be incremented. For example, if `str1` has `3` characters, there are $2^3 = 8$ possible combinations $(000, 001, 010, 011, 100, 101, 110, 111)$. A bit set to `1` means the character is incremented, and a bit set to `0` means it is not.

To implement this, we need two helper functions:

1. `getNextChar`: This function takes a single character as input and returns the next character in the alphabet, wrapping from `'z'` to `'a'`
2. `isSubsequence`: This function checks if `str2` is a subsequence of `str1` by iterating through both strings and ensuring that all characters of `str2` appear in order within `str1`.

In the main function `canMakeSubsequence`, we iterate through all possible bitmasks. For each mask, we create a temporary copy of `str1` and apply the increments based on the mask. We then check if `str2` is a subsequence of the modified `str1`. If it is, we return `true`. If no combination works, we return `false`.

Unfortunately, this approach will time out due to its exponential time complexity, as it explores all possible combinations of character increments.

#### Algorithm

- Define the helper function `getNextChar` to get the next character cyclically:
  - If the character is `'z'`, return `'a'`.
  - Otherwise, return the next character by incrementing the ASCII value.

- Define the helper function `isSubsequence` to check if `str2` is a subsequence of `str1`:
  - Initialize `str1Index` and `str2Index` to `0` to track positions in both strings.
  - Traverse through both strings with a `while` loop:
    - If the characters at `str1[str1Index]` and `str2[str2Index]` match, increment `str2Index`.
    - Always increment `str1Index`.
  - After the loop, check if all characters in `str2` were matched (i.e., if `str2Index == lengthStr2`).

- Define the main function `canMakeSubsequence`:
  - Get the length of `str1`.
  - Iterate through all possible combinations of character increments in `str1` using bitmasking (from `0` to `(1 << lengthStr1) - 1`):
    - For each combination (`mask`), create a temporary string `temp` that is a copy of `str1`.
    - For each character in `str1`, check if the corresponding bit in the `mask` is set:
      - If set, increment the character in `temp` using `getNextChar`.
    - After modifying `temp`, check if `str2` is a subsequence of `temp` using the `isSubsequence` function.
    - If `str2` is found as a subsequence, return `true`.

- If no combination makes `str2` a subsequence of `str1`, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/TFAwV9oY/shared" frameBorder="0" width="100%" height="500" name="TFAwV9oY"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `str1` and $m$ be the length of the string `str2`.

- Time complexity: $O(2^n \cdot n \cdot m)$

    The algorithm iterates through all possible combinations of character increments using a bitmask. There are $2^n$ possible masks, and for each mask, it modifies the string `str1` in $O(n)$ time. After modifying the string, it checks if `str2` is a subsequence of the modified string, which takes $O(n \cdot m)$ time in the worst case. Therefore, the overall time complexity is $O(2^n \cdot n \cdot m)$.

- Space complexity: $O(n)$

    The algorithm uses an additional string `temp` of length $n$ to store the modified version of `str1`. Additionally, it uses a few integer variables to keep track of indices and lengths. The space used for these variables is constant and does not depend on the input size. Therefore, the space complexity is $O(n)$.

---

### Approach 2: Optimized Single Pass (Two Pointer)

#### Intuition

To solve this more efficiently, we can aim to complete the task in a single pass through `str1`. We start by iterating through `str1` and `str2` simultaneously using two pointers. For each character in `str1`, we check if it matches the current character in `str2` or if it can be incremented to match `str2`. Specifically, we check if `str1[str1Index]` is equal to `str2[str2Index]`, or if incrementing `str1[str1Index]` once (cyclically) results in `str2[str2Index]`. In an edge case, this means that after `'z'`, we wrap around to `'a'`.

To handle this cyclic increment, we need to consider two specific conditions: 
1. Direct Increment: If the character in `str1` can be directly incremented by one to match the character in `str2`, we use the condition `str1[str1Index] + 1 == str2[str2Index]`. 
   - For example, if `str1[str1Index]` is `'a'` and `str2[str2Index]` is `'b'`, then `'a' + 1` equals `'b'`.
2. Wrap-Around: If the character in `str1` is `'z'`, incrementing it by one should wrap around to `'a'`. To handle this wrap-around, we use the condition `str1[str1Index] - 25 == str2[str2Index]`. This is because the ASCII value of `'z'` is `122`, and the ASCII value of `'a'` is `97`. So, `'z' + 1` would be `123`, which is out of the alphabet range. Instead, we subtract `25` to wrap around to `'a'`.
 
The algorithm is visualized below:

!?!../Documents/2825/2825_two_pointer.json:770,555!?!

> For a more comprehensive understanding of the two-pointer technique, explore the [Two Pointer Explore Card 🔗](https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/). This resource provides an in-depth look at the two-pointer approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize `str2Index` to `0` to keep track of the current position in `str2`.
- Get the length of `str1` and `str2` and store them in `lengthStr1` and `lengthStr2`.

- Loop through each character of `str1` with `str1Index` starting from `0`, stopping when either the end of `str1` or `str2` is reached:
  - If the character `str1[str1Index]` matches `str2[str2Index]`, or if the character `str1[str1Index]` can be incremented or decremented (by `1` or by `25` respectively) to match `str2[str2Index]`:
    - Move to the next character in `str2` by incrementing `str2Index`.
  
- After traversing `str1`, if `str2Index` equals `lengthStr2`, this means all characters in `str2` have been successfully matched with corresponding characters in `str1`. Return `true`.

- If not all characters in `str2` were matched by the end of the loop, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/3vW3wxMm/shared" frameBorder="0" width="100%" height="497" name="3vW3wxMm"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `str1` and $m$ be the length of the string `str2`.

- Time complexity: $O(n)$

    The algorithm iterates through the string `str1` once using a single for loop. Within each iteration, it performs a constant amount of work (checking character equality and possible transformations). Therefore, the time complexity is linear with respect to the length of `str1`, which is $O(n)$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space. It only uses a few integer variables (`str2Index`, `lengthStr1`, `lengthStr2`, and `str1Index`) to keep track of indices and lengths. The space used does not depend on the input size, so the space complexity is $O(1)$.

---