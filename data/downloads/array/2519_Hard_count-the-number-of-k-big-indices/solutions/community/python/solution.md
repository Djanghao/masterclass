# [Python] BIT

**Author:** alexey_wish
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4284547/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4284547/)

---

1) solve problem number of elements for the current index i with BIT 
2) solve reversed problem but keep indeces N-1-i

```python
class Solution:
    def kBigIndices(self, A: List[int], k: int) -> int:
        def count(A,is_reversed = True):
            N = len(A)
            BIT = Counter()
            M = max(A) + 1
            def count(x):
                s = 0
                while x:
                    s += BIT[x]
                    x -= x & (-x)
                return s
            
            def update(x):
                while x < M+1:
                    BIT[x] += 1
                    x += x & (-x)

            ans = set()
            for i,a in enumerate(A):
                c = count(a-1)
                
                if c >= k:
                    if is_reversed:
                        ans.add(i)
                    else:
                        ans.add(N-1-i)
                update(a)
            return ans
        
        
        a1 = count(A)
        a2 = count(A[::-1], False)
        return len(a1&a2) 
```

Time: `O(MlogM)` where M is the size of BIT
Space: `O(M)` where M is the size of BIT
