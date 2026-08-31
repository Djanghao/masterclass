# Python Solutions using Kmp algorithm

**Author:** rajn5181
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4713910/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4713910/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
from typing import List

class Solution:
    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
        def build_lps(pattern):
            m = len(pattern)
            lps = [0] * m
            length = 0
            i = 1

            while i < m:
                if pattern[i] == pattern[length]:
                    length += 1
                    lps[i] = length
                    i += 1
                else:
                    if length != 0:
                        length = lps[length - 1]
                    else:
                        lps[i] = 0
                        i += 1

            return lps

        def kmp_search(text, pattern):
            ans=0
            n = len(text)
            m = len(pattern)
            lps = build_lps(pattern)
            i = j = 0

            while i < n:
                if pattern[j] == text[i]:
                    i += 1
                    j += 1

                if j == m:
                    ans+=1
                    j = lps[j - 1]

                elif i < n and pattern[j] != text[i]:
                    if j != 0:
                        j = lps[j - 1]
                    else:
                        i += 1
            return ans

        dic = {-1: 'a', 0: 'b', 1: 'c'}

        def convertIntoString(arr):
            st = ""
            for i in range(len(arr)-1):
                if arr[i] < arr[i+1]:
                    st += dic[1]
                elif arr[i] > arr[i+1]:
                    st += dic[-1]
                else:
                    st += dic[0]
            return st

        s = convertIntoString(nums)
        pat = "".join(dic[p] for p in pattern)
        res=kmp_search(s, pat)
        return res


```