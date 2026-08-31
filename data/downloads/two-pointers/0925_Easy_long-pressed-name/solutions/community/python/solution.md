# Easy Python Solution

**Author:** vivek1mishra
**Votes:** 31
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/698368/](https://leetcode.com/problems/long-pressed-name/solutions/698368/)

---

```
class Solution(object):
    def isLongPressedName(self, name, typed):
        """
        :type name: str
        :type typed: str
        :rtype: bool
        """
        j = 0
        i = 0
        n = len(name)
        t = len(typed)
        
        while j < t:
            if i < n and name[i] == typed[j]:
                i +=1
            elif j == 0 or typed[j] != typed[j-1]:
                return False
            j +=1
        return i == n
		```