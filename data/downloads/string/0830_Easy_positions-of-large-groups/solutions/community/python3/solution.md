# Python Two Pointer - O(n) - Time Complexity in Top 92 %

**Author:** leeik
**Votes:** 13
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/618672/](https://leetcode.com/problems/positions-of-large-groups/solutions/618672/)

---

```
class Solution:
    def largeGroupPositions(self, S: str) -> List[List[int]]:
        left = 0 
        return_list = []
        S += '1'
        for index, letter in enumerate(S):
            if letter != S[left]:
                if index - left >= 3:
                    return_list.append([left, index - 1])
                left = index
        return return_list
```