# Official Solution

**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solution/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a string `s` consisting of lowercase letters. A string is considered special if all its characters are the same. Our task is to find the longest special substring of `s` that appears at least three times. If no such substring exists, we should return -1.

> A substring is a contiguous, non-empty sequence of characters within a string.

This problem is a more challenging version of the first part, [2981. Find Longest Special Substring That Occurs Thrice I](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/). The constraints are significantly tighter, with the length of the string `s` now reaching up to 500,000 characters. This makes the problem more complex and resource-intensive to solve. Before tackling this harder version, it is strongly advised that you first solve the [easier version](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/) of the problem. Solving the easier version will give you a solid understanding of the core concepts and techniques needed to approach the more demanding iteration.

In the first part, we discussed two solutions: an $O(n^3)$ solution and an $O(n^2)$ solution. Here, we will focus on more optimized versions of these solutions to ensure they can handle the tighter constraints and pass the test cases efficiently.

---

### Approach 1: Hashing

#### Intuition   

In the simpler version of this problem, we generated all substrings of `s` and tracked their counts using a map. However, in this version, we aim to find a more efficient approach—ideally, linear or log-linear. Therefore, we cannot afford to generate all substrings of `s`.

To optimize, we can focus on the special substrings of `s`. This means we don't need to generate all substrings and then filter for special ones. Instead, let's analyze some examples to understand the pattern:

1. Example 1: `a`
   - There is exactly one special substring: `a`.

2. Example 2: `aa`
   - There are three special substrings: `a`, `a`, `aa`.
   - Here, `a` appears twice and `aa` appears once.

3. Example 3: `aaa`
   - There are six special substrings: `a`, `a`, `a`, `aa`, `aa`, `aaa`.
   - Here, `a` appears thrice, `aa` appears twice, and `aaa` appears once.

From these examples, we can make an observation:
When a new character is added to `s`, if the length of the longest special substring ending at this character increases to `substringLength`, then the count of all shorter special substrings of length less than `substringLength` also increments by 1. This happens because new substrings can be formed by appending the current character to previously existing substrings.

While iterating through the string `s`, `substringLength` represents the length of the longest special substring ending at the current character. We can store the count of characters in `s` with the longest special substring length `substringLength` using a mapping, `frequency[character][substringLength]`.

As discussed, all substrings of lengths less than `substringLength` should also be incremented by the value of `frequency[character][substringLength]`. However, updating the frequencies for all lengths down to `1` each time a new character is processed would be inefficient. 

To optimize this, we can calculate the cumulative sum of frequencies starting from the longest `substringLength` down to `1`, after processing all the characters of the string. If the cumulative sum reaches a value of `3` at any point, we can immediately conclude that there are at least `3` substrings of that length. We can repeat this process for all the possible `character` values and return the maximum result among them.

#### Algorithm

1. Create a map `frequency` to store the frequency of substrings.
    - `frequency` is a 2D array where the first index represents the character and the second index represents the length of consecutive substrings.
2. Initialize `substringLength` to 1 and `previousCharacter` to the first character, and set the frequency of the first character at length 1 to 1: `frequency[previousCharacter - 'a'][1] = 1`.
3. For each character in the string:
    - If the current character equals the previous character:
        - Increment `substringLength`.
        - Increment the frequency of the current character for the new substring length: `frequency[currentCharacter - 'a'][substringLength] += 1`.
    - Otherwise:
        - Reset `substringLength` to 1 and update the frequency of the current character for substring length 1: `frequency[currentCharacter - 'a'][1] += 1`.
4. Calculate cumulative sums for the frequencies:
    - Outer loop iterates over all 26 characters:
        - Inner loop starts from the longest possible substring length (from the end of the string) and moves backward:
            - Update `frequency[i][j]` by adding the value from the next substring length: `frequency[i][j] += frequency[i][j + 1]`.
            - If `frequency[i][j] >= 3`, it indicates that we have at least 3 substrings of the current length: 
                - Update `ans` with the length `j` if it is greater than the current value of `ans` and break the loop.
5. Return the result, and if no valid substring is found, return `-1`. Otherwise, return `ans`.
#### Implementation

