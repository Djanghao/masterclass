# Python Priority Queue + Queue

**Author:** infinute
**Votes:** 11
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/240418/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/240418/)

---

```
import heapq
from collections import deque
from collections import Counter
class Solution:
    def rearrangeString(self, s: 'str', k: 'int') -> 'str':
        if k == 0:
            return s
        counter = Counter(s)
        queue = [[-counter[char], char] for char in counter]
        heapq.heapify(queue)
        mem = deque()
        
        res = ''
        while len(queue) or len(mem):
            if len(mem) == k:
                current = mem.popleft()
                if current[0] < 0:
                    heapq.heappush(queue, current)
            if len(queue):
                current = heapq.heappop(queue)
                res += current[1]
                current[0] += 1
                mem.append(current)
            else:
                if sum([item[0] for item in mem]) == 0:
                    return res
                else:
                    return ''
```