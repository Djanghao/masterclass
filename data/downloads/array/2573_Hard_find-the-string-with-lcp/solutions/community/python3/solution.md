# [Python3] Union find solution

**Author:** timetoai
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204597/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204597/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Union find structure helps a lot with combining the same chars and then checking for contradictions.

# Approach
<!-- Describe your approach to solving the problem. -->
Step 1: Use rules from lcp array to unify same symbols. Simultaneously checking for inconsistencies.
Step 2: Check all conditions fulfilled and self-consistent.
Step 3: Use union find structure to fill answer with chars.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findTheString(self, lcp: List[List[int]]) -> str:
        n = len(lcp)
        uf = [i for i in range(n)]
        
        def find(x):
            if uf[x] == x:
                return x
            uf[x] = find(uf[x])
            return uf[x]
        
        #  Step 1: Use rules from lcp array to unify same symbols. Simultaneously checking for inconsistencies.
        for i in range(n):
            # bc symbols are equal to themselves
            if lcp[i][i] + i != n:
                return ""
            for j in range(i + 1, n):
                # border and symmetry check
                if j + lcp[i][j] > n or lcp[i][j] != lcp[j][i]:
                    return ""
                
                if lcp[i][j]:
                    if j + 1 < n and lcp[i + 1][j + 1] + 1 != lcp[i][j]:
                        return ""
        
                    uf[i] = uf[j] = min(find(i), find(j))
                    
        #  Step 2: Check all conditions fulfilled and self-consistent.
        for i in range(n):
            for j in range(i + 1, n):
                # cases: need to be unequal, but in reality opposite
                if lcp[i][j] == 0 and find(i) == find(j):
                    return ""
                if lcp[i][j] > 0 and lcp[i][j] + j < n and find(i + lcp[i][j]) == find(j + lcp[i][j]):
                    return ""
                
        #  Step 3: Use union find structure to fill answer with chars.
        ret = [None] * n
        letter = 97  # ASCII code of 'a' letter
        for i in range(len(ret)):
            val = find(i)
            if ret[val] is not None:
                ret[i] = ret[val]
            else:
                # if needed more letters, we can't afford it, as 'z' has 122 ASCII code
                if letter == 123:
                    return ""
                ret[i] = chr(letter)
                letter += 1
        return ''.join(ret)
        
```