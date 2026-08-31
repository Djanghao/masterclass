# Go simple solution

**Author:** jalfredoge
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/6013290/](https://leetcode.com/problems/type-of-triangle/solutions/6013290/)

---

# Intuition
Even though the other posted solutions are correct, I want to contribute mine. I am simply trying to write things a bit more succinctly.

# Approach
Count number of incidences of equal lengths of sides using a hash set. Calculate the sum. Then, apply the triangle inequality theorem: every side of a triangle must be smaller than the sum of the other two. If this fails, return `"none"`, otherwise return the type of triangle depending on count of equal sides.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```golang []
func triangleType(nums []int) string {
    set := make(map[int]bool)
    count := 0
    sum := 0

    for _, n := range nums {
        sum += n
        if _, ok := set[n]; ok {
            count++
            continue
        }
        set[n] = true
    }

    for _, n := range nums {
        if n >= sum - n { return "none"}
    }

    if count == 2 { return  "equilateral" }
    if count == 1 { return "isosceles"}
    return "scalene"
}
```