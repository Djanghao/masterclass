# Python Simple Solution Explained (video + code)

**Author:** spec_he123
**Votes:** 12
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/818377/](https://leetcode.com/problems/pancake-sorting/solutions/818377/)

---

[](https://www.youtube.com/watch?v=4WQouWU9XXE)
https://www.youtube.com/watch?v=4WQouWU9XXE
```
class Solution:
    def pancakeSort(self, A: List[int]) -> List[int]:
        x = len(A)
        k = []
        
        for indx in range(x):
            max_ = max(A[:x - indx])
            max_indx = A.index(max_) + 1
            A[:max_indx] = reversed(A[:max_indx])
            k.append(max_indx)
            
            A[:x - indx] = reversed(A[:x - indx])
            k.append(x - indx)
        return k
```