# C++ | SIMPLE Solution with Explanation & Diagram

**Author:** hg3994
**Votes:** 13
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/1357690/](https://leetcode.com/problems/rectangle-overlap/solutions/1357690/)

---

```

/*

Harshit Gupta | 10th June, 2021
---------------------------------

C++ program for "Check if 2 the rectangles overlap with each other"
Return false for Not Overlapping
Return true      for Overlapping

https://leetcode.com/problems/rectangle-overlap/
------

Solution: Just check the conditions on when they will not overlap and for all other cases they will overlap.
            1. When R1 is totally on right of R2
            2. When R1 is totally on left of R2
            3. When R1 is totally below R2
            4. When R1 is totally above R2

Time Complexity: O(1)
Space Complexity: O(1)

Paradigm:
---
  NOTE: 

*/

//  Case-1: x2 <= x3
//                               ____________________x4,y4
//        _____________x2,y2    |                   |
//       |              |       |___________________|
//       |______________|      x3,y3
//      x1,y1

//  Case-2: x4 <= x1
//                               ____________________x2,y2
//        _____________x4,y4    |                   |
//       |              |       |___________________|
//       |______________|      x1,y1
//      x3,y3

// Case-3: y2 <= y3
//        ___________________  x4,y4
//       |                   |
//       |                   |
//       |___________________|
//     x3,y3         
//          ___________________x2,y2
//         |                   | 
//         |___________________|
//       x1,y1

// Case-4: y4 <= y1
//        ___________________  x2,y2
//       |                   |
//       |                   |
//       |___________________|
//     x1,y1         
//          ___________________x4,y4
//         |                   | 
//         |___________________|
//       x2,y3


class Solution {
public:
    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {
        int x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3];
        int x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];  
        
        // x2 <= x3 when R1 is on the left of R2 and they do not intersect
        // x4 <= x1 when R2 is on the left of R1 and they do not intersect
        if(x2 <= x3 || x4 <= x1)
            return false;
        
        // y2 <= y3 when R2 is above R1 and they do not intersect
        // y4 <= y1 when R1 is above R2 and they do not intersect
        if (y2 <= y3 || y4 <= y1)
             return false;
        
        // Pathetic conditions added for when the rectangle is just a line
        if(x1 == x2 || x3 == x4 || y1 == y2 || y3 == y4)
             return false;
        
        return true;
    }
};
```