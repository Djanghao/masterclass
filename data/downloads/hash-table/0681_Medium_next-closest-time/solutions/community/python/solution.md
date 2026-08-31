# Fast intuitive python solution

**Author:** xilofon
**Votes:** 9
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/1598498/](https://leetcode.com/problems/next-closest-time/solutions/1598498/)

---

```
class Solution:
    def nextClosestTime(self, time: str) -> str:
        lst = list(time.replace(":", ""))
        lst.sort()
                
        min_num = min(lst)

        #seconds
        for i in lst:
            if i > time[4]:
                return time[:4] + i
            
        #tens of seconds
        for i in lst:
            if i > time[3] and i < "6":
                return time[:3] + i + min_num
        
        #hours
        for i in lst:
            if i > time[1]:
                if time[0] != "2" or i < "4": 
                    return f"{time[0]}{i}:{min_num}{min_num}"

        #tens of hours            
        for i in lst:
            if i > time[0]:
                if i == "1" or i == "2" and min_num < "4":
                    return f"{i}{min_num}:{min_num}{min_num}"
                
        return f"{min_num}{min_num}:{min_num}{min_num}"
```
