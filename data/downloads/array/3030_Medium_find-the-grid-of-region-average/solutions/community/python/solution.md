# Simple and Easy to understand | Using dict | Python solution

**Author:** pragya_2305
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674033/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674033/)

---

# Complexity
- Time complexity: O(mn)

- Space complexity: O(mn)

# Code
```
class Solution:
    def resultGrid(self, image: List[List[int]], threshold: int) -> List[List[int]]:
        m,n = len(image),len(image[0])
        intensity = defaultdict(list)
        result = []
        
        def isRegion(r,c):
            if r+3>m or c+3>n:
                return -1
            avg = 0
            for i in range(r,r+3):
                for j in range(c,c+3):
                    if i+1<r+3 and abs(image[i][j]-image[i+1][j])>threshold:
                        return -1
                    if j+1<c+3 and abs(image[i][j]-image[i][j+1])>threshold:
                        return -1
                    avg+=image[i][j]
                        
            return avg//9    
        
        
        for i in range(m):
            result.append(image[i][:])
            for j in range(n):
                avg = isRegion(i,j)
                if avg!=-1:
                    for r in range(i,i+3):
                        for c in range(j,j+3):
                            intensity[(r,c)].append(avg)
                        
        for i in range(m):
            for j in range(n):
                if intensity[(i,j)]:
                    result[i][j] = sum(intensity[(i,j)])//len(intensity[(i,j)])
                    
        return result
                
            
            
        
        
                
            
            
        
        
```