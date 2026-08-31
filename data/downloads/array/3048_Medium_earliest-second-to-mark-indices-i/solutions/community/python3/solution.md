# Greedy | python

**Author:** BetoSCL
**Votes:** 15
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778551/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778551/)

---

# Intuition
The approach follows a greedy strategy.

# Approach
Given the constraints, we can iterate over all the seconds and check if it's possible to mark all the indices.

To determine if we can mark all the indices with $X$ seconds, we use a greedy approach. Since marking depends on the existence of index $i$ in `changeIndices`, the optimal strategy is to delay marking index $i$ until the last possible second. In other words, mark index $i$ at the maximum second $j$ such that `changeIndices[j] == i`. This allows us to accumulate the maximum number of operations of the first type.

It doesn't matter which index $i$ we decrease when $j$ doesn't correspond to any of the last occurrences. We can simply accumulate and, when we reach the last occurrence of $i$ in `changeIndices`, validate that we have enough operations to set `nums[i] = 0`.

In simpler terms, the algorithm works as follows:

- Iterate over all seconds from $1$ to $M$ as possible answers or apply binary search over the answer.
- For each possible answer ($\	ext{ans}$), check if we can mark all the indices:
    - Find the last occurrence for each index $i$ in $[0, n-1]$ let's call $last$. If some index doesn't have an occurrence, it's impossible to solve for that possible answer.
    
    - Iterate from $1 \\leq s \\leq \	ext{ans}$ and check if $s$ corresponds to the last occurrence of some $i$ in `nums` or if $s == last[changeIndices[s]]$ :
        - If not, increment $cnt$ by $1$ (where $cnt$ is the number of operations of type $1$ that we can make).
        - If yes, check if your counter is big enough to set `nums[changeIndices[s]] = 0`, i.e., $cnt \\geq \	ext{nums[changeIndices[s]]}$, and consume those operations, i.e., $cnt -= \	ext{nums[changeIndices[s]]}$. Also, increment $mark$ by $1$.
    - Finally, check if we consumed/mark all the last occurrences, i.e., $idx == n$. If this condition is met, $ans$ is valid and we can return it.

# Complexity
- Time complexity: $O(M^2)$. This can be reduced to $O(M \\log{M})$ using binary search over the answer, but it's not necessary given the provided limits.
# Code
```python
class Solution:
    def earliestSecondToMarkIndices(self, nums: List[int], CI: List[int]) -> int:
        m = len(CI)
        n = len(nums)
        
        CI = [x-1 for x in CI]

        
        for ans in range(1,m+1):
            last = [-1]*n
            
            for i in range(ans):
                last[CI[i]] = i

            if last[0] ==-1:continue 
                
            mark = 0
            cnt = 0 
            
            for s in range(ans):
                if s == last[CI[s]]: 
                    if cnt>=nums[CI[s]]:
                        cnt-=nums[CI[s]]
                        mark+=1
                    else: 
                        break
                else: 
                    cnt+=1 
                    
            
            if mark == n: 
                return ans
            

        return -1
```

# With Binary search
```python
class Solution:
    def earliestSecondToMarkIndices(self, nums: List[int], CI: List[int]) -> int:
        m = len(CI)
        n = len(nums)
        
        CI = [x-1 for x in CI]

        def check(ans):
            last = [-1]*n
            
            for i in range(ans):
                last[CI[i]] = i

            if last[0] ==-1:
                return False 
                
            mark = 0
            cnt = 0 
            
            for s in range(ans):
                if s == last[CI[s]]: 
                    if cnt>=nums[CI[s]]:
                        cnt-=nums[CI[s]]
                        mark+=1
                    else: 
                        return False
                else: 
                    cnt+=1 
                    
            
            return mark == n

            
        l,r = (0,m+1)

        while l+1<r:
            mid = (l+r)>>1
            if check(mid): r = mid 
            else: l = mid 

        return -1 if r == m+1 else r
```