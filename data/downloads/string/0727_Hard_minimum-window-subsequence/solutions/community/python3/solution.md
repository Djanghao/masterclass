# Python - BFS

**Author:** shigatan
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/566895/](https://leetcode.com/problems/minimum-window-subsequence/solutions/566895/)

---

```
class Solution:
    def minWindow(self, S: str, T: str) -> str:
        queue = collections.deque()
        seen = set()
        for i in range(len(S)):
            if S[i] == T[0]:
                state = (i,0) #lastVisitedInS, lastVisitedInT
                queue.append((i, state)) # begin, state
                seen.add(state)
        
        steps = 0
        while queue:
            L = len(queue)
            for _ in range(L):
                begin, state  = queue.popleft()
                index1, index2 = state
                if index2 == len(T) - 1:
                    return S[begin:index1 + 1]
                
                next1, next2 = index1 + 1, index2 + 1
                
                if next1 < len(S) and next2 < len(T):
                    if S[next1] == T[next2]:
                        newState = (next1, next2)
                    else:
                        # do not skip on next in T
                        newState = (next1, index2)
                    
                    if newState not in seen:
                        seen.add(newState)
                        queue.append((begin, newState))
                    
            steps += 1
        
        return ""
```