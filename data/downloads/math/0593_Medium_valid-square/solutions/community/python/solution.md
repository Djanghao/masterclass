# Simple python solution by comparing distance

**Author:** yang_fan
**Votes:** 125
**Link:** [https://leetcode.com/problems/valid-square/solutions/103448/](https://leetcode.com/problems/valid-square/solutions/103448/)

---

The idea is to calculate all the distance between each two points, and sort them. In this way, we get **4 edges** and **2 diagonals** of the square in order. If the **4 edges** equal to each other, that means it should be **equilateral parallelogram**. Finally, we check whether the **2 diagonals** equal to each other so as to check if it's a **square**. 
```
    def validSquare(self, p1, p2, p3, p4):
        if p1==p2==p3==p4:return False
        def dist(x,y):
            return (x[0]-y[0])**2+(x[1]-y[1])**2
        ls=[dist(p1,p2),dist(p1,p3),dist(p1,p4),dist(p2,p3),dist(p2,p4),dist(p3,p4)]
        ls.sort()
        if ls[0]==ls[1]==ls[2]==ls[3]:
            if ls[4]==ls[5]:
                return True
        return False
```