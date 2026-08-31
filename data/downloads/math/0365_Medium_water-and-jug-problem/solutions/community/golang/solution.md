# Go solution

**Author:** nairvarun
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/5876568/](https://leetcode.com/problems/water-and-jug-problem/solutions/5876568/)

---

# Complexity
- Time complexity: $$O(x*y)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(x*y$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
// hashset
type Set map[[2]int]struct{}

func (s Set) add(tuple [2]int) {
    s[tuple] = struct{}{}
}

func (s Set) contains(tuple [2]int) bool {
    _, exists := s[tuple]
    return exists
}

// solution
func canMeasureWater(x int, y int, target int) bool {
    set := make(Set)
    var f func(j1, j2 int) bool
    f = func(j1, j2 int) bool {
        if j1 > x || j2 > y {
            return false
        }

        if set.contains([2]int{j1, j2}) {
            return false
        }
        set.add([2]int{j1, j2})

        if j1 + j2 == target {
            return true
        }

        // fill
        fillJ1 := f(x, j2)
        fillJ2 := f(j1, y)

        // empty
        emptyJ1 := f(j1, 0)
        emptyJ2 := f(0, j2)

        // transfer
        // j1 --> j2
        j2ExtraSpace := y - j2
        transferJ1 := f(max(0, j1 - j2ExtraSpace), j2 + min(j1, j2ExtraSpace))
        
        // j1 <-- j2
        j1ExtraSpace := x - j1
        transferJ2 := f(j1 + min(j2, j1ExtraSpace), max(0, j2 - j1ExtraSpace))

        return fillJ1 || fillJ2 || emptyJ1 || emptyJ2 || transferJ1 || transferJ2
    }
    return f(0, 0)
}
```