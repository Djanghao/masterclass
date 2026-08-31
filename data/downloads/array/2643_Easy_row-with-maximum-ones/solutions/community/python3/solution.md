# easiest solution || python3

**Author:** KmrVikas
**Votes:** 7
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3421854/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3421854/)

---

```
class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:    
        ones = 0 
        index = 0
        for it, row in enumerate(mat):
            c = row.count(1)
            if ones < c:
                ones = c
                index = it
        
        return [index,ones]
