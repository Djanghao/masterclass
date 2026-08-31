# [GO] ~20ms | 98% faster

**Author:** coty91
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1059976/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1059976/)

---

```
func countGoodRectangles(rectangles [][]int) int {
    ml := 0 
    tml := 0
    
    for _, v := range rectangles {
        l := 0
        if v[0] > v[1] {
            l = v[1]
        } else {
            l = v[0]
        }
        if l > ml {
            ml = l
            tml = 1
        } else if ml == l {
            tml += 1
        }
    }
    
    return tml
}
```