# Python faster than 94% solution

**Author:** emkaitl
**Votes:** 19
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/889570/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/889570/)

---

```
   def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        d = {}
        
        rows = len(mat)
        cols = len(mat[0])

        for i in range(rows):
            for j in range(cols):
                if i-j in d:
                    d[i-j].append(mat[i][j])
                else:
                    d[i-j] = [mat[i][j]]
                    
        for k in d.keys():
            d[k].sort()
            
        for i in range(rows):
            for j in range(cols):
                mat[i][j] = d[i-j].pop(0)
                
        return mat
		```