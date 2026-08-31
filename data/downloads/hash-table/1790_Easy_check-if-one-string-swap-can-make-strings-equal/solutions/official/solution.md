# Official Solution

**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solution/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solution/)

---

[TOC]

## Solution

---

### Overview

We are given two strings `s1` and `s2` and want to determine if it is possible to make the strings equal by performing at most one string swap on one of the strings. A string swap involves choosing any two indices in the string and swapping the characters at these positions.

---

### Approach 1: Frequency Map + Check Differences

#### Intuition

To start, consider the example where `s1 = "bank"` and `s2 = "kanb"`. If we swap the first and last characters of `s1`, we get `"kanb"`, which matches `s2`. Alternatively, we could swap the first and last characters of `s2` to get `"bank"`, which matches `s1`. One observation we can make is that this swapping only works if the two strings share the same characters and frequencies. The only difference would be the ordering of characters.

In other words, it is necessary for the two strings to be anagrams for a string swap to be possible. Otherwise, one string will have a certain character that the other is missing, and no amount of swapping can make them equal.

However, two strings being anagrams is not enough to ensure swapping will make them equal. Let's consider another example: `s1 = hello` and `s2 = olleh`. We know that the two strings are anagrams, but it is still not possible for a single string swap to make `s1` equal to `s2` or vice versa. If we were to compare each character of `s1`, `s1[i]`, to its corresponding character in `s2`, `s2[i]`, we see that there is a total of 4 differences at indices `i = 0, 1, 3, 4`. One string swap can only resolve two differences, so they cannot be made equal. This leads us to our second requirement for a string swap to be possible: If there are any differences, the total number of character-by-character differences has to be exactly 2. Note the edge case where `s1` and `s2` are already equal, in which there are 0 character-by-character differences and no string swaps are needed.

Now, we have fully developed a rule for determining if the two strings can be made equal:

- If `s1` and `s2` are already equal, then no string swap is needed and we know it's trivially possible for the strings to be equal.
- If `s1` and `s2` have the same set of character frequencies (i.e. are anagrams) and have exactly 2 character-by-character differences, then we know it's possible to make the strings equal with 1 string swap.
- Otherwise, the two strings can't be made equal with one string swap.

To implement these checks, we can use two frequency maps `s1FrequencyMap` and `s2FrequencyMap` to keep track of the frequency of each letter for the two strings. As we go through the characters of the two strings and populate the frequency maps, we can also maintain counter `numDiffs` that counts the number of differences at corresponding indices. If the two strings are anagrams and `numDiffs` equals 2, we know that one swap can resolve the differences.

#### Algorithm

- Check edge case: if `s1` and `s2` are already equal, then return `true`.
- Initialize the frequency maps for each string: `s1FrequencyMap` and `s2FrequencyMap` are character arrays of size 26.
- Initialize the counter `numDiffs` to maintain the number of character differences between the two strings.
- Iterate through the characters of `s1` and `s2`:
    - Let `s1Char` and `s2Char` be the current characters of `s1` and `s2`, respectively.
    - If `s1Char != s2Char`, then increment `numDiffs`. If `numDiffs` is now greater than `2`, then we know one string swap will not make the strings equal, so return `false`.
    - Update the frequency maps by incrementing the frequency of `s1Char` and `s2Char`: `s1FrequencyMap[s1Char]++` and `s2FrequencyMap[s2Char]++`.
- Now, the strings are equal only if the frequency maps are equal. If `s1FrequencyMap` and `s2FrequencyMap` have the same frequencies, then return `true`. Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/eBLNyvmp/shared" frameBorder="0" width="100%" height="500" name="eBLNyvmp"></iframe>

#### Complexity Analysis

Let $N$ be the length of `s1` and `s2`.

- Time Complexity: $O(N)$

    Iterating through `s1` and `s2` takes $O(N)$ time. For each character we iterate, updating the frequency maps and diff counter takes $O(1)$ constant time. Thus, the total time complexity is $O(N)$.

- Space Complexity: $O(1)$

    Each frequency map has a fixed size of 26, regardless of the length of `s1` and `s2`. Thus, the space complexity is $O(1)$ constant time.

---

### Approach 2: Only Check Differences

#### Intuition

For our previous approach, we already achieved an efficient constant space complexity. However, let's try to optimize further and see if we can check if the two strings can be made equal without using the frequency maps.

Let's take another look at the example `s1 = bank` and `s2 = kanb`. We previously established that there are exactly 2 character differences: at index 0 and index 3. This makes it possible for one string swap to make the strings equal.

However, we can make a more specific observation: This swap only works because the character at index 0 of `s1` matches the character at index 3 of `s2`. Similarly, the character at index 3 for `s1` is equal to the character at index 0 for `s2`. In other words, if the characters in the mismatched positions "cross-match", a swap will be able to make the strings equal.

![Swap matching](../Figures/1790/swap.png)

This leads us to a stricter rule:
- For the strings to be equal after a single swap, there must be exactly two mismatched indices, `i` and `j`, such that:
    1. `s1[i] == s2[j]`
    2. `s1[j] == s2[i]`

Similar to before, if the strings are already identical, no swap is needed. In all other cases, equality is not possible.

For this rule, we can simply introduce two new variables `firstIndexDiff` and `secondIndexDiff` to keep track of the indices of differences. We continue to use `numDiffs` to make sure the `numDiffs` doesn't surpass 2. We will iterate through `s1` and `s2` like we do in approach 1, except we now update `firstIndexDiff`, `secondIndexDiff`, and `numDiffs` when we see a character difference.

> Note: For this approach's implementation, observe that we do not have to explicitly check the trivial edge case where `s1` and `s2` are equal. If the two strings are equal, then no diffs are found, and `s1[firstIndexDiff] == s2[secondIndexDiff] && s1[secondIndexDiff] == s2[firstIndexDiff]` will always be true, assuming the default initialized values of `firstIndexDiff` and `secondIndexDiff` are valid (they can just be 0).

#### Algorithm

- Initialize `firstIndexDiff`, `secondIndexDiff`, and `numDiffs` all to 0.
- Iterate through the characters of `s1` and `s2`:
    - Let `s1Char` and `s2Char` be the current characters of `s1` and `s2` at index `i`, respectively.
    - If `s1Char != s2Char`:
        - Increment `numDiffs`.
        - If `numDiffs` is now greater than `2`, then we know one string swap will not make the strings equal, so return `false`.
        - If `numDiffs` is now equal to `1`, then we have found our first difference: assign `firstIndexDiff = i`.
        - Otherwise, `numDiffs` is `2` so we have found our second difference: assign `secondIndexDiff = i`.
- Return `s1[firstIndexDiff] == s2[secondIndexDiff] && s1[secondIndexDiff] == s2[firstIndexDiff]`

#### Implementation

<iframe src="https://leetcode.com/playground/aPrp7ahg/shared" frameBorder="0" width="100%" height="500" name="aPrp7ahg"></iframe>

#### Complexity Analysis

- Time Complexity: $O(N)$

    Iterating through `s1` and `s2` takes $O(N)$ time. For each character we iterate, updating `numDiffs`, `firstIndexDiff`, `secondIndexDiff` takes $O(1)$ constant time. Thus, the total time complexity is $O(N)$.

- Space Complexity: $O(1)$

    We only use 3 integer variables, so the space complexity is constant $O(1)$.

---