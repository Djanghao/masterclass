# [Python] Simple solution - Greedy - O(N) [Explanation + Code + Comment]

**Author:** mihirrane
**Votes:** 19
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944568/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944568/)

---

The lexicographically smallest string of length n could be 'aaa'.. of length n
The constraint is that the numeric value must be k.
To satisfy this constraint, we will greedily add either 'z' or character form of (k - value) to the string.

For eg. 
n = 3, k = 32
Initially, ans = 'aaa', val = 3, i =2
Since val!=k
ans = 'aaz', val = 28, i = 1
Since, val!=k
k - val = 4
ans = 'adz', val = 0 
Since, val == k
break

Final answer  = 'adz'

Running time: O(N)
Memory: O(1)

```
class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        ans = ['a']*n  # Initialize the answer to be 'aaa'.. length n
        val = n           #Value would be length as all are 'a'
        
        for i in range(n-1, -1, -1):    
            if val == k:           # if value has reached k, we have created our lexicographically smallest string
                break
            val -= 1                # reduce value by one as we are removing 'a' and replacing by a suitable character
            ans[i] = chr(96 + min(k - val, 26))   # replace with a character which is k - value or 'z'
            val += ord(ans[i]) - 96                     # add the value of newly appended character to value
            
        return ''.join(ans)                                 # return the ans string in the by concatenating the list
```