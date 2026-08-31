# Go (Golang) Sort and track x range.

**Author:** SlayerSv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4675225/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4675225/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sort in y descending and x ascending order.
Then when we iterate we only need to check if x of the next element is in the proper range.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
func numberOfPairs(points [][]int) int {
    sort.Slice(points, func(i, j int) bool {
        if points[i][1] > points[j][1] {return true}
        if points[i][1] == points[j][1] {return points[i][0] < points[j][0]}
        return false
    })
    count := 0
    for i := 0; i < len(points); i++ {
        minX := points[i][0]
        maxX := 1_000_000_001
        for j := i + 1; j < len(points); j++ {
            if (points[j][0] >= minX && points[j][0] < maxX) {
                count++
                maxX = points[j][0]
            }
        }
    }
    return count
}
```