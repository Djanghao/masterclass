# Ruby - Sorting, short

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/car-fleet/solutions/1086173/](https://leetcode.com/problems/car-fleet/solutions/1086173/)

---

### Explanation

Sort cars by their positions.

Car at potion `x1` with speed `v1` can catch up to the next car at position `x` > `x1` with speed `v` < `v1` if it needs less or equal time to get to target <i>(assuming the first car will not be blocked by another car)</i>:

```
(tatget - x1) / v1 <= (target - x) / v
```
or the same:

```
(target - x1) * v <= (target - x) * v1
```

### Algorithm

Consider the last car (closest to the target) as a fleet. Collect all next to it cars that can catch up with it in the fleet. 
Ditto for the next car closest to the target.

### Ruby code

```ruby
X = 0
V = 1
def car_fleet(target, position, speed)
  car = position.zip(speed).sort_by(&:first)
  res = 0
  i = car.size
  while i > 0
    res += 1
    x, v = car[i -= 1]
    i -= 1 while i > 0 && (target - car[i - 1][X]) * v <= (target - x) * car[i - 1][V]
  end
  res
end
```

Time complexity: `O(N * log(N))`
Space: `O(N)`