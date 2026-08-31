# Ruby 28ms Solution

**Author:** manojnaidu619
**Votes:** 1
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/377775/](https://leetcode.com/problems/distance-between-bus-stops/solutions/377775/)

---

```
def distance_between_bus_stops(distance, start, destination)
    return 0 if start==destination
    start,destination = destination,start if start > destination
    return distance[start] if start+1 == destination
    c1 = distance[start...destination]
    c1.length.times {distance.delete_at(start)}
    return [c1.sum,distance.sum].min
end
```