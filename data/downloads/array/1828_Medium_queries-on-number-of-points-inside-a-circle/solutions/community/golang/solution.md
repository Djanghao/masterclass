# [Go] Easy mathematics. Explanation with Solution

**Author:** pushkar_singh_katiyar
**Votes:** 5
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163354/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163354/)

---

Distance between two points (x1, y1) and (x2, y2) can be calculated using the formula-
**square_root(**(x1 - x2)^2+(y1 - y2)^2**)**

The idea is to calculate the distance of each point from the center of the circle. If the distance is less than or equal to the radius of the circle then that point will lie inside else outside.

Thanks to mathematicians for deriving this beautiful formula :)

Just iterate the points one by one and check for each circle (q queries).

Solution in Go-

```
func countPoints(points [][]int, queries [][]int) []int {
    result := []int{}
    for _, val1 := range queries{
        px := float64(val1[0])
        py := float64(val1[1])
        r := float64(val1[2])
        count := 0
        for _, val2 := range points{
            distance := math.Sqrt(math.Pow(float64(val2[0])-px, 2) + math.Pow(float64(val2[1])-py, 2))
            if distance <= r {
                count++
            }
        }
        result = append(result, count)
    }
    return result
}
```

Do hit a upvote if you find this helpful. Comment to share your queries/feedback.
Happy Coding :)