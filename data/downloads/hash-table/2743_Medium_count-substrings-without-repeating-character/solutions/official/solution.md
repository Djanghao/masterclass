# Official Solution

**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solution/](https://leetcode.com/problems/count-substrings-without-repeating-character/solution/)

---

## Solution

---

### Approach: Sliding Window

#### Intuition

Let's start by simplifying the language of the problem: We are given a string $s$ that consists of $N$ lowercase English letters. We need to return the number of substrings that have no repeated character (special substring). 

The naive way to solve this problem is to find all the possible substrings of $s$ and then count the ones that have no repeated characters. This approach however is not efficient as there are $N^2$ number of substrings in a string with $N$ number of characters.

Let's solve this problem by examining the substrings of the given string from left to right. The first character is always a special substring since it can't have repeats. We then add each subsequent character, counting special substrings. If we add a repeating character, we remove characters from the left until the repeat is gone. Then, we resume adding characters from the right. We continue this process until all characters are examined.

This pattern is known as the sliding window pattern and is useful for problems involving subarrays or substrings where individual elements can't be chosen independently. It maintains a window that expands from the right to meet a condition. If the condition fails, the window shrinks from the left until it's met again (in our case, no repetition of characters).

So we define a window with two pointers: `start` and `end`. `end` will expand the window, while `start` will help us shrink it when needed. To efficiently check for unique characters, we will use a frequency array. This array will tell us the occurrence of each character in our current window. 

When we encounter a character that's already in our window, we need to adjust the window by moving the `start` pointer forward, removing characters until we've eliminated the duplicate. After ensuring our window contains only unique characters, every character from `start` to `end` can end a valid substring. 

The count of these substrings is simply `end - start + 1`. By adding this count at each step, we avoid having to recalculate for overlapping substrings, making our algorithm more efficient. 

The sliding window approach is visualized below:

![fig](../Figures/2743/2743A.png)

#### Algorithm

1. Initialize the variable `substringCount` to `0`. This is the number of special substrings.
2. Initialize the variable `start` to `0`. This is the left end point of the current sliding window.
3. Initialize an empty frequency array `freq` of size `26`.
4. Iterate over the characters in the string `s` and for each character at the index `end` do the following:
    - Increment the frequency for character `s[end]`.
    - If adding the current character introduced a repeated character, shrink the window from the left until the frequency of `s[end]` becomes `1`.
    - Add `end - start + 1` to the variable `substringCount`.
5. Return `substringCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/NcbX3jUn/shared" frameBorder="0" width="100%" height="412" name="NcbX3jUn"></iframe>

#### Complexity Analysis

Here, $N$ is the number of characters in the string $s$.

* Time complexity: $O(N)$.

  We can iterate over each character at most twice. This is because we will iterate over the character for the first time while extending the sliding window from the right side and then we can again iterate over while shrinking the window from the left end. Hence, the total number of operations could be $2 * N$ and therefore, the total time complexity is equal to $O(N)$.

* Space complexity: $O(1)$.

  We need an array `freq` to keep the frequencies of characters in the current window. Since there can only be lowercase English letters the size of `freq` is only `26` and hence is independent of $s$ length. Therefore, the total space complexity is constant.

---