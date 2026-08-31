# 🦚 | 100% beaten golang solution | self-explanatory

**Author:** makarkananov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/4531408/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/4531408/)

---

# Code
```
func nearestValidPoint(x int, y int, points [][]int) int {
    mn := 10000
    ans := -1
    for ind, point := range points {
        if point[0] == x || point[1] == y{
            if mn >int(math.Abs(float64(x - point[0])) + math.Abs(float64(y - point[1]))) {
                mn = int(math.Abs(float64(x - point[0])) + math.Abs(float64(y - point[1])))
                ans = ind
            }
        }
    }
    return ans
}
```