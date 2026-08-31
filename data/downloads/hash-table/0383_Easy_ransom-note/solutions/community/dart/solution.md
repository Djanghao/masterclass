# using dictionary

**Author:** Sajal_
**Votes:** 4
**Link:** [https://leetcode.com/problems/ransom-note/solutions/5156588/](https://leetcode.com/problems/ransom-note/solutions/5156588/)

---


# Code
```
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dict1 = {}
        for i in range(len(magazine)):
            if magazine[i] in dict1:
                dict1[magazine[i]] = dict1[magazine[i]]+1
            else:
                dict1[magazine[i]] = 1
        for i in ransomNote:
            if i not in dict1:
                return False
            elif dict1[i] < 1:
                return False
            else:
                dict1[i] = dict1[i] - 1
        else:
            return True
```

oneliner = https://leetcode.com/problems/ransom-note/solutions/5156605/one-liner-easy-way