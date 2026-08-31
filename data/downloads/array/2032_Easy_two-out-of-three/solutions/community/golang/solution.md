# Simple with GO

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/2459124/](https://leetcode.com/problems/two-out-of-three/solutions/2459124/)

---

```
func twoOutOfThree(nums1 []int, nums2 []int, nums3 []int) []int {
    one, two, three := make([]int, 101), make([]int, 101), make([]int, 101)
    
    for _, num := range nums1 {
        one[num]++
    }
    
    for _, num := range nums2 {
        two[num]++
    }
    
    for _, num := range nums3 {
        three[num]++
    }
    
    var res []int
    
    for i := 1; i < 101; i++ {
        if one[i] > 0 && two[i] > 0 {
            res = append(res, i)
        } else if two[i] > 0 && three[i] > 0 {
            res = append(res, i)
        } else if three[i] > 0 && one[i] > 0 {
            res = append(res, i)
        }
    }
    
    return res
}
```