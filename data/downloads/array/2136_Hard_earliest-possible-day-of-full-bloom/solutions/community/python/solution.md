# Python greedy (faster than 100.00%, Runtime: 1808 ms)

**Author:** kryuki
**Votes:** 13
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/1676955/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/1676955/)

---

Algorithm: choose the one with the largest grow time for every step. 

The idea behind this is that since you want the plant to finish growing as soon as possible, you want to plant the one with larger grow time as fast as possible so you want to minimize the effect they have for the end time.


```
class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        data = list(zip(plantTime, growTime))
        data.sort(key=lambda x: -x[1]) #sort by grow time in descending order
        
        res = 0
        start_time = 0
        for plant, grow in data:
            start_time += plant
            res = max(res, start_time + grow)
        return res
```