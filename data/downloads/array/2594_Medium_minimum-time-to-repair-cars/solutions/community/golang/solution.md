# Go, Binary-Search

**Author:** onebitrs
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312280/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312280/)

---

# Code
```
func repairCars(ranks []int, cars int) int64 {
    left, right := int64(0), int64(ranks[0]) * int64(cars) * int64(cars)
    for left <= right {
        mid := (left + right) / 2
        if solve(mid, ranks, cars) <= 0 {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}

func solve(mid int64, ranks []int, cars int) int {
    for _, rank := range ranks {
        x := mid / int64(rank)
        cars -= int(math.Sqrt(float64(x)))
        if cars <= 0 { break }
    }
    return cars
}
```