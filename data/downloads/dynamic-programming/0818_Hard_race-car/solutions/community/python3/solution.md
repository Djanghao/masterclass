# Python3 BFS Explanation

**Author:** user9611y
**Votes:** 16
**Link:** [https://leetcode.com/problems/race-car/solutions/2451845/](https://leetcode.com/problems/race-car/solutions/2451845/)

---

At every position, we have two choice
* Either accelerate
* Or reverse

Note: If you are thinking of accelerating till `curren position < target` and when `current position becomes > target to reverse`, it wont work because sometimes we would have to decelerate first and then accelerate even though` current position < target`.
Hence we need to consider both the options at every given position.

Brute Force BFS Code
```
class Solution:
    def racecar(self, target: int) -> int:
        q = deque()
        q.append((0,1,0)) #curr pos, curr speed, number of moves
        
        while q:
            cp,cs,nm = q.popleft()
            
            if cp==target:
                return nm
            
            #every pos we have 2 choice
            #A or R
            q.append((cp+cs,cs*2,nm+1))
            
            if cs<0:
                q.append((cp,1,nm+1))
            else:
                q.append((cp,-1,nm+1))
                
```

But this gives` MLE` since its complexity is` O(2^N)`. Hence to cut down on the brute force traversal, we need to wisely choose when we consider to move in opposite direction to the direction we are currently travelling in.

We need to CONSIDER moving in opposite direction only when we seem to cross the target and accelerating away from target or when we seem to move away from taregt and accelerating away from the target because we might never reach the target.

Hence:
```
class Solution:
    def racecar(self, target: int) -> int:
        q = deque()
        q.append((0,1,0)) #curr pos, curr speed, number of moves
        
        while q:
            cp,cs,nm = q.popleft()
            
            if cp==target:
                return nm
            
            #every pos we have 2 choice
            #A or R
            
            #Acceleration
            q.append((cp+cs,cs*2,nm+1))
            
            #Reverse
            if (cp+cs>target and cs>0) or (cp+cs<target and cs<0):
                if cs<0:
                    q.append((cp,1,nm+1))
                else:
                    q.append((cp,-1,nm+1))
                
```


