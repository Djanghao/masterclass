# Solution in Go, faster than 100%

**Author:** pradyumna04
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4382731/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4382731/)

---



# Code
```
func findIntersectionValues(nums1 []int, nums2 []int) []int {
    
    m1 := map[int]bool{}
    m2 := map[int]bool{}
    
    for _,v := range(nums1){
        m1[v] = true
    }
    for _,v := range(nums2){
        m2[v] = true
    }
    c1 := 0
    for _,v := range(nums1){
        if m2[v]{
            c1++
        }
    }
    c2 := 0
    for _,v := range(nums2){
        if m1[v]{
            c2++
        }
    }
    return []int{c1,c2}
}
```