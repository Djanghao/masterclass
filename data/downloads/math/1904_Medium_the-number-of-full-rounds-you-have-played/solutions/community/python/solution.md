# Python: Brute-force: Constant Time and Space.

**Author:** meaditya70
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284465/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284465/)

---

Idea: Split the time into hours and minutes.

if start hour == end hour, and start min < end min, this simply means start time is less than end time.
so, get the difference between the  number of games he/she can play witin that time. 
Note: if start min = 1 and end min = 46, then our games played will be only 2 from 15-30 min and 30 - 45 min.
So, **do not do (end min - start min)//15** because it will give you (46-1)//15 = 3 which is not true.

So, just take care of such things and it can be solved easily.

I guess the code is self explanatory. Kindly go through it. Incase of any doubts, feel free to comment down below.

Have a great day!

```
class Solution:
    def numberOfRounds(self, startTime: str, finishTime: str) -> int:
        sh, sm = startTime.split(":")
        eh, em = finishTime.split(":")
		
        # sh - hour part of the start time
		# sm - minute part of the start time
		# eh - hour part of the finish time
		# em = minute part of the finish time
        sh, sm, eh, em = int(sh), int(sm), int(eh), int(em)
        
        if sh == eh:
            if sm <= em:
                return em//15 - (sm//15 + 1)
            else:
                val = 0
                sm = 60 - sm
                val += sm//15
                val += em//15
                return 23*4 + val 
        else:
            if eh < sh:
                eh += 24
            val = 0
            sm = 60 - sm
            val += sm//15
            val += em//15
            sh += 1
            return (eh-sh)*4 + val
```
Time = Space = O(1)