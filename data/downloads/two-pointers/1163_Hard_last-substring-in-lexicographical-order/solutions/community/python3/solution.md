# Runtime 168 ms beats 97.44% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/5783125/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/5783125/)

---

# Intuition
To find the last substring in lexicographical order, we want to identify and return the largest possible substring.

# Approach
Find the Max Character: Start by locating the maximum character in the string.

Compare Substrings: Use two pointers to explore and compare substrings starting at different positions.

Update Best Substring: Keep track of and update the best (largest) substring found.

# Complexity
- Time complexity:
O(n) \u2013 Linear scan of the string.

- Space complexity:
O(n) \u2013 List conversion of the string.

# Code
```python3 []
class Solution:
    def lastSubstring(self, s: str) -> str:
        s = list(s)
        n = len(s)
        
        # Initialize pointers
        start = max(s)
        i = s.index(start)
        j = i + 1
        
        while j < n:
            # Find the next candidate where s[j] >= s[i]
            while j < n and s[j] < s[i]:
                j += 1
            
            if j >= n:
                # If we have reached the end, return the substring from i
                return "".join(s[i:])
            
            # Compare substrings starting from i and j
            l, r = i + 1, j + 1
            while r < n and s[l] == s[r] and l < j:
                l += 1
                r += 1
            
            if r == n:
                # If r reached the end, the substring from i is the result
                return "".join(s[i:])
            
            # Update the index i or j based on the comparison
            if s[l] < s[r]:
                i = j
            else:
                j = r
        
        return "".join(s[i:])

```