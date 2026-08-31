# Official Solution

**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solution/](https://leetcode.com/problems/construct-k-palindrome-strings/solution/)

---

[TOC]

## Solution

---

### Overview 

We are given a string `s` composed of lowercase letters and an integer `k`. Our goal is to determine if it's possible to rearrange the characters of the string into exactly `k` palindromic substrings.

A palindrome is a string that reads the same forward and backward, showing symmetry with respect to its center. For example, the string `"babac"` can form 5 palindromic groupings, such as:
- 1 part: `"bacab"`
- 2 parts: `"aca"` + `"bb"`
- 3 parts: `"aa"` + `"bb"` + `"c"`
- 4 parts: `"aa"` + `"b"` + `"b"` + `"c"`
- 5 parts: `"a"` + `"a"` + `"b"` + `"b"` + `"c"`

In order to approach this problem, we need to understand the properties of palindromes, especially how character frequencies determine if a string can be rearranged into a palindrome. The key properties are:

1. **Single Character Strings:** Any string of length 1 is a palindrome. For example, the string `"a"` is a palindrome.
2. **Even Frequency Characters:** A palindrome can have characters that all appear an even number of times, which allows them to form symmetric halves around the center. For example, `"aabb"` can form the palindrome `"abba"`.
3. **One Odd Frequency Character:** A palindrome can have exactly one character with an odd frequency, which will sit at the center of the string, with the other characters forming symmetric halves. For example, `"abcba"` has the center `"c"` and symmetric halves `"ab"` and `"ba"`.

Knowing this, we can determine whether forming exactly `k` palindromes is possible by analyzing the frequencies of the characters within the string.

---

### Approach 1: Count Odd Frequencies

#### Intuition

To approach this problem, we need to consider how the frequencies of characters in the string `s` affect the ability to form palindromes. 

What key insight can we gain from knowing that a single character can be a palindrome? If every individual character in the string can be a palindrome, then the maximum number of palindromes we can form is the length of the string `s`. If `k` is greater than the length of `s`, it’s impossible to form `k` palindromes, so the answer will be `false`. Similarly, if `k` equals the length of `s`, we can form `k` palindromes, with each character of `s` forming its own palindrome.

Next, consider even-frequency characters. These characters can be used to form the mirrored halves of palindromes, meaning we can freely distribute them across multiple palindromes without any issue. Thus, even-frequency characters do not limit the number of palindromes we can form.

The real challenge lies with odd-frequency characters. A palindrome can only have one odd-frequency character at its center; the rest must appear in even numbers. Therefore, the number of odd-frequency characters in the string determines how many palindromes we can form. Specifically, the minimum number of palindromes we can make is equal to the number of odd-frequency characters, because each odd-frequency character requires its own palindrome.

Thus, if the number of odd-frequency characters is greater than `k`, it’s impossible to form `k` palindromes, so we return `false`. If the number of odd-frequency characters is less than or equal to `k`, we can form `k` palindromes, and the answer will be `true`. 

#### Algorithm

1. Handle initial edge cases, comparing the length of `s` to `k`.
    * If the length of `s` is less than k, we return `false`, as we do not have enough characters to form k palindromes.
    * If the length of `s` is equal to `k`, we return `true`, as we can simply use each character of `s` to form a palindrome.
2. Initialize:
    * an array `freq` of size `26`, representing the frequencies of each alphabetical character.
    * an integer `oddCount`, representing the number of odd frequencies found in the string.
3. Iterate through `s`, incrementing the value of the index in `freq` corresponding to the character.
4. Iterate through the `freq`, incrementing `oddCount` when a frequency is odd.
5. Return `true` if `oddCount` is less than or equal to `k`; return `false` otherwise.

#### Implementation

<iframe src="https://leetcode.com/playground/kc6UYhBH/shared" frameBorder="0" width="100%" height="500" name="kc6UYhBH"></iframe>

#### Complexity Analysis

Let $n$ be the length of string `s`.

* Time complexity: $O(n)$

    We traverse the string of length $n$ only once. 

    All other operations performed happen in constant time. This includes traversing `freq`, as the size of the array is a fixed size of `26`.

* Space complexity: $O(1)$

    The space required does not depend on the size of the input string, so only constant space is used. 
    
    Since we are limited to only lowercase letters in `s`, we can store the frequencies in constant space with an array of size `26`, `freq`.

---

### Approach 2: Bit Manipulation

#### Intuition

In the previous solution, we tracked the frequency of each character and checked whether they were even or odd. However, we can optimize this approach by focusing only on whether the frequencies are even or odd, without needing to store the full count for each character. This way we can avoid the overhead of storing and counting individual frequencies.

We know that a palindrome can have at most one character with an odd frequency. This observation allows us to simplify the problem by only tracking the parity (even or odd) of the character frequencies. We don't need to store the actual frequency of each character - just whether it's odd or even is enough to solve the problem.

To efficiently track whether a character's frequency is even or odd, we can use bit manipulation. We can represent the frequencies as bits in an integer, where each bit corresponds to whether a particular character has an odd or even frequency. By toggling the corresponding bit for each character, we can keep track of the number of characters with odd frequencies.

Once we've processed the entire string, the number of odd-frequency characters is simply the count of `1` bits in the bitmask. If the number of odd-frequency characters is greater than `k`, it's impossible to form `k` palindromes, so we return `false`. If the number of odd-frequency characters is less than or equal to `k`, we can form `k` palindromes, and the answer will be `true`.
 
#### Algorithm

1. Handle initial edge cases, comparing the length of `s` to `k`.
    * If the length of `s` is less than `k`, we return `false`, as we do not have enough characters to form k palindromes.
    * If the length of `s` is equal to `k`, we return `true`, as we can simply use each character of `s` to form a palindrome.
2. Initialize an integer `oddCount`, which is used as a bitmask to track characters with odd frequencies
3. Iterate through `s`. For each character, we flip the bit tracking that character, with a set bit of `1` representing an odd frequency and a cleared bit `0` representing an even frequency
4. Return `true` if the number of `1` bits is less than or equal to `k`; return `false` otherwise.

#### Implementation

<iframe src="https://leetcode.com/playground/hynx4AUn/shared" frameBorder="0" width="100%" height="429" name="hynx4AUn"></iframe>  

#### Complexity Analysis

Let $n$ be the length of string `s`.

* Time complexity: $O(n)$

    The loop iterates over each character in the string `s`, which takes $O(n)$ time. The built-in function to count bits operates in $O(1)$ time since it works on a fixed-size integer (32 bits). Therefore, the overall time complexity is dominated by the loop, resulting in $O(n)$.
  
* Space complexity: $O(1)$

    The space required does not depend on the size of the input string, so only constant space is used.

---