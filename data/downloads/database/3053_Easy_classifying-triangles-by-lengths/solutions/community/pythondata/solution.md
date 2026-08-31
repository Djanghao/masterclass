# Using np.where - beats 92%

**Author:** Bavi
**Votes:** 0
**Link:** [https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/5921040/](https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/5921040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def type_of_triangle(triangles: pd.DataFrame) -> pd.DataFrame:
    triangles['triangle_type'] = np.where( 
        (triangles['A']+triangles['B']<=triangles['C']) | (triangles['B']+triangles['C']<=triangles['A']) | (triangles['A']+triangles['C']<=triangles['B']), 'Not A Triangle', 
        np.where((triangles['A']==triangles['B'])&(triangles['B']==triangles['C']),'Equilateral', 
        np.where((triangles['A']==triangles['B']) |(triangles['B']==triangles['C']) | (triangles['A']==triangles['C']), 'Isosceles', 'Scalene' )
        
        )
        
        
        )
    
    return triangles[['triangle_type']]
```