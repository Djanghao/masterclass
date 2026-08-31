# ✅ Python Easy Approach

**Author:** constantine786
**Votes:** 11
**Link:** [https://leetcode.com/problems/min-max-game/solutions/2112349/](https://leetcode.com/problems/min-max-game/solutions/2112349/)

---

```
class Solution:
    def minMaxGame(self, nums: List[int]) -> int:                
        l=nums
        while len(l)>1:
            is_min=True     
            tmp=[]
            for i in range(0, len(l), 2):
                if is_min:
                    tmp.append(min(l[i:i+2]))
                else:
                    tmp.append(max(l[i:i+2]))
                is_min=not is_min            
            l=tmp            
        return l[0]                        
```

**Time - O(nlogn)** - The input space is reduced by half after each iteration. 
**Space - O(n)**

**Note**: The space can be reduced to `O(1)` if you use input array as the space to store the next list of elements. But I don't like the idea of modifying the input array.

---

***Please upvote if you find it useful***