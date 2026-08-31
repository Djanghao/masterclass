# 👍Runtime 121 ms  Beats 95.52% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5167808/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5167808/)

---

# Code
```
func maxPointsInsideSquare(points [][]int, s string) int {
    minLens := make(map[rune]int)
    secondMin := math.MaxInt32
    count := 0

    for i := 0; i < len(points); i++ {
        len := int(math.Max(math.Abs(float64(points[i][0])), math.Abs(float64(points[i][1]))))
        c := rune(s[i])

        if _, exists := minLens[c]; !exists {
            minLens[c] = len
        } else if len < minLens[c] {
            if minLens[c] < secondMin {
                secondMin = minLens[c]
            }
            minLens[c] = len
        } else if len < secondMin {
            secondMin = len
        }
    }

    for _, len := range minLens {
        if len < secondMin {
            count++
        }
    }

    return count
}
```