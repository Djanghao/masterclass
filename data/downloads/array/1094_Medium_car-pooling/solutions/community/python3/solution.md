# [Python3] 3 solutions: Sweep Line, Sorting, Heap + similar problems

**Author:** yourick
**Votes:** 15
**Link:** [https://leetcode.com/problems/car-pooling/solutions/3557122/](https://leetcode.com/problems/car-pooling/solutions/3557122/)

---

##### Sweep line or Difference Array algorithm:
```python3 []
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        locations = [0] * 1001
        for numPassengers, start, end in trips:
            locations[start] += numPassengers
            locations[end] -= numPassengers
        
        for numPassengers in locations:
            capacity -= numPassengers
            if capacity < 0: return False
        
        return True
```
##### Simulation with sorting:
```python3 []
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        locations = []
        for numPassengers, start, end in trips:
            locations.extend([(start, numPassengers), (end, -numPassengers)])
        locations.sort()

        for _, numPassengers in locations:
            capacity -= numPassengers
            if capacity < 0: return False

        return True
```
##### Simulation with Priority Queue (Heap):
```python3 []
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        heap = []
        for numPassengers, start, end in trips:
            heap.extend([(start, numPassengers), (end, -numPassengers)])
        heapify(heap)
        
        while capacity >= 0 and heap:
            capacity -= heappop(heap)[1]

        return len(heap) == 0
```
![Screenshot 2024-01-12 at 06.14.45.png](./images/0.png)

More similar problems with Sweep Line:
[370. Range Addition](https://leetcode.com/problems/range-addition/solutions/4550045/python3-line-sweep-or-difference-array-method-127ms/)
[253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/description/)
[1109. Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/description/)
[1589. Maximum Sum Obtained of Any Permutation](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/description/)
[1854. Maximum Population Year](https://leetcode.com/problems/maximum-population-year/description/)
[1893. Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/)
[1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/description/)
[2021. Brightest Position on Street](https://leetcode.com/problems/brightest-position-on-street/description/)
[2237. Count Positions on Street With Required Brightness](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/description/)