<iframe src="https://leetcode.com/playground/NyxcGzaS/shared" frameBorder="0" width="100%" height="500" name="NyxcGzaS"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s` and $c$ be the number of distinct characters (which is 26 in this case).

- Time complexity: $O(n + c \cdot n) \approx O(n)$

    The algorithm iterates through the string `s` once, performing constant-time operations for each character to update the `frequency` array. This results in a time complexity of $O(n)$. Additionally, the nested loop that calculates the cumulative sum and finds the maximum possible answer iterates over the `frequency` array, which has dimensions $26 \times (n + 1)$. This results in a time complexity of $O(c \cdot n)$. Therefore, the overall time complexity is $O(n + c \cdot n) \approx O(n)$.

- Space complexity: $O(c \cdot n) \approx O(n)$

    The space used by the algorithm is determined by the `frequency` array, which has a size of $26 \times (n + 1)$. Thus, the space complexity is $O(c \cdot n) \approx O(n)$.

---

### Approach 2: Store the Three Maximum Substring Lengths

#### Intuition

In the previous approach, we stopped iterating through the string `s` once the cumulative sum reached at least `3`. However, we can optimize this by focusing on the fact that we are searching for the longest substring that occurs at least three times. Instead of maintaining a mapping to store the frequency of substring lengths for all characters, we can simplify the process by directly tracking the maximum lengths using integer variables.

Since we are looking for the longest substring that occurs at least three times, we can store the lengths of the three longest substrings in three integer variables. It is guaranteed that at least one of these will occur at least three times in the string `s`.

For example:

- If the longest substring lengths are `length1 = 8`, `length2 = 8`, and `length3 = 8`, then `8` is the length of the longest substring that occurs at least three times.

- If the lengths are `length1 = 8`, `length2 = 8`, and `length3 = 7`, the substring of length `7` is part of the substrings of length `8`. In this case, the frequency of the substring of length `7` ensures it occurs at least three times, making `7` the desired length.

- If the lengths are `length1 = 6`, `length2 = 8`, and `length3 = 7`, the substring of length `7` also occurs as part of the substring of length `8`. However, the cumulative frequency of substrings of length `7` may not meet the threshold, so the third-largest length, `6`, is returned as the result.

To implement this, we use a data structure like `substringLengths[character][3]`, where the array `substringLengths[character]` stores the three longest substring lengths for each character. While iterating through the string `s`, if the current character matches the previous one, we increment a `substringLength` counter. If the updated length belongs among the three longest substrings for that character, we update the `substringLengths` array accordingly. 

Finally, after processing all characters of `s`, we return the maximum value of the smallest length in the `substringLengths` array for all characters.

#### Algorithm

1. Create a matrix `substringLengths` of size `26 x 3` to track the maximum lengths of substrings.
2. Initialize `substringLength` to `0` to track the length of the current substring of repeated characters.
3. Initialize `previousCharacter` to `0` (or the first character of the string) to compare the consecutive characters.
4. Iterate over the string from `start` = `0` to `s.length()`:
    - If the current character matches the previous character, increment `substringLength`.
    - If it does not match, reset `substringLength` to `1` and update the `previousCharacter`.
    - Find the minimum length among the three values for the current character, and store it in `minLength`.
5. Iterate over the `substringLengths` array and find the maximum substring length where its length is at least `3`.
6. If no valid substring length is found, return `-1`. Otherwise, return the maximum length.

#### Implementation

<iframe src="https://leetcode.com/playground/5aJHgMJW/shared" frameBorder="0" width="100%" height="500" name="5aJHgMJW"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string `s`, $c$ the number of distinct characters (which is 26 in this case), and $k = 3$ the number of tracked substring lengths per character.

- Time complexity: $O(n)$

    The algorithm iterates through the string `s` once, performing constant-time operations for each character. For each character, it updates the `substringLengths` array, which involves checking and updating up to $k$ values. Additionally, the final loop to find the maximum value of the minimum frequency iterates over all distinct characters. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(c \cdot k) \approx O(1)$

    The space used by the algorithm is determined by the `substringLengths` array, which has a size of $c \times k$. The other variables used (e.g., `substringLength`, `previousCharacter`, `ans`) consume constant space. Thus, the space complexity is $O(c \cdot k) \approx O(1)$.

---