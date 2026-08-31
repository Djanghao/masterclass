# Python, recursive solution with memoization (DFS)

**Author:** swissified
**Votes:** 35
**Link:** [https://leetcode.com/problems/target-sum/solutions/1198338/](https://leetcode.com/problems/target-sum/solutions/1198338/)

---

This is a simple DFS implementation with pruning. The dfs without memoization times out since we're calculating the same tree over and over again. Hence, at each level (tracked via index) for each current total (tracked via total) we memoize number of possible paths below which would lead to target. To illustrate, if at 2nd level, our tree nodes are as following:

(2,2)   (2,0)  (2,-2)  (2,0)

Once we calculate the number of paths for the first node with values (2,0), we memoize it. Later, when we come across it again, we don't have to calculate again, we just retrieve from the map. 

```
class Solution:    
    def findTargetSumWays(self, nums: List[int], target: int) -> int:     
        dic = defaultdict(int)
        
        def dfs(index=0, total=0):          
            key = (index, total)
            
            if key not in dic:
                if index == len(nums):                    
                    return 1 if total == target else 0
                else:
                    dic[key] = dfs(index+1, total + nums[index]) + dfs(index+1, total - nums[index])                    
                        
            return dic[key]                                                             
                
        return dfs()
```
