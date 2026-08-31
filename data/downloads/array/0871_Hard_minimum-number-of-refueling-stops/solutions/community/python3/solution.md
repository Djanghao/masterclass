# Python3     ||     10 lines, heap,  w/ explanation     ||    T/S: 96% /  74%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2454099/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2454099/)

---

Here's the plan:
 
1. We only need to be concerned with two quantities: the distance traveled (`pos`) and the fuel acquired (`fuel`). We have to refuel before `pos > fuel`.
 
1. Because we have an infinite capacity tank, we only have to plan where to acquire fuel before `pos > fuel`, and common sense says to stop at the station within range with the most fuel.
 
 1. We heappush the stations that are within range of present fuel, and heappop the best choice if and when we need fuel.
  
1. We are finished when a) we have acquired sufficient fuel such that `fuel >= target `(return number of fuelings), or b) `fuel < target` and the heap is empty (return -1).

```
class Solution:             
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:

        fuel, heap, count = startFuel, [], 0            # <-- initialize some stuff
        
        stations.append([target, 0])                    # <-- this handles the "stations = []" test

        while stations:
            if fuel >= target: return count             # <-- 4)            

            while stations and stations[0][0] <= fuel:  # <-- 3)
                _, liters = stations.pop(0)
                heappush(heap,-liters)

            if not heap: return -1                      # <-- 4)
            fuel-= heappop(heap)

            count+= 1
```
[https://leetcode.com/problems/minimum-number-of-refueling-stops/submissions/1272767876/](https://leetcode.com/problems/minimum-number-of-refueling-stops/submissions/1272767876/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(stations)`.