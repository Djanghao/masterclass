# ✅ Python - Simple Count all combinations

**Author:** constantine786
**Votes:** 25
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996643/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996643/)

---

```
class Solution:
    def countDistinct(self, nums: List[int], k: int, p: int) -> int:
        n = len(nums)                        
        sub_arrays = set()
        
		# generate all combinations of subarray
        for start in range(n):
            cnt = 0
            temp = ''
            for i in range(start, n):
                if nums[i]%p == 0:
                    cnt+=1                 
                temp+=str(nums[i]) + ',' # build the sequence subarray in CSV format          
                if cnt>k: # check for termination 
                    break
                sub_arrays.add(temp)                                    
                
        return len(sub_arrays)
```

**T = O(N^3)**
**S = O(N^2)**

---

***Please upvote if you find it useful***