# Go | Line Sweep

**Author:** tucux
**Votes:** 2
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4027529/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4027529/)

---

Time complexity: $$O(N + M)$$
where N is the number of cars and M is the length of the line.

```
func numberOfPoints(nums [][]int) int {
    var h [102]int
    for _, num := range nums {
        h[num[0]]++
        h[num[1] + 1]--
    }
    res, cars := 0, 0
    for _, k := range h {
        cars += k
        if cars > 0 {
            res++
        }
    }
    return res
}
```