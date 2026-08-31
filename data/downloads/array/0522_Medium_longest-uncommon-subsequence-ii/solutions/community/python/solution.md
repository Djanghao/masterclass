# 522: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/3292719/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/3292719/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. We define a helper function isSubsequence(a: str, b: str) -> bool that returns True if string a is a subsequence of string b, and False otherwise. We do this by iterating through each character in b, and for each character that matches the current character in a, we move to the next character in a. If we've successfully matched all characters in a, then it is a subsequence of b.

2. We sort the input list strs in descending order of length using the sort() method and a lambda function that returns the negative length of each string.

3. We iterate through each string in the sorted list using the enumerate() function. For each string s and its index i, we check if s is a subsequence of any other string in the list using a list comprehension with the all() function. The comprehension iterates through each string strs[j] in the input list, where j is the index of strs[j]. We exclude the current string s by adding the condition if j != i.

4. If s is not a subsequence of any other string in the list, then it is an uncommon subsequence. We return its length using the len() function.

5. If we've checked every string in the list and found no uncommon subsequences, we return -1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findLUSlength(self, strs: List[str]) -> int:
        def isSubsequence(a: str, b: str) -> bool:
            i = 0
            for char in b:
                if i < len(a) and a[i] == char:
                    i += 1
            return i == len(a)
        
        strs.sort(key=lambda s: -len(s))
        
        for i, s in enumerate(strs):
            if all(not isSubsequence(s, strs[j]) for j in range(len(strs)) if j != i):
                return len(s)
        
        return -1

```