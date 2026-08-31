# [Python] Clean solution

**Author:** ganyue246
**Votes:** 10
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/572636/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/572636/)

---

```python
class Solution:
    
    def oddCells(self, n: int, m: int, indices: List[List[int]]) -> int:
        
        matrix = [[0 for i in range(m)] for j in range(n)] 
        
        def inc(x, y):
            
            for i in range(m):
                matrix[x][i] += 1
            
            for i in range(n):
                matrix[i][y] += 1
                
        for ind in indices:
            inc(ind[0], ind[1])
            
            
        return sum([0 if n % 2 == 0 else 1 for l in matrix for n in l])
```