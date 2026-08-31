# [Golang] O(n) time, O(1) space. 11 lines solution

**Author:** frolovo22
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865711/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865711/)

---

At first we can delete all cars without collision: all cars from left, which going left and cars from right, which going right
After that we can just sum all ```L``` and ```R``` cars 
```golang
func countCollisions(directions string) int {
    res := 0
    directions = strings.TrimLeft(directions, "L")
    directions = strings.TrimRight(directions, "R")
    for i := 0; i < len(directions); i++ {
        if directions[i] == 'L' || directions[i] == 'R' {
            res++
        }
    }
    return res
}
```