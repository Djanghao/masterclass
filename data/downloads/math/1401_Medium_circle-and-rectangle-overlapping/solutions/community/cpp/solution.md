# Circle and Rectangle Overlapping

**Author:** prabhatm580
**Votes:** 6
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/1895200/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/1895200/)

---

```
we know the equation of circle (x-c1)^2+(y-c2)^2=r^2
x1<=i<=x2
y1<=j<=y2
if((i-c1)^2+(j-c2)^2<=r*r)
   -> means that if (i,j) belongs to circle means that it touches or intersects the circle.
```
```
class Solution 
{
 public:
    bool checkOverlap(int r, int x, int y, int x1, int y1, int x2, int y2) 
    {
        for(int i=x1;i<=x2;i++)
        {
           for(int j=y1;j<=y2;j++)
           {
              int c1=i-x;
              int c2=j-y;
              if(c1*c1+c2*c2<=r*r)
                  return 1;
           }
        }
        return 0;
    }
};
```