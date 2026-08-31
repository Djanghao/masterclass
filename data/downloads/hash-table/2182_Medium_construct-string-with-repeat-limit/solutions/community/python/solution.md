# priorityqueue + Longest Happy String

**Author:** alpha_gigachad
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1786864/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1786864/)

---

Found it quite close to `Longest Happy String`: https://leetcode.com/problems/longest-happy-string/

For solution and explanation for it, please see this (Thanks to @lechen999): https://leetcode.com/problems/longest-happy-string/discuss/564248/Python-HEAP-solution-with-explanation

We first count each char's appearing times
Then use max heap to implement `Longest Happy String`.
However, please pay attention to "the actual appearing time in stack", which we'll also need a map to record. Whenever found the prior char `x` exceeds the `repeatLimit` (I simplified it as `k`), we heappop a less appearing char `y` and append it to stack, and `times[y]` should be 1, and clear the `times[x]` because we have a new "stack top". The same for `x` not appearing exceeds `k`. 

Hope it helps:
```
from heapq import heapify, heappush, heappop
from collections import defaultdict

class Solution:
    def repeatLimitedString(self, string: str, k: int) -> str:
        """
        look close to the problem:
            it's  lexicographically largest 
            not "longest"
        """
        appear, times = defaultdict(), defaultdict()
        pq, stack = [], []
        for s in string:
            appear[s] = appear.get(s, 0) + 1
        
        for s in appear:
            pq.append((-ord(s), appear[s]))
        
        heapify(pq)
        appear.clear()
        
        while pq:
            char, num = heappop(pq)
            s = chr(-char)
            if s in times and times[s] == k: # if reach the repeatedLimit
                if not pq:
                    return ''.join(stack)
                char2, num2 = heappop(pq)
                token = chr(-char2)
                stack.append(token)
                if num2 - 1 > 0:
                    heappush(pq, (char2, num2 - 1))
                heappush(pq, (char, num))
                del times[s]
                times[token] = 1
                continue
            if stack and stack[-1] != s:
                # reset times
                del times[stack[-1]]
            stack.append(s)
            times[s] = times.get(s, 0) + 1
            
            if num - 1 > 0:
                heappush(pq, (char, num - 1))
        return ''.join(stack) 
```