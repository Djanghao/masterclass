# Official Solution

**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solution/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solution/)

---

[TOC]

## Solution

---

### Overview

This problem asks us to find the number of letters we would need to add to the end of `s` so that `s` contains every letter in `t`, in the same order it occurs in `t`. 

From Examples 1 and 3 in the problem, you can see it's necessary for the letters in `t` to occur in `s` in the same order as they are in `t`. This ordering is what will make `t` a subsequence of `s`. From Example 2, you can see that we won't need to add any letters to `s` if `t` is already a subsequence of it. 

**Key Observations:**
1. Both `s` and `t` consist of only lowercase letters.
2. The constraints of the problem indicate that we need to think of a solution with linear or log-linear time complexity, in terms of the length of given strings. 

---

### Approach 1: Greedy (Two Pointers)

#### Intuition

We want to start by identifying all of the characters in `t` that are already a subsequence of `s`. These characters would occur as a prefix in `t`. After finding the longest such prefix of `t`, we can append the remaining characters at the end of `s`. Of course, if `t` is already a subsequence of `s`, we won't need to add any characters. This would minimize the number of characters that are appended to the string `s` for it to contain `t` as a subsequence. This idea can be explained using the image given below:

![img](../Figures/2486/Slide1.png)

Although the first character in `t` could appear at various positions throughout `s`, we want to pick the first time it appears in `s` as the start of the subsequence. If we determine that the first character of `t` is in `s`, we will start looking for the second character. We will pick the first occurrence of the second character of `t` after the first character. We will repeat this process till we can no longer find a character that can be picked in the string `s`.

We can accomplish this using a two-pointer approach to iterate through each string, counting the number of characters in `t` that appear in the same order in `s`. When we reach the end of `s`, we know that the number of uncounted characters in `t` need to be added to the end of `s`.

The first pointer,`first`, will iterate through `s`, one character at a time. The second pointer,`longestPrefix`, will be initially placed at the first character of the string `t`. When the first pointer reaches the end of string `s`, the `longestPrefix` will store the length of the longest prefix of `t` which is a subsequence of `s`. We can now subtract `longestPrefix` from the length of `t` to find the number of characters that need to be added to `s`.

We can prove the optimality of the algorithm using contradiction. Let's say that the greedy approach returns the minimum number of characters as `c`. By contradiction, assume that there exists a better solution where the number of characters that need to be appended is `c-1`.

This would mean that the first character appended in the greedy solution is part of a subsequence of `s` in the assumed optimal solution. However, this cannot be true since we have selected the characters of `t` in the order in which they appear in `s` (i.e., we have picked the first occurrences). Therefore, the assumption is incorrect, and the greedy approach gives the most optimal solution here.

#### Algorithm

1. Initialise two pointers `first` and `longestPrefix` with 0. 
2. Iterate while `first` is less than `s.length` and `longestPrefix` is less than `t.length`:
   - If the `s[first]` is equal to `t[longestPrefix]`:
     - Increment `longestPrefix` by 1. 
   - Increment `first` by 1.
3. Return the difference of `t.length` and `longestPrefix`.

!?!../Documents/2486/slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/guYGAd95/shared" frameBorder="0" width="100%" height="378" name="guYGAd95"></iframe>

#### Complexity Analysis

Let $n$ be the length of `s` and $m$ be the length of `t`.

- Time complexity: $O(n)$

  Since we iterate through the string `s` exactly once, the time complexity can be stated as $O(n)$.

- Space complexity: $O(1)$

  We do not allocate any additional auxiliary memory proportional to the size of the given strings. Therefore, overall space complexity is given by $O(1)$.

---