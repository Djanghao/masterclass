# Official Solution

**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solution/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solution/)

---

[TOC]

## Solution


---

### Overview

A subsequence of a string is a sequence of its characters. It maintains the order of the characters but does not need to be continuous. Each character may occur up to as many times as it occurs in the original string.

> An **uncommon subsequence** between two strings is a string that is a **subsequence of one but not the other**.

Our objective is to find the length of the longest uncommon subsequence between two strings, `a` and `b`. If none exists, we must return `-1`.

A real-world application of finding uncommon subsequences is plagiarism detection, where long common subsequences could signify plagiarism.

---

### Approach: Maximum Length

#### Intuition

Let's approach this problem by viewing some examples. 

**What are the characteristics of `a` and `b` when no uncommon subsequence exists?**

##### Example 1: (Example 3 from the problem description)

>***Input:*** a = "aaa", b = "aaa" \
***Output:*** = -1 \
***Explanation:*** Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a.

##### Example 2: 

>***Input:*** a = "xyz", b = "xyz" \
***Output:*** = -1 \
***Explanation:*** Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a.

What do these two examples have in common? Strings `a` and `b` contain the same characters in the same order. We realize that if `a` and `b` are equal, an uncommon subsequence does not exist.

---

**What patterns can we observe between the longest uncommon subsequences?**

##### Example 3: 

>***Input:*** a = "xyz", b = "wxyz" \
***Output:*** = 4 \
***Explanation:*** Every subsequence of string a is also a subsequence of string b. The subsequence "wxyz" is an uncommon subsequence, as it is not a subsequence of `a`.

##### Example 4:  (Example 1 from the problem description)

>***Input:*** a = "aba", b = "cdc" \
***Output:*** = 3 \
***Explanation:*** One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.

 We can observe that the longest uncommon subsequences in examples 3 and 4 are all entire strings. We notice that "cd" is an uncommon subsequence of `b` in the above example, but it is not the longest. We can reason that if the two strings are not identical, then the longest uncommon subsequence will be the longer string because it has some additional character(s) that guarantee it is uncommon from the other string, and it is also the longest possible subsequence we can create. If both strings are the same length but are not identical, they will both be longest uncommon subsequences, as in example 4, and we can return the length of either.



#### Algorithm

1. If `a` is equal to `b`:
    1. Return `-1`, there is no uncommon subsequence.
2. Else:
    1. Calculate the lengths of `a` and `b` and return the length of the longer string.

#### Implementation

<iframe src="https://leetcode.com/playground/iV7XKwVJ/shared" frameBorder="0" width="100%" height="225" name="iV7XKwVJ"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$ 
    
    In the worst case, string comparison will take $O(n)$. 
    
    In the best case, string comparison can take $O(1)$. Some languages, including Java, optimize string comparison and can determine immediately that the strings are not the same if they are not the same length. For these languages, it still takes $O(n)$ in the worst case when the strings are the same.

* Space complexity:
  
    $O(1)$ because we do not use data structures that require additional space.

---