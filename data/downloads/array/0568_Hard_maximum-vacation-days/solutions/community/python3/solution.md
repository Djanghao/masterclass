# Python3 - with deep explanation

**Author:** mbonilla
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/5121907/](https://leetcode.com/problems/maximum-vacation-days/solutions/5121907/)

---

# Intuition

__Example:__
```
flights A   B   C
    A   0   1   1
    B   0   0   1
    C   0   0   0

days   w1  w2  w3
    A   3   1   4
    B   2   7   3
    C   7   2   2
```
**Brute Force solution:**
we can build the whole graph of options where each level is the current week
Following the example above, root node will be empty, each level is the accumulative per option on the weeks
```
start point (A options)        A
                            /  |   \\
w1                        A(3) B(2) C(7)    # From A we can remain in A, go to B, or go to C
             /      /    /     | |      \\
w2         A(4) B(10) C(5)   B(9) C(4)  C(9)    # Since we built the options we can just aggregate the days per node

w3 A(8) B(7) C(6) B(13) C(12) C(7) B(12)C(11)  C(6) C(11)  # Max of vacation will be 13 days
```
**Improvement**:
There are some paths that are already known once, so we don't need to go over them again.
We will use an array with accumulative vacation days, we will need to just review the previous week origins

This is the iterations of the array over each week:
1. Build the max holidays array:
```
max_holidays = [0, -inf, -inf]
```
2. We start at A always, let's fill the gaps with the options (who can come from A?)

```
                          _____________A________________   _____________B________________   _____________C________________
itinerary   A   B     C         A        B        C             A        B        C             A        B        C
        w1  3    2    7   max((0+3)*1, (0+0)*0, (0+0)*0),  max((0+0)*1, (0+2)*1, (0+0)*0),  max((0+0)*1, (0+0)*1, (0+7)*1), 
        w2  4   10    9   max((3+1)*1, (2+1)*0, (7+1)*0),  max((3+7)*1, (2+7)*1, (7+7)*0),  max((3+2)*1, (2+2)*1, (7+2)*1), 
        w3  8   13   12   max((4+4)*1, (10+4)*0, (9+4)*0), max((4+3)*1, (10+3)*1, (9+3)*0), max((4+2)*1, (10+2)*1, (9+2)*1), 
```

so, we will have to fill each cell like: max([wk[city-1]+wk[city])*[1 if route from else 0]] for city in cities)

# Approach (pseudocode)
we will need an array to carry the aggregation vacation days
it will be full of -inf to be sure that we keep track of max days
first element (starting point in A) will be 0 because we always start from city A (0)
```
per each week
    we create a current array of holidays filled with -inf
     to ensure that the (current + days) is above zero when there was previous destination there
     otherwise we shouldn't keep track (imagine when we start at first iteration but A doesn't go to any other city)
    per each city (departure city)
        per each city (arrival city)
            if there is a flight connection from departure city to arrival city or we are already in that city
                then we carry the max holidays between current and the tracking holidays described above
    
    once the week is over, we replace the holidays by the current array, so we always keep track of the previous better holidays

the result will be the max of the latest holidays (final results will be in that array)
```
        
# Complexity
- Time complexity:
O(k * n^2), being k weeks and n cities

- Space complexity:
O(n), being n cities

# Code
```
class Solution:
    def maxVacationDays(self, flights: List[List[int]], days: List[List[int]]) -> int:
        n, k = len(days), len(days[0]) # n cities, k weeks
        max_vacation = [0] + [float('-inf') for _ in range(n-1)]

        for week in range(k):
            curr = [float('-inf') for _ in range(n)]

            for dep_city in range(n):
                for arr_city, flight_exists in enumerate(flights[dep_city]):
                    if flight_exists or dep_city == arr_city:
                        curr[arr_city] = max(curr[arr_city], max_vacation[dep_city] + days[arr_city][week])

            max_vacation = curr

        return max(max_vacation)
        
```