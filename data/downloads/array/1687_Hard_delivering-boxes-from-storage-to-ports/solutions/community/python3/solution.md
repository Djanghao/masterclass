# [Python3] dp + greedy

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1465884/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1465884/)

---


```
class Solution:
    def boxDelivering(self, boxes: List[List[int]], portsCount: int, maxBoxes: int, maxWeight: int) -> int:
        dp = [0] + [inf]*len(boxes)
        trips = 2
        ii = 0
        for i in range(len(boxes)):
            maxWeight -= boxes[i][1]
            if i and boxes[i-1][0] != boxes[i][0]: trips += 1
            while maxBoxes < i - ii + 1 or maxWeight < 0 or ii < i and dp[ii] == dp[ii+1]:
                maxWeight += boxes[ii][1]
                if boxes[ii][0] != boxes[ii+1][0]: trips-=1
                ii += 1
            dp[i+1] = dp[ii] + trips
        return dp[-1] 
```