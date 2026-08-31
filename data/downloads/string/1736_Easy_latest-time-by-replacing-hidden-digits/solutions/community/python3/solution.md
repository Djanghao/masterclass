# [Python3] if-elif

**Author:** ye15
**Votes:** 29
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1032030/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1032030/)

---

**Algo**
Replace `?` based on its location and value. 

**Implementation**
```
class Solution:
    def maximumTime(self, time: str) -> str:
        time = list(time)
        for i in range(len(time)): 
            if time[i] == "?": 
                if i == 0: time[i] = "2" if time[i+1] in "?0123" else "1"
                elif i == 1: time[i] = "3" if time[0] == "2" else "9"
                elif i == 3: time[i] = "5"
                else: time[i] = "9"
        return "".join(time)
```

**Analysis**
`O(1)` for fixed size problem