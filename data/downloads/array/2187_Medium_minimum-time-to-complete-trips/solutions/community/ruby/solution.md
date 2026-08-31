# Ruby binary search solution

**Author:** koujiokada
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267004/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267004/)

---

```
def minimum_time(time, total_trips)
  left, right = 0, total_trips*time[0]
  while left < right
    mid = (left + right) / 2
    trips = time.sum{|t| mid/t}
    if trips >= total_trips
      right = mid
    else
      left = mid + 1
    end
  end
  left
end
```