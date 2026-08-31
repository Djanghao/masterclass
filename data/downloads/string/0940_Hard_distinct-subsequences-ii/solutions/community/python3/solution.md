# [Python] Simple 5 line solution, O(n), beats 99%, Backwards Iteration

**Author:** _md_
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/5964578/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/5964578/)

---

This solution utilizes bottom-up dynamic programming with a focus on handling distinct subsequences effectively by categorizing them based on starting characters.
# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Observations
**Subsequences Count**
Every character in the string can either be included or excluded from a subsequence, leading to an exponential number of potential subsequences.

**Handling Duplicates**
To count distinct subsequences, we must ensure that subsequences that would be counted multiple times (due to duplicate characters) are managed properly.

**Character Limitation**
Since the input consists only of lowercase letters, we can use a fixed-size DP array of size 26 to represent the counts of subsequences that start with each character from 'a' to 'z'.

# Approach
Suppose `dp[i][char]` represents the number of distinct subsequences formed from the substring `s[i:]` that **start** with the character `char` (where `char` is in the range 0 to 25 corresponding to 'a' to 'z').

The recursive relation would be:
`dp[i][char] = dp[i + 1][0] + dp[i + 1][1] + ... + dp[i + 1][25] + 1`

Where:
- The term `dp[i + 1][0] + dp[i + 1][1] + ... + dp[i + 1][25]` counts all existing subsequences from the suffix starting at `i + 1`.
- The `+ 1` accounts for the single occurrence of the current character as a subsequence.

**DP Table Breakdown:**
We maintain a `dp` array dp of size 26:
- ```dp[0]```= the number of unique subsequences that start with the letter "a".
- ```dp[1]```= the number of unique subsequences that start with the letter "b".
- ```...```
- ```dp[25]```= the number of unique subsequences that start with the letter "z".

This fixed-size array allows us to efficiently store and update counts for subsequences based on the character currently being processed.

The reason we use a `dp` array of size 26 is to efficiently manage the distinct subsequences formed by each character in the string. Each index directly corresponds to a specific character ('a' through 'z'), enabling straightforward updates when a character is processed. By maintaining separate counts for each character, we can accurately account for the unique subsequences that start with that character. This helps prevent double-counting subsequences that would otherwise occur when multiple instances of a character exist in the string.

**Recursive Formula:**
As we process the string from the last character to the first, we can derive the count of distinct subsequences for each character as follows:
1. Count Existing Subsequences: The count of subsequences ending at the current character can be calculated by summing the counts of subsequences from all characters.
2. Include Current Character: When processing a character, we can create new subsequences by prepending the current character to all previously counted subsequences.


# Code (breakdown below)
```python3 []
class Solution:
    def distinctSubseqII(self, s: str) -> int:
        mod = 10 ** 9 + 7
        dp = [0]*26 # dp[i] stores the counts of subsequences starting with letter i
        alphabetIndices = [ord(s[idx])-97 for idx in range(len(s)-1, -1, -1)]
        for char in alphabetIndices:
            dp[char] = (1 + sum(dp)) % mod
        return sum(dp) % mod
```

# Algorithm breakdown
1. Initialize a DP array of size 26 to zero.
2. Traverse the string from the end to the beginning.
3. For each character:
    1. Convert it to its corresponding index (0 for 'a', 1 for 'b', ..., 25 for 'z').
    2. Update the DP value for that character based on the total number of subsequences counted so far.
    3. Sum all values in the DP array to get the total count of distinct subsequences.

![image.png](./images/0.png)

For practice using the same approach for another question, solve [Number of Unique Good Subsequences](https://leetcode.com/problems/number-of-unique-good-subsequences/description/). This solution was inspired by a [similar solution / comment](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/3111000/the-easier-way-dp-o-n-backward-iteration/) for the Number of Unique Good Subsequences problem.

![image.png](./images/1.png)
