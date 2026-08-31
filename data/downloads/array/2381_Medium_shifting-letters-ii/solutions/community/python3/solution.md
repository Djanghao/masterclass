# ✅ Python Cumulative Sum || Easy Solution

**Author:** idntk
**Votes:** 24
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2454404/](https://leetcode.com/problems/shifting-letters-ii/solutions/2454404/)

---

In this problem, we should be doing the exact same thing as in the first part of this problem (shifting letters) but there is an extra complexity of finding the final changes for each of the letters. 

A brute force approach would be to iterate through all of the letters that need to be changed for each shift in array shifts (e.g., from 0 to 2 in forward direction). However, this adds extra complexity if we have large ranges of letters that need to be changed. This is why we should be using a cumulative sum approach here. 

For example, instead of iterating through the range, we can add a +1 if we are moving forward in the beginning of the range and -1 in the end of the range to make sure we are no longer applying the change. The same thing goes for the backward direction with the -1 at the beginning and +1 at the end.

```
class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        cum_shifts = [0 for _ in range(len(s)+1)]
        
        for st, end, d in shifts:
            if d == 0:
                cum_shifts[st] -= 1
                cum_shifts[end+1] += 1
            else:
                cum_shifts[st] += 1
                cum_shifts[end+1] -= 1
        
        cum_sum = 0
        for i in range(len(s)):
            cum_sum += cum_shifts[i]
            
            new_code = (((ord(s[i]) + cum_sum) - 97) % 26) + 97
            s = s[:i] + chr(new_code) + s[i+1:]
        
        return s
```