# Simple python and PHP solution with explanation

**Author:** dmitrik
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-squares/solutions/4159713/](https://leetcode.com/problems/detect-squares/solutions/4159713/)

---

# Intuition
It is possible to use hash table of hash tables to keep number of point at concrete coordinate. After that it is simple to build all four points of square using hash table of points. We simply check three new points in hash table of points and count the squars.

# Approach
Method `init` consists of definition `points` hash table.
Method `add` set new point to hash table. Use `point` and set first coordinate of `point` as key of first dimention of hash table the second coordinate is the key of the second dimention of hash table. The value of hash table is the counter of points at current coordinates.
Define an additional function/method `getCountSquares` that will be count squares by three new points.
Method `count`. Iterate all keys of hash table `self.points[point[0]]` that exists in second dimention of hash table. There is a second coordinate of the square than we can calculate the `length` of the side of the square. After that we can build three new points, check it in hash table and calculate the count squares.

# Complexity
- Time complexity:
Method `init` $$O(1)$$
Method `add` $$O(1)$$
Method `count` $$O(n)$$ n - number of points at the same first coordinate

- Space complexity: $$O(n)$$

# Code
# Python
```
class DetectSquares:

    def __init__(self):
        self.points = defaultdict(lambda: defaultdict(int))

    def add(self, point: List[int]) -> None:
        self.points[point[0]][point[1]] += 1

    def count(self, point: List[int]) -> int:

        def getCount(secondPoint, thirdPoint, forthPoint):
            if secondPoint[0] in self.points and secondPoint[1] in self.points[secondPoint[0]] and thirdPoint[0] in self.points and thirdPoint[1] in self.points[thirdPoint[0]] and forthPoint[1] in self.points[forthPoint[0]]:
                return self.points[secondPoint[0]][secondPoint[1]] * self.points[thirdPoint[0]][thirdPoint[1]] * self.points[forthPoint[0]][forthPoint[1]]
            return 0

        result = 0
        for y in self.points[point[0]]:
            length = abs(point[1] - y)
            if length == 0:
                continue
            secondPoint = [point[0], y]
            thirdPoint = [point[0] - length, point[1]]
            forthPoint = [point[0] - length, y]
            result += getCount(secondPoint, thirdPoint, forthPoint)
            thirdPoint = [point[0] + length, point[1]]
            forthPoint = [point[0] + length, y]
            result += getCount(secondPoint, thirdPoint, forthPoint)
        return result


# Your DetectSquares object will be instantiated and called as such:
# obj = DetectSquares()
# obj.add(point)
# param_2 = obj.count(point)
```

# PHP
```
class DetectSquares {
    /**
     */
    function __construct() {
        $this->points = [];
    }
  
    /**
     * @param Integer[] $point
     * @return NULL
     */
    function add($point) {
        if (!isset($this->points[$point[0]][$point[1]])) {
            $this->points[$point[0]][$point[1]] = 0;
        }
        $this->points[$point[0]][$point[1]] += 1;
    }
  
    /**
     * @param Integer[] $point
     * @return Integer
     */
    function count($point) {
        $result = 0;
        if (isset($this->points[$point[0]])) {
            $yCoordinates = array_keys($this->points[$point[0]]);
            foreach ($yCoordinates as $y) {
                $length = abs($point[1] - $y);
                if ($length == 0) {
                    continue;
                }
                $secondPoint = [$point[0], $y];
                $thirdPoint = [$point[0] - $length, $point[1]];
                $forthPoint = [$point[0] - $length, $y];
                $result += $this->countSquares($secondPoint, $thirdPoint, $forthPoint);
                $thirdPoint = [$point[0] + $length, $point[1]];
                $forthPoint = [$point[0] + $length, $y];
                $result += $this->countSquares($secondPoint, $thirdPoint, $forthPoint);
            }
        }
        return $result;
    }

    /**
     * @param Integer[] $secondPoint
     * @param Integer[] $thirdPoint
     * @param Integer[] $forthPoint
     * @return Integer
     */
    function countSquares($secondPoint, $thirdPoint, $forthPoint) {
        if (isset($this->points[$secondPoint[0]][$secondPoint[1]], $this->points[$thirdPoint[0]][$thirdPoint[1]], $this->points[$forthPoint[0]][$forthPoint[1]])) {
            return $this->points[$secondPoint[0]][$secondPoint[1]] * $this->points[$thirdPoint[0]][$thirdPoint[1]] * $this->points[$forthPoint[0]][$forthPoint[1]];
        }
        return 0;
    }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * $obj = DetectSquares();
 * $obj->add($point);
 * $ret_2 = $obj->count($point);
 */
```

