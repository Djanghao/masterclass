# Python - Explanation

**Author:** nuclearoreo
**Votes:** 10
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/377844/](https://leetcode.com/problems/distance-between-bus-stops/solutions/377844/)

---

* Get the min and max between the start and destination to make a proper slice of the array
* Get the sum of the slice of the array and get sum of the remainder by subtracting the sum of full array by the sum of the slice
* Pick the mininum of the two sums to get the minimum distance (First sum being clockwise and second being counterclockerwise)
```
class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:
        a, b = min(start, destination), max(start, destination)
        return min(sum(distance[a:b]), sum(distance) - sum(distance[a:b]))
```