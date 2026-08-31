# Simplest Greedy Python Solution | O(1) Space | O(n*k) Time

**Author:** deepaklaksman
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2814448/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2814448/)

---

# Intuition
If there is a substring of size k + 2 which is a palindrome, then for sure there is a substring of size k which is a palindrome. Similarly, if there is a substring of size k + 3 which is a palindrome, then there is a substring of size k + 1 which is a palindrome.

# Approach
So we can **greedily** start from 0th index and check for a substring of size k which is a palindrome, if not then size k + 1. *Then our new start index is either k or k + 1 based on which is a palindrome* and we can proceed similarly. *If both are not a palindrome then for sure we can't find any palindrome starting from that index*, so we move to next index.

# Complexity
- Time complexity:
    **O(nk)**
    O(n) for traversing the string and a factor of **"k" on each index** for checking whether s[i to i + k] its a palindrome or not by using the valid function.

- Space complexity:
    **O(1)**

# Code
```
class Solution:
    
    def maxPalindromes(self, s: str, k: int) -> int:
        n = len(s)
        # function to check whether substring is a palindrome
        def valid(i, j):
            # if end index is greater then length of string
            if j > len(s):
                return False
            if s[i : j] == s[i : j][::-1]:
                return True
            return False
        maxSubstrings = 0
        start = 0
        while start < n:
            if valid(start, start + k):
                maxSubstrings += 1
                start += k
            elif valid(start, start + k + 1):
                maxSubstrings += 1
                start += k + 1
            else:
                # when there is no palindrome starting at that particular index   
                start += 1
        return maxSubstrings
```