# Python 3 (one line) (beats 100%)

**Author:** junaidmansuri
**Votes:** 30
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/478426/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/478426/)

---

_Long Version:_
```
class Solution:
    def decompressRLElist(self, N: List[int]) -> List[int]:
        L, A = len(N), []
        for i in range(0,L,2):
            A.extend(N[i]*[N[i+1]])
        return A
		

```
_One Line Version:_
```
class Solution:
    def decompressRLElist(self, N: List[int]) -> List[int]:
        return sum([N[i]*[N[i+1]] for i in range(0,len(N),2)],[])
		
		
- Junaid Mansuri
- Chicago, IL