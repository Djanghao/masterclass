# Python/JS/Java/C++ sol by math [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 14
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/665532/](https://leetcode.com/problems/rectangle-area/solutions/665532/)

---

Time Complexity:
O(1) for basic math operations

Space Complexity:
O(1) for fixed number of local temporary variables

---

**Hint**:

**Check** whether **overlapped area exists or not**.
If yes, remember to subtract overlapped area.

General formula:

Final result = Area of first rectangle + Area of second rectangle **-** **Area of overlapped**

---

**Implementation** by **Python**:

```
class Solution:
    def computeArea(self, A: int, B: int, C: int, D: int, E: int, F: int, G: int, H: int) -> int:
        
        left_boundary = max(A, E)
        right_boundary = min(C, G)
        
        top_boundary = min(D, H)
        bottom_bondary = max(B, F)
        
        
        area_1 = (C - A)*(D - B)
        area_2 = (G - E)*(H - F)
        
        if (left_boundary < right_boundary) and (bottom_bondary < top_boundary):
            # area_1 and area_2 has overlapped area
            intersection = ( right_boundary - left_boundary ) * ( top_boundary - bottom_bondary )
			
        else:
            # area_1 and area_2 has no overlapped area
            intersection = 0
        
        return area_1 + area_2 - intersection
```

---

**Implementation** by **C++**:

```
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
        int left_boundary = max(ax1, bx1);
        int right_boundary = min(ax2, bx2);
        
        int top_boundary = min(ay2, by2);
        int bottom_bondary = max(ay1, by1);
        
        
        int area_1 = (ax2 - ax1)*(ay2 - ay1);
        int area_2 = (bx2 - bx1)*(by2 - by1);
        int intersection = 0;
        
        if( (left_boundary < right_boundary) && (bottom_bondary < top_boundary) ){
            // area_1 and area_2 has overlapped area
            intersection = ( right_boundary - left_boundary ) * ( top_boundary - bottom_bondary );
        }

        
        return area_1 + area_2 - intersection;
    }
};
```

---

**Implementation** by **Java**:

```
class Solution {
    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
        int left_boundary = Math.max(ax1, bx1);
        int right_boundary = Math.min(ax2, bx2);
        
        int top_boundary = Math.min(ay2, by2);
        int bottom_bondary = Math.max(ay1, by1);
        
        
        int area_1 = (ax2 - ax1)*(ay2 - ay1);
        int area_2 = (bx2 - bx1)*(by2 - by1);
        int intersection = 0;
        
        if( (left_boundary < right_boundary) && (bottom_bondary < top_boundary) ){
            // area_1 and area_2 has overlapped area
            intersection = ( right_boundary - left_boundary ) * ( top_boundary - bottom_bondary );
        }

        
        return area_1 + area_2 - intersection;
    }
}
```

---

**Implementation** by **JavaScript**:

```
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
        let left_boundary = Math.max(ax1, bx1);
        let right_boundary = Math.min(ax2, bx2);
        
        let top_boundary = Math.min(ay2, by2);
        let bottom_bondary = Math.max(ay1, by1);
        
        
        let area_1 = (ax2 - ax1)*(ay2 - ay1);
        let area_2 = (bx2 - bx1)*(by2 - by1);
        let intersection = 0;
        
        if( (left_boundary < right_boundary) && (bottom_bondary < top_boundary) ){
            // area_1 and area_2 has overlapped area
            intersection = ( right_boundary - left_boundary ) * ( top_boundary - bottom_bondary );
        }

        
        return area_1 + area_2 - intersection;
};
```
