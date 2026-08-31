# Python3 | Simple, Fast, Elegant | Beats 90%

**Author:** thomwebb
**Votes:** 16
**Link:** [https://leetcode.com/problems/detect-squares/solutions/2764859/](https://leetcode.com/problems/detect-squares/solutions/2764859/)

---

# Please upvote if helpful!

# Approach
**Adding Points** - Since duplicate points can be used to form distinct, countable squares, we will use a dictionary to track the number of times that point has been added. In order for us to track the point in a dictionary, it must be hashable, so we will convert the point from a list (non-hashable) to a tuple (hashable).

*Note: `defaultdict(int)` defaults to 0 for new values*


**Counting Squares** - To reduce the amount of iterating, we loop through the items of `self.points` searching for points that can serve as the opposite corner of a square. For each such point found, we check if `self.points` contains the other two necessary corners. If so, we calculate how many identical squares can be created by multiplying the instances of each of the three points in `self.points`. We add this number to the running count, which we return once the for loop is completed.


# Code
```
class DetectSquares:

    def __init__(self):
        self.points = collections.defaultdict(int)

    def add(self, point: List[int]) -> None:
        self.points[tuple(point)] += 1

    def count(self, point: List[int]) -> int:
        square_count = 0
        x1, y1 = point

        for (x2, y2), n in self.points.items():
            x_dist, y_dist = abs(x1 - x2), abs(y1 - y2)
            if x_dist == y_dist and x_dist > 0:
                corner1 = (x1, y2)
                corner2 = (x2, y1)
                if corner1 in self.points and corner2 in self.points:
                    square_count += n * self.points[corner1] * self.points[corner2]

        return square_count
    
```