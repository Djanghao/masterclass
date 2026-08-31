# (Java) Easy 1 line sol with great explaination || Beats 100%

**Author:** am282000
**Votes:** 20
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/1340498/](https://leetcode.com/problems/rectangle-overlap/solutions/1340498/)

---

# *****************Upvote if you like *************
# Code :
```
public boolean isRectangleOverlap(int[] rec1, int[] rec2) {
        return (rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec1[2] > rec2[0] &&  rec1[3] > rec2[1]);
    }
```
# Explaination : 
```
                  2,3
rec1            (x2,y2)
         _______
        |       |
        |       |
        |_______|
    (x1,y1)
      0,1
    

rec2            (x2,y2)
                  2,3
         _______
        |       |
        |       |
        |_______|
    (x1,y1)
      0,1


These 0,1,2,3 just for our convienence

Simple idea is that they will overlap only if
 rect1 k x1,y1 < rect2 k x2,y2  
 rect1 k x2,y2 > rect2 k x1,y1  

```
