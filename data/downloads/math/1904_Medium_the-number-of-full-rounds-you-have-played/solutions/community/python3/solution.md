# [Python3] math-ish

**Author:** ye15
**Votes:** 21
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284279/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284279/)

---


```
class Solution:
    def numberOfRounds(self, startTime: str, finishTime: str) -> int:
        hs, ms = (int(x) for x in startTime.split(":"))
        ts = 60 * hs + ms
        hf, mf = (int(x) for x in finishTime.split(":"))
        tf = 60 * hf + mf
        if 0 <= tf - ts < 15: return 0 # edge case 
        return tf//15 - (ts+14)//15 + (ts>tf)*96
```

```
class Solution:
    def numberOfRounds(self, startTime: str, finishTime: str) -> int:
        ts = 60 * int(startTime[:2]) + int(startTime[-2:])
        tf = 60 * int(finishTime[:2]) + int(finishTime[-2:])
        if 0 <= tf - ts < 15: return 0 # edge case 
        return tf//15 - (ts+14)//15 + (ts>tf)*96
```