# [Python3] 1-pass O(N)

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/1002574/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/1002574/)

---

**Algo**
This implementation is similar to the popular threads in Discuss. But here we built the locations of 1s on-the-fly. 

**Implementation** - simulation 
```
class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        ii = val = 0 
        ans = inf
        loc = [] # location of 1s
        for i, x in enumerate(nums): 
            if x: 
                loc.append(i)
                m = (ii + len(loc) - 1)//2 # median 
                val += loc[-1] - loc[m] - (len(loc)-ii)//2 # adding right 
                if len(loc) - ii > k: 
                    m = (ii + len(loc))//2 # updated median 
                    val -= loc[m] - loc[ii] - (len(loc)-ii)//2 # removing left 
                    ii += 1
                if len(loc)-ii == k: ans = min(ans, val) # len(ones) - ii effective length
        return ans 
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`

A shorter solution given by @lee215 is in this [post](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/discuss/987347/JavaC%2B%2BPython-Solution).
```
class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        loc = [i for i, x in enumerate(nums) if x]
        prefix = [0]
        for x in loc: prefix.append(prefix[-1] + x)
        
        ans = inf
        for i in range(len(loc)-k+1): 
            ans = min(ans, (prefix[i+k] - prefix[i+(k+1)//2]) - (prefix[i+k//2] - prefix[i]))
        return ans - (k//2)*((k+1)//2)
```