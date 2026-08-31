# [Python3] Sort & scan

**Author:** ye15
**Votes:** 22
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/463586/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/463586/)

---

Algorithm:
Sort the array in ascending order. 
At each index `i`, compute the value to set `arr[i:]` to so that `sum(arr)` would be closest to `target`. If this value is smaller than `arr[i]`, return it; otherwise, return `arr[-1]`. 

Implementation (24ms, 100%):
```
class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        arr.sort()
        s, n = 0, len(arr)
        
        for i in range(n):
            ans = round((target - s)/n)
            if ans <= arr[i]: return ans 
            s += arr[i]
            n -= 1
            
        return arr[-1]
```

Analysis:
Time complexity `O(NlogN)`
Space complexity `O(1)`