# 📌[C++/JAVA/Python3] | Intuitive Solution | De Morgans law

**Author:** divyamRai
**Votes:** 20
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/2822416/](https://leetcode.com/problems/rectangle-area/solutions/2822416/)

---

**De Morgans law :** *The complement of the union of two sets is the intersection of their complements and the complement of the intersection of two sets is the union of their complements.*


This is a follow-up to the question **[836. Rectangle Overlap](https://leetcode.com/problems/rectangle-overlap/)**


```
// There are primarily 3 scenarios.

scenario 1 (partly overlapping):
ax1-----------ax2
       bx1-----------bx2

scenario 2 (fully overlapping):
ax1-----------ax2
     bx1-bx2

scenario 3 (no overlapping):
ax1-----------ax2
                    bx1-----------bx2
					
Hence, intersection can be discovered by:

* determining the greater of the two starting locations
* calculating the smaller of the two endpoints

```



```
         int x1 = max(rec1[0],rec2[0]);
		 int x2 = min(rec1[2],rec2[2]);
		 
         int y1 = max(rec1[1],rec2[1]);
         int y2 = min(rec1[3],rec2[3]);
        
         // if(x1 < x2 && y1 < y2) then there is an overlap between two rectangles.
         // else, there isn't.
```


------------------------------
------------------------------

**C++**

```
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
        int areaOf1stRectangle = (ax2 - ax1) * (ay2 - ay1);
        int areaOf2ndRectangle = (bx2 - bx1) * (by2 - by1);

        int xOverlap = min(ax2, bx2) - max(ax1, bx1);
        int yOverlap = min(ay2, by2) - max(ay1, by1);
        int areaOverlap = (xOverlap > 0 && yOverlap > 0) ? xOverlap * yOverlap : 0;

        return (areaOf1stRectangle + areaOf2ndRectangle - areaOverlap);    
    }
};
```


--------------------------------

**JAVA**

```
class Solution {
    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
        int areaOf1stRectangle = (ax2 - ax1) * (ay2 - ay1);
        int areaOf2ndRectangle = (bx2 - bx1) * (by2 - by1);

        int xOverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
        int yOverlap = Math.min(ay2, by2) - Math.max(ay1, by1);
        int areaOverlap = (xOverlap > 0 && yOverlap > 0) ? xOverlap * yOverlap : 0;

        return (areaOf1stRectangle + areaOf2ndRectangle - areaOverlap); 
    }
}
```

-------------------------

**Python3**

```
class Solution:
    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:
        areaOf1stRectangle = (ax2 - ax1) * (ay2 - ay1);
        areaOf2ndRectangle = (bx2 - bx1) * (by2 - by1);

        xOverlap = min(ax2, bx2) - max(ax1, bx1);
        yOverlap = min(ay2, by2) - max(ay1, by1);
        areaOverlap = max(xOverlap,0) * max(yOverlap,0);

        return (areaOf1stRectangle + areaOf2ndRectangle - areaOverlap);
```