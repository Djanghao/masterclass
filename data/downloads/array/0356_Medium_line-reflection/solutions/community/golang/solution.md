# O(n) hash map

**Author:** flk_go
**Votes:** 1
**Link:** [https://leetcode.com/problems/line-reflection/solutions/1141992/](https://leetcode.com/problems/line-reflection/solutions/1141992/)

---


```
func isReflected(points [][]int) bool {
    mp:=make(map[[2]int]struct{})
    // min_x and max_x are used to find the x coord of line (mid)
    var min_x, max_x int = points[0][0], points[0][0]    
    for i:=0;i<len(points);i++ {
        p:=[2]int{points[i][0], points[i][1]}
        mp[p]=struct{}{}
        if min_x > p[0] {
            min_x = p[0]
        }
        if max_x < p[0] {
            max_x = p[0]
        }
    }    
    if len(points) == 1 {
        return true
    }
    mid:= float64(min_x+max_x)/2
    for k:=range mp {
        p := [2]int{int(mid*2)-k[0], k[1]}
        if _,ok:=mp[p];!ok {
            return false
        }
    }
    return true
}

```