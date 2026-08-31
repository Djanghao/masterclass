# Simple and easy to understand backtracking solution in Python

**Author:** kryuki
**Votes:** 6
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/1651588/](https://leetcode.com/problems/generalized-abbreviation/solutions/1651588/)

---

For each index, you have two choices - abbreviate, or not to abbreviate.
Basically, you try both possibilities for each step.
However, you also need to consider if the last element from the previous step is number or alphabet because it changes the next step. (i.e., The numbers cannot be put continuously.)


```
class Solution:
    def generateAbbreviations(self, word: str) -> List[str]:
        def rec(idx, curr_list):
            if idx == L:
                res.append(''.join(curr_list))
                return
            
            #Abbreviate
            if curr_list and curr_list[-1].isdigit():
                curr_list[-1] = str(int(curr_list[-1]) + 1)
                rec(idx + 1, curr_list)
                curr_list[-1] = str(int(curr_list[-1]) - 1)
            else:
                rec(idx + 1, curr_list + ['1'])
            
            #Not to abbreviate
            rec(idx + 1, curr_list + [word[idx]])
                
        L = len(word)
        res = []
        rec(0, [])
        return res
```