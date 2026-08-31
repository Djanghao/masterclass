# Golang iterative formula with explanations

**Author:** Artelhin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/2857248/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/2857248/)

---

# Code
```
func minimumPerimeter(neededApples int64) int64 {
    n := int64(12) // number of apples
    l := int64(1) // half side of the square

    // each step add number of new apples using formula
    // border of the square is the same row (including only one of the corners!) 4 times,
    // if we consider the number of apples in each cell in such row
    // row: [ (l+l-1), (l+l-2), ..., (l+1), l, (l+1), ..., (l+l-1), (l+l) ]
    // when we add up all this numbers we end up with this:
    //
    // l (center piece) + 2*l (corner piece) +  2 * ((l+1) + (l+2) + ... + (l+l-1))
    //
    // simplify to
    // 3*l + 2 * ( l*(l-1) + 1 + 2 + ... + (l-1) )
    // simplify to
    // 3*l + 2 * ( l*(l-1) + l*(l-1)/2)
    // which finally equals (for 1 row)
    // 3*l*l
    for n < neededApples {
        l++
        n += 12 * l * l
    }
    return l * 8
}
```