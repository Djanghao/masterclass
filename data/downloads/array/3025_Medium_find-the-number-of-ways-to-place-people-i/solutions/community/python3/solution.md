# Python || Explained

**Author:** JigglyyPuff
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671885/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671885/)

---

Somehow I was not able to solve this question in contest due to poor description but it basically states that chisato and takina can form a line too but it must be always up-left and takina be low-right
for chisato up -> chisato y >= takina y
for chisato left -> chisato x <= takina x
# Code
```
class Solution:
    def numberOfPairs(self, points: List[List[int]]) -> int:
        def is_valid(chisato, takina, c, t):
            x1, y1 = chisato
            x2, y2 = takina
            for i, (x, y) in enumerate(points):
                if (x1 <= x <= x2 and y1 >= y >= y2) and i != c and i != t:
                    return False
            return True

        n = len(points)
        count = 0
        for i in range(n):
            for j in range(n):
                if i != j and (points[i][0] <= points[j][0] and points[i][1] >= points[j][1]):
                    if is_valid(points[i], points[j], i, j):
                        count += 1

        return count
                    
                    
                
                
                
                
                
        
        
```