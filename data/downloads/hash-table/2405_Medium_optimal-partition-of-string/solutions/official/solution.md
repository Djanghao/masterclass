# Official Solution

**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solution/](https://leetcode.com/problems/optimal-partition-of-string/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `s`. 

Our task is to partition the string into one or more substrings such that the characters in each substring are unique.

We have to return the minimum number of substrings in such a partition.

---

### Approach: Greedy

#### Intuition

Intuitively, we can consider adding characters to a substring as long as we don't see a character that has already been added to the current substring. When we see a character that is already present in the substring, we start a new substring and repeat this process until we iterate over the entire string `s`.

The intuition is correct because there is no point in not adding a character if it is not present in the current substring. We should add it so that it forms larger substrings, resulting in a lower total number of substrings formed.

We'll use an array of size `26` to keep track of the characters in the ongoing substring. We will store the beginning of the current substring as well as keep track of the most recent position of each character. This allows us to determine whether the current character is already present in the current substring.

Other data structures, such as a hash set, can be used for minor space optimization in cases where we may not have all of the `26` characters added to the hash set, but we must clear it completely at the start of each substring, resulting in some additional operations.

#### Algorithm

1. Create an array `lastSeen` of size `26` to keep track of the most recent position of each character. We fill it with `-1`.
2. Create an integer variable `count` to keep track of the number of substrings formed. We initialize it with `1` to start adding characters to the first substring until we can't add anymore.
3. Create another integer variable `substringStart` to hold the starting index of the substring under consideration. We initialize it to `0` because the first substring begins at index `0`.
4. Iterate over the string `s` and for each index `i`:
    - If the most recent position of the character `s[i]` is greater than or equal to the starting position of the substring, i.e. `lastSeen[s[i] - 'a'] >= substringStart`, it means we have already included this character in this substring. As a result, we increase the `count` by `1` as we start a new substring and set `substringStart = i`.
    - We update `lastSeen` for the current character by performing `lastSeen[s[i] - 'a'] = i`.
5. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/ifxdvTLf/shared" frameBorder="0" width="100%" height="344" name="ifxdvTLf"></iframe>

#### Complexity Analysis

Here, $n$ is the length of the string `s`.

* Time complexity: $O(n)$

    - It takes $O(26) = O(1)$ to initialize the `lastSeen` array.
    - We iterate over the complete string `s` which takes $O(n)$ time.

* Space complexity: $O(26) = O(1)$

    - We use the array `lastSeen` of size $26$.