# Python solution with detailed explanation

**Author:** FlyingSPA
**Votes:** 21
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/1229993/](https://leetcode.com/problems/perfect-rectangle/solutions/1229993/)

---

* The first idea came to my mind is comparing the sum of area of all small rectangles with the area of the big rectangle. If there is no overlapped area, this method works well. However, if the empty area is equal to the overlapped area, we will get the wrong answer.
* Then the key point becomes whether there are overlapped areas. It's not hard to find that if all the rectangles together form an exact cover of a rectangular, every corner point of a rectangle is shared by 2 or 4  small rectangles, except the 4 corner points of the big rectangle.
* So we traverse all the rectangles, if the corner point exits, delete it from the set(O(1)), else add it to the set. If there are 4 corner points, it means no overlapped area is found, and we can compare the total area.
* sort the last 4 corner points, the first point is the bottom left point, and the last point is the top right point.

class Solution:

    def isRectangleCover(self, rectangles: List[List[int]]) -> bool:
        area = 0
        corner_point = set()

        for x,y,a,b in rectangles:
            area+=(a-x)*(b-y)
            for points in [(x,y),(x,b),(a,y),(a,b)]:
                if points in corner_point:
                    corner_point.remove(points)
                else:
                    corner_point.add(points)

        if len(corner_point)!=4: # a rectangle should only have 4 corner points
            return False
        # check the area is equal or not 
        corner_point = sorted(list(corner_point), key = lambda x:(x[0], x[1]))
        return area == ((corner_point[-1][0]-corner_point[0][0])*(corner_point[-1][1]-corner_point[0][1]))