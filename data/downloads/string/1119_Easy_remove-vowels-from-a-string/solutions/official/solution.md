# Official Solution

**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solution/](https://leetcode.com/problems/remove-vowels-from-a-string/solution/)

---

[TOC]

## Solution

---

### Approach: String

**Intuition**

There are some specific library methods in different languages like `replace.All()` in Java that can be directly used to achieve this, we can replace each vowel with an empty string "". However, in an interview, it is recommended to solve these straightforward problems without using such built-in methods. We can always mention these methods though.

In this approach, we will start with an empty answer string, iterate over each character in the string `s`, and add only those consonants to the final answer string.

To check if the character is a vowel or a consonant, we need to determine if the character is one of the lowercase vowels `[a, i, e, o, u]`. If it is not, we can add this consonant character to the answer string `ans`.

**Algorithm**

1. Create a method `isVowel()` that returns a boolean value `true` if the provided character is one of `[a, i, e, o, u]`, `false` otherwise.
2. Initialize an empty string `ans`.
3. Iterate over each character in the string `s` and for each character `c`, check if it's a vowel using `isVowel(c)`. If not, we add the character to string `ans`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/8MzRtX82/shared" frameBorder="0" width="100%" height="361" name="8MzRtX82"></iframe>

**Complexity Analysis**

Here, $N$ is the number of characters in the string `s`.

* Time complexity: $O(N)$

  We need to iterate over each character in the string `s` once and for each call the `isVowel()` which is $O(1)$. Hence, the total time complexity is equal to $O(N)$.

* Space complexity: $O(1)$

  The space occupied by the return value is generally not counted towards the total space complexity. Therefore, for this problem, the space complexity is only $O(1)$.
  <br/>

---