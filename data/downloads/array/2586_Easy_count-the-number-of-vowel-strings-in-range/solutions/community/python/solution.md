# 2586: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286369/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286369/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define a function vowelStrings that takes a list of strings words and two integers left and right as input, and returns an integer.
2. Initialize a variable vowels to the string 'aeiouAEIOU', which contains all the vowels.
3. Initialize a variable count to 0.
4. Loop through the indices from left to right inclusive:
a. If the first character of the current word is a vowel and the last character of the current word is a vowel, increment count by 1.
5. Return count.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution:
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        vowels = 'aeiouAEIOU'
        count = 0
        for i in range(left, right+1):
            if words[i][0] in vowels and words[i][-1] in vowels:
                count += 1
        return count

```